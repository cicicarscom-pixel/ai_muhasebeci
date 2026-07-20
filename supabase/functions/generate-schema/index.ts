import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { GoogleGenAI } from "npm:@google/genai";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { invoiceBase64, invoiceMimeType, uiScreenshotBase64, uiScreenshotMimeType } = await req.json();

    if (!invoiceBase64 || !uiScreenshotBase64) {
      return new Response(JSON.stringify({ error: "Missing images. Both invoiceBase64 and uiScreenshotBase64 are required." }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('LEDGER_GEMINI_API_KEY');
    if (!apiKey) {
      throw new Error("LEDGER_GEMINI_API_KEY is not set.");
    }

    const ai = new GoogleGenAI({ 
      apiKey: apiKey,
      httpOptions: { apiVersion: 'v1' } 
    });

    const promptText = `
Sana iki adet görsel veriyorum:
1. Görsel: İşlenmesi gereken örnek bir faturadır.
2. Görsel: Bu faturanın girileceği muhasebe programı ekranının (formunun) ekran görüntüsüdür.

GÖREVİN:
Muhasebe programı ekranındaki tüm giriş kutucuklarını analiz et. Faturadaki verilerin (Tarih, Cari, Tutar vb.) ekrandaki hangi kutucuklara veya alanlara denk geldiğini eşleştir.
Bunu yaparken şuna DİKKAT ET ("Boş Kolon Öngörüsü"):
Ekrandaki muhasebe formunda var olan ancak şu anki faturada değer olmadığı için BOŞ duran tüm oranları veya kesintileri (Örn: %1 KDV, %8 KDV, ÖİV, Tevkifat vb.) TESPİT ET ve şemaya bağımsız kolonlar olarak mutlaka dahil et. Gelecekteki faturalar için bu esneklik şarttır.

Aşağıdaki JSON formatında yanıt ver:
{
  "columns": [
    { "name": "Kolon Adı (Örn: Tarih, Cari Hesap, %20 KDV, %1 KDV vb.)", "type": "Veri Tipi (string, number, date)", "mapped_from": "Faturadaki Eşleştiği Yer veya Açıklama" }
  ],
  "ai_message": "Harika! Kullandığınız muhasebe ekranını analiz ettim..."
}

Çıktın SADECE bu JSON objesi olmalıdır. Başka hiçbir açıklama metni ekleme.
`;

    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [{
        role: "user",
        parts: [
          { text: promptText },
          {
            inlineData: {
              mimeType: invoiceMimeType || "image/jpeg",
              data: invoiceBase64.replace(/^data:image\/\w+;base64,/, '')
            }
          },
          {
            inlineData: {
              mimeType: uiScreenshotMimeType || "image/jpeg",
              data: uiScreenshotBase64.replace(/^data:image\/\w+;base64,/, '')
            }
          }
        ]
      }]
    });

    const responseText = result.text;
    if (!responseText) {
      throw new Error("Empty response from Gemini.");
    }

    // Sanitize markdown blocks if model appended any
    let cleanText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    let parsedResult;
    try {
      parsedResult = JSON.parse(cleanText);
    } catch (parseError) {
      console.error("JSON Parse failed:", cleanText);
      throw new Error("Gemini did not return valid JSON.");
    }

    return new Response(JSON.stringify(parsedResult), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("generate-schema error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
