# Workigom Ledger Modülü - Yapılandırma ve Mimari Belgesi

Bu doküman, Workigom ekosisteminin finansal ve ön muhasebe ayağı olan **Ledger** modülünün frontend yapılandırmasını, tasarım sistemini ve sayfa akışlarını özetlemektedir.

## 1. Sayfa Akışı ve Mimari (Routing)

Ledger modülü, kullanıcı deneyimini kesintisiz kılmak adına şu an `apps/marketing` (Next.js) uygulaması içerisinde yapılandırılmıştır. Sayfa akışı şu şekildedir:

1. **Açılış Sayfası (Landing Page) - `/ledger`**
   - **Dosya Yolu:** `apps/marketing/app/ledger/page.tsx`
   - **İşlev:** Ürünün tanıtıldığı, 3D animasyonların ve etkileşimli bento gridlerin yer aldığı pazarlama sayfasıdır. Sayfa üzerindeki tüm "Giriş Yap", "Hemen Başla" ve "Geçiş Yap" butonları `/ledger/login` rotasına bağlanmıştır.

2. **Giriş Ekranı (Login) - `/ledger/login`**
   - **Dosya Yolu:** `apps/marketing/app/ledger/login/page.tsx`
   - **İşlev:** Kullanıcıların sisteme girdiği şık, animasyonlu ekran.
   - **Tasarım Detayı:** Sol tarafta Ledger'ın gücünü vurgulayan, blur/neon detaylı görselleştirme; sağ tarafta ise E-posta ve **Google ile Giriş Yap** butonunu barındıran form bulunur. Marka kimliğine uygun olarak `Workigom` beyaz, `Ledger` kelimesi ise parlak turkuaz (`#00F0FF`) renkte yapılandırılmıştır. Tüm butonlar başarılı giriş simülasyonu olarak `/ledger/dashboard` sayfasına yönlendirir.

3. **Ana Panel (Dashboard / Smart Inbox) - `/ledger/dashboard`**
   - **Dosya Yolu:** `apps/marketing/app/ledger/dashboard/page.tsx`
   - **İşlev:** Uygulamanın kalbi olan "Akıllı Gelen Kutusu" sayfası. Faturaların AI tarafından işlendiği, RAG (Retrieval-Augmented Generation) analizlerinin sunulduğu yoğun veri alanıdır.

## 2. Tasarım Sistemi ve Tailwind Yapılandırması

Ledger modülü için mevcut `tailwind.config.js` dosyası, spesifik Material Design 3 (MD3) token'ları ve özel kurumsal renklerle genişletilmiştir.

**Dosya:** `apps/marketing/tailwind.config.js`

### Özel Renk Paleti (Colors)
- **Ana Renkler:** `ai-cyan: #00F0FF`, `ai-purple: #8A2BE2`
- **Dashboard Renkleri:** MD3 semantik isimleri sisteme eklenmiştir. Örn: `surface-container: #1e2021`, `primary-container: #00d8ff`, `error: #ffb4ab`, `on-surface: #e2e2e4`. 
- **Arka Planlar:** `bg-[#0D1014]`, `bg-[#171B21]`, `bg-[#1C2128]` gibi derin siyah ve füme tonları ile "Dark Mode" premium hissiyatı verilmiştir.

### Tipografi ve Dashboard "Compact" Ölçeklemesi (Scaling)
Hedef tasarımın geniş (2139px) bir tuvalde (canvas) hazırlanmış olmasından dolayı, kod standart dizüstü ekranlarında (1920px veya 1536px) fazla büyük (zoomed-in) görünmekteydi. Uygulamanın "yoğun veri paneli (dashboard)" karakteristiğini korumak için topyekün bir **küçültme (scale down)** işlemi uygulanmıştır:

1. **Font Boyutları (Typography):** Tüm özel yazı tipleri ~%15 oranında küçültülmüştür.
   - `body-md`: 14px -> 12px
   - `body-sm`: 13px -> 11px
   - `label-md`: 12px -> 10px
   - `mono-sm`: 12px -> 11px
2. **Kutu ve Layout Genişlikleri:**
   - Sol Menü (Sidebar): `240px` -> `200px`
   - Gelen Kutusu Listesi: `300px` -> `260px`
   - AI Metadata Paneli: `320px` -> `280px`
   - Alt Line Items Paneli: Yükseklik `200px` -> `160px`

Bu yapılandırma sayesinde sayfa her ekranda şık, profesyonel ve daha fazla veriyi aynı anda gösterebilen minyatür/kompakt yapısına kavuşmuştur.

## 3. Ekstra CSS ve Animasyonlar
Dashboard sayfasında donanımsal ivmelenme ve şık geçişler için sayfa içine (`dashboard/page.tsx`) özelleştirilmiş CSS enjekte edilmiştir:
- **.custom-scrollbar:** macOS stili ince ve hover durumunda belirginleşen, yer kaplamayan modern scrollbar.
- **.border-subtle:** Şeffaf beyaz (`rgba(255, 255, 255, 0.08)`) ile sınırları zarifçe çizen mikro kenarlıklar.
- **.ai-pulse:** "Hazır (Ready)" gibi durumları vurgulamak için yumuşak cubic-bezier ile hazırlanmış nabız atışı efekti.

---
*Not: Bu belge AI asistanınız tarafından mevcut durumu ve kararları kayıt altına almak üzere oluşturulmuştur.*
