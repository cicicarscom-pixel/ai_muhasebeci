# AI Agent Kuralları & Konuşma Geçmişi (Workigom Ledger)

## 🚨 Kritik Kural: Otomatik Git Push
**HER DEĞİŞİKLİKTE GITHUB'A PUSH YAPILACAKTIR.** Yapılan geliştirmeler, hata düzeltmeleri veya dosya güncellemeleri tamamlandıktan hemen sonra, ilgili projenin (çalışılan dizinin) GitHub deposuna `git add .`, `git commit -m "..."` ve `git push` komutlarıyla gönderilmelidir.

## Alınan Mimari Kararlar ve Kurallar
1. **Mevcut Yapıyı Koruma:** Geliştirmeler yapılırken `apps/ledger/app/layout.tsx` dosyasındaki ana layout yapısına, kenar boşluklarına (padding), Sidebar'a veya wrapper yapısına dokunulmamalıdır. Yalnızca hedeflenen bileşenler içeriğe izole bir şekilde eklenmelidir.
2. **Küçük ve Kontrollü Onaylar:** Büyük özellikler geliştirilirken ("Mükellefler Operasyon Merkezi" ve "Floating AI") önce plan sunulur, sadece tek bir özellik için geliştirme yapılır ve onay alındıktan sonra ikinci aşamaya geçilir.
3. **UI/UX Prensipleri:** 
   - Workigom'un ana renk paletine (sci-fi karanlık, siber-uzaylı, yeşil/mavi neon, `#12151C`, `#161B22`) sadık kalınmalıdır.
   - Master-Detail veri gösterimi gibi layout'lar, sayfanın geneline esnek biçimde (grid ile) yayılmalı; sağ ve sol kolonlar dikey alan kullanımını maksimize etmelidir.
   - Gerekli durumlarda Global Header dinamikleştirilerek sayfa başlığı oraya taşınmalı, sayfadaki yer tasarrufu sağlanmalıdır (örn. Mükellefler başlığının global Header'a alınması).
4. **Floating Ledger AI (Kapsül Tasarımı) Kuralları:**
   - Oval, siyaha yakın yatay bir kapsüldür.
   - Kapsülün sol tarafında mor (`#9D5CFF`), sağ tarafında turkuaz (`#00DAF3`) parıltı (glow) efektleri kesinlikle bulunmalıdır. Fare üzerine geldiğinde bu efektler ve border'lar CSS mask ve glow ile belirginleşmelidir.
   - Next.js SSR (Sunucu Tarafında Oluşturma) hatalarını (hydration mismatch) önlemek için `window` nesnesi ölçümlerine dayalı işlemler (örn. Framer Motion drag sınırları) yalnızca istemciye (Client) monte edildikten (`useEffect` sonrası `isMounted`) sonra yüklenmelidir.

## Konuşma ve Geliştirme Özeti
- **Adım 1:** Mevcut arayüzdeki renk farklılıkları tespit edildi (Onay Merkezi vs. Dashboard). Tüm renkler, siber-uzaylı dark palet ( `#12151C` ve `#161B22` tonları) ile aynı hizaya getirildi.
- **Adım 2 (Faz 1):** Mükellefler Operasyon Merkezi (`/ledger/clients`) tasarlandı. Sol panelde liste, sağ panelde detay görünümü şeklinde bir master-detail ekran yapıldı.
  - Arama kutusu önce header'da duruyordu, ardından sol listeye sticky olacak şekilde yerleştirildi.
  - Sayfa başlığı ("Mükellefler") üstteki global Header'a alındı, böylece UI daha kompakt hale geldi. "Mükellef Ekle" butonları ise Müşavir Davet Kartının içine taşındı.
- **Adım 3 (Faz 2):** Yüzen global AI Asistan kapsülü (Floating Ledger AI) eklendi. SSR hataları çözülerek tüm Ledger yapısında bağımsız olarak çalışabilir hale getirildi. Kapsül, "Kapalı (Orb)" ve "Açık (Panel)" olmak üzere iki durum (state) barındırıyor ve ekranın sağ altında konumlanıyor.
- **Adım 4 (Faz 3 - Tam Ekran Chat):** AI Ayarları sayfası (`/ai-settings`) güncellendi. Bölünmüş ekran (Split-View) tamamen kaldırılarak tek bir geniş (Full-Width) sohbet deneyimine geçildi. Dosya yükleme özelliği sohbet input'unun içine alındı. Fatura analizleri (JSON yerine) Xero standartlarında (satır kalemleriyle birlikte) doğrudan AI mesaj balonunun içine "Analiz Sonucu" görsel tablosu olarak render edilmeye başlandı. Ayrıca `process-document` ve `gemini-chat` Edge Fonksiyonları bu yapıya göre optimize edilerek Supabase'e deploy edildi.
- **Adım 5 (Faz 2 & 3 - Dinamik Şema Onboarding):** Sistemde sabit, hardcoded şemalar ve tablolar tamamen kaldırıldı. `ai-settings` içerisine "1 Dakikalık Onboarding" altyapısı (Çift Yükleme - Fatura + Ekran Görüntüsü) entegre edildi. `generate-schema` Edge Fonksiyonu oluşturuldu ve Gemini Prompt'u güncellenerek "Boş Kolon Öngörüsü" (Örn: %1 KDV, Tevkifat) zorunlu kılındı. Bu dinamik OCR şemasına bağlı olarak hem `ai-settings/page.tsx` sohbet tablosu hem de `ApprovalPage.tsx` Onay Merkezi veri gösterim tablosu, gelen JSON (`columns` veya `line_items`) yapısına göre tamamen dinamik (Object.keys / map) render edilecek şekilde güncellendi.
---

## 📅 AI Muhasebe — Hafıza Notları (18 Temmuz 2026)

### 1. 4 Fazlı AI Fatura Entegrasyonu Mimari Kararları
Flow (Mükellef) ile Ledger (Müşavir) arasındaki entegrasyon için 4 fazlı akış kabul edildi:
1. **Veri Yakalama (Flow):** Fatura fotoğrafı/PDF'i yüklenir, Gemini AI JSON olarak veriyi ayrıştırır.
2. **Proaktif Chat (Flow):** AI mükellefe faturanın türüne göre soru sorar:
   - Alış Faturası: "Ödendi mi?" (Evet/Hayır) -> Hayır ise "Tarih?"
   - Satış Faturası: "Tahsil edildi mi?" (Evet/Hayır) -> Hayır ise "Tarih?"
3. **Draft Kuyruğu (Flow -> Backend):** Veriler doğrudan \	ransactions\ tablosuna yazılmaz. Yeni oluşturulan \submit-accounting-draft\ Edge Function'ı ile \ccounting_drafts\ tablosuna "pending_approval" statüsü ile iletilir. Mobil uygulamanın doğrudan DB yazma yetkisi (RLS) kısıtlandı.
4. **Müşavir Onayı (Ledger):** Müşavir kendi ekranında bu draft'ları Split-View (Görsel + Data) olarak inceler, onaylayarak \	ransactions\ tablosuna aktarır.

### 2. Türkiye (TR-TR) Fatura Ayrıştırma Şeması Kesin Kuralları
- **Düz (Flat) JSON:** İç içe obje kullanılmayacak. Tüm KDV ve matrah alanları (1, 8, 10, 18, 20) doğrudan \ at1Base\, \ at1Amount\ şeklinde döndürülecek. Bulunmayan veriler \ \ (sıfır) olacak, \
ull\ veya boş string dönülmeyecek.
- **İşlem Yönü (\invoiceType\):** Belgedeki alıcı/satıcı VKN'si ile Flow kullanıcısının (işletmenin) VKN'si karşılaştırılacak. İşletme alıcıysa \purchase_invoice\, satıcıysa \sales_invoice\ dönecek.
- **Açıklama (\description\):** Sadece karşı tarafın firma adı kullanılacak. Ürün, hizmet, işlem özeti uydurulmayacak veya eklenmeyecek.
- **Tevkifat:** Varsa aynen "1/10" gibi string olarak yazılacak.
- **Matematiksel Uyum:** Uyuşmazlık durumunda veriler değiştirilmeyecek, JSON içindeki \eviewFlags\ dizisine \AMOUNT_MISMATCH\ eklenecek.

### 3. V2 Ledger AI Mimarisi & Kararları (21 Temmuz 2026)
- **Mimar AI "Boş Kolon" Kuralı:** Mimar AI'ın (Şema Kurucu) sadece faturada görünen verileri değil, sağlanan muhasebe UI ekran görüntüsündeki **TÜM** veri giriş alanlarını (Örn: faturada %1 KDV olmasa dahi %1 KDV kutusunu) tespit edip şemaya (`invoice_schemas`) dahil etmesi kuralı getirildi. Bu sayede sonraki farklı faturalar için sistem kör kalmıyor.
- **Global Şema & Veritabanı:** `invoice_schemas` tablosundaki `taxpayer_id` bağımlılığı (foreign key constraint) kaldırılarak şema tamamen global bir "Sistem Şablonu" haline getirildi. Frontend (`ai-settings`) ve backend (Mimar & İşleyici AI) üzerindeki tüm `taxpayer_id` kısıtlamaları temizlendi.
- **Dinamik Onay Merkezi (ApprovalPage):** Önceden sabit (dummySchema) olan onay merkezi arayüzü, tamamen dinamik hale getirildi. Bileşen artık yüklendiğinde `invoice_schemas` tablosundan en güncel kuralları çekip, sağ taraftaki veri giriş alanlarını o kural setine göre (ve `activeDocument.mapped_data` içeriğiyle) render ediyor.
- **İşleyici AI Yön Kuralı (Alış/Satış):** İşleyici AI'a veritabanından faturanın ait olduğu mükellefin unvanı çekilerek gönderiliyor. AI'a verilen prompt: "Faturayı kesen bu firmaysa SATIŞ, fatura bu firmaya kesilmişse ALIŞ faturasıdır." olarak netleştirildi.
- **Gemini Interactions API Geçişi:** Eski `@google/genai` kütüphanesinin `generateContent` metodunun deprecate olup 500 hatası vermesi üzerine tüm Edge Fonksiyonları (Mimar ve İşleyici) yeni nesil **Interactions API** (`ai.interactions.create`) ve `gemini-3.5-flash` modeline taşındı. Structured Output için response_schema kuralları uygulandı.
