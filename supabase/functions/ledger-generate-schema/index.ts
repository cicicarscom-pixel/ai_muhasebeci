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
      apiKey: apiKey
    });

    const promptText = `
Görev: Yüklenen fatura ile muhasebe programı ekran görüntüsünü (screenshot) analiz edip eşleştirmek. Faturadaki verilerin ekrandaki hangi kutucuklara girildiğini tespit et.

Boş Kolon Öngörüsü (KRİTİK): Sadece faturadaki dolu verileri DEĞİL; ekran görüntüsünde var olan ancak o anki faturada yer almadığı için boş duran tüm vergi oranlarını ve başlıkları da (Örn: %1 KDV, %10 KDV, Özel İletişim Vergisi, Tevkifat vb.) tespit et. Bunları gelecekteki farklı faturalar için şemaya bağımsız kolonlar olarak zorunlu dahil et.

Aşağıdaki JSON formatında yanıt ver. Çıktın SADECE bu JSON objesi olmalıdır:
{
  "ai_message": "Buraya insansı bir özet sunacaksın. Örnek: 'Muhasebe ekranınızı analiz ettim. Faturadaki bilgileri ekranınızla eşleştirdim. Ayrıca ekranınızda boş duran %1, %8 KDV gibi alanları da gelecekteki faturalarınız için şablona dahil ettim. Onay ekranınızı şu [Sayı] kolon ile güncelleyeceğim: [Kolon İsimleri]. Onaylıyor musunuz?'",
  "columns": [
    { "name": "Kolon Adı (Örn: Tarih, Cari Hesap, %20 KDV, %1 KDV vb.)", "type": "Veri Tipi", "mapped_from": "Açıklama" }
  ]
}
`;

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

    // Sanitize markdown blocks if model appended any
    let cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
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
    const isServiceError = error.message?.includes('503') || error.message?.includes('500') || error.message?.includes('fetch') || error.message?.includes('timeout');
    const friendlyMessage = isServiceError 
      ? "Kusura bakmayın, şema analiz servisinde anlık bir yoğunluk yaşanıyor. Lütfen birkaç saniye sonra tekrar deneyin." 
      : "Kusura bakmayın, belgeler eşleştirilirken teknik bir hata oluştu. Lütfen tekrar deneyin.";
      
    return new Response(JSON.stringify({ error: friendlyMessage }), {
      status: 200, // Return 200 so frontend catches it gracefully instead of network error
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
