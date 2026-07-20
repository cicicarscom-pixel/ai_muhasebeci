import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.40.0";
import { GoogleGenAI } from "npm:@google/genai";
import { decode } from "https://deno.land/std@0.168.0/encoding/base64.ts";
import * as XLSX from "npm:xlsx";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { fileBase64, mimeType, organization_id, mode } = await req.json();

    if (!fileBase64) {
      throw new Error("Missing fileBase64");
    }

    if (mode !== 'test' && !organization_id) {
      throw new Error("Missing organization_id for production mode");
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '' // Using service role to bypass RLS for edge function ops
    );

    // 1. Fetch Ledger AI Settings for this organization's accounting firm
    // Using a simplified query for demonstration; in reality, we traverse accountant_taxpayer_links
    const { data: linkData } = await supabaseClient
      .from('accountant_taxpayer_links')
      .select('accounting_firm_id')
      .eq('taxpayer_organization_id', organization_id)
      .eq('status', 'active')
      .single();

    let extraction_schema = {};
    let instruction_rules = {};
    let schema_version = 1;

    if (mode !== 'test' && linkData?.accounting_firm_id) {
      const { data: settingsData } = await supabaseClient
        .from('ledger_ai_settings')
        .select('extraction_schema, instruction_rules, schema_version')
        .eq('firm_id', linkData.accounting_firm_id)
        .single();
      
      if (settingsData) {
        extraction_schema = settingsData.extraction_schema;
        instruction_rules = settingsData.instruction_rules;
        schema_version = settingsData.schema_version;
      }
    }

    // Default schema if none exists
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
            "account": "string (hesap kodu veya kategorisi)",
            "tax_rate": "number"
          }
        ]
      };
    }

    // 2. Prepare Gemini Prompt
    const prompt = `Sen uzman bir muhasebe veri çıkarma (OCR/Vision) asistanısın. 
Gönderilen faturayı/fişi analiz et ve aşağıdaki JSON şemasına uygun verileri çıkar.
Müşavir Kuralları: ${JSON.stringify(instruction_rules)}
Çıkarılacak JSON Şeması (Keys): ${JSON.stringify(extraction_schema)}

ÇOK ÖNEMLİ KURALLAR:
1. Sadece genel toplamları değil, tıpkı uluslararası standartlarda (Xero vb.) olduğu gibi faturadaki tüm kalemleri (line items) satır satır ayrıştırarak "line_items" dizisine (Item, Description, Qty, Unit Price, Account, Tax Rate formunda) ekle.
2. Sadece geçerli bir JSON dön, başka hiçbir açıklama yapma.`;

    const GEMINI_API_KEY = Deno.env.get('LEDGER_GEMINI_API_KEY');
    if (!GEMINI_API_KEY) {
      throw new Error("LEDGER_GEMINI_API_KEY is not set.");
    }

    // 3. Prepare parts and check for Excel
    const isExcel = mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || mimeType === 'application/vnd.ms-excel';
    let parts: any[] = [{ text: prompt }];

    if (isExcel) {
      try {
        console.log("Excel document detected in process-document, converting to CSV...");
        const uint8Array = decode(fileBase64);
        const workbook = XLSX.read(uint8Array, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const csvString = XLSX.utils.sheet_to_csv(worksheet);
        
        parts.push({
          text: `Aşağıda yüklenen faturaya ait Excel verileri CSV formatında sunulmuştur:\n\n${csvString}`
        });
        console.log("Excel file successfully parsed to CSV.");
      } catch (e) {
        console.error("Failed to parse Excel file:", e);
        parts.push({
          inlineData: {
            mimeType: mimeType || "image/jpeg",
            data: fileBase64
          }
        });
      }
    } else {
      parts.push({
        inlineData: {
          mimeType: mimeType || "image/jpeg",
          data: fileBase64
        }
      });
    }

    // 4. Call Gemini Vision API using the official SDK
    const ai = new GoogleGenAI({ 
      apiKey: GEMINI_API_KEY,
      httpOptions: { apiVersion: 'v1' } 
    });
    
    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{
        role: "user",
        parts: parts
      }]
    });

    const responseText = result.text;

    if (!responseText) {
      throw new Error("Empty response from Gemini.");
    }

    // 4. Parse the strict JSON
    let cleanText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const extractedData = JSON.parse(cleanText);

    // 5. If test mode, just return the parsed data without DB insertion
    if (mode === 'test') {
      return new Response(JSON.stringify({ success: true, extractedData }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Prepare minor amounts (assuming TR logic where amount is string "150.50" -> 15050 minor)
    const amountMinor = Math.round((parseFloat(extractedData.total_amount || 0)) * 100);

    // 6. Insert into finance_documents
    const { data: newDoc, error: insertError } = await supabaseClient
      .from('finance_documents')
      .insert({
        organization_id: organization_id,
        type: 'expense', // simplification for demo, might be income
        counterparty_name: extractedData.vendor_name || 'Bilinmiyor',
        amount_minor: amountMinor,
        currency_code: 'TRY',
        tax_details: extractedData, // Save full payload
        document_status: 'ready_for_review',
        extraction_schema_version: schema_version
      })
      .select('*')
      .single();

    if (insertError) throw insertError;

    // 7. Insert Audit Log
    await supabaseClient.from('document_events').insert({
      document_id: newDoc.id,
      event_type: 'extracted',
      actor_type: 'ai',
      new_value: extractedData
    });

    return new Response(JSON.stringify({ success: true, document: newDoc }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Process Document Error:", error);
    const isServiceError = error.message?.includes('503') || error.message?.includes('500') || error.message?.includes('fetch') || error.message?.includes('timeout');
    const friendlyMessage = isServiceError 
      ? "Kusura bakmayın, evrak analiz servisinde anlık bir yoğunluk var. Lütfen faturayı birkaç saniye sonra tekrar yüklemeyi deneyin." 
      : "Kusura bakmayın, belge işlenirken teknik bir pürüz oluştu. Lütfen tekrar deneyin.";

    return new Response(JSON.stringify({ success: false, error: friendlyMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });
  }
});
