# AI Agent Context: Ledger AI Integration

## Genel Bakış (Overview)
Bu doküman, Workigom web platformu (Next.js) ve Flow (AI Esnaf) mobil uygulaması (React Native) arasındaki uçtan uca yapay zeka (Gemini) entegrasyonu, mimari kararlar ve sistem işleyişini özetler. AI Agent'ların sisteme gelecekte yapacağı müdahalelerde referans noktası olarak kullanılmalıdır.

## 1. Mimari Kararlar ve Zero-Trust Yaklaşımı
Sistemde evrakların yüklenmesi ve okunması tamamen güvenli bir mimariye (Zero-Trust) oturtulmuştur:
- **Gizli Depolama (Private Bucket):** Yüklenen fatura ve fişler Supabase üzerinde `documents` isimli tamamen kapalı (`public: false`) bir bucket'ta saklanır. Hiçbir RLS (Row-Level Security) kuralı eklenmemiştir; yani sadece *Service Role* anahtarı veya Admin Client üzerinden erişilebilir.
- **Admin Client ile RLS Bypass:** Web arayüzünde Müşavir, yetkilendirmesi doğrulandıktan sonra belgeleri görüntülerken, Next.js server action üzerinden `adminSupabase` kullanılarak anlık "Signed URL" (Geçici Erişim Linki) üretilir. Böylece dışarıdan hiçbir şekilde görsellere ulaşılamaz.

## 2. Gemini AI Entegrasyonu
Yapay zeka analiz süreci, `@ai-sdk/google` kütüphanesi kullanılarak yürütülür:
- **Resim Okuma Yöntemi:** AI SDK'nın Signed URL'yi çekerken yaşayabileceği kopukluklar ve yetki sorunlarını önlemek adına resim, önce Node.js `fetch` ile Backend tarafında indirilip `ArrayBuffer` formatına dönüştürülür ve yapay zekaya saf (raw) veri olarak iletilir.
- **Model Seçimi:** Kısa süre önce Google tarafından isim standartları değiştirildiği için model ismi `gemini-1.5-pro` olarak kodlanmıştır.
- **Dinamik API Key (Supabase system_settings):** Vercel veya lokal çevre değişkenlerine (Environment Variables) API Key koymanın getirdiği bakım ve güvenlik zorlukları nedeniyle, `GOOGLE_GENERATIVE_AI_API_KEY` bilgisi doğrudan Supabase veritabanındaki `system_settings` tablosundan dinamik olarak çekilir. Böylece ileride her müşavirin kendi API key'ini girmesi (firm_settings) gibi çoklu mimarilere altyapı hazırlanmıştır.

## 3. Hata Yönetimi ve Loglama
Yapay zeka (Gemini) tarafında yaşanabilecek API limit aşımları, geçersiz key veya model sorunları doğrudan Vercel üzerinde gizli kalmasın diye "Arayüz Loglama" geliştirildi:
- `process-document.action.ts` içerisinde oluşan hatalar yakalanır ve belgenin `processing_status` durumu `failed` olarak güncellenir.
- Hatanın sebebi (örn: `Google Generative AI API key is missing...`) belgenin `vendor_name` kolonuna yazdırılarak, Müşavirin veya Geliştiricinin UI üzerinden "Okunamadı" durumunun gerçek sebebini saniyeler içinde tespit etmesi sağlanır.

## 4. Kullanıcı Deneyimi (UX) Özellikleri
- **Auto-Redirect:** "Onay Merkezi"ne (Approval Page) girildiğinde, sistem eğer onay kuyruğunda evrak varsa otomatik olarak sıradaki ilk evrağı seçer ve `Lütfen belge seçin` ekranını atlar.
- **Sahiplik Damgası:** Görüntülenen belgenin sağ ya da üst köşesinde belgenin hangi mükellefe ait olduğunu gösteren belirgin bir `MÜKELLEF: [İSİM]` damgası eklenmiştir. Çıktı (Print) alındığında bu damga belgenin tam üstünde yer alarak karışıklıkları önler.
- **Kökten Silme Özelliği:** Onaylanmayan veya hatalı yüklenen (failed) belgeler için Onay Merkezi'ne kırmızı bir "Sil" butonu eklenmiştir. Bu buton belgenin satırlarını, taslaklarını, storage üzerindeki görselini ve kendisini temizleyerek kuyruğu ferahlatır.

## 5. İleriki Geliştirmeler İçin Notlar
- `accounting_firms` tablosuna `gemini_api_key` sütunu eklenebilir. Böylece her firma/müşavir kendi AI hesabını bağlayarak maliyetleri üstlenebilir.
- `AI-Esnaf` mobil uygulaması, makbuzları base64 yerine doğrudan Supabase Storage'a kendisi yükleyip, Backend'e sadece Supabase URL'sini iletecek şekilde güncellenirse (Presigned Upload URLs) Vercel üzerindeki 4.5MB Serverless Limit (Payload Limit) aşılmış olur. Şimdilik Base64 üzerinden ilerlenmektedir.
