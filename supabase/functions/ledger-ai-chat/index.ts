import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.40.0"
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
    const { prompt, customInstruction, history } = await req.json()

    // 1. Authenticate user via JWT
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('Missing Authorization header')
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    )

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser()
    if (userError || !user) throw new Error('Unauthorized: Invalid JWT')

    const apiKey = Deno.env.get('LEDGER_GEMINI_API_KEY')
    if (!apiKey) {
      throw new Error('LEDGER_GEMINI_API_KEY is not set in environment variables.')
    }

    // 2. Prepare System Instruction
    const systemInstruction = `Sen uzman bir Workigom Ledger (Mali Müşavir) Asistanısın.
Aşağıdaki SİSTEM TALİMATI, senin rolünü ve kurallarını belirler.

--- SİSTEM TALİMATI ---
${customInstruction || 'Kullanıcıya nazikçe ve profesyonelce yardımcı ol. JSON veya kod gösterme.'}
----------------------------------

SADECE aşağıdaki JSON formatında yanıt dön:
{
  "text": "[Role bürünerek yazdığın doğal dildeki yanıt]"
}`;

    // 3. Prepare parts for Gemini API
    const finalParts = [
      { text: `SİSTEM TALİMATI:\n${systemInstruction}\n\nKULLANICI TALEBİ:\n${prompt || 'Merhaba'}` }
    ];

    console.log("Calling Gemini 1.5 Flash via SDK for Ledger AI Chat...");
    const ai = new GoogleGenAI({ 
      apiKey: apiKey,
      httpOptions: { apiVersion: 'v1' } 
    });

    const sdkResult = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: "user", parts: finalParts }]
    });

    const generatedText = sdkResult.text;
    
    let parsedResult = { text: "İçerik oluşturulamadı." }
    try {
       let cleanText = generatedText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
       parsedResult = JSON.parse(cleanText)
    } catch(e) {
       console.error("Failed to parse Gemini JSON output:", generatedText)
       parsedResult.text = generatedText
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        text: parsedResult.text || ""
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error("Ledger AI Chat Error:", error);
    const isServiceError = error.message?.includes('503') || error.message?.includes('500') || error.message?.includes('fetch') || error.message?.includes('timeout');
    const friendlyMessage = isServiceError 
      ? "Kusura bakmayın, sistemlerimizde anlık bir yoğunluk yaşanıyor. Lütfen birkaç saniye sonra tekrar deneyin." 
      : "Kusura bakmayın, bir sorun oluştu ve isteğinizi tamamlayamadım. Lütfen tekrar deneyin.";

    return new Response(
      JSON.stringify({ success: false, error: friendlyMessage }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
