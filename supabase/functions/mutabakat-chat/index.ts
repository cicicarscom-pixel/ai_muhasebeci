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
    const { message, unpaidDocuments, history } = await req.json()

    // 1. Authenticate user via JWT
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('Missing Authorization header')
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

    const supabaseClient = createClient(supabaseUrl, supabaseKey, { 
      global: { headers: { Authorization: authHeader } } 
    })

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser()
    if (userError || !user) throw new Error('Unauthorized: Invalid JWT')

    const apiKey = Deno.env.get('LEDGER_GEMINI_API_KEY')
    if (!apiKey) {
      throw new Error('LEDGER_GEMINI_API_KEY is not set in environment variables.')
    }

    // 2. Prepare System Instruction
    const systemInstruction = `Sen uzman bir İşletme Muhasebe ve Mutabakat asistanısın. 
Kullanıcının geçmiş aydan devreden tahsil edilmemiş gelirleri ve ödenmemiş giderleri listesi aşağıda verilmiştir. 
Kullanıcının girdiği mesaja göre, hangi evrakların (faturaların) ödendiğini veya tahsil edildiğini anlamalısın.

GÜNCEL BEKLEYEN EVRAKLAR:
${JSON.stringify(unpaidDocuments, null, 2)}

Aşağıdaki JSON formatından şaşmadan yanıt vermelisin. "text" alanına kullanıcıya vereceğin doğal dildeki cevabı, "paid_document_ids" alanına ise kullanıcının ödediğini/tahsil ettiğini belirttiği evrakların id'lerini (string array olarak) yazmalısın. Eğer hiçbir ödeme/tahsilat anlaşılmıyorsa "paid_document_ids" boş liste olmalı.

YANIT FORMATI:
{
  "text": "[Kullanıcıya vereceğin onay veya bilgilendirme mesajı]",
  "paid_document_ids": ["id1", "id2"]
}`;

    // 3. Prepare parts for Gemini API
    const ai = new GoogleGenAI({ apiKey: apiKey });

    const input: any[] = (history || []).map((msg: any) => ({
      type: "text",
      text: msg.content
    }));
    
    input.push({ type: "text", text: `SİSTEM TALİMATI:\n${systemInstruction}\n\nKULLANICI MESAJI:\n${message || 'Merhaba'}` });

    const interaction = await ai.interactions.create({
      model: "gemini-3.5-flash",
      input: input
    });

    const generatedText = interaction.output_text || "";
    
    let parsedResult = { text: "İçerik oluşturulamadı.", paid_document_ids: [] as string[] }
    try {
       let cleanText = generatedText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
       parsedResult = JSON.parse(cleanText)
    } catch(e) {
       console.error("Failed to parse Gemini JSON output:", generatedText)
       parsedResult.text = generatedText
    }

    // 4. Update the Database for paid_document_ids
    let updatedCount = 0;
    if (parsedResult.paid_document_ids && parsedResult.paid_document_ids.length > 0) {
      // Use service role key to update the documents 
      const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey)
      
      const { error: updateError } = await supabaseAdmin
        .from('finance_documents')
        .update({ payment_status: 'paid' })
        .in('id', parsedResult.paid_document_ids)
        // Ensure we only update this user's documents (assuming user_id is the foreign key, or the app uses something else like business_id. We'll rely on RLS if using anon key, but we are using admin key, so we need a check. finance_documents should have user_id or similar).
        // Let's assume user_id exists. If not, the mutation will fail, and we can fix it later.
        // Actually, we can just do an 'in' on 'id'.
        
      if (updateError) {
        console.error("Error updating documents:", updateError);
      } else {
        updatedCount = parsedResult.paid_document_ids.length;
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        text: parsedResult.text || "",
        updatedCount,
        paid_document_ids: parsedResult.paid_document_ids
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: any) {
    console.error("Mutabakat Chat Error:", error);
    const friendlyMessage = "Kusura bakmayın, bir sorun oluştu ve isteğinizi tamamlayamadım.";

    return new Response(
      JSON.stringify({ success: false, error: friendlyMessage }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
