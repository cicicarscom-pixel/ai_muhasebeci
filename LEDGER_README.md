# Ledger & Flow Entegrasyon Dokümantasyonu

Bu doküman, **Ledger** (Mali Müşavir Paneli) ve **Flow** (Mükellef Uygulaması / Mobil & Web) arasındaki mimariyi, veritabanı yapılandırmalarını ve backend süreçlerini detaylandırmak amacıyla oluşturulmuştur.

Özellikle gelecekte geliştirilecek mobil uygulamaların (React Native / Expo) aynı backend (Supabase & Next.js API) altyapısını sorunsuz kullanabilmesi için tüm entegrasyon süreçleri burada kayıt altına alınmaktadır.

---

## 1. Mimari Genel Bakış

Sistem temelde iki ana aktör üzerine kuruludur:
* **Ledger (Mali Müşavir):** Mükelleflerini yöneten, faturaları inceleyen, onay süreçlerini yürüten ve AI asistanını kullanan profesyoneller.
* **Flow (Mükellef):** Kendi ön muhasebesini tutan, fatura/fiş yükleyen ve Ledger üzerindeki mali müşavirine bağlanan işletme sahipleri.

**Kullanılan Teknolojiler:**
* **Frontend (Web):** Next.js 15 (App Router), React, TailwindCSS, Framer Motion
* **Frontend (Mobil):** React Native, Expo
* **Backend & Veritabanı:** Supabase (PostgreSQL, Auth, Storage)
* **Backend Mantığı:** Next.js Server Actions & API Routes (`app/api/...`)

---

## 2. Veritabanı Yapısı (Supabase)

Sistemdeki en önemli iki tablo ve aralarındaki ilişki şu şekildedir:

### `auth.users` (Supabase Varsayılan Tablosu)
* Tüm kullanıcıların (Müşavir ve Mükellef) giriş bilgileri burada tutulur.
* E-posta onayı (Email Confirmation) ayarına bağlı olarak giriş izinleri yönetilir. Hızlı test ve geliştirme için genellikle kapalı tutulur.

### `ledger_accounting_firms` (Müşavir/Firma Tablosu)
Mali müşavir Ledger sistemine kayıt olduğunda, bu tabloda ona özel bir kayıt açılır.
* `id` (UUID)
* `user_id` (UUID - auth.users tablosuna referans)
* `firm_name` (Firma Adı)
* `email` (Müşavir E-postası)
* `connection_code` (Benzersiz Bağlantı Kodu, örn: `WG-44062`)
* `created_at` (Tarih)

---

## 3. Kayıt ve Giriş Akışı (Authentication)

### 3.1. Müşavir Kayıt (Register) Süreci
Müşavir Ledger üzerinden kayıt olurken Next.js Server Actions kullanılır (`registerAccountantAction`).
1. `supabase.auth.signUp` ile `auth.users` tablosuna kullanıcı eklenir.
2. 5 haneli rastgele bir bağlantı kodu üretilir (Örn: `WG-12345`).
3. Üretilen kod ve firma bilgileri `ledger_accounting_firms` tablosuna `user_id` ile eşleştirilerek kaydedilir.

### 3.2. Müşavir Giriş (Login) Süreci
1. `loginAccountantAction` üzerinden `supabase.auth.signInWithPassword` çağrılır.
2. Başarılı girişte oturum çerezleri (cookies) oluşturulur ve kullanıcı `/ledger/dashboard` veya `/ledger/clients` sayfasına yönlendirilir.

---

## 4. Flow - Ledger Bağlantı Senaryosu (Connection)

Mükellef (Flow kullanıcısı) ile Müşavir (Ledger kullanıcısı) arasındaki eşleşme süreci **"Bağlantı Kodu" (Connection Code)** üzerinden yürütülür.

### Adım 1: Kodun Alınması
Müşavir, Ledger paneline girdiğinde `ledger_accounting_firms` tablosundaki kendisine ait `connection_code` (Örn: `WG-44062`) değerini görür ve mükellefine (Flow kullanıcısına) iletir.

### Adım 2: Kodun Doğrulanması (Mobil / Web)
Mükellef, Flow uygulamasında "Muhasebecim" veya "Bağlan" sayfasına girer. Kodu yazdığında sistem kodu doğrular:
* **API:** `GET /api/flow-connections/verify?code=WG-44062`
* **İşlem:** `ledger_accounting_firms` tablosunda bu kod aranır. Bulunursa Müşavirin adı, konumu ve (varsa) istatistikleri geri döndürülür.

### Adım 3: Bağlantının Kurulması
Mükellef "Bağlan" butonuna bastığında bağlantı kalıcı hale getirilir.
* **API:** `POST /api/flow-connections/link`
* **Payload:** `{ connectionCode: "WG-44062", taxpayerId: "kullanici_id" }` (Gelecekte bağlantı tablosu `taxpayer_accountant_links` oluşturulduğunda bu tabloya yazılır).
* **Mobil State (React Native):** Bağlantı başarılı olduğunda, durum cihazın yerel hafızasına (`AsyncStorage`) kaydedilir. (Örn: `muhasebeci_step = 'connected'`). Böylece kullanıcı uygulamayı kapatıp açsa dahi bağlantı durumu korunur.

---

## 5. Mobil Uygulama (React Native) İçin Backend Kullanım Rehberi

Mobil uygulama geliştirilirken web ile **tamamen aynı backend altyapısı** kullanılacaktır. 

1. **API İstekleri:** Mobil uygulamada Axios veya Fetch kullanılarak Next.js API rotalarına (`https://workigom.com/api/...`) istek atılmalıdır.
2. **Supabase Client:** Mobil uygulamada Supabase SDK (`@supabase/supabase-js`) kullanılabilir ancak gizli API anahtarlarının mobil istemcide açığa çıkmaması için doğrudan veritabanı işlemleri yerine Next.js API rotaları üzerinden geçiş yapılması daha güvenlidir.
3. **State Yönetimi (AsyncStorage):** Flow veya Ledger tarafında cihaz üzerinde tutulması gereken (Bağlantı yapıldı/yapılmadı gibi) durumlar `AsyncStorage` ile yönetilir. Sayfa açıldığında `useEffect` ile bu state okunup ekran çizilir.

---

*Not: Bu doküman, sisteme eklenecek yeni modüller (Belge yönetimi, fatura aktarımı vb.) ile güncellenmeye devam edecektir.*
