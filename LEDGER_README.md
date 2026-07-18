# Ledger & Flow Entegrasyon Dokümantasyonu (V1 Kurgusu)

Bu doküman, **Ledger** (Mali Müşavir Paneli) ve **Flow** (Mükellef Uygulaması / Mobil & Web) arasındaki mimariyi, veritabanı yapılandırmalarını ve backend süreçlerini detaylandırmak amacıyla oluşturulmuştur.

Özellikle gelecekte geliştirilecek mobil uygulamaların (React Native / Expo) aynı backend (Supabase & Next.js API) altyapısını sorunsuz kullanabilmesi için tüm entegrasyon süreçleri burada kayıt altına alınmaktadır.

---

## 1. Mimari Felsefe (Veri Ayrıştırıcı & Dışa Aktarıcı)

Önceki karmaşık ERP ve muhasebe fişi mantıkları tamamen terk edilmiştir. Sistem "Veri Ayrıştırıcı ve Dışa Aktarıcı (Data Extractor & Exporter)" olarak çalışır.
* **Flow (Esnaf):** Evrakı yükler, sadece gelir-gider ve tahmini net bakiye metriklerini basitçe görür.
* **Ledger AI (Müşavir):** Belirlenen özel JSON şemasına (kurallara) göre gelen belgeleri Edge Function (Gemini) aracılığıyla okur ve ayrıştırır. Müşavir onaylar ve Excel/XML/PDF olarak dışa aktarır.

**Kullanılan Teknolojiler:**
* **Frontend (Web):** Next.js 15 (App Router), React, TailwindCSS, Framer Motion
* **Frontend (Mobil):** React Native, Expo
* **Backend & Veritabanı:** Supabase (PostgreSQL, Auth, Storage)
* **Backend Motoru (AI):** Supabase Edge Functions (Deno) + Gemini 1.5 Flash Vision API (`response_mime_type: "application/json"`)

---

## 2. Veritabanı Yapısı (Supabase)

Sistemdeki en önemli iki tablo ve aralarındaki ilişki şu şekildedir:

### `auth.users` (Supabase Varsayılan Tablosu)
* Tüm kullanıcıların (Müşavir ve Mükellef) giriş bilgileri burada tutulur.

### `ledger_ai_settings` (Müşavir AI Kuralları Tablosu)
Müşavirin Ledger Onboarding ekranında kilitlediği dinamik OCR çıkarma kurallarını barındırır.
* `firm_id` (UUID)
* `extraction_schema` (JSONB) - Hangi kolonların (örn: vendor_name, tax_amount) okunacağı.
* `instruction_rules` (JSONB) - Müşavirin özel talimatları.
* `schema_version` (INT) - Geriye dönük uyumluluk için versiyonlama.

### `finance_documents` (Ortak Fatura Tablosu)
Flow'dan gelen veya Ledger'da işlenen belgeler. Karmaşık ERP tabloları yerine bu tek tabloda tutulur.
* `organization_id`, `type`, `counterparty_name`, `amount_minor` (BigInt, TRY), `currency_code`
* `tax_details` (JSONB) - Gemini'den çıkarılan o faturanın tüm detayları buradadır.
* `document_status` ('draft', 'processing', 'ready_for_review', 'approved', 'archived')
* `extraction_schema_version` (Hangi şema ile işlendiği)

### `document_events` (Denetim İzi / Audit Log)
Kim neyi değiştirdi takip edebilmek için:
* `event_type`, `actor_type` ('ai', 'accountant', 'taxpayer'), `old_value`, `new_value`

---

## 3. Akış Senaryoları

### 3.1. Ledger Onboarding (Şema Tanımlama)
1. Müşavir `/ledger/onboarding` sayfasına girer.
2. Sisteme test faturası yükler (PDF/Görsel).
3. Base64'e çevrilen görsel, `c:\ai_muhasebeci\supabase\functions\process-document` fonksiyonuna `mode: 'test'` argümanı ile POST edilir.
4. Edge Function, Gemini Vision API'yi çağırıp JSON çıkartır ve veritabanına kaydetmeden UI'a geri yollar. UI bu JSON anahtarlarından bir Şema listesi çıkartır ve kilitler (`ledger_ai_settings` tablosuna yazar).

### 3.2. Flow Evrak Yükleme & Ledger Onaylama
1. Mükellef telefonundan fişi çeker, Edge Function çağrılır (Bu kez gerçek modda).
2. Edge Function faturayı `ledger_ai_settings` içindeki şemaya uygun okur ve `finance_documents` tablosuna ekler.
3. Fatura `ready_for_review` statüsünde `/ledger/approval` ekranında müşavire düşer.
4. Müşavir faturayı görüntüler, `InvoiceCard` üzerinde Mükellef adını ve etiketini görür, dinamik form (schema'ya göre çizilen form) üzerinden düzenler ve Onaylar.
5. Onaylanan faturalar `/ledger/approved` ekranında "Mükellef" bazlı akordeon listelerde toplanır. Oradan dışa aktarılır (`export_batch_id`) ve arşivlenir.

---

## 4. Edge Functions & Backend Konumu

Backend işlemlerinin, Edge Function'ların ve DB Migration'larının tamamı **Ledger (Ortak Monorepo) Projesi İçindedir (`c:\ai_muhasebeci\supabase`)**. 

Flow (Mobil) uygulaması (`c:\ai_esnaf`) sadece ön yüz (UI) kodlarını barındırır. Mobil uygulama veya Next.js projeleri, veritabanına veya Edge Function'lara istek atmak için bu merkezi Supabase projesinin URL'ini ve anahtarlarını kullanır.

Edge fonksiyonunu lokalde test etmek için `c:\ai_muhasebeci` dizininde:
```bash
supabase functions serve process-document --env-file ./supabase/.env.local
```
Deploy etmek için:
```bash
supabase functions deploy process-document
```
