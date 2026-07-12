# Workigom Ledger - Mükellefler Operasyon Merkezi & Global AI

Bu doküman, Workigom Ledger projesi için geliştirilen "Mükellefler Operasyon Merkezi" ve "Global Floating Ledger AI" özelliklerinin yapılandırmalarını ve tasarım detaylarını içerir.

## 1. Mükellefler Operasyon Merkezi (`/ledger/clients`)
Bu sayfa, mevcut hiçbir yapıyı bozmadan tamamen izole bir "Master-Detail" (Ana-Detay) görünümüyle inşa edilmiştir.
- **Sol Kolon:** Yüzlerce mükellefin listelendiği, aşağı/yukarı kaydırılabilir (scrollable) "ClientList".
- **Sticky Arama Çubuğu:** Liste kaydırılsa bile mükellef arama kutusu listenin en tepesinde sabit (sticky) kalır.
- **Sağ Kolon:** Seçilen mükellefin tüm bilgilerini içeren devasa "ClientDetail" kartı (Firma bilgileri, AI iletişim geçmişi, bağlantı durumu, operasyon özeti).
- **Header Entegrasyonu:** Global top header'daki "Günaydın" yazısı yerine, bu sayfadayken sayfa başlığı ("Mükellefler") ve açıklama metni dinamik olarak üste taşınır.
- **Kompakt Aksiyon Kartı:** "Filtrele" ve "Mükellef Ekle" butonları, sağ üstteki Müşavir Bağlantı Kartı'nın içine ("QR Kod" ve "Davet Linki" yanına) yerleştirilerek dikey alan tasarrufu sağlanmıştır.

## 2. Global Floating Ledger AI
Bu özellik, `/ledger/*` rotalarının tamamında (Onay Merkezi hariç) sağ alt köşede yüzen, sürüklenebilir (draggable) ve tıklanabilir bir kapsül olarak konumlandırılmıştır.

### Kapsül (Orb) Tasarımı ve CSS Yapılandırması
Kapsülün (kapalı halinin) dikkat çekici, siber-uzaylı ve premium bir görünüme sahip olması için aşağıdaki yapılandırmalar kullanılmıştır:

- **Boyut & Arka Plan:** `138px` genişlik, `52px` yükseklik, siyah/koyu arka plan (`#080B10/95`) ve yoğun cam efekti (`backdrop-blur-xl`).
- **Gradient Neon Border:** Kapsülün çevresinde CSS `mask` ve `linear-gradient` kullanılarak oluşturulan özel bir border. Üst/sol kısımdan mora (`#9D5CFF`), sağ/alt kısımdan turkuaza (`#00DAF3`) geçiş yapar.
  ```css
  background: linear-gradient(135deg, rgba(157,92,255,0.7) 0%, rgba(0,218,243,0.7) 100%)
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)
  -webkit-mask-composite: xor
  ```
- **Dış Işık Parıltıları (Glow Effects):** Kapsülün arkasında iki adet mutlak konumlandırılmış (absolute) bulanık (blur) div bulunur. Biri solda mor (`#9D5CFF`), diğeri sağda turkuazdır (`#00DAF3`). Fare ile üzerine gelindiğinde (hover) bu ışıklar daha da genişler ve parlar.
- **İç Nefes Alma Efekti (Breathing Pulse):** Kapsülün en arka planında, hover durumunda görünür olan ve `animate-pulse` sınıfıyla "nefes alıp veren" bir mor-turkuaz gradient parlaması mevcuttur.

### Açık Panel (Chat Box)
Kapsüle tıklandığında, Framer Motion kullanılarak yay (spring) animasyonuyla sağ alt köşeden yukarı doğru açılan bir cam sohbet paneli belirir. Bulunduğu sayfanın bağlamını (`usePathname` üzerinden) alarak kullanıcıya "Şu anda [Sayfa Adı] ekranındayız" şeklinde karşılama yapar.

---
*Tüm bu geliştirmeler, mevcut Workigom Ledger UI/UX prensiplerine (koyu tema, cam efekti, neon renk paleti, grid sistemleri) sıkı sıkıya bağlı kalınarak uygulanmıştır.*
