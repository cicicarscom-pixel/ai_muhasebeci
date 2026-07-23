import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { GoogleGenAI } from "npm:@google/genai"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { monthData, previousMonthData } = await req.json()

    const apiKey = Deno.env.get('LEDGER_GEMINI_API_KEY')
    if (!apiKey) {
      throw new Error('LEDGER_GEMINI_API_KEY is not set in environment variables.')
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });

    const systemInstruction = `Sen Neo-Fintech Noir tarzında (kısa, havalı, cesaretlendirici ve profesyonel) konuşan bir finans asistanısın. 
Kullanıcıya seçili ayki gelir/gider performansını ve bir önceki ayla kıyaslamasını anlatan en fazla 1-2 cümlelik tatlı bir analiz sunmalısın. Sadece doğrudan metni döndür (Örn: Bu ay giderleriniz %15 azaldı, hedefinize yaklaştınız!).

VERİLER:
Seçili Ay Geliri: ${monthData.income}
Seçili Ay Gideri: ${monthData.expense}
Önceki Ay Geliri: ${previousMonthData?.income || 'Bilinmiyor'}
Önceki Ay Gideri: ${previousMonthData?.expense || 'Bilinmiyor'}`;

    const interaction = await ai.interactions.create({
      model: "gemini-2.5-flash",
      input: [{ type: "text", text: systemInstruction }]
    });

    const generatedText = interaction.output_text || "Akıllı analiz şu anda oluşturulamıyor.";

    return new Response(
      JSON.stringify({ 
        success: true,
        insight: generatedText.replace(/`/g, '').trim()
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: any) {
    console.error("Insights Error:", error);
    return new Response(
      JSON.stringify({ success: false, insight: "Şu an için analiz sağlanamıyor." }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
