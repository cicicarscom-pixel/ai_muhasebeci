import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { GoogleGenAI, Type, Schema } from "npm:@google/genai";

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

    const systemInstruction = `Sen Workigom Ledger AI projesinin 'Mimar (Şema Kurucu) Asistanı'sın. Sana aynı anda iki adet görsel gönderilmektedir:
1. Görsel: Kaynak Fatura.
2. Görsel: Bu faturanın işleneceği Muhasebe Programı/Excel arayüzü.

Görevin:
1) İkinci görseldeki (muhasebe arayüzü) veri giriş alanlarını, sütunları ve kolon başlıklarını eksiksiz tespit et ve listele.
2) İlk görseldeki (fatura) bilgileri analiz et ve hangi fatura bilgisinin, tespit ettiğin hangi kolona/alana girilmesi gerektiğini eşleştir.
3) İşleyici (Analizci) AI asistanının daha sonra faturaları bu kurguya göre okuyabilmesi için net bir 'Kolon Çekim Kuralları' yönergesi oluştur.

DİKKAT: Gönderilen faturadaki verileri (isim, tutar, tarih vb.) KESİNLİKLE OKUMAYA VEYA ÇIKARTMAYA ÇALIŞMA. Görevin fatura okumak değil, SADECE iki görseli kıyaslayıp KOLON EŞLEŞTİRMESİ YAPMAKTIR (Mimar promptunu kullan). Asla hayali veri üretme.`;

    const responseSchema: Schema = {
      type: Type.OBJECT,
      properties: {
        detected_columns: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "Ekranda tespit edilen tüm kolonların listesi"
        },
        mapping_rules: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              source_field: { type: Type.STRING },
              target_column: { type: Type.STRING }
            }
          },
          description: "Hangi kolon -> Faturadaki hangi bilgi. Örneğin: 'Belge No' kolonu -> Faturadaki Fatura Numarası"
        },
        analyzer_instructions: {
          type: Type.STRING,
          description: "İşleyici AI için üretilmiş, 'Şu kolonlar için şu verileri bul' diyen kısa yönerge metni."
        }
      },
      required: ["detected_columns", "mapping_rules", "analyzer_instructions"]
    };

    const interaction = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: "Ekteki iki görseli analiz et ve eşleştirme şemasını çıkar." },
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
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    });

    let text = interaction.text || "";
    if (!text) {
      throw new Error("Empty response from Gemini.");
    }

    const parsedResult = JSON.parse(text);

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
