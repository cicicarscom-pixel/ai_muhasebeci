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

### Kapsül (Orb) Tasarımı ve Glow Effect Yapılandırması (Aura Glow)
Kapsülün "Premium SaaS" hissiyatını vermesi ve etrafında dönen ışık hüzmesinin hata vermeden (kaymadan) mükemmel şekilde kapsülü takip etmesi için aşağıdaki **"Double-Div & Mask-Blur"** tekniği uygulanmıştır. Bu yöntem, kapsülün genişliğinden (hap şeklinden) veya CSS animasyon çakışmalarından etkilenmeyen kusursuz bir tekniktir. İleride tekrar denenmesine gerek kalmaması için tüm detaylar aşağıdadır:

1. **Sabit Gök Mavisi Sınır Çizgisi (Base Border):**
   - Kapsülün etrafında formunu koruyan sabit, neon görünümlü parlak bir hat bulunur:
   - `border-[2.5px] border-[#00a2ff] shadow-[0_0_20px_rgba(0,162,255,0.4)]` ile sabit mavi çerçeve çizilir.

2. **Glow Effect - Merkezleme ve Kaymayı Önleme (Double-Div Wrapper):**
   - Işığın kapsülden fırlamasını (displacement) engellemek için `transform: translate` komutları kullanılmamıştır. (Tailwind'in `spin` animasyonu transform'u ezdiği için merkez kaymalarına yol açar).
   - Çözüm olarak **flexbox** kullanılmıştır: Dış kapsayıcı `absolute -inset-[2px] flex items-center justify-center` ile sınırları belirlerken, dönen eleman (300x300px) bunun tam ortasına yerleşir ve sadece kendi etrafında döner.

3. **Glow Effect - Dolaşan İnce Işık Parçası ve Hız:**
   - Işığın kaba bir yarıçap yerine küçük bir "ışık parçası" gibi süzülmesi için `conic-gradient` renk dilimi oldukça daraltılmıştır (%75 şeffaf, %25 renkli alan):
     `background: conic-gradient(from 0deg, transparent 0%, transparent 75%, #00f3ff 80%, #9D00FF 90%, #FF0055 100%)`
   - Dönüş hızı premium bir his vermesi adına `animation: spin 4.5s linear infinite` olarak yavaşlatılmıştır.

4. **Glow Effect - Hap Şeklini Kusursuz Takip Etmesi (Mask + Blur Kombinasyonu):**
   - Işık daire, buton ise hap şeklinde olduğundan; dönen ışığın alt/üst kısımlarda butondan fırlamasını engellemek için **Mask-Before-Blur** tekniği uygulanmıştır:
     ```css
     padding: 4px; /* Işığın akacağı rayın kalınlığı */
     -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
     -webkit-mask-composite: xor;
     filter: blur(6px); /* Maskeleme yapıldıktan SONRA uygulanan bulanıklık */
     ```
   - **Sonuç:** Dev dönen daire, CSS maskesi ile sadece butonun kenar izindeki `4px`'lik yola (raya) hapsedilir. Ardından bu raya uygulanan `blur` efekti sayesinde, ışık maskelenmiş yoldan dışarıya sızarak gerçek bir **"Aura Glow"** oluşturur. Buton ne kadar genişlerse genişlesin, ışık her zaman dış kenarı yalayarak döner.

### Açık Panel (Chat Box)
Kapsüle tıklandığında, Framer Motion kullanılarak yay (spring) animasyonuyla sağ alt köşeden yukarı doğru açılan bir cam sohbet paneli belirir. Bulunduğu sayfanın bağlamını (`usePathname` üzerinden) alarak kullanıcıya "Şu anda [Sayfa Adı] ekranındayız" şeklinde karşılama yapar.

---
*Tüm bu geliştirmeler, mevcut Workigom Ledger UI/UX prensiplerine (koyu tema, cam efekti, neon renk paleti, grid sistemleri) sıkı sıkıya bağlı kalınarak uygulanmıştır.*
