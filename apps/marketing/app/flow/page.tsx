import './flow.css';
import FlowThreeJs from '../../components/flow/FlowThreeJs';
import FlowShader from '../../components/flow/FlowShader';
import FlowInteractive from '../../components/flow/FlowInteractive';

export default function FlowPage() {
  return (
    <div className="bg-background text-on-surface antialiased overflow-x-hidden selection:bg-primary selection:text-background relative">
      <FlowInteractive />
      {/* Global Background Shader */}
      <div className="fixed inset-0 z-[-1] opacity-30 mix-blend-screen pointer-events-none">
        <FlowThreeJs />
      </div>

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="global-nav">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-margin h-20">
          {/* Brand */}
          <a className="flex items-center gap-2 group" href="#">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#7B61FF] p-[1px]">
              <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>dataset</span>
              </div>
            </div>
            <span className="text-headline-md font-headline-lg font-bold text-on-surface tracking-tight">Workigom</span>
          </a>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#ozellikler">Özellikler</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#cozumler">Çözümler</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#fiyatlandirma">Fiyatlandırma</a>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-4">
            <a className="hidden md:block text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-sm text-body-sm font-medium" href="#">Giriş Yap</a>
            <a className="h-10 px-6 rounded-full bg-primary text-background font-label-md text-label-md font-semibold flex items-center justify-center hover:bg-white transition-colors duration-300 glowing-button" href="#">
              Ücretsiz Başla
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 pb-32">
        {/* 1. Hero Section */}
        <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-margin mb-32">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
            <div className="w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#7B61FF]/5 blur-[100px] translate-x-1/4 translate-y-1/4"></div>
          </div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
            {/* Hero Content */}
            <div className="flex flex-col items-start max-w-2xl">
              
              {/* Ürünlere Geçiş Butonları */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-lg">
                <a href="/flow" className="flex-1 px-6 py-3 rounded-xl border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                  <span className="material-symbols-outlined text-[20px]">dataset</span>
                  <span className="font-label-lg font-semibold">Workigom Flow</span>
                </a>
                <a href="/" className="flex-1 px-6 py-3 rounded-xl border border-[#4edea3]/30 bg-[#4edea3]/5 text-[#4edea3] hover:bg-[#4edea3]/10 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(78,222,163,0.1)] hover:shadow-[0_0_25px_rgba(78,222,163,0.2)]">
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">account_balance</span>
                  <span className="font-label-lg font-semibold">Workigom Ledger</span>
                </a>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline bg-surface/50 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Workigom OS 2.0 Yayında</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-gradient mb-6 leading-tight">
                Modern İşletmeler İçin <br />
                <span className="text-gradient-accent">Yapay Zeka</span> İşletim Sistemi.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                Muhasebe, sosyal medya ve operasyonel süreçlerinizi tek bir akıllı merkezden yönetin. İşletmenizi büyütmeye odaklanın, gerisini yapay zekaya bırakın.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-background font-body-md text-body-md font-medium flex items-center justify-center hover:bg-white transition-all duration-300 glowing-button group" href="#">
                  Platformu Keşfet
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <a className="w-full sm:w-auto h-12 px-8 rounded-full bg-surface border border-outline text-on-surface font-body-md text-body-md font-medium flex items-center justify-center hover:bg-surface-variant hover:border-primary/30 transition-all duration-300" href="#">
                  Demo İzle
                </a>
              </div>
            </div>
            {/* Hero 3D Visual */}
            <div className="relative h-[500px] w-full rounded-3xl border border-outline/50 bg-surface/20 backdrop-blur-3xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 to-[#7B61FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 w-full h-full">
                <FlowShader />
              </div>

              {/* Floating UI Elements */}
              <div className="absolute top-8 left-8 glass-panel rounded-xl p-4 flex items-center gap-4 animate-flow-float">
                <div className="w-10 h-10 rounded-lg bg-[#7B61FF]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#7B61FF]">receipt_long</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Yeni Fatura İşlendi</p>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">₺12,500.00</p>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 glass-panel rounded-xl p-4 flex items-center gap-4 animate-flow-float-reverse">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">campaign</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">AI İçerik Hazır</p>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">Instagram Gönderisi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Ecosystem Section */}
        <section className="max-w-7xl mx-auto px-margin mb-32 relative" id="cozumler">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Tek Bir Yapay Zeka.<br />İki Profesyonel. Tek Çalışma Alanı.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">İşletme sahibi ve muhasebeci arasındaki duvarları yıkıyoruz. Gerçek zamanlı veri senkronizasyonu ile kusursuz işbirliği.</p>
          </div>
          <div className="relative w-full rounded-3xl border border-outline bg-surface p-8 md:p-16 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px", backgroundPosition: "center center" }}></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Business Owner Node */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-surface to-surface-variant border border-outline flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <span className="material-symbols-outlined text-[40px] text-on-surface">storefront</span>
                  <div className="absolute right-0 top-1/2 w-4 h-4 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 hidden md:block ring-4 ring-background"></div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">İşletme Sahibi</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Faturaları tarar, harcamaları girer, finansal durumu anlık izler.</p>
              </div>
              {/* AI Core (Center) */}
              <div className="relative flex flex-col items-center justify-center shrink-0">
                <div className="hidden md:block absolute top-1/2 left-[-100%] right-[-100%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 -z-10">
                  <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent animate-flow-slide"></div>
                </div>
                <div className="w-32 h-32 rounded-full border border-primary/30 p-2 relative bg-background z-10">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-surface to-surface-variant border border-outline flex items-center justify-center relative overflow-hidden">
                    <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
                    <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin opacity-50" style={{ animationDuration: "3s" }}></div>
                  </div>
                </div>
                <div className="mt-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <span className="font-label-md text-label-md text-primary font-medium tracking-wide">Workigom AI Core</span>
                </div>
              </div>
              {/* Accountant Node */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-surface to-surface-variant border border-outline flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 rounded-2xl bg-[#7B61FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <span className="material-symbols-outlined text-[40px] text-on-surface">account_balance</span>
                  <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#7B61FF] rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block ring-4 ring-background"></div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Mali Müşavir</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">İşlenmiş verileri onaylar, beyannameleri hazırlar, danışmanlık verir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Bento Grid Features */}
        <section className="max-w-7xl mx-auto px-margin mb-32" id="ozellikler">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Her Şey İçin Tek Sistem</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Modern teknolojilerle donatılmış araç seti ile işletmenizi geleceğe taşıyın.</p>
          </div>
          <div className="bento-grid">
            {/* Social Media (Large Square) */}
            <div className="bento-item col-span-12 lg:col-span-8 p-8 md:p-10 min-h-[400px] flex flex-col justify-between group">
              <div className="ambient-glow" id="glow-social"></div>
              <div className="relative z-10 max-w-md">
                <div className="w-12 h-12 rounded-xl bg-surface border border-outline flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#00E5FF]">share</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Yapay Zeka Destekli Sosyal Medya Ekibiniz</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">İşletmeniz için özgün içerikler oluşturun, görseller üretin ve tüm sosyal medya hesaplarınızı tek bir takvim üzerinden yönetin. Markanızın sesini AI ile güçlendirin.</p>
              </div>
              <div className="relative z-10 w-full mt-auto rounded-xl border border-outline/50 overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/social-media-team.jpg" alt="Workigom Flow Sosyal Medya" className="w-full h-auto object-cover" />
              </div>
            </div>
            {/* OCR Intelligence (Small Square) */}
            <div className="bento-item col-span-12 lg:col-span-4 p-8 min-h-[400px] flex flex-col group">
              <div className="ambient-glow" id="glow-ocr"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-surface border border-outline flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#7B61FF]">document_scanner</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Kusursuz Veri Çıkarımı</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">Gelişmiş OCR teknolojisi ile fatura ve fişleri saniyeler içinde dijitalleştirin. İnsan hatasını sıfıra indirin.</p>
              </div>
              <div className="relative z-10 w-full mt-auto rounded-xl border border-outline/50 overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/ocr-intelligence.jpg" alt="Workigom Flow OCR" className="w-full h-auto object-cover" />
              </div>
            </div>
            {/* Accounting Bridge (Wide) */}
            <div className="bento-item col-span-12 p-8 md:p-12 relative overflow-hidden group">
              <div className="ambient-glow" id="glow-bridge"></div>
              <div className="relative z-10 max-w-2xl mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-bright border border-outline mb-6">
                  <span className="material-symbols-outlined text-[16px] text-[#00E5FF]">sync_alt</span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Otomasyon</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Devrim Niteliğinde Muhasebe Köprüsü</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Manuel veri girişine son. Belgelerinizi sisteme yükleyin, yapay zeka saniyeler içinde işlesin ve mali müşavirinizin ekranına anında düşsün.</p>
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="bg-background/80 border border-outline rounded-2xl p-6 relative">
                  <div className="w-8 h-8 rounded-full bg-surface border border-outline flex items-center justify-center font-label-sm text-primary mb-4 absolute -top-4 left-6">01</div>
                  <span className="material-symbols-outlined text-on-surface-variant mb-4 text-[28px]">photo_camera</span>
                  <h4 className="font-body-md text-body-md text-on-surface font-medium mb-2">Fotoğraf Çek</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Mobil uygulama ile belgenin fotoğrafını çekin.</p>
                </div>
                <div className="hidden md:flex items-center justify-center -mx-4 z-20">
                  <span className="material-symbols-outlined text-outline-variant">arrow_forward</span>
                </div>
                {/* Step 2 */}
                <div className="bg-background/80 border border-outline rounded-2xl p-6 relative">
                  <div className="w-8 h-8 rounded-full bg-surface border border-outline flex items-center justify-center font-label-sm text-primary mb-4 absolute -top-4 left-6">02</div>
                  <span className="material-symbols-outlined text-on-surface-variant mb-4 text-[28px]">smart_toy</span>
                  <h4 className="font-body-md text-body-md text-on-surface font-medium mb-2">Veri Çıkar</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">AI tüm bilgileri %99.9 doğrulukla okur.</p>
                </div>
                <div className="hidden md:flex items-center justify-center -mx-4 z-20">
                  <span className="material-symbols-outlined text-outline-variant">arrow_forward</span>
                </div>
                {/* Step 3 */}
                <div className="bg-background/80 border border-outline rounded-2xl p-6 relative">
                  <div className="w-8 h-8 rounded-full bg-surface border border-outline flex items-center justify-center font-label-sm text-[#7B61FF] mb-4 absolute -top-4 left-6">03</div>
                  <span className="material-symbols-outlined text-on-surface-variant mb-4 text-[28px]">category</span>
                  <h4 className="font-body-md text-body-md text-on-surface font-medium mb-2">Kategorize Et</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Gider türünü ve vergi dilimini otomatik belirler.</p>
                </div>
                <div className="hidden md:flex items-center justify-center -mx-4 z-20">
                  <span className="material-symbols-outlined text-outline-variant">arrow_forward</span>
                </div>
                {/* Step 4 */}
                <div className="bg-background/80 border border-outline rounded-2xl p-6 relative">
                  <div className="w-8 h-8 rounded-full bg-surface border border-outline flex items-center justify-center font-label-sm text-[#7B61FF] mb-4 absolute -top-4 left-6">04</div>
                  <span className="material-symbols-outlined text-on-surface-variant mb-4 text-[28px]">send</span>
                  <h4 className="font-body-md text-body-md text-on-surface font-medium mb-2">Muhasebeciye Gönder</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">İşlenmiş veri müşavirinizin paneline düşer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. AI Business Assistant Chat Interface */}
        <section className="max-w-7xl mx-auto px-margin mb-32">
          <div className="premium-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-outline">
              <div className="w-16 h-16 rounded-2xl bg-surface-bright border border-outline flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg"></div>
                <span className="material-symbols-outlined text-[32px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">7/24 İşletme Asistanınız</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Finansal verileriniz üzerinden sorular sorun, raporlar isteyin veya stratejik tavsiyeler alın. Workigom AI, işletmenizi sizin kadar iyi tanır.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Anlık Finansal Durum Raporlaması
                </li>
                <li className="flex items-center gap-3 text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Nakit Akışı Tahmini
                </li>
                <li className="flex items-center gap-3 text-on-surface font-body-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Vergi Yükümlülüğü Hesaplamaları
                </li>
              </ul>
            </div>
            {/* Chat Interface Mockup */}
            <div className="bg-background/80 p-8 flex flex-col">
              <div className="flex-1 space-y-6 mb-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-surface-bright border border-outline rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                    <p className="font-body-sm text-on-surface">Geçen aya göre pazarlama harcamalarımız ne durumda?</p>
                  </div>
                </div>
                {/* AI Message */}
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[90%]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-background text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
                    </div>
                    <div className="bg-surface border border-outline rounded-2xl rounded-tl-sm p-4">
                      <p className="font-body-sm text-on-surface mb-3">Pazarlama harcamalarınız geçen aya göre <strong>%15 artış</strong> gösterdi. Ancak bu artış, müşteri edinme maliyetini (CAC) düşürerek toplam gelirinize <strong>%22 pozitif</strong> yansıdı.</p>
                      <div className="h-2 w-full bg-surface-bright rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[65%] rounded-full"></div>
                      </div>
                      <p className="font-label-sm text-on-surface-variant mt-2 text-right">ROI: 3.2x</p>
                    </div>
                  </div>
                </div>
                {/* User Message 2 */}
                <div className="flex justify-end">
                  <div className="bg-surface-bright border border-outline rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                    <p className="font-body-sm text-on-surface">Bu veriyi PDF olarak raporla.</p>
                  </div>
                </div>
                {/* AI Message Loading */}
                <div className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-background text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
                    </div>
                    <div className="bg-surface border border-outline rounded-2xl rounded-tl-sm p-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-on-surface-variant rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-on-surface-variant rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-2 h-2 bg-on-surface-variant rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input Area */}
              <div className="relative mt-auto">
                <input className="w-full bg-surface border border-outline rounded-full py-4 pl-6 pr-14 font-body-sm text-on-surface focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50" placeholder="Workigom AI'a sorun..." type="text" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined">arrow_upward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Enterprise Security & GDPR */}
        <section className="border-y border-outline bg-surface/30 py-24 mb-32">
          <div className="max-w-7xl mx-auto px-margin">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="md:col-span-1">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Kurumsal Seviye Güvenlik</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Verileriniz en yüksek şifreleme standartlarıyla korunur. KVKK ve GDPR uyumlu altyapımızla işletmeniz güvende.</p>
              </div>
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-outline flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">lock</span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-medium text-on-surface mb-1">256-bit AES Şifreleme</h4>
                    <p className="font-body-sm text-on-surface-variant">Tüm verileriniz beklerken ve iletilirken banka standartlarında şifrelenir.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-outline flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">policy</span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-medium text-on-surface mb-1">KVKK & GDPR Uyumu</h4>
                    <p className="font-body-sm text-on-surface-variant">Kişisel veri koruma kanunlarına tam uyumlu altyapı mimarisi.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-outline flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">cloud_done</span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-medium text-on-surface mb-1">Yedekli Bulut Mimarisi</h4>
                    <p className="font-body-sm text-on-surface-variant">Verileriniz farklı coğrafi lokasyonlarda anlık olarak yedeklenir.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-outline flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-medium text-on-surface mb-1">Gelişmiş Erişim Kontrolü</h4>
                    <p className="font-body-sm text-on-surface-variant">Rol tabanlı yetkilendirme ile kimin neye erişebileceğini siz belirleyin.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-margin text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">İşletmenizi geleceğe taşımaya hazır mısınız?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">Kredi kartı gerektirmez. 14 gün boyunca tüm özellikleri ücretsiz deneyin.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary text-background font-body-md text-body-md font-semibold flex items-center justify-center hover:bg-white transition-all duration-300 glowing-button" href="#">
              Ücretsiz Hesabınızı Oluşturun
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-xl max-w-7xl mx-auto px-margin py-3xl">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a className="text-headline-sm font-headline-sm font-bold text-on-surface" href="#">Workigom</a>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim">© 2024 Workigom. All rights reserved.</p>
          </div>
          {/* Links Columns */}
          <div className="flex flex-col gap-3">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-fixed transition-colors" href="#">Ürün</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-fixed transition-colors" href="#">Şirket</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-fixed transition-colors" href="#">Destek</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-fixed transition-colors" href="#">Yasal</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-fixed transition-colors" href="#">TR/EN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
