import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { GoogleGenAI } from "npm:@google/genai";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.40.0";
import { encode, decode } from "https://deno.land/std@0.168.0/encoding/base64.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { document_id, prompt, imageBase64, imageUrl, mimeType } = await req.json();

    if (!document_id || (!imageBase64 && !imageUrl && !prompt)) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
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

    // Fetch taxpayer (Mükellef) name to determine sales vs expense
    let taxpayerName = "Bilinmiyor";
    try {
      const { data: docData } = await supabaseClient
        .from('finance_documents')
        .select(`organizations:organization_id (name)`)
        .eq('id', document_id)
        .single();
      
      if (docData && docData.organizations && docData.organizations.name) {
        taxpayerName = docData.organizations.name;
      }
    } catch (e) {
      console.warn("Could not fetch taxpayer name", e);
    }

    let activeBase64 = imageBase64;

    // Eger base64 yoksa ama URL geldiyse (ornegin frontend Storage'a attiysa), resmi indirip base64 yap
    if (!activeBase64 && imageUrl) {
      console.log("Fetching image from Storage URL...");
      const imgRes = await fetch(imageUrl);
      if (imgRes.ok) {
        const arrayBuffer = await imgRes.arrayBuffer();
        activeBase64 = encode(new Uint8Array(arrayBuffer));
      }
    }

    const ai = new GoogleGenAI({ apiKey });

    const responseSchema = {
      type: "object",
      properties: {
        date: { type: "string", description: "A sutunu: GG.AA.YYYY formatinda fatura tarihi (orn: 07.09.2022)" },
        invoice_number: { type: "string", description: "B sutunu: Fatura belgesi uzerindeki numara (orn: AAA2022000000135)" },
        type: { type: "string", description: "C sutunu: 'ALIS' veya 'SATIS'. DIKKAT: Satici firmasi mukellefimiz ise SATIS, alici firmasi mukellefimiz ise ALIS" },
        vendor_tax_id: { type: "string", description: "D sutunu: KARSI TARAFIN VKN (10 hane) veya TCKN (11 hane). Karsi taraf = mukellefimiz olmayan taraf" },
        title: { type: "string", description: "E sutunu: KARSI TARAFIN (mukellefimiz olmayan firma) ticari unvani" },
        tevkifat_orani: { type: "string", description: "F sutunu: Tevkifat orani (orn: 2/10). Yoksa null" },
        ozel_matrah: { type: "number", description: "G sutunu: Ozel matraha tabi tutar. Yoksa null" },
        kdv_1: { type: "number", description: "H sutunu: %1 KDV TUTARI (sadece vergi miktari, matrah degil). Faturada yoksa null" },
        kdv_8: { type: "number", description: "I sutunu: %8 KDV TUTARI (sadece vergi miktari, matrah degil). Faturada yoksa null" },
        kdv_10: { type: "number", description: "J sutunu: %10 KDV TUTARI (sadece vergi miktari, matrah degil). Faturada yoksa null" },
        kdv_18: { type: "number", description: "K sutunu: %18 KDV TUTARI (sadece vergi miktari, matrah degil). Faturada yoksa null" },
        kdv_20: { type: "number", description: "L sutunu: %20 KDV TUTARI (sadece vergi miktari, matrah degil). Faturada yoksa null" },
        matrah_1: { type: "number", description: "M sutunu: %1 KDV icin MATRAH (vergisiz net tutar). Faturada yoksa null" },
        matrah_8: { type: "number", description: "N sutunu: %8 KDV icin MATRAH (vergisiz net tutar). Faturada yoksa null" },
        matrah_10: { type: "number", description: "O sutunu: %10 KDV icin MATRAH (vergisiz net tutar). Faturada yoksa null" },
        matrah_18: { type: "number", description: "P sutunu: %18 KDV icin MATRAH (vergisiz net tutar). Faturada yoksa null" },
        matrah_20: { type: "number", description: "Q sutunu: %20 KDV icin MATRAH (vergisiz net tutar). Faturada yoksa null" },
        total: { type: "number", description: "R sutunu: Faturanin ODENCEK GENEL TOPLAMI (Matrah + KDV). Bu ornekte = 944" }
      },
      required: ["date", "invoice_number", "type", "vendor_tax_id", "title", "total"]
    };

    const systemInstruction = `Sen Turk vergi mevzuatinda uzman bir muhasebe asistanisın.
Gorev: Fatura gorselini analiz edip asagidaki JSON alanlarini doldur.

== FATURA TURU BELIRLEME (C sutunu) ==
- Faturanin EN UST KISMINDA (satici bolumu) MUKELLEFIMIZIN UNVANI varsa => type = "SATIS"
- Faturanin EN UST KISMINDA BASKA BIR FIRMA varsa ve MUKELLEFIMIZ ortada/altta ALICI olarak geciyorsa => type = "ALIS"
- Mukellefimizin unvani: "${taxpayerName}"

== KDV ANALIZI (en kritik kisim) ==
Faturanin alt kismindaki TOPLAM TABLOSUNU veya KDV ORANLARINI bul ve KDV oranina (X) gore ayir:
1. Vergisiz net tutari (BUYUK rakam) => matrah_X alanina yaz (Orn: %18 ise matrah_18).
2. Vergi miktarini (KUCUK rakam) => kdv_X alanina yaz (Orn: %18 ise kdv_18).
3. SADECE faturada belirtilen KDV orani icin alanlari doldur. Diger tum oranlar null kalmali.
4. KURAL: kdv_X (vergi) her zaman matrah_X'ten (net tutar) kucuktur!

== KARSI TARAF BILGILERI ==
- vendor_tax_id (D sutunu): Mukellefimiz OLMAYAN tarafin VKN/TCKN'si
  * ALIS faturasinда => satici firmanin VKN'si
  * SATIS faturasinда => alici firmanin VKN'si
- title (E sutunu): Karsi tarafin (mukellefimiz olmayan) ticari unvani

== TARIH ==
- date: GG.AA.YYYY formatinda (orn: 07.09.2022)

== FATURA NUMARASI ==
- invoice_number: Fatura No / Belge No (orn: AAA2022000000135)

Sadece JSON formatında yanıt ver. Baska hicbir sey yazma.`;


    const inputParts: any[] = [
      { type: "text", text: prompt || "Lütfen bu belgeyi analiz et ve bilgileri çıkar." }
    ];

    if (activeBase64) {
      inputParts.push({
        type: "image",
        mime_type: mimeType || "image/jpeg",
        data: activeBase64.replace(/^data:image\/\w+;base64,/, '')
      });
    }

    const interaction = await ai.interactions.create({
      model: "gemini-3.5-flash",
      system_instruction: systemInstruction,
      input: inputParts,
      response_format: [
        {
          type: "text",
          mime_type: "application/json",
          schema: responseSchema
        }
      ]
    });

    let text = interaction.output_text || "";
    if (!text) throw new Error("Empty response from Gemini.");
    
    // Clean up potential markdown formatting before parsing
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    let extractedData;
    try {
      extractedData = JSON.parse(text);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError, "Raw text:", text);
      throw new Error("Failed to parse Gemini response as JSON.");
    }

    // Upload base64 to Storage
    let uploadedImageUrl = null;
    if (activeBase64) {
      try {
        const ext = mimeType === 'application/pdf' ? 'pdf' : 'jpg';
        const fileName = `${Date.now()}_${Math.floor(Math.random()*1000)}.${ext}`;
        const uint8Array = decode(activeBase64.replace(/^data:image\/\w+;base64,/, '')); 
        
        const { data: uploadData, error: uploadError } = await supabaseClient
          .storage
          .from('finance_receipts')
          .upload(fileName, uint8Array, {
             contentType: mimeType || 'image/jpeg',
             upsert: true
          });

        if (!uploadError && uploadData) {
           const { data: publicData } = supabaseClient.storage.from('finance_receipts').getPublicUrl(fileName);
           uploadedImageUrl = publicData.publicUrl;
        } else {
           console.warn("Storage upload failed in edge function", uploadError);
        }
      } catch (e) {
        console.warn("Exception during storage upload in edge function", e);
      }
    }

    const amountMinor = Math.round((extractedData.total || 0) * 100);
    
    // Parse date - handle both GG.AA.YYYY and YYYY-MM-DD formats
    let dateIso = new Date().toISOString();
    if (extractedData.date) {
      try {
        const d = extractedData.date.trim();
        if (d.includes('.')) {
          // GG.AA.YYYY format
          const parts = d.split('.');
          if (parts.length === 3) {
            const [day, month, year] = parts;
            dateIso = new Date(`${year}-${month.padStart(2,'0')}-${day.padStart(2,'0')}`).toISOString();
          }
        } else if (d.includes('-')) {
          // YYYY-MM-DD format
          dateIso = new Date(d).toISOString();
        }
      } catch(e) {
        console.warn('Date parse error:', e);
      }
    }

    // Determine type label for storage
    const typeLabel = extractedData.type || 'expense';
    const isAlis = typeLabel === 'ALIS' || typeLabel === 'expense';

    // Çift Statü Güncellemesi: finance_documents tablosundaki taslak kaydı güncelle
    const updatePayload: any = {
      amount_minor: amountMinor,
      title: extractedData.title,
      type: isAlis ? 'expense' : 'sales', // Keep internal type as expense/sales
      created_at: dateIso,
      flow_payment_status: 'paid', // Flow tarafında anında listelerde görünmesi için
      ledger_official_status: 'taslak', // Resmi muhasebe için onay bekliyor
      tax_details: extractedData // JSON olarak ham veriyi de sakla
    };

    if (uploadedImageUrl) {
      updatePayload.image_url = uploadedImageUrl;
    }

    const { data: updatedDoc, error: updateError } = await supabaseClient
      .from('finance_documents')
      .update(updatePayload)
      .eq('id', document_id)
      .select()
      .single();

    if (updateError) throw updateError;

    // Log the event (silent - don't fail if this errors)
    try {
      await supabaseClient.from('document_events').insert({
        document_id: document_id,
        event_type: 'ai_extraction',
        new_value: extractedData
      });
    } catch(logErr) {
      console.warn('document_events log error (non-fatal):', logErr);
    }

    const successMessage = `Harika! ${extractedData.title || 'Bilinmeyen'} firmasına ait, ${extractedData.date || 'bugün'} tarihli ve ${extractedData.amount || 0} TL tutarındaki belgeniz başarıyla işlendi ve onay için taslaklara gönderildi.`;

    return new Response(JSON.stringify({ success: true, document: updatedDoc, message: successMessage }), {
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
