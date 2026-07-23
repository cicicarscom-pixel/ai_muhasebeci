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
        amount: { type: "number", description: "KDV haric toplam matrah (vergi tabanı). Ornegin bu faturada 800" },
        total: { type: "number", description: "KDV dahil odencek toplam tutar. Ornegin bu faturada 944" },
        date: { type: "string", description: "YYYY-MM-DD formatinda fatura tarihi" },
        title: { type: "string", description: "Karsi tarafin (satici veya alici) ticari unvani" },
        type: { type: "string", description: "'expense' veya 'sales'. Alici bizim mukellefimiz ise expense, satici ise sales" },
        invoice_number: { type: "string", description: "Fatura numarasi. Ornegin AAA2022000000135" },
        vendor_tax_id: { type: "string", description: "Karsi tarafin VKN (10 hane) veya TCKN (11 hane)" },
        tevkifat_orani: { type: "string", description: "Tevkifat oran\u0131, genellikle bos" },
        ozel_matrah: { type: "number", description: "Ozel matrah, genellikle bos" },
        kdv_1: { type: "number", description: "SADECE %1 KDV'nin HESAPLANAN TUTARI (miktari). Matrah degil. Bu faturada bos. Ornek: 18% KDV icin 144 olan KDV MIKTARI" },
        kdv_10: { type: "number", description: "SADECE %10 KDV'nin HESAPLANAN TUTARI (miktari). Matrah degil." },
        kdv_18: { type: "number", description: "SADECE %18 KDV'nin HESAPLANAN TUTARI (miktari). Bu faturada 144. DIKKAT: 800 degil, 144!" },
        kdv_20: { type: "number", description: "SADECE %20 KDV'nin HESAPLANAN TUTARI (miktari). Matrah degil." },
        matrah_1: { type: "number", description: "%1 KDV'nin uygulandigi TABAN TUTAR (matrah). Bu faturada bos." },
        matrah_8: { type: "number", description: "%8 KDV'nin uygulandigi TABAN TUTAR (matrah). Bu faturada bos." },
        matrah_10: { type: "number", description: "%10 KDV'nin uygulandigi TABAN TUTAR (matrah). Bu faturada bos." },
        matrah_18: { type: "number", description: "%18 KDV'nin uygulandigi TABAN TUTAR (matrah). Bu faturada 800. DIKKAT: 144 degil, 800!" },
        matrah_20: { type: "number", description: "%20 KDV'nin uygulandigi TABAN TUTAR (matrah). Bu faturada bos." }
      },
      required: ["amount", "title", "type", "date", "invoice_number", "vendor_tax_id"]
    };

    const systemInstruction = `Sen Turk vergi mevzuatinda uzman bir muhasebe asistanisın.
Gorev: Fatura gorselini analiz et ve verileri JSON olarak domdur.

KRITIK KURALLAR - DIKKATLE OKU:

=== KDV ANALIZI ===
Faturanin alt kismindaki TOPLAM TABLOSUNA bak:
- "KDV Matrahi (%18): 800,00" yaziyorsa => matrah_18 = 800 (BU BUYUK SAYI = matrah)
- "Hesaplanan KDV (%18): 144,00" yaziyorsa => kdv_18 = 144 (BU KUCUK SAYI = vergi miktari)
- "Vergiler Dahil Toplam: 944,00" yaziyorsa => total = 944
- kdv_18 HER ZAMAN matrah_18'den KUCUKTUR!

=== DIGER ALANLAR ===
- invoice_number: Fatura numarasi (orn: AAA2022000000135)
- date: YYYY-MM-DD formatinda (orn: 2022-09-07)
- vendor_tax_id: KARSI TARAFIN VKN/TCKN'si (fatura kesicinin VKN'si)
- title: KARSI TARAFIN unvani
- type: Mükellefimiz "${taxpayerName}" - ALICI ise "expense", SATICI ise "sales"

Sadece JSON domdur. Baska hicbir sey yazma.`;


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

    const extractedData = JSON.parse(text);

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

    const amountMinor = Math.round((extractedData.amount || 0) * 100);
    const dateIso = extractedData.date ? new Date(extractedData.date).toISOString() : new Date().toISOString();

    // Çift Statü Güncellemesi: finance_documents tablosundaki taslak kaydı güncelle
    const updatePayload: any = {
      amount_minor: amountMinor,
      title: extractedData.title,
      type: extractedData.type,
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

    // Log the event
    await supabaseClient.from('document_events').insert({
      finance_document_id: document_id,
      event_type: 'ai_extraction',
      new_value: extractedData
    });

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
