import { createClient } from "https://esm.sh/@supabase/supabase-js@2.40.0";
import { GoogleGenAI } from "npm:@google/genai";
import { decode, encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";
import * as XLSX from "npm:xlsx";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const bodyText = await req.text(); // Read text first to prevent JSON parse crash masking
    if (!bodyText) {
       throw new Error("Empty request body");
    }
    
    let bodyJson;
    try {
      bodyJson = JSON.parse(bodyText);
    } catch (e) {
      throw new Error("Invalid JSON body: " + e.message);
    }

    const { fileBase64, imageUrl, mimeType, organization_id, mode } = bodyJson;

    if (!fileBase64 && !imageUrl) {
      throw new Error("Missing fileBase64 or imageUrl in payload");
    }

    let activeBase64 = fileBase64;

    if (imageUrl) {
      console.log("Fetching image from Storage URL...");
      const imgRes = await fetch(imageUrl);
      if (!imgRes.ok) {
        throw new Error("Failed to download image from URL: " + imgRes.statusText);
      }
      const arrayBuffer = await imgRes.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      activeBase64 = encode(uint8Array);
    }

    if (mode !== 'test' && !organization_id) {
      throw new Error("Missing organization_id for production mode");
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '' 
    );

    const { data: linkData } = await supabaseClient
      .from('accountant_taxpayer_links')
      .select('accounting_firm_id')
      .eq('taxpayer_organization_id', organization_id)
      .eq('status', 'active')
      .maybeSingle();

    let extraction_schema = {};
    let instruction_rules = {};
    let schema_version = 1;

    if (mode !== 'test' && linkData?.accounting_firm_id) {
      const { data: settingsData } = await supabaseClient
        .from('ledger_ai_settings')
        .select('extraction_schema, instruction_rules, schema_version')
        .eq('firm_id', linkData.accounting_firm_id)
        .maybeSingle();
      
      if (settingsData) {
        extraction_schema = settingsData.extraction_schema;
        instruction_rules = settingsData.instruction_rules;
        schema_version = settingsData.schema_version;
      }
    }

    if (Object.keys(extraction_schema).length === 0) {
      extraction_schema = {
        "vendor_name": "string",
        "vendor_tax_identifier": "string",
        "invoice_number": "string",
        "issue_date": "string",
        "total_amount": "number",
        "net_amount": "number",
        "tax_amount": "number",
        "document_type": "string (invoice or receipt)",
        "line_items": [
          {
            "item": "string",
            "description": "string",
            "qty": "number",
            "unit_price": "number",
            "account": "string",
            "tax_rate": "number"
          }
        ]
      };
    }

    const prompt = `Sen uzman bir muhasebe veri çıkarma asistanısın. 
Gönderilen faturayı/fişi analiz et ve JSON şemasına uygun verileri çıkar.
Müşavir Kuralları: ${JSON.stringify(instruction_rules)}
Çıkarılacak JSON Şeması: ${JSON.stringify(extraction_schema)}

ÇOK ÖNEMLİ KURALLAR:
1. Sadece genel toplamları değil, tüm kalemleri (line items) satır satır ayrıştır.
2. Sadece geçerli bir JSON dön, başka açıklama yapma.`;

    const GEMINI_API_KEY = Deno.env.get('LEDGER_GEMINI_API_KEY');
    if (!GEMINI_API_KEY) {
      throw new Error("LEDGER_GEMINI_API_KEY is not set.");
    }

    const isExcel = mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || mimeType === 'application/vnd.ms-excel';
    let parts: any[] = [{ text: prompt }];

    if (isExcel) {
      try {
        const uint8Array = decode(activeBase64);
        const workbook = XLSX.read(uint8Array, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const csvString = XLSX.utils.sheet_to_csv(worksheet);
        parts.push({ text: `Excel verileri CSV formatında:\n\n${csvString}` });
      } catch (e) {
        console.error("Failed to parse Excel file:", e);
        parts.push({ inlineData: { mimeType: mimeType || "image/jpeg", data: activeBase64 } });
      }
    } else {
      parts.push({ inlineData: { mimeType: mimeType || "image/jpeg", data: activeBase64 } });
    }

    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    
    // Convert parts to new Interactions API input format
    let input: any[] = [];
    for (const part of parts) {
      if (part.text) {
        input.push({ type: "text", text: part.text });
      } else if (part.inlineData) {
        input.push({
          type: "image", // or document, depending on mime type, but image works broadly
          data: part.inlineData.data,
          mime_type: part.inlineData.mimeType
        });
      }
    }

    const interaction = await ai.interactions.create({
      model: "gemini-3.5-flash",
      input: input
    });

    let text = interaction.output_text || "";
    if (!text) throw new Error("Empty response from Gemini.");

    let cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const extractedData = JSON.parse(cleanText);

    if (mode === 'test') {
      return new Response(JSON.stringify({ success: true, extractedData }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const amountMinor = Math.round((parseFloat(extractedData.total_amount || 0)) * 100);

    const { data: newDoc, error: insertError } = await supabaseClient
      .from('finance_documents')
      .insert({
        organization_id: organization_id,
        type: 'expense',
        counterparty_name: extractedData.vendor_name || 'Bilinmiyor',
        amount_minor: amountMinor,
        currency_code: 'TRY',
        tax_details: extractedData,
        document_status: 'ready_for_review',
        extraction_schema_version: schema_version
      })
      .select('*')
      .single();

    if (insertError) throw insertError;

    await supabaseClient.from('document_events').insert({
      document_id: newDoc.id,
      event_type: 'extracted',
      actor_type: 'ai',
      new_value: extractedData
    });

    return new Response(JSON.stringify({ success: true, document: newDoc }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error("Process Document RAW Error:", error);
    const errMessage = error?.message || (typeof error === 'string' ? error : "Unknown error");
    const errStack = error?.stack || "";
    return new Response(
      JSON.stringify({ success: false, error: errMessage, stack: errStack }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
