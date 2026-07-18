# Ledger & Flow V1 Mimari Kuralları (Antigravity Notları)

Bu dosya, yapay zeka ajanlarının projeye sonradan dahil olduklarında bağlamı (context) kaybetmemeleri için konuşmalarımızdan damıtılmış **KESİN MİMARİ KURALLARDIR**.

## Temel Felsefe
- **ERP Değil:** Sistem karmaşık bir ERP (mizan, cari ekstresi, karmaşık stok) **değildir**. Mükellef (Esnaf) için dünyanın en basit gelir/gider ekranı; Müşavir için ise "Veri Ayrıştırıcı ve Dışa Aktarıcı"dır.
- **Onay Kuralı:** Ledger sisteminde "Otomatik Onayla" özelliği KESİNLİKLE yoktur. Yapay zeka faturayı çeker, `ready_for_review` yapar. Müşavir onaylamadan dışa aktarılamaz.

## Klasör ve Backend Mimarisi
- **Flow (Mobil Uygulama) = `c:\ai_esnaf`**
  - Sadece React Native (Expo) ön yüz kodları yaşar.
  - Kesinlikle `supabase/` backend klasörü burada YER ALAMAZ.
- **Ledger (Müşavir Web) & Ortak Backend = `c:\ai_muhasebeci`**
  - Next.js projesi `apps/marketing` vb. altındadır.
  - Veritabanı yapılandırması, migrations ve **Edge Function'lar** `supabase/` klasörü içerisinde bu dizindedir. Tüm mobil istekler bu ana backend'e atılır.

## Yapay Zeka (Gemini Vision) Entegrasyonu Kuralı
- Supabase Edge Functions (`process-document`) içerisinde Gemini çağrılırken her zaman şu yapı kullanılmalıdır:
  ```json
  generationConfig: {
    response_mime_type: "application/json"
  }
  ```
- Prompt içerisine mutlaka "Sadece JSON dön, başka hiçbir açıklama yapma" kuralı eklenmelidir ki Deno tarafında `JSON.parse()` patlamasın.

## Veritabanı ve Şema Kuralları
- **`finance_documents`:** Ana belgenin tutulduğu tablodur. Eski `payments` ve `country_tax_schemas` tabloları drop edilmez, `legacy_` prefixi ile yedeklenir.
- **Dinamik Şema:** Müşavirlerin faturalardan hangi veriyi çıkaracağı hardcoded DEĞİLDİR. `ledger_ai_settings` içindeki `extraction_schema` üzerinden dinamik formlar oluşturulur.
- **Versiyonlama:** Geçmiş faturaların bozulmaması için her belgede `extraction_schema_version` saklanır.
- **Denetim İzi (Audit Log):** Her değişiklik (AI çıkarma işlemi dahil) `document_events` tablosunda `old_value` ve `new_value` ile loglanır.

Ajanlar geliştirme yaparken her zaman bu prensiplere sadık kalmalıdır.
