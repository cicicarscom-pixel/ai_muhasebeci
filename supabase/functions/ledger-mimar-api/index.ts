import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { GoogleGenAI } from "npm:@google/genai";
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
    const { invoiceBase64, invoiceMimeType, uiScreenshotBase64, uiScreenshotMimeType, taxpayer_id } = await req.json();

    if (!invoiceBase64 || !uiScreenshotBase64 || !taxpayer_id) {
      return new Response(JSON.stringify({ error: "Missing required fields: invoiceBase64, uiScreenshotBase64, and taxpayer_id." }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('LEDGER_GEMINI_API_KEY');
    if (!apiKey) {
      throw new Error("LEDGER_GEMINI_API_KEY is not set.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const promptText = `Sen bir muhasebe entegrasyon asistanısın.
Görevin, sana gönderilecek iki görseli karşılaştırmaktır.
İlk görsel kaynak faturadır.
İkinci görsel, bu faturanın işlendiği muhasebe yazılımı/excel ekranıdır.

İkinci görseli analiz et ve ekrandaki sütun/kolon isimlerini listele. Ardından, ilk faturadaki hangi bilginin, ikinci görseldeki hangi kolona yazıldığını eşleştir.

Aşağıdaki kuralları içeren bir JSON döndür:
{
  "ai_message": "Ekranda toplam [X] adet kolon tespit ettim... (Yukarıdaki analiz metnini buraya yaz)",
  "schema_rules": [
    { "source_field": "Faturadaki Alan Adı", "target_column": "Ekrandaki Kolon Adı", "type": "string" }
  ]
}`;

    const interaction = await ai.interactions.create({
      model: "gemini-3.5-flash",
      input: [
        { type: "text", text: promptText },
        {
          type: "image",
          mime_type: invoiceMimeType || "image/jpeg",
          data: invoiceBase64.replace(/^data:image\/\w+;base64,/, '')
        },
        {
          type: "image",
          mime_type: uiScreenshotMimeType || "image/jpeg",
          data: uiScreenshotBase64.replace(/^data:image\/\w+;base64,/, '')
        }
      ]
    });

    let text = interaction.output_text || "";
    if (!text) {
      throw new Error("Empty response from Gemini.");
    }

    // Sanitize markdown JSON block
    let cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    let parsedResult;
    try {
      parsedResult = JSON.parse(cleanText);
    } catch (e) {
      throw new Error("Gemini returned invalid JSON structure.");
    }

    // Save schema to Supabase
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error: insertError } = await supabaseClient
      .from('invoice_schemas')
      .insert({
        taxpayer_id: taxpayer_id,
        schema_rules: parsedResult.schema_rules
      });

    if (insertError) throw insertError;

    return new Response(JSON.stringify(parsedResult), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error("Mimar API Error:", error);
    return new Response(JSON.stringify({ error: error.message || "An error occurred during schema generation." }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
