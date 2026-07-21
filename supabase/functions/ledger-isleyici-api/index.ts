import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { GoogleGenAI, Type, Schema } from "npm:@google/genai";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.40.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { invoiceBase64, invoiceMimeType, taxpayer_id } = await req.json();

    if (!invoiceBase64 || !taxpayer_id) {
      return new Response(JSON.stringify({ error: "Missing required fields: invoiceBase64 and taxpayer_id." }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('LEDGER_GEMINI_API_KEY');
    if (!apiKey) {
      throw new Error("LEDGER_GEMINI_API_KEY is not set.");
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Fetch schema rules for this taxpayer
    const { data: schemaData, error: schemaError } = await supabaseClient
      .from('invoice_schemas')
      .select('schema_rules')
      .eq('taxpayer_id', taxpayer_id)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (schemaError) throw schemaError;
    
    const schemaRules = schemaData?.schema_rules || [];

    const ai = new GoogleGenAI({ apiKey });

    // Build the dynamic schema for structured output
    const dynamicDataProperties: Record<string, Schema> = {};
    for (const rule of schemaRules) {
      dynamicDataProperties[rule.target_column] = {
        type: rule.type === 'number' ? Type.NUMBER : Type.STRING,
        description: `Eşleşme kaynağı: ${rule.source_field}`
      };
    }

    const responseSchema: Schema = {
      type: Type.OBJECT,
      properties: {
        preview: {
          type: Type.OBJECT,
          properties: {
            mukellef_adi: { type: Type.STRING },
            kesen_firma: { type: Type.STRING },
            fatura_tipi: { type: Type.STRING, description: "Alış veya Satış" },
            fatura_tutari: { type: Type.NUMBER }
          },
          required: ["mukellef_adi", "kesen_firma", "fatura_tipi", "fatura_tutari"]
        },
        dynamic_data: {
          type: Type.OBJECT,
          properties: dynamicDataProperties,
          description: "Mimar asistanının belirlediği özel kolon verileri"
        }
      },
      required: ["preview", "dynamic_data"]
    };

    const promptText = `Ekteki faturayı analiz et ve belirtilen JSON şemasına uygun olarak verileri çıkar.`;

    const interaction = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: promptText },
            {
              inlineData: {
                mimeType: invoiceMimeType || "image/jpeg",
                data: invoiceBase64.replace(/^data:image\/\w+;base64,/, '')
              }
            }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    });

    let text = interaction.text || "";
    if (!text) {
      throw new Error("Empty response from Gemini.");
    }

    const extractedData = JSON.parse(text);

    // Save to invoices table
    const { data: invoiceData, error: insertError } = await supabaseClient
      .from('invoices')
      .insert({
        taxpayer_id: taxpayer_id,
        image_url: "uploaded_via_base64", // In a real app, upload image to storage and save URL
        status: 'pending',
        preview_data: extractedData.preview,
        mapped_data: extractedData.dynamic_data
      })
      .select()
      .single();

    if (insertError) throw insertError;

    return new Response(JSON.stringify({ success: true, invoice: invoiceData }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error("Isleyici API Error:", error);
    return new Response(JSON.stringify({ error: error.message || "An error occurred during invoice processing." }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
