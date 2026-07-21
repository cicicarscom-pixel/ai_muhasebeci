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

Sen bir muhasebe entegrasyon asistanısın.
Görevin, sana gönderilecek iki görseli karşılaştırmaktır.
İlk görsel kaynak faturadır.
İkinci görsel, bu faturanın işlendiği muhasebe yazılımı/excel ekranıdır.

İkinci görseli analiz et ve ekrandaki sütun/kolon isimlerini listele. Ardından, ilk faturadaki hangi bilginin, ikinci görseldeki hangi kolona yazıldığını eşleştir.

Çıktı Formatın Kesinlikle Şu Şekilde Olmalıdır:
"Ekranda toplam [X] adet kolon tespit ettim. Kolonlar şunlardır: [Kolon Listesi].
Eşleştirmeler:

Faturadaki [Fatura Bilgisi], ekrandaki [Sütun Adı] kolonuna girilmiş.
Faturadaki [Fatura Bilgisi], ekrandaki [Sütun Adı] kolonuna girilmiş.

Bu eşleştirmeyi (şemayı) onaylıyor musunuz?"

Ekstra JSON formatı veya arayüz kodu üretme, sadece bu metni doğrudan kullanıcıya dön.
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
    let cleanText = text.replace(/```text\n?/g, '').replace(/```\n?/g, '').trim();

    return new Response(JSON.stringify({ text: cleanText }), {
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
