import React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Prevent caching

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#05070A] font-sans selection:bg-[#00F0FF]/30 text-white overflow-x-hidden relative flex flex-col">
      {/* GLOBAL NOISE & AMBIENT GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.06)_0%,transparent_60%)] blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-200px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.06)_0%,transparent_60%)] blur-[100px]"></div>
        <div className="absolute bottom-0 left-[-200px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.04)_0%,transparent_60%)] blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
      </div>

      {/* NAVBAR */}
      <nav className="relative z-50 w-full max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F0FF] via-blue-500 to-[#8A2BE2] p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all">
            <div className="w-full h-full bg-[#05070A] rounded-[10px] flex items-center justify-center">
              <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-br from-[#00F0FF] to-[#8A2BE2]">smart_toy</span>
            </div>
          </div>
          <span className="text-2xl font-black tracking-tight text-white">AI Esnaf</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[14px] font-bold text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Özellikler</a>
          <a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a>
          <a href="#" className="hover:text-white transition-colors">Çözümler</a>
          <a href="#" className="hover:text-white transition-colors">Entegrasyonlar</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[14px] font-bold text-gray-300 hover:text-white transition-colors hidden md:block">Giriş Yap</button>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-[14px] font-black hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Ücretsiz Başla
          </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
          </span>
          <span className="text-[12px] font-bold tracking-wider text-gray-300 uppercase">YENİ NESİL OTONOM İŞLETME SİSTEMİ</span>
        </div>
        
        <h1 className="text-[52px] md:text-[72px] font-black leading-[1.05] tracking-tight text-white mb-6 max-w-[900px]">
          Müşterilerinizi & Muhasebenizi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-white to-[#8A2BE2] drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
            AI Yönetsin
          </span>
        </h1>
        
        <p className="text-[18px] md:text-[20px] text-gray-400 font-medium max-w-[700px] mb-10 leading-relaxed">
          Tüm iletişim kanallarınızı tek bir gelen kutusunda toplayın. Fatura kesimi, stok takibi ve müşteri yanıtlarını yapay zekaya devredin.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-blue-600 rounded-full font-black text-white text-[16px] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all flex items-center gap-2">
            Hemen Ücretsiz Deneyin <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white text-[16px] hover:bg-white/10 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">play_circle</span> Demoyu İzle
          </button>
        </div>
      </section>

      {/* 2. DASHBOARD MOCKUP (INBOX) */}
      <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 pb-40">
        <div className="w-full h-[600px] bg-[#0A0D14]/90 backdrop-blur-2xl rounded-3xl border border-[#1E293B] shadow-[0_30px_100px_-15px_rgba(0,0,0,1)] overflow-hidden flex relative">
          
          {/* Dashboard Left Sidebar */}
          <div className="w-[240px] bg-[#05070A]/50 border-r border-[#1E293B] hidden md:flex flex-col p-4">
            <div className="flex items-center gap-3 mb-8 px-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-black text-[12px]">ME</div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-white">Mükemmel Esnaf</span>
                <span className="text-[10px] text-green-400 font-bold">Çevrimiçi</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-2">GELEN KUTUSU</div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/10 cursor-pointer">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px] text-[#00F0FF]">inbox</span><span className="text-[13px] font-bold text-white">Tümü</span></div>
                <div className="bg-[#00F0FF]/20 text-[#00F0FF] text-[10px] font-black px-1.5 py-0.5 rounded">12</div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer text-gray-400">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px]">forum</span><span className="text-[13px] font-bold">WhatsApp</span></div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer text-gray-400">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px]">photo_camera</span><span className="text-[13px] font-bold">Instagram</span></div>
                <div className="bg-pink-500/20 text-pink-400 text-[10px] font-black px-1.5 py-0.5 rounded">3</div>
              </div>
            </div>
          </div>

          {/* Dashboard Message List */}
          <div className="w-[300px] bg-[#0A0D14]/50 border-r border-[#1E293B] hidden lg:flex flex-col p-4">
             <div className="bg-[#141A27] rounded-lg p-2 flex items-center gap-2 mb-4 border border-[#1E293B]">
               <span className="material-symbols-outlined text-gray-400 text-[18px]">search</span>
               <input type="text" placeholder="Ara..." className="bg-transparent border-none text-[12px] text-white focus:outline-none w-full" disabled />
             </div>
             <div className="flex flex-col gap-2">
               <div className="p-3 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 cursor-pointer">
                 <div className="flex justify-between items-center mb-1">
                   <span className="text-[13px] font-bold text-white">Ahmet Yılmaz</span>
                   <span className="text-[10px] text-[#00F0FF] font-bold">Şimdi</span>
                 </div>
                 <span className="text-[12px] text-gray-300">Fiyat listenizi alabilir miyim?</span>
               </div>
               <div className="p-3 rounded-xl hover:bg-white/5 border border-transparent cursor-pointer">
                 <div className="flex justify-between items-center mb-1">
                   <span className="text-[13px] font-bold text-gray-400">Ayşe Demir</span>
                   <span className="text-[10px] text-gray-600 font-bold">14:20</span>
                 </div>
                 <span className="text-[12px] text-gray-500">Sipariş verdim teşekkürler.</span>
               </div>
             </div>
          </div>

          {/* Dashboard Active Chat */}
          <div className="flex-1 bg-gradient-to-b from-[#0A0D14] to-[#101520] flex flex-col p-6">
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-4 mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">AY</div>
                 <div>
                   <div className="text-[14px] font-bold text-white">Ahmet Yılmaz</div>
                   <div className="text-[11px] text-gray-400">WhatsApp üzerinden</div>
                 </div>
               </div>
               <div className="bg-[#141A27] border border-[#1E293B] rounded-lg px-3 py-1 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500"></span>
                 <span className="text-[11px] font-bold text-white">AI Aktif</span>
               </div>
            </div>
            
            <div className="flex flex-col gap-4 flex-1">
              {/* User Message */}
              <div className="flex flex-col items-start gap-1 max-w-[70%]">
                <span className="text-[10px] text-gray-500">Ahmet • 10:30</span>
                <div className="bg-[#1A2329] p-3 rounded-2xl rounded-tl-sm text-[13px] text-white">
                  Merhaba, kampanya detaylarını alabilir miyim?
                </div>
              </div>
              
              {/* AI Auto Reply */}
              <div className="flex flex-col items-end gap-1 max-w-[70%] self-end">
                <span className="text-[10px] text-[#00F0FF] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">auto_awesome</span> AI YANITLADI
                </span>
                <div className="bg-gradient-to-br from-[#101623] to-[#1a2235] border border-[#00F0FF]/30 shadow-[0_0_20px_rgba(0,240,255,0.1)] p-3 rounded-2xl rounded-tr-sm text-[13px] text-white">
                  Merhaba Ahmet Bey! Kampanyamız tüm ürünlerde %20 indirimi kapsıyor. Sipariş oluşturmamı ister misiniz?
                </div>
              </div>

              {/* User Reply */}
              <div className="flex flex-col items-start gap-1 max-w-[70%] mt-2">
                <span className="text-[10px] text-gray-500">Ahmet • 10:31</span>
                <div className="bg-[#1A2329] p-3 rounded-2xl rounded-tl-sm text-[13px] text-white">
                  Evet, lütfen. Faturamı da keser misiniz?
                </div>
              </div>

              {/* AI Typing */}
              <div className="flex flex-col items-end gap-1 max-w-[70%] self-end">
                <div className="bg-gradient-to-br from-[#101623] to-[#1a2235] border border-[#00F0FF]/30 p-3 rounded-2xl rounded-tr-sm">
                   <div className="flex gap-1">
                     <span className="w-2 h-2 bg-[#00F0FF] rounded-full animate-bounce"></span>
                     <span className="w-2 h-2 bg-[#00F0FF] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                     <span className="w-2 h-2 bg-[#00F0FF] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-[#141A27] border border-[#1E293B] rounded-xl p-3 flex items-center opacity-50">
              <span className="text-[12px] text-gray-500 flex-1">AI sizin yerinize yanıtlıyor...</span>
              <span className="material-symbols-outlined text-gray-500">send</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES GRID */}
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-black text-white mb-4">Her Şeyi Yapan <span className="text-[#8A2BE2]">Süper Gücünüz</span></h2>
          <p className="text-[16px] text-gray-400">İşletmenizin ihtiyacı olan tüm araçlar yapay zeka ile otomatikleşti.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[24px] p-6 group hover:border-[#00F0FF]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all">
            <div className="w-12 h-12 bg-[#00F0FF]/10 rounded-xl flex items-center justify-center mb-6 text-[#00F0FF]">
              <span className="material-symbols-outlined text-[24px]">receipt_long</span>
            </div>
            <h3 className="text-[20px] font-bold text-white mb-2">Otomatik Fatura (OCR)</h3>
            <p className="text-[14px] text-gray-400">Faturalarınızın fotoğrafını çekin, AI tüm verileri %100 doğrulukla okuyup muhasebeye işlesin.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[24px] p-6 group hover:border-[#8A2BE2]/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.1)] transition-all">
            <div className="w-12 h-12 bg-[#8A2BE2]/10 rounded-xl flex items-center justify-center mb-6 text-[#8A2BE2]">
              <span className="material-symbols-outlined text-[24px]">brush</span>
            </div>
            <h3 className="text-[20px] font-bold text-white mb-2">Sosyal Medya Yönetimi</h3>
            <p className="text-[14px] text-gray-400">Sadece "İndirim postu hazırla" yazın. AI, metni yazar ve profesyonel görseli saniyeler içinde oluşturur.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[24px] p-6 group hover:border-[#E1306C]/50 hover:shadow-[0_0_30px_rgba(225,48,108,0.1)] transition-all">
            <div className="w-12 h-12 bg-[#E1306C]/10 rounded-xl flex items-center justify-center mb-6 text-[#E1306C]">
              <span className="material-symbols-outlined text-[24px]">forum</span>
            </div>
            <h3 className="text-[20px] font-bold text-white mb-2">7/24 Müşteri Temsilcisi</h3>
            <p className="text-[14px] text-gray-400">Gece yarısı gelen mesajlara bile saniyesinde, marka dilinizle ve ikna edici şekilde yanıt verir.</p>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW / INTEGRATIONS */}
      <section className="relative z-20 w-full max-w-[1000px] mx-auto px-6 py-24 text-center">
        <h2 className="text-[32px] font-black text-white mb-10">Zaten Kullandığınız Araçlarla Birlikte Çalışır</h2>
        <div className="flex flex-wrap justify-center gap-4">
           {['WhatsApp', 'Instagram', 'Trendyol', 'Hepsiburada', 'Logo', 'Zirve', 'Mikro'].map((brand, i) => (
             <div key={i} className="px-6 py-3 bg-[#0A0D14] border border-[#1E293B] rounded-xl text-[14px] font-bold text-gray-300 shadow-md hover:border-white/30 transition-colors">
               {brand}
             </div>
           ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="relative z-20 w-full max-w-[800px] mx-auto px-6 py-32 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#00F0FF]/20 to-[#8A2BE2]/20 blur-[100px] pointer-events-none rounded-full"></div>
        <h2 className="text-[48px] font-black text-white mb-6 relative z-10">Geleceğe Geç Kalmayın</h2>
        <p className="text-[18px] text-gray-400 mb-10 relative z-10">İlk ay ücretsiz deneyin, işletmenizin nasıl hızla büyüdüğüne şahit olun.</p>
        <button className="px-10 py-5 bg-white text-black rounded-full font-black text-[18px] hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10">
          Hemen Ücretsiz Başla
        </button>
      </section>

    </div>
  );
}
