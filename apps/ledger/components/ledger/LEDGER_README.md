# Workigom Ledger - Enterprise Design Language (Manifesto)

Bu doküman, Workigom Ledger ürününün bütünsel görsel kimliğini, tasarım kararlarını ve teknik implementasyon standartlarını açıklar. **Bu manifestodaki kurallar mutlaktır ve sistemdeki her yeni sayfa/component için zorunludur.**

## 1. Temel Felsefe (Design Philosophy)
Ledger'ın görsel dili, sayfadan sayfaya değişen rastgele tasarımlar yerine **"Tek Bir İşletim Sistemi"** hissiyatı vermek üzere kurgulanmıştır (Apple, Linear, Stripe ilham alınarak).
- **%90 Nötr Renkler, %10 Vurgu Rengi:** İçerik her zaman ön plandadır.
- **İnce Borderlar & Az Glow:** Neon ve karmaşık efektler yerine 1px ince, şeffaf `rgba` tabanlı kenarlıklar kullanılır.
- **Geniş Boşluklar (Whitespace):** Sıkışık tasarımlardan kaçınılır, grid sistemine sadık kalınır.
- **Tek Vurgu Rengi:** Tüm platformda operasyonu yöneten tek ana marka rengi vardır. Mor vs. gibi ikincil renkler sadece logoya veya AI'a özeldir.

## 2. Renk Sistemi (Color Philosophy)
**UYARI:** Hiçbir component içerisinde doğrudan HEX kodu (örn: `#00C8FF`) kullanılmaz. Tüm renkler `globals.css` üzerinden Tailwind Token'larına bağlanmıştır.

- **Primary (Ana Renk):** `--color-primary` (Ledger Cyan - `#00C8FF`). Butonlarda, aktif durumlarda ve ana vurgularda sadece bu kullanılır.
- **Surface (Arka Plan):** `--color-surface` (`#0E1117`). Tüm sayfa zemin rengidir.
- **Border:** `--color-border` (`rgba(255, 255, 255, 0.05)`). Bütün component'lerin standart çerçeve rengidir.
- **Card:** `--color-card` (`rgba(255, 255, 255, 0.03)`). Kartların zemin rengidir. (Daha açık olması gereken yerlerde `bg-white/5` tercih edilebilir).
- **Text:** `--color-text` (`#FFFFFF`). Başlıklar ve ana metinler.
- **Text Muted:** `--color-text-muted` (`#8B949E`). Alt başlıklar, etiketler (label) ve pasif metinler.

*Durum Renkleri:*
- **Success:** `--color-success` (Yeşil)
- **Warning:** `--color-warning` (Sarı / Amber)
- **Danger:** `--color-danger` (Kırmızı)

## 3. Komponent Envanteri (Component Inventory)
Platform içinde **sadece** aşağıdaki standartlaştırılmış komponentler kullanılabilir. Sayfalara özel rastgele kutular, butonlar oluşturulması **yasaktır**. Tüm komponentler `components/ledger/ui/` dizininde bulunur.

- **Cards:** `AppCard`, `GlassCard`, `MetricCard`, `ActivityCard`
- **Buttons:** `PrimaryButton`, `SecondaryButton`, `GhostButton`, `DangerButton`
- **Typography:** `PageTitle`, `SectionHeader`
- **Badges:** `StatusBadge`
- **Forms:** `SearchBar`, `FilterBar`
- **Layout/Feedback:** `Timeline`, `EmptyState`, `LoadingSkeleton`

## 4. Grid ve Ölçü Sistemi (Spacing & Sizing)
Sistem **8px Grid** üzerine kuruludur. Random ölçüler (Örn: 13px, 21px, 37px) kesinlikle kullanılamaz.

- **Kabul Edilen Boşluklar (Gap, Margin, Padding):** `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`
- **Border Radius:**
  - Card, Box, Panel: `20px` (`rounded-card`)
  - Button, Input: `14px` (`rounded-button`, `rounded-input`)
  - Badge, Tag: `999px` (`rounded-badge`)

## 5. Sayfa Hiyerarşisi (Vertical Rhythm)
Her Ledger sayfasının (Örn: Dashboard, Workflow) dizilimi aşağıdaki gibi sabit bir ritme sahip olmalıdır:
1. `PageTitle` (Başlık: 32px, Bold)
2. *[8px Boşluk]*
3. `Subtitle` (Açıklama / Meta: 14px, Muted)
4. *[24px Boşluk]*
5. `MetricCard` (KPI'lar / İstatistikler)
6. *[32px Boşluk]*
7. Sayfa İçeriği (Tablolar, Paneller vs.)

## 6. Onay Merkezi (Approval Page) Form Yapısı
Sağ panelde yer alan form elemanları (Fatura Tarihi, VKN vb.) aşağıdaki kurallara göre kurgulanmıştır:
- Grid sistemi `grid-cols-2` olarak işler; elemanlar aksi belirtilmedikçe her satırda 2 adet yan yana durur (geniş olması gereken Açıklama gibi alanlar hariç).
- Kutucuklar `bg-white/5`, `backdrop-blur`, `h-9` ve `rounded-lg` kullanır.
- Yüzdelik KDV/Matrah alanları `flex` veya esnek grid yapıları kullanılarak dar ekranlarda taşmayı engelleyecek şekilde (`whitespace-nowrap`) tasarlanmıştır.

---
*Zero Visual Debt (Sıfır Görsel Borç) prensibi esastır. Bu manifestoya uymayan bir arayüz PR'ı (Pull Request) onaylanmamalıdır.*

## 7. Kimlik Doğrulama ve Müşavir Kayıt Mimarisi (Auth & Onboarding)
Ledger sisteminde muhasebecilerin sisteme dahil olması (onboarding) aşağıdaki standartlarla yönetilir:

### 7.1. Kayıt (Registration) Akışı
- **E-posta ve Şifre:** Sistem Supabase Auth altyapısı üzerinden e-posta ve şifre ile çalışır.
- **Kullanıcı Profili:** Kayıt anında (veya kayıt sonrası ilk adımda) `profiles` tablosuna kullanıcının `full_name` verisi eklenir.

### 7.2. Otomatik Müşavir Kodu Üretimi (Connection Code)
Mükelleflerin "Müşavirime Bağlan" (AI-Esnaf vs.) mobil arayüzünden ilgili mali müşavire güvenle bağlanabilmesi için:
- **Benzersiz Kod Üretimi:** Muhasebeci sisteme kayıt olduğu anda arka planda çalışan bir `Server Action` tetiklenir.
- **Format:** `WG-XXXXX` formatında rastgele ve benzersiz 5 haneli bir kod üretilir (Örn: `WG-73492`).
- **Veritabanı Kaydı:** Bu kod kullanılarak `ledger_accounting_firms` tablosunda `connection_code` alanına sahip yeni bir firma profili anında oluşturulur.
- **Bağlantı Mimarisi:** İleride `shared_accountant_taxpayer_links` tablosunda bu kod üzerinden mükellef-müşavir eşleştirmesi (`status: 'pending'`) yapılır.
