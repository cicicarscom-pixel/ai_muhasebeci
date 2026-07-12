# AI Agent Kuralları & Konuşma Geçmişi (Workigom Ledger)

## Alınan Mimari Kararlar ve Kurallar
1. **Mevcut Yapıyı Koruma:** Geliştirmeler yapılırken `apps/marketing/app/ledger/layout.tsx` dosyasındaki ana layout yapısına, kenar boşluklarına (padding), Sidebar'a veya wrapper yapısına dokunulmamalıdır. Yalnızca hedeflenen bileşenler içeriğe izole bir şekilde eklenmelidir.
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
