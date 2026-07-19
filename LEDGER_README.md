# Ledger & Flow Entegrasyon Dokümantasyonu (V1 Kurgusu)

Bu doküman, **Ledger** (Mali Müşavir Paneli) ve **Flow** (Mükellef Uygulaması / Mobil & Web) arasındaki mimariyi, veritabanı yapılandırmalarını ve backend süreçlerini detaylandırmak amacıyla oluşturulmuştur.

Özellikle gelecekte geliştirilecek mobil uygulamaların (React Native / Expo) aynı backend (Supabase & Next.js API) altyapısını sorunsuz kullanabilmesi için tüm entegrasyon süreçleri burada kayıt altına alınmaktadır.

---

## 1. Mimari Felsefe (Veri Ayrıştırıcı & Dışa Aktarıcı)

Önceki karmaşık ERP ve muhasebe fişi mantıkları tamamen terk edilmiştir. Sistem "Veri Ayrıştırıcı ve Dışa Aktarıcı (Data Extractor & Exporter)" olarak çalışır.
* **Flow (Esnaf):** Evrakı yükler, sadece gelir-gider ve tahmini net bakiye metriklerini basitçe görür.
* **Ledger AI (Müşavir):** Belirlenen özel JSON şemasına (kurallara) göre gelen belgeleri Edge Function (Gemini) aracılığıyla okur ve ayrıştırır. Müşavir onaylar ve Excel/XML/PDF olarak dışa aktarır.

**Kullanılan Teknolojiler:**
* **Frontend (Web - Ledger & Marketing):** Next.js (App Router), React, TailwindCSS
* **Frontend (Mobil - Flow):** İleride C:\Users\roman\Flow_ai dizininde bağımsız bir proje olarak geliştirilecektir. (Monorepo'dan ayrıldı)
* **Backend & Veritabanı:** Supabase (PostgreSQL, Auth, Storage)
* **Backend Motoru (AI):** Supabase Edge Functions + Gemini 1.5 Flash Vision API (`response_mime_type: "application/json"`)
* **AI Asistanı:** Çoklu format (JPG, PNG, PDF, Excel, XML) ve pano yapıştırma (Copy-Paste) destekli entegre sohbet ve dosya analizi.

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

### `accounting_documents` (Ana Fatura / Belge Tablosu)
Flow'dan yüklenen veya Ledger üzerinden eklenen tüm belgeler bu tabloda tutulur.
* `id`, `created_at`
* `accounting_firm_id` (Müşavir ID - UUID, FK)
* `taxpayer_organization_id` (Mükellef ID - UUID, FK)
* `uploaded_by_user_id` (Yükleyen Kişi - UUID, FK)
* `storage_bucket`, `storage_path`, `mime_type` (Fiziksel dosya yolları)
* `document_type`, `processing_status`, `review_status`, `source`
* `issue_date`, `vendor_name`, `total_amount`, `currency` (Temel OCR çıktıları)

### `accounting_drafts` (AI Taslakları)
Yapay zeka tarafından analiz edilen evrakların taslak çıktıları burada tutulur.
* Müşavir onayı için `ledger_account_code` kolonunu barındırır.

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

## 4. Proje Klasör Yapısı (Monorepo)

* **`apps/ledger`**: Mali müşavir uygulaması (Şu anki ana odak).
* **`apps/marketing`**: Ana tanıtım sitesi (www.workigom.com). Flow'un landing page'i de burada yer almaktadır.
* **Flow (Mükellef Uygulaması)**: Monorepo'yu karmaşıklaştırmamak adına çıkarılmış ve `C:\Users\roman\Flow_ai` yoluna taşınmıştır. İleride tamamen bağımsız bir proje olarak geliştirilecektir.
* **`supabase`**: Veritabanı fonksiyonları (Edge Functions), kurguları ve yedekleri.

Edge fonksiyonunu lokalde test etmek için `c:\Ai_muhasebeci\workigom` dizininde:

Edge fonksiyonunu lokalde test etmek için `c:\ai_muhasebeci` dizininde:
```bash
supabase functions serve process-document --env-file ./supabase/.env.local
```
Deploy etmek için:
```bash
supabase functions deploy process-document
```
