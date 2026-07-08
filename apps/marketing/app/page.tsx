export const dynamic = 'force-dynamic';
import React from 'react';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-ai-dark text-white font-body-md overflow-x-hidden selection:bg-ai-purple selection:text-white">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-hero-glow blur-3xl opacity-60 mix-blend-screen"></div>
        <div className="absolute top-[300px] left-[-300px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,rgba(0,0,0,0)_60%)] blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-[800px] right-[-300px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.05)_0%,rgba(0,0,0,0)_60%)] blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-[2000px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,rgba(0,0,0,0)_50%)] blur-[120px] mix-blend-screen"></div>
        
        {/* Noise overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      </div>

      {/* --- Navbar --- */}
      <nav className="relative z-50 flex items-center justify-between max-w-7xl mx-auto px-6 py-6 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-ai-cyan via-ai-blue to-ai-purple flex items-center justify-center p-[1px] shadow-neon-cyan/50 group-hover:shadow-neon-cyan transition-shadow duration-300">
             <div className="w-full h-full bg-ai-dark rounded-[7px] flex items-center justify-center">
                <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-br from-ai-cyan to-ai-purple text-xl">smart_toy</span>
             </div>
          </div>
          <span className="font-headline-md font-bold text-2xl tracking-tight">AI Esnaf</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-gray-400">
          <a href="#" className="text-white">Özellikler</a>
          <a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a>
          <a href="#" className="hover:text-white transition-colors">Çözümler</a>
          <a href="#" className="hover:text-white transition-colors">Kaynaklar</a>
          <a href="#" className="hover:text-white transition-colors">Entegrasyonlar</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-[13px] font-semibold text-gray-300 hover:text-white transition-colors">Giriş Yap</a>
          <button className="bg-gradient-to-r from-ai-cyan to-ai-purple text-white text-[13px] font-bold px-6 py-2.5 rounded-full hover:shadow-neon-purple transition-all duration-300 transform hover:scale-105 border border-white/10">
            Ücretsiz Dene
          </button>
        </div>
      </nav>

            <main className="relative z-10 w-full overflow-hidden">
      {/* --- Hero Section --- */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-[90vh]">
      
        
        {/* Left Column (Text & CTAs) */}
        <div className="flex-1 flex flex-col items-start pt-10 relative z-20 max-w-[600px]">
          {/* Subtle Glow behind text */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-ai-purple/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ai-purple/10 border border-ai-purple/20 mb-8 backdrop-blur-md">
            <span className="text-[11px] font-bold tracking-wider text-ai-purple uppercase">YENİ NESİL AI İŞLETİM SİSTEMİ</span>
          </div>
          
          <h1 className="text-[56px] md:text-[68px] font-extrabold leading-[1.05] tracking-tight mb-8 text-white">
            İşletmenizi<br />
            Yöneten Tek<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-cyan via-ai-purple to-pink-500 animate-gradient-x drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]">
              Yapay Zeka
            </span>
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-400 mb-10 leading-relaxed font-medium max-w-[500px]">
            Sosyal medyadan muhasebeye, müşteri iletişiminden içerik üretimine kadar tüm iş süreçlerinizi tek platformda otonom yapay zeka ile yönetin.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#1A1F2B] border border-[#2A3142] flex items-center justify-center">
                <span className="material-symbols-outlined text-[12px] text-gray-300">check</span>
              </div>
              <span className="text-[13px] text-gray-300 font-medium">7/24 AI Asistan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#1A1F2B] border border-[#2A3142] flex items-center justify-center">
                <span className="material-symbols-outlined text-[12px] text-gray-300">check</span>
              </div>
              <span className="text-[13px] text-gray-300 font-medium">Otomatik Yanıtlar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#1A1F2B] border border-[#2A3142] flex items-center justify-center">
                <span className="material-symbols-outlined text-[12px] text-gray-300">check</span>
              </div>
              <span className="text-[13px] text-gray-300 font-medium">Akıllı Muhasebe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#1A1F2B] border border-[#2A3142] flex items-center justify-center">
                <span className="material-symbols-outlined text-[12px] text-gray-300">check</span>
              </div>
              <span className="text-[13px] text-gray-300 font-medium">Gerçek Zamanlı Analiz</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-ai-cyan to-blue-500 rounded-full font-bold text-white text-[15px] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2">
              Ücretsiz Deneyin
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0A0D14] border border-[#1E293B] rounded-full font-bold text-white text-[15px] transition-all hover:bg-[#1A2329] flex items-center justify-center gap-2 shadow-lg">
              Canlı Demo İzle
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 border-t border-[#1E293B] pt-8 w-full">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-[#05070A]" alt="user" />
              <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-[#05070A]" alt="user" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-[#05070A]" alt="user" />
              <img src="https://i.pravatar.cc/100?img=4" className="w-10 h-10 rounded-full border-2 border-[#05070A]" alt="user" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-[#F5B400] mb-0.5">
                <span className="material-symbols-outlined text-[16px]" data-weight="fill">star</span>
                <span className="material-symbols-outlined text-[16px]" data-weight="fill">star</span>
                <span className="material-symbols-outlined text-[16px]" data-weight="fill">star</span>
                <span className="material-symbols-outlined text-[16px]" data-weight="fill">star</span>
                <span className="material-symbols-outlined text-[16px]" data-weight="fill">star_half</span>
                <span className="text-white font-bold ml-1 text-sm">4.9/5</span>
              </div>
              <span className="text-[13px] text-gray-400 font-medium">1.000+ işletme AI Esnaf kullanıyor</span>
            </div>
          </div>
        </div>

        {/* Right Column (AI Core Graphic) */}
        <div className="flex-[1.4] relative h-[700px] w-full hidden lg:flex items-center justify-center z-10 mt-10">
          <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Intense Ambient Glows (Bloom & Neon) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-ai-cyan/20 via-ai-purple/30 to-pink-500/20 blur-[100px] rounded-full mix-blend-screen animate-pulse duration-1000"></div>
          </div>

          {/* SVG Connecting lines (Thick, Neon, Pixel Perfect) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center">
            <svg className="w-full h-full" style={{overflow: 'visible'}} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="line-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="line-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-line-intense" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Left Lines (from Müşteri Kanalları to AI Globe) */}
              {/* Origin X is roughly 240, Target X is 400, Y varies */}
              <path d="M 220,120 C 300,120 320,300 400,300" fill="none" stroke="url(#line-grad-left)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />
              <path d="M 220,180 C 300,180 320,300 400,300" fill="none" stroke="url(#line-grad-left)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />
              <path d="M 220,240 C 300,240 320,300 400,300" fill="none" stroke="url(#line-grad-left)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />
              <path d="M 220,300 C 320,300 320,300 400,300" fill="none" stroke="url(#line-grad-left)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />
              <path d="M 220,360 C 300,360 320,300 400,300" fill="none" stroke="url(#line-grad-left)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />

              {/* Right Lines (from AI Globe to Right Boxes) */}
              <path d="M 400,300 C 480,300 520,100 620,100" fill="none" stroke="url(#line-grad-right)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />
              <path d="M 400,300 C 480,300 520,220 620,220" fill="none" stroke="url(#line-grad-right)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />
              <path d="M 400,300 C 480,300 520,340 620,340" fill="none" stroke="url(#line-grad-right)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />
              <path d="M 400,300 C 480,300 520,460 620,460" fill="none" stroke="url(#line-grad-right)" strokeWidth="2.5" filter="url(#glow-line)" className="opacity-80" />

              {/* Animated dots running along the paths could be added here, but dots at joints are simpler */}
              <circle cx="220" cy="120" r="4" fill="#00f0ff" filter="url(#glow-line-intense)" />
              <circle cx="220" cy="180" r="4" fill="#00f0ff" filter="url(#glow-line-intense)" />
              <circle cx="220" cy="240" r="4" fill="#00f0ff" filter="url(#glow-line-intense)" />
              <circle cx="220" cy="300" r="4" fill="#00f0ff" filter="url(#glow-line-intense)" />
              <circle cx="220" cy="360" r="4" fill="#00f0ff" filter="url(#glow-line-intense)" />

              <circle cx="620" cy="100" r="4" fill="#FF00AA" filter="url(#glow-line-intense)" />
              <circle cx="620" cy="220" r="4" fill="#FF00AA" filter="url(#glow-line-intense)" />
              <circle cx="620" cy="340" r="4" fill="#FF00AA" filter="url(#glow-line-intense)" />
              <circle cx="620" cy="460" r="4" fill="#FF00AA" filter="url(#glow-line-intense)" />
            </svg>
          </div>

          {/* Core Layout Containers */}
          <div className="absolute inset-0 flex justify-between items-center z-20 pointer-events-none">
             
             {/* Left Column (MÜŞTERİ KANALLARI) */}
             <div className="flex flex-col gap-0 w-[240px] pointer-events-auto transform -translate-y-[40px] ml-4">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">MÜŞTERİ KANALLARI</div>
                <div className="bg-[#05070A]/80 backdrop-blur-2xl border border-[#1E293B] rounded-3xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                  <div className="flex flex-col gap-4">
                    {/* Instagram */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-[30px] h-[30px] rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg shadow-pink-500/20">
                          <svg className="w-[16px] h-[16px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </div>
                        <span className="text-[13px] font-medium text-gray-200">Instagram</span>
                      </div>
                      <div className="w-[22px] h-[22px] flex items-center justify-center bg-[#E1306C] text-white rounded-full text-[10px] font-bold shadow-[0_0_8px_#E1306C]">23</div>
                    </div>
                    {/* WhatsApp */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-[30px] h-[30px] rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                          <svg className="w-[16px] h-[16px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.127.553 4.195 1.603 6.012L.484 22.1l4.172-1.096A11.97 11.97 0 0012.03 24c6.635 0 12.03-5.395 12.03-12.03S18.666 0 12.031 0zm6.81 17.15c-.29.816-1.636 1.545-2.27 1.62-.577.068-1.32-.016-3.665-.986-2.825-1.168-4.636-4.047-4.773-4.23-.137-.183-1.14-1.517-1.14-2.89 0-1.373.714-2.046.97-2.316.255-.27.555-.337.74-.337.185 0 .37.001.528.008.163.007.382-.061.597.458.223.538.74 1.808.807 1.944.067.136.111.295.019.477-.091.182-.138.295-.274.455-.136.16-.29.351-.413.483-.136.143-.28.297-.123.568.156.27.694 1.148 1.492 1.859.992.884 1.85 1.157 2.124 1.294.274.137.433.114.596-.068.163-.182.7-.818.89-1.101.19-.283.376-.237.625-.148.249.09 1.571.741 1.84 8.877.27.136.449.204.514.318.065.114.065.666-.225 1.48z"/></svg>
                        </div>
                        <span className="text-[13px] font-medium text-gray-200">WhatsApp</span>
                      </div>
                      <div className="w-[22px] h-[22px] flex items-center justify-center bg-[#25D366] text-white rounded-full text-[10px] font-bold shadow-[0_0_8px_#25D366]">15</div>
                    </div>
                    {/* Facebook */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-[30px] h-[30px] rounded-xl bg-[#1877F2] flex items-center justify-center shadow-lg shadow-[#1877F2]/20">
                          <svg className="w-[16px] h-[16px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </div>
                        <span className="text-[13px] font-medium text-gray-200">Facebook</span>
                      </div>
                      <div className="w-[22px] h-[22px] flex items-center justify-center bg-[#1877F2] text-white rounded-full text-[10px] font-bold shadow-[0_0_8px_#1877F2]">12</div>
                    </div>
                    {/* Google Yorumlar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-[30px] h-[30px] rounded-xl bg-white flex items-center justify-center shadow-lg">
                          <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.825-.075-1.62-.21-2.385H12.24v4.515h6.45c-.285 1.455-1.095 2.685-2.325 3.51v2.925h3.765c2.205-2.025 3.615-5.01 3.615-8.565z"/><path fill="#34A853" d="M12.24 24c3.24 0 5.955-1.08 7.935-2.91l-3.765-2.925c-1.08.72-2.46 1.14-4.17 1.14-3.21 0-5.925-2.16-6.9-5.07H1.455v3.015C3.42 21.18 7.5 24 12.24 24z"/><path fill="#FBBC05" d="M5.34 15.135c-.24-.72-.375-1.5-.375-2.31s.135-1.59.375-2.31V7.5H1.455C.705 8.985.285 10.68.285 12.42c0 1.74.42 3.435 1.17 4.92l3.885-2.205z"/><path fill="#EA4335" d="M12.24 4.86c1.77 0 3.36.6 4.605 1.785l3.45-3.45C18.195 1.215 15.48 0 12.24 0 7.5 0 3.42 2.82 1.455 6.75l3.885 3.015c.975-2.91 3.69-5.07 6.9-5.07z"/></svg>
                        </div>
                        <span className="text-[13px] font-medium text-gray-200">Google Yorumlar</span>
                      </div>
                      <div className="w-[22px] h-[22px] flex items-center justify-center bg-gray-700 text-white rounded-full text-[10px] font-bold shadow-[0_0_8px_#374151]">8</div>
                    </div>
                    {/* Messenger */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-[30px] h-[30px] rounded-xl bg-[#00B2FF] flex items-center justify-center shadow-lg shadow-[#00B2FF]/20">
                          <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.14 2 11.25c0 2.912 1.488 5.49 3.791 7.159V22l3.463-1.895A10.74 10.74 0 0012 20.5c5.523 0 10-4.14 10-9.25S17.523 2 12 2zm1.096 12.21l-2.73-2.905-5.32 2.905 5.867-6.22 2.763 2.906 5.286-2.906-5.866 6.22z"/></svg>
                        </div>
                        <span className="text-[13px] font-medium text-gray-200">Messenger</span>
                      </div>
                      <div className="w-[22px] h-[22px] flex items-center justify-center bg-[#00B2FF] text-white rounded-full text-[10px] font-bold shadow-[0_0_8px_#00B2FF]">7</div>
                    </div>
                  </div>
                </div>
             </div>

             {/* Center (AI Globe) */}
             <div className="flex flex-col items-center justify-center pointer-events-auto transform -translate-y-[20px]">
                <div className="w-[180px] h-[180px] rounded-full relative flex items-center justify-center">
                  {/* Extreme Bloom */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ai-cyan/60 via-ai-purple/60 to-transparent blur-[40px] rounded-full animate-pulse"></div>
                  
                  {/* Multi-layer rings */}
                  <div className="absolute w-full h-full rounded-full border-2 border-ai-cyan/30 shadow-[inset_0_0_40px_rgba(0,240,255,0.5)]"></div>
                  <div className="absolute w-full h-full rounded-full border border-ai-cyan/20 rotate-[45deg] scale-x-50"></div>
                  <div className="absolute w-full h-full rounded-full border border-ai-cyan/20 rotate-[-45deg] scale-x-50"></div>
                  <div className="absolute w-full h-full rounded-full border border-ai-purple/30 rotate-[90deg] scale-y-50"></div>
                  
                  {/* Glowing Core */}
                  <div className="w-[110px] h-[110px] bg-[#05070A] rounded-full shadow-[0_0_50px_rgba(138,43,226,0.8)] flex items-center justify-center z-10 border border-ai-purple/60 relative overflow-hidden backdrop-blur-md">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/50 via-transparent to-transparent"></div>
                    <span className="text-[54px] font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] z-10 tracking-tighter">AI</span>
                  </div>
                </div>
             </div>

             {/* Right Column (Status Boxes) */}
             <div className="flex flex-col gap-6 w-[280px] pointer-events-auto transform -translate-y-[40px] mr-4">
                
                {/* AI YANITLIYOR */}
                <div className="relative">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">AI YANITLIYOR</div>
                  <div className="bg-[#05070A]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-3 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                    <div className="bg-[#141A27] rounded-xl p-3 border border-[#232D42] flex items-start gap-3">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(225,48,108,0.4)]">
                         <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                       </div>
                       <div className="flex flex-col gap-2 pt-0.5">
                         <div className="text-[12px] leading-[1.4] text-gray-200">Merhaba! Size nasıl yardımcı olabilirim?</div>
                         <div className="flex gap-1.5 items-center bg-[#1E293B] w-max px-2 py-1 rounded-full border border-[#2A3142]">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* İÇERİK ÜRETİLİYOR */}
                <div className="relative">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">İÇERİK ÜRETİLİYOR</div>
                  <div className="bg-[#05070A]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex gap-3 items-center">
                     <div className="w-[56px] h-[56px] rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex-shrink-0 border border-pink-400/50 flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-40"></div>
                       <span className="material-symbols-outlined text-white text-[24px] drop-shadow-[0_0_8px_rgba(255,255,255,1)]">auto_awesome</span>
                     </div>
                     <div className="text-[13px] leading-snug text-white font-medium">Yeni gönderi hazır! ✨</div>
                  </div>
                </div>

                {/* MUHASEBEYE İŞLENİYOR */}
                <div className="relative">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">MUHASEBEYE İŞLENİYOR</div>
                  <div className="bg-[#05070A]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex items-start gap-3">
                     <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center flex-shrink-0 border border-[#1E293B] shadow-inner">
                       <span className="material-symbols-outlined text-[20px] text-ai-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">description</span>
                     </div>
                     <div className="flex flex-col flex-1 gap-1">
                       <div className="text-[13px] font-bold text-white leading-none">Fatura okundu</div>
                       <div className="text-[11px] text-gray-400 leading-none">KDV: %20</div>
                       <div className="text-[12px] text-gray-300 mt-1 leading-none">Tutar: <span className="font-bold text-white">₺2.450</span></div>
                     </div>
                  </div>
                </div>

                {/* MUHASEBECİNİZ */}
                <div className="relative">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">MUHASEBECİNİZ</div>
                  <div className="bg-[#05070A]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex items-center gap-3">
                     <div className="relative">
                       <div className="w-10 h-10 rounded-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop')] bg-cover bg-center border-2 border-[#1E293B]"></div>
                       <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#05070A]"></div>
                     </div>
                     <div className="flex flex-col gap-0.5">
                       <div className="text-[13px] font-bold text-white">Yeni belge geldi</div>
                       <div className="text-[11px] text-[#F5B400] font-medium flex items-center gap-1">
                         Onay bekliyor <span className="material-symbols-outlined text-[12px]">schedule</span>
                       </div>
                     </div>
                  </div>
                </div>

             </div>

          </div>
          </div>
        </div>
      
      </section>
      {/* --- Omnichannel Inbox Section --- */}
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center max-w-[800px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ai-cyan/10 border border-ai-cyan/20 mb-6">
            <span className="text-[11px] font-bold tracking-wider text-ai-cyan uppercase">TEK MERKEZDEN YÖNETİM</span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-extrabold mb-6 text-white tracking-tight leading-[1.1]">
            Tüm Kanallar<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Tek Gelen Kutusunda</span>
          </h2>
          <p className="text-[16px] text-gray-400 font-medium">
            Instagram, WhatsApp, Facebook ve Google mesajlarınızı tek ekrandan yönetin. Yapay zeka %80'ini siz uyurken yanıtlasın.
          </p>
        </div>

        {/* Inbox Mockup Container */}
        <div className="w-full h-[700px] bg-[#0A0D14]/90 backdrop-blur-2xl rounded-3xl border border-[#1E293B] shadow-[0_30px_100px_-15px_rgba(0,0,0,1)] overflow-hidden flex relative group">
          
          {/* Glassmorphism Glow Highlights */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-[-200px] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-ai-cyan/10 blur-[100px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
          
          {/* 1. Sidebar (Folders/Channels) */}
          <div className="w-[240px] bg-[#06080A]/50 border-r border-[#1E293B] hidden md:flex flex-col h-full">
            {/* User Profile */}
            <div className="p-5 border-b border-[#1E293B]/50 flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px]">
                 <div className="w-full h-full bg-[#05070A] rounded-[10px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="Profile" />
                 </div>
               </div>
               <div className="flex flex-col">
                 <span className="text-white text-[13px] font-bold">İşletmem Ltd.</span>
                 <span className="text-green-400 text-[10px] font-bold flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div> Çevrimiçi</span>
               </div>
               <span className="material-symbols-outlined ml-auto text-gray-500 text-[16px] cursor-pointer hover:text-white">expand_more</span>
            </div>

            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1 custom-scrollbar">
               {/* Nav items */}
               <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 cursor-pointer">
                 <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-[16px] text-ai-cyan">inbox</span>
                   <span className="text-[12px] text-white font-medium">Tüm Mesajlar</span>
                 </div>
                 <div className="w-5 h-5 rounded-md bg-ai-cyan/20 text-ai-cyan text-[9px] font-bold flex items-center justify-center">14</div>
               </div>

               <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer text-gray-400 hover:text-white transition-colors">
                 <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-[16px]">stars</span>
                   <span className="text-[12px] font-medium">Önemli</span>
                 </div>
               </div>

               <div className="mt-4 mb-2 px-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest">Kanallar</div>
               
               {/* Channels */}
               <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer group/item">
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded bg-[#25D366]/20 flex items-center justify-center">
                     <svg className="w-3 h-3 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.127.553 4.195 1.603 6.012L.484 22.1l4.172-1.096A11.97 11.97 0 0012.03 24c6.635 0 12.03-5.395 12.03-12.03S18.666 0 12.031 0zm6.81 17.15c-.29.816-1.636 1.545-2.27 1.62-.577.068-1.32-.016-3.665-.986-2.825-1.168-4.636-4.047-4.773-4.23-.137-.183-1.14-1.517-1.14-2.89 0-1.373.714-2.046.97-2.316.255-.27.555-.337.74-.337.185 0 .37.001.528.008.163.007.382-.061.597.458.223.538.74 1.808.807 1.944.067.136.111.295.019.477-.091.182-.138.295-.274.455-.136.16-.29.351-.413.483-.136.143-.28.297-.123.568.156.27.694 1.148 1.492 1.859.992.884 1.85 1.157 2.124 1.294.274.137.433.114.596-.068.163-.182.7-.818.89-1.101.19-.283.376-.237.625-.148.249.09 1.571.741 1.84 8.877.27.136.449.204.514.318.065.114.065.666-.225 1.48z"/></svg>
                   </div>
                   <span className="text-[12px] text-gray-400 font-medium group-hover/item:text-gray-200">WhatsApp</span>
                 </div>
                 <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></div>
               </div>

               <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer group/item">
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded bg-pink-500/20 flex items-center justify-center">
                     <svg className="w-3 h-3 text-pink-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                   </div>
                   <span className="text-[12px] text-gray-400 font-medium group-hover/item:text-gray-200">Instagram</span>
                 </div>
                 <div className="w-5 h-5 rounded-md bg-pink-500/20 text-pink-400 text-[9px] font-bold flex items-center justify-center">8</div>
               </div>

               <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer group/item">
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center">
                     <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                   </div>
                   <span className="text-[12px] text-gray-400 font-medium group-hover/item:text-gray-200">Facebook</span>
                 </div>
               </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-[#1E293B]/50 flex gap-2">
               <button className="flex-1 bg-white/5 hover:bg-white/10 text-white rounded-lg py-2 text-[12px] font-medium transition-colors flex items-center justify-center gap-2">
                 <span className="material-symbols-outlined text-[16px]">settings</span> Ayarlar
               </button>
            </div>
          </div>

          {/* 2. Message List */}
          <div className="w-[320px] bg-[#0A0D14]/60 border-r border-[#1E293B] hidden lg:flex flex-col h-full relative z-10 backdrop-blur-md">
            
            <div className="p-4 border-b border-[#1E293B]/50 flex justify-between items-center">
               <h3 className="text-white font-bold text-[14px]">Sohbetler</h3>
               <div className="flex gap-2">
                 <button className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-gray-300 text-[16px]">filter_list</span></button>
                 <button className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-gray-300 text-[16px]">edit_square</span></button>
               </div>
            </div>

            <div className="p-3">
               <div className="relative">
                 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[16px]">search</span>
                 <input type="text" placeholder="Ara..." className="w-full bg-[#141A27] border border-[#232D42] rounded-lg py-2 pl-9 pr-3 text-[12px] text-white focus:outline-none focus:border-ai-cyan/50 transition-colors" />
               </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
               
               {/* Active Item */}
               <div className="p-3 border-l-2 border-ai-cyan bg-ai-cyan/5 cursor-pointer relative overflow-hidden group">
                 <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-ai-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="flex gap-3">
                   <div className="relative flex-shrink-0">
                     <img src="https://i.pravatar.cc/100?img=11" className="w-10 h-10 rounded-full border border-[#232D42] object-cover" alt="Avatar" />
                     <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#25D366] border-2 border-[#0A0D14] flex items-center justify-center"><svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.127.553 4.195 1.603 6.012L.484 22.1l4.172-1.096A11.97 11.97 0 0012.03 24c6.635 0 12.03-5.395 12.03-12.03S18.666 0 12.031 0zm6.81 17.15c-.29.816-1.636 1.545-2.27 1.62-.577.068-1.32-.016-3.665-.986-2.825-1.168-4.636-4.047-4.773-4.23-.137-.183-1.14-1.517-1.14-2.89 0-1.373.714-2.046.97-2.316.255-.27.555-.337.74-.337.185 0 .37.001.528.008.163.007.382-.061.597.458.223.538.74 1.808.807 1.944.067.136.111.295.019.477-.091.182-.138.295-.274.455-.136.16-.29.351-.413.483-.136.143-.28.297-.123.568.156.27.694 1.148 1.492 1.859.992.884 1.85 1.157 2.124 1.294.274.137.433.114.596-.068.163-.182.7-.818.89-1.101.19-.283.376-.237.625-.148.249.09 1.571.741 1.84 8.877.27.136.449.204.514.318.065.114.065.666-.225 1.48z"/></svg></div>
                   </div>
                   <div className="flex flex-col flex-1 min-w-0">
                     <div className="flex justify-between items-center mb-0.5">
                       <span className="text-[13px] font-bold text-white truncate">Ali Yılmaz</span>
                       <span className="text-[10px] text-ai-cyan font-bold">Şimdi</span>
                     </div>
                     <span className="text-[12px] text-gray-300 truncate font-medium">Yapay zeka yanıtlıyor...</span>
                   </div>
                 </div>
               </div>

               {/* Read Item 1 */}
               <div className="p-3 border-l-2 border-transparent hover:bg-white/5 cursor-pointer border-t border-[#1E293B]/30">
                 <div className="flex gap-3">
                   <div className="relative flex-shrink-0">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-[14px]">AZ</div>
                     <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#E1306C] border-2 border-[#0A0D14] flex items-center justify-center"><svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></div>
                   </div>
                   <div className="flex flex-col flex-1 min-w-0">
                     <div className="flex justify-between items-center mb-0.5">
                       <span className="text-[13px] font-bold text-gray-300 truncate">Ayşe Demir</span>
                       <span className="text-[10px] text-gray-500 font-medium">10:42</span>
                     </div>
                     <span className="text-[12px] text-gray-500 truncate">Teşekkürler, siparişim ulaştı.</span>
                   </div>
                 </div>
               </div>

               {/* Read Item 2 */}
               <div className="p-3 border-l-2 border-transparent hover:bg-white/5 cursor-pointer border-t border-[#1E293B]/30">
                 <div className="flex gap-3">
                   <div className="relative flex-shrink-0">
                     <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full border border-[#232D42] object-cover opacity-70" alt="Avatar" />
                     <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border-2 border-[#0A0D14] flex items-center justify-center"><svg className="w-2.5 h-2.5 text-[#4285F4]" viewBox="0 0 24 24"><path fill="currentColor" d="M23.745 12.27c0-.825-.075-1.62-.21-2.385H12.24v4.515h6.45c-.285 1.455-1.095 2.685-2.325 3.51v2.925h3.765c2.205-2.025 3.615-5.01 3.615-8.565z"/></svg></div>
                   </div>
                   <div className="flex flex-col flex-1 min-w-0">
                     <div className="flex justify-between items-center mb-0.5">
                       <span className="text-[13px] font-bold text-gray-300 truncate">Google Haritalar</span>
                       <span className="text-[10px] text-gray-500 font-medium">Dün</span>
                     </div>
                     <span className="text-[12px] text-gray-500 truncate">Yeni bir yorum aldınız ⭐️⭐️⭐️⭐️⭐️</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* 3. Main Chat Panel */}
          <div className="flex-1 bg-gradient-to-b from-[#0A0D14] to-[#0D111A] flex flex-col h-full relative z-10">
             
             {/* Chat Header */}
             <div className="p-4 border-b border-[#1E293B]/50 flex justify-between items-center bg-[#0A0D14]/80 backdrop-blur-md z-20">
               <div className="flex items-center gap-3">
                 <div className="relative">
                   <img src="https://i.pravatar.cc/100?img=11" className="w-10 h-10 rounded-full border border-[#232D42] object-cover" alt="Avatar" />
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0A0D14]"></div>
                 </div>
                 <div className="flex flex-col">
                   <h2 className="text-white font-bold text-[15px] leading-tight">Ali Yılmaz</h2>
                   <div className="text-[11px] text-gray-400 flex items-center gap-1">
                     <span className="w-3 h-3 rounded bg-[#25D366]/20 flex items-center justify-center"><svg className="w-2 h-2 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.127.553 4.195 1.603 6.012L.484 22.1l4.172-1.096A11.97 11.97 0 0012.03 24c6.635 0 12.03-5.395 12.03-12.03S18.666 0 12.031 0zm6.81 17.15c-.29.816-1.636 1.545-2.27 1.62-.577.068-1.32-.016-3.665-.986-2.825-1.168-4.636-4.047-4.773-4.23-.137-.183-1.14-1.517-1.14-2.89 0-1.373.714-2.046.97-2.316.255-.27.555-.337.74-.337.185 0 .37.001.528.008.163.007.382-.061.597.458.223.538.74 1.808.807 1.944.067.136.111.295.019.477-.091.182-.138.295-.274.455-.136.16-.29.351-.413.483-.136.143-.28.297-.123.568.156.27.694 1.148 1.492 1.859.992.884 1.85 1.157 2.124 1.294.274.137.433.114.596-.068.163-.182.7-.818.89-1.101.19-.283.376-.237.625-.148.249.09 1.571.741 1.84 8.877.27.136.449.204.514.318.065.114.065.666-.225 1.48z"/></svg></span>
                     WhatsApp Üzerinden
                   </div>
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141A27] hover:bg-[#1A2329] border border-[#232D42] rounded-lg text-white text-[12px] font-medium transition-colors">
                   <span className="material-symbols-outlined text-[16px] text-[#A855F7]">auto_awesome</span>
                   AI Kontrolünde
                 </button>
                 <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
               </div>
             </div>

             {/* Chat History Background Pattern */}
             <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

             {/* Messages */}
             <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar relative z-10">
                
                <div className="flex justify-center">
                  <span className="text-[10px] text-gray-500 font-medium bg-[#141A27] px-3 py-1 rounded-full border border-[#1E293B]">Bugün</span>
                </div>

                {/* User Message */}
                <div className="flex items-end gap-2 self-start max-w-[80%]">
                  <img src="https://i.pravatar.cc/100?img=11" className="w-8 h-8 rounded-full border border-[#232D42] flex-shrink-0" alt="User" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-gray-500 ml-1">Ali Yılmaz • 10:30</span>
                    <div className="bg-[#1A2329] text-white p-3.5 rounded-2xl rounded-bl-sm border border-[#2A3441] shadow-md text-[13px] leading-relaxed">
                      Merhaba, web sitenizdeki "Premium Web Paketi" için fiyat alabilir miyim?
                    </div>
                  </div>
                </div>

                {/* AI Reply Message (Animated) */}
                <div className="flex items-end gap-2 self-end max-w-[80%] flex-row-reverse relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                     <span className="text-white text-[12px] font-black">AI</span>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <span className="text-[10px] text-gray-500 mr-1 flex items-center gap-1">
                      <span className="text-[#00F0FF] font-bold bg-[#00F0FF]/10 px-1.5 rounded text-[9px] uppercase tracking-wider">AI OTOMATİK YANITLADI</span>
                      • 10:30
                    </span>
                    <div className="bg-gradient-to-br from-[#101623] to-[#161d2d] text-gray-100 p-3.5 rounded-2xl rounded-br-sm border border-[#00F0FF]/30 shadow-[0_4px_20px_rgba(0,240,255,0.1)] text-[13px] leading-relaxed relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      Merhaba Ali Bey! 👋 İlginiz için teşekkür ederiz. Premium Web Paketimiz şu an kampanya dahilinde yıllık ₺12.000'dir. Detaylı özellikleri size bir PDF olarak iletmemi ister misiniz?
                    </div>
                  </div>
                </div>

                {/* User Follow up Message */}
                <div className="flex items-end gap-2 self-start max-w-[80%]">
                  <img src="https://i.pravatar.cc/100?img=11" className="w-8 h-8 rounded-full border border-[#232D42] flex-shrink-0" alt="User" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-gray-500 ml-1">Ali Yılmaz • 10:31</span>
                    <div className="bg-[#1A2329] text-white p-3.5 rounded-2xl rounded-bl-sm border border-[#2A3441] shadow-md text-[13px] leading-relaxed">
                      Evet lütfen, bir de referanslarınızı görebilirsem harika olur.
                    </div>
                  </div>
                </div>

                {/* AI Typing Indicator */}
                <div className="flex items-end gap-2 self-end max-w-[80%] flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                     <span className="text-white text-[12px] font-black">AI</span>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <div className="bg-gradient-to-br from-[#101623] to-[#161d2d] p-3.5 rounded-2xl rounded-br-sm border border-[#00F0FF]/30 shadow-[0_4px_20px_rgba(0,240,255,0.1)] w-max">
                      <div className="flex gap-1.5 items-center justify-center px-1">
                        <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

             </div>

             {/* Input Area */}
             <div className="p-4 border-t border-[#1E293B]/50 bg-[#0A0D14]/90 backdrop-blur-md z-20">
                <div className="flex gap-2">
                  <div className="flex-1 bg-[#141A27] border border-[#232D42] rounded-xl flex items-center px-2 py-1 shadow-inner focus-within:border-ai-cyan/50 transition-colors">
                    <button className="w-9 h-9 rounded-lg text-gray-400 hover:text-white flex items-center justify-center transition-colors"><span className="material-symbols-outlined text-[20px]">add_circle</span></button>
                    <input type="text" placeholder="AI asistanınız sizin yerinize yanıtlıyor..." disabled className="flex-1 bg-transparent border-none text-white text-[13px] px-2 focus:outline-none placeholder-gray-500" />
                    <button className="w-9 h-9 rounded-lg text-gray-400 hover:text-white flex items-center justify-center transition-colors"><span className="material-symbols-outlined text-[20px]">mood</span></button>
                  </div>
                  <button className="w-12 h-12 rounded-xl bg-gradient-to-br from-ai-cyan to-blue-600 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.3)] opacity-50 cursor-not-allowed">
                    <span className="material-symbols-outlined text-[20px] translate-x-0.5">send</span>
                  </button>
                </div>
             </div>
          </div>

        </div>

      </section>
      {/* --- AI Power Features Grid --- */}
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-24 flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ai-purple/10 border border-ai-purple/30 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(138,43,226,0.2)]">
            <span className="text-[11px] font-bold tracking-wider text-ai-purple uppercase">GÜÇLÜ AI ÖZELLİKLERİ</span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-extrabold mb-4 text-white tracking-tight leading-tight">
            İşletmenizi Büyüten <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-cyan to-ai-purple drop-shadow-md">AI Gücü</span>
          </h2>
          <p className="text-[16px] text-gray-400 font-medium max-w-[600px]">
            Tüm özellikleri tek bir çatı altında toplayan otonom işletim sistemi ile tanışın.
          </p>
        </div>

        {/* 5-Column Exact CSS Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Card 1: AI İçerik Üretimi (Poster Mockup) */}
          <div className="w-full bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[24px] p-6 flex flex-col hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-pink-500/20 blur-[50px] rounded-full group-hover:bg-pink-500/30 transition-colors"></div>
            
            <h3 className="font-bold text-[18px] mb-2 text-white relative z-10">AI İçerik Üretimi</h3>
            <p className="text-[13px] text-gray-400 mb-6 leading-relaxed relative z-10">Sadece birkaç kelime ile profesyonel görseller oluşturun.</p>
            
            <div className="w-full flex-1 bg-[#05070A] rounded-[16px] border border-[#1E293B] flex flex-col overflow-hidden relative z-10 shadow-inner min-h-[220px]">
              {/* Prompt Input UI */}
              <div className="p-3 border-b border-[#1E293B] bg-[#0A0D14]">
                <div className="w-full bg-[#141A27] rounded-lg border border-[#232D42] p-2 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 ml-1">Yaz indirimi için instagram postu...</span>
                  <div className="w-6 h-6 rounded bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                    <span className="material-symbols-outlined text-white text-[14px]">auto_awesome</span>
                  </div>
                </div>
              </div>
              {/* Generated Poster UI */}
              <div className="flex-1 p-3 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=300&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent"></div>
                 <div className="relative z-10 text-center">
                   <div className="text-[18px] font-black text-white tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">YAZ İNDİRİMİ</div>
                   <div className="text-[10px] font-bold text-pink-300 bg-pink-900/50 px-2 py-0.5 rounded-full mt-1 border border-pink-500/30 inline-block backdrop-blur-md">50% OFF</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Muhasebe (OCR Fatura) */}
          <div className="w-full bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[24px] p-6 flex flex-col hover:border-ai-cyan/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-ai-cyan/20 blur-[50px] rounded-full group-hover:bg-ai-cyan/30 transition-colors"></div>
            
            <h3 className="font-bold text-[18px] mb-2 text-white relative z-10">AI Muhasebe</h3>
            <p className="text-[13px] text-gray-400 mb-6 leading-relaxed relative z-10">Faturaları tarayın, AI tüm bilgileri ayıklar ve kaydeder.</p>
            
            <div className="w-full flex-1 bg-[#05070A] rounded-[16px] border border-[#1E293B] p-4 relative z-10 shadow-inner min-h-[220px] flex items-center justify-center overflow-hidden">
              
              <div className="w-[85%] bg-white rounded-lg p-3 shadow-[0_10px_25px_rgba(0,0,0,0.5)] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 relative">
                 <div className="text-[9px] font-black text-gray-800 border-b-2 border-gray-200 pb-1 mb-2 tracking-widest">FATURA NO: 45892</div>
                 <div className="flex justify-between items-center mb-1">
                   <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                   <div className="w-1/4 h-2 bg-gray-300 rounded"></div>
                 </div>
                 <div className="flex justify-between items-center mb-1">
                   <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                   <div className="w-1/5 h-2 bg-gray-300 rounded"></div>
                 </div>
                 <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">
                   <div className="text-[8px] font-bold text-gray-500">TOPLAM TUTAR</div>
                   <div className="text-[12px] font-black text-[#00F0FF]">₺2.450</div>
                 </div>

                 {/* OCR Scanning Line */}
                 <div className="absolute top-0 left-0 w-full h-[3px] bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] animate-scan opacity-0 group-hover:opacity-100"></div>
                 <div className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-b from-[#00F0FF]/30 to-transparent animate-scan-area opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>
              
            </div>
          </div>

          {/* Card 3: AI Asistan (Chat + Waveform) */}
          <div className="w-full bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[24px] p-6 flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-500/20 blur-[50px] rounded-full group-hover:bg-blue-500/30 transition-colors"></div>
            
            <h3 className="font-bold text-[18px] mb-2 text-white relative z-10">AI Asistan</h3>
            <p className="text-[13px] text-gray-400 mb-6 leading-relaxed relative z-10">Doğal dil ile işletmenizle ilgili her soruya anında cevap alın.</p>
            
            <div className="w-full flex-1 bg-[#05070A] rounded-[16px] border border-[#1E293B] flex flex-col p-3 relative z-10 shadow-inner min-h-[220px]">
               <div className="flex flex-col gap-2 flex-1 justify-center">
                 <div className="bg-[#1A2329] rounded-xl rounded-tr-sm p-2.5 self-end border border-[#2A3441] max-w-[85%] shadow-md">
                   <p className="text-[10px] text-white">Bu ayki toplam ciro ne kadar?</p>
                 </div>
                 
                 <div className="bg-gradient-to-br from-[#101623] to-[#161d2d] rounded-xl rounded-tl-sm p-2.5 self-start border border-blue-500/30 max-w-[90%] shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                   <div className="flex items-center gap-1.5 mb-1">
                     <span className="material-symbols-outlined text-[12px] text-blue-400">smart_toy</span>
                     <span className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">AI ASİSTAN</span>
                   </div>
                   <p className="text-[10px] text-gray-200">Bu ayki toplam cironuz ₺128,450. Geçen aya göre %15 artış var.</p>
                 </div>
               </div>
               
               {/* Audio Waveform UI */}
               <div className="h-10 mt-auto bg-[#141A27] rounded-xl border border-[#232D42] flex items-center px-3 gap-2 group-hover:border-blue-500/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[14px] text-blue-400">mic</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-[3px] h-4">
                     <div className="w-[3px] h-[40%] bg-blue-500 rounded-full animate-waveform"></div>
                     <div className="w-[3px] h-[80%] bg-blue-400 rounded-full animate-waveform" style={{animationDelay: '0.1s'}}></div>
                     <div className="w-[3px] h-[100%] bg-purple-500 rounded-full animate-waveform shadow-[0_0_5px_#A855F7]" style={{animationDelay: '0.2s'}}></div>
                     <div className="w-[3px] h-[60%] bg-blue-400 rounded-full animate-waveform" style={{animationDelay: '0.3s'}}></div>
                     <div className="w-[3px] h-[80%] bg-blue-500 rounded-full animate-waveform" style={{animationDelay: '0.4s'}}></div>
                     <div className="w-[3px] h-[30%] bg-purple-400 rounded-full animate-waveform" style={{animationDelay: '0.5s'}}></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Card 4: AI Analitik (Hareketli Grafik) */}
          <div className="w-full bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[24px] p-6 flex flex-col hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-purple-500/20 blur-[50px] rounded-full group-hover:bg-purple-500/30 transition-colors"></div>
            
            <h3 className="font-bold text-[18px] mb-2 text-white relative z-10">AI Analitik</h3>
            <p className="text-[13px] text-gray-400 mb-6 leading-relaxed relative z-10">Tüm performans verilerinizi akıllı grafiklerle analiz edin.</p>
            
            <div className="w-full flex-1 bg-[#05070A] rounded-[16px] border border-[#1E293B] flex flex-col p-4 relative z-10 shadow-inner min-h-[220px] overflow-hidden">
              <div className="flex justify-between items-center mb-1 relative z-10">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">TOPLAM GELİR</span>
              </div>
              <div className="flex items-end gap-2 mb-4 relative z-10">
                <div className="text-[24px] font-black text-white leading-none">₺125.430</div>
                <div className="flex items-center text-[10px] text-green-400 font-bold bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">
                  <span className="material-symbols-outlined text-[12px]">trending_up</span> 25.5%
                </div>
              </div>
              
              {/* Premium Animated Chart */}
              <div className="absolute bottom-0 left-0 w-full h-[120px]">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="chart-grad-2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#A855F7" stopOpacity="0.0" />
                    </linearGradient>
                    <filter id="glow-chart" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="100" y2="20" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="2" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="2" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="2" />

                  {/* Area Fill */}
                  <path d="M0,100 L0,70 C20,80 40,30 60,50 C80,70 90,20 100,10 L100,100 Z" fill="url(#chart-grad-2)" className="opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                  
                  {/* Stroke Line */}
                  <path d="M0,70 C20,80 40,30 60,50 C80,70 90,20 100,10" fill="none" stroke="#A855F7" strokeWidth="3" filter="url(#glow-chart)" className="group-hover:stroke-[#E879F9] transition-colors duration-500 stroke-[4px]" strokeDasharray="300" strokeDashoffset="0">
                     <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" fill="freeze" repeatCount="1" />
                  </path>
                </svg>
                
                {/* Glowing Dot on End */}
                <div className="absolute right-[0px] top-[10%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#E879F9,0_0_30px_#A855F7] animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Card 5: AI Otomasyon (Checklist) */}
          <div className="w-full bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[24px] p-6 flex flex-col hover:border-green-500/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-green-500/20 blur-[50px] rounded-full group-hover:bg-green-500/30 transition-colors"></div>
            
            <h3 className="font-bold text-[18px] mb-2 text-white relative z-10">AI Otomasyon</h3>
            <p className="text-[13px] text-gray-400 mb-6 leading-relaxed relative z-10">İş süreçlerinizi otomatikleştirin, zaman kazanın.</p>
            
            <div className="w-full flex-1 bg-[#05070A] rounded-[16px] border border-[#1E293B] flex flex-col p-4 relative z-10 shadow-inner min-h-[220px] justify-center gap-3">
               
               {/* Item 1 */}
               <div className="flex items-center gap-3 bg-[#0F172A] border border-[#1E293B] p-2.5 rounded-xl shadow-md group-hover:border-[#1E293B]/50 transition-colors relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                 <div className="w-6 h-6 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                   <span className="material-symbols-outlined text-green-400 text-[14px]">check</span>
                 </div>
                 <span className="text-[12px] text-gray-200 font-medium font-mono">Fatura Algılandı</span>
               </div>
               
               {/* Item 2 */}
               <div className="flex items-center gap-3 bg-[#0F172A] border border-[#1E293B] p-2.5 rounded-xl shadow-md group-hover:border-[#1E293B]/50 transition-colors relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-ai-cyan shadow-[0_0_10px_#00F0FF]"></div>
                 <div className="w-6 h-6 rounded-lg bg-ai-cyan/20 border border-ai-cyan/50 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                   <span className="material-symbols-outlined text-ai-cyan text-[14px]">psychology</span>
                 </div>
                 <span className="text-[12px] text-gray-200 font-medium font-mono">AI Veriyi İşledi</span>
               </div>

               {/* Item 3 */}
               <div className="flex items-center gap-3 bg-[#0F172A] border border-[#1E293B] p-2.5 rounded-xl shadow-md opacity-50 group-hover:opacity-100 transition-opacity duration-500 relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-500"></div>
                 <div className="w-6 h-6 rounded-lg bg-[#1E293B] border border-[#334155] flex items-center justify-center">
                   <span className="material-symbols-outlined text-gray-400 text-[14px]">hourglass_empty</span>
                 </div>
                 <span className="text-[12px] text-gray-400 font-medium font-mono">Muhasebeye Aktarım</span>
               </div>
               
            </div>
          </div>
          
        </div>
      </section>
      {/* --- Workflow Process Section --- */}
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-32 flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-20 text-center max-w-[800px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ai-cyan/10 border border-ai-cyan/30 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="text-[11px] font-bold tracking-wider text-ai-cyan uppercase">SIFIR MANUEL İŞLEM</span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-extrabold mb-6 text-white tracking-tight leading-tight">
            Fatura'dan Rapor'a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-cyan via-blue-500 to-ai-purple drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">Otomatik Yolculuk</span>
          </h2>
          <p className="text-[16px] text-gray-400 font-medium max-w-[600px]">
            Belgenizi yüklediğiniz andan itibaren yapay zeka her adımı saniyeler içinde tamamlar.
          </p>
        </div>

        {/* 6 Steps Grid with SVG Connectors */}
        <div className="w-full relative">
          
          {/* Connector Background Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[90px] left-[5%] right-[5%] h-[3px] z-0">
             <svg className="w-full h-full" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#00F0FF" />
                   <stop offset="50%" stopColor="#8A2BE2" />
                   <stop offset="100%" stopColor="#E1306C" />
                 </linearGradient>
                 <filter id="glow-flow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
               </defs>
               <line x1="0" y1="1.5" x2="100%" y2="1.5" stroke="#1E293B" strokeWidth="2" strokeDasharray="6 6" />
               <line x1="0" y1="1.5" x2="100%" y2="1.5" stroke="url(#flow-grad)" strokeWidth="3" filter="url(#glow-flow)" strokeDasharray="1000" strokeDashoffset="0" className="animate-dash" />
             </svg>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
             
             {/* Step 1: Tarama */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-[80px] h-[80px] rounded-[20px] bg-[#0A0D14] border-2 border-[#1E293B] group-hover:border-ai-cyan shadow-xl flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300">
                 <div className="absolute inset-0 bg-ai-cyan/5 group-hover:bg-ai-cyan/10 transition-colors"></div>
                 <div className="absolute top-0 left-0 w-full h-[2px] bg-ai-cyan shadow-[0_0_10px_#00F0FF] animate-scan opacity-0 group-hover:opacity-100"></div>
                 <span className="material-symbols-outlined text-[32px] text-gray-400 group-hover:text-ai-cyan transition-colors drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">document_scanner</span>
                 {/* Circle marker for connector */}
                 <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-ai-cyan border-[3px] border-[#0A0D14] shadow-[0_0_10px_#00F0FF]"></div>
               </div>
               <h4 className="text-[15px] font-bold text-white mb-2">1. Tarama</h4>
               <p className="text-[12px] text-gray-500">Belge fotoğrafı çekilir veya WhatsApp'tan atılır.</p>
             </div>

             {/* Step 2: AI Okuma */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-[80px] h-[80px] rounded-[20px] bg-[#0A0D14] border-2 border-[#1E293B] group-hover:border-blue-500 shadow-xl flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300">
                 <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                 <span className="material-symbols-outlined text-[32px] text-gray-400 group-hover:text-blue-500 transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">psychology</span>
                 <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-[3px] border-[#0A0D14] shadow-[0_0_10px_#3b82f6]"></div>
               </div>
               <h4 className="text-[15px] font-bold text-white mb-2">2. AI Okuma</h4>
               <p className="text-[12px] text-gray-500">%99.9 doğrulukla fatura verileri (KDV, Tutar vb.) çekilir.</p>
             </div>

             {/* Step 3: Kategorize */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-[80px] h-[80px] rounded-[20px] bg-[#0A0D14] border-2 border-[#1E293B] group-hover:border-purple-500 shadow-xl flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300">
                 <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors"></div>
                 <span className="material-symbols-outlined text-[32px] text-gray-400 group-hover:text-purple-500 transition-colors drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">account_tree</span>
                 <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 border-[3px] border-[#0A0D14] shadow-[0_0_10px_#A855F7]"></div>
               </div>
               <h4 className="text-[15px] font-bold text-white mb-2">3. Kategorize</h4>
               <p className="text-[12px] text-gray-500">Harcama türü AI tarafından otomatik belirlenir (Yemek, Akaryakıt vb.)</p>
             </div>

             {/* Step 4: Muhasebeci */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-[80px] h-[80px] rounded-[20px] bg-[#0A0D14] border-2 border-[#1E293B] group-hover:border-[#E1306C] shadow-xl flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300">
                 <div className="absolute inset-0 bg-[#E1306C]/5 group-hover:bg-[#E1306C]/10 transition-colors"></div>
                 <span className="material-symbols-outlined text-[32px] text-gray-400 group-hover:text-[#E1306C] transition-colors drop-shadow-[0_0_10px_rgba(225,48,108,0.5)]">send</span>
                 <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#E1306C] border-[3px] border-[#0A0D14] shadow-[0_0_10px_#E1306C]"></div>
               </div>
               <h4 className="text-[15px] font-bold text-white mb-2">4. Aktarım</h4>
               <p className="text-[12px] text-gray-500">Mali müşavirinize tek tıkla dijital ortamda aktarılır.</p>
             </div>

             {/* Step 5: Onay */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-[80px] h-[80px] rounded-[20px] bg-[#0A0D14] border-2 border-[#1E293B] group-hover:border-[#25D366] shadow-xl flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300">
                 <div className="absolute inset-0 bg-[#25D366]/5 group-hover:bg-[#25D366]/10 transition-colors"></div>
                 <span className="material-symbols-outlined text-[32px] text-gray-400 group-hover:text-[#25D366] transition-colors drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]">verified</span>
                 <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#25D366] border-[3px] border-[#0A0D14] shadow-[0_0_10px_#25D366]"></div>
               </div>
               <h4 className="text-[15px] font-bold text-white mb-2">5. Onay</h4>
               <p className="text-[12px] text-gray-500">Muhasebeciniz sistemi üzerinden saniyeler içinde onaylar.</p>
             </div>

             {/* Step 6: Rapor */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-[80px] h-[80px] rounded-[20px] bg-[#0A0D14] border-2 border-[#1E293B] group-hover:border-[#F5B400] shadow-xl flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300">
                 <div className="absolute inset-0 bg-[#F5B400]/5 group-hover:bg-[#F5B400]/10 transition-colors"></div>
                 <span className="material-symbols-outlined text-[32px] text-gray-400 group-hover:text-[#F5B400] transition-colors drop-shadow-[0_0_10px_rgba(245,180,0,0.5)]">insert_chart</span>
               </div>
               <h4 className="text-[15px] font-bold text-white mb-2">6. Raporlama</h4>
               <p className="text-[12px] text-gray-500">Ciro, KDV durumu ve net kârınız grafiklere yansır.</p>
             </div>
             
          </div>
        </div>

      </section>
      {/* --- Integrations Section --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
        <h2 className="text-[28px] md:text-[40px] font-extrabold mb-4 text-center text-white tracking-tight">Kullandığınız Platformlarla <span className="text-ai-cyan">Tam Entegre</span></h2>
        <p className="text-gray-400 text-center mb-16 max-w-[600px] text-[15px]">Mevcut sistemlerinizi değiştirmeden, saniyeler içinde AI Esnaf'a bağlayın.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[900px]">
          {/* Box 1 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <span className="font-bold text-white text-[14px]">Instagram</span>
          </div>

          {/* Box 2 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:border-[#25D366]/50 hover:shadow-[0_0_30px_rgba(37,211,102,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.127.553 4.195 1.603 6.012L.484 22.1l4.172-1.096A11.97 11.97 0 0012.03 24c6.635 0 12.03-5.395 12.03-12.03S18.666 0 12.031 0zm6.81 17.15c-.29.816-1.636 1.545-2.27 1.62-.577.068-1.32-.016-3.665-.986-2.825-1.168-4.636-4.047-4.773-4.23-.137-.183-1.14-1.517-1.14-2.89 0-1.373.714-2.046.97-2.316.255-.27.555-.337.74-.337.185 0 .37.001.528.008.163.007.382-.061.597.458.223.538.74 1.808.807 1.944.067.136.111.295.019.477-.091.182-.138.295-.274.455-.136.16-.29.351-.413.483-.136.143-.28.297-.123.568.156.27.694 1.148 1.492 1.859.992.884 1.85 1.157 2.124 1.294.274.137.433.114.596-.068.163-.182.7-.818.89-1.101.19-.283.376-.237.625-.148.249.09 1.571.741 1.84 8.877.27.136.449.204.514.318.065.114.065.666-.225 1.48z"/></svg>
            </div>
            <span className="font-bold text-white text-[14px]">WhatsApp</span>
          </div>

          {/* Box 3 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:border-[#1877F2]/50 hover:shadow-[0_0_30px_rgba(24,119,242,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <span className="font-bold text-white text-[14px]">Facebook</span>
          </div>

          {/* Box 4 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:border-[#F5B400]/50 hover:shadow-[0_0_30px_rgba(245,180,0,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#20242D] border border-[#2A2E35] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-[#F5B400] font-black tracking-tighter text-[16px]">TRENDYOL</span>
            </div>
            <span className="font-bold text-white text-[14px]">Trendyol</span>
          </div>

          {/* Box 5 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:border-[#F5B400]/50 hover:shadow-[0_0_30px_rgba(245,180,0,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#20242D] border border-[#2A2E35] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-[#F5B400] font-black tracking-tighter text-[16px]">HB</span>
            </div>
            <span className="font-bold text-white text-[14px]">Hepsiburada</span>
          </div>

          {/* Box 6 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-black tracking-tighter text-[16px]">LOGO</span>
            </div>
            <span className="font-bold text-white text-[14px]">Logo Yazılım</span>
          </div>

          {/* Box 7 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-black tracking-tighter text-[16px]">MİKRO</span>
            </div>
            <span className="font-bold text-white text-[14px]">Mikro</span>
          </div>

          {/* Box 8 */}
          <div className="bg-[#0A0D14]/80 backdrop-blur-xl border border-[#1E293B] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-black tracking-tighter text-[16px]">ZİRVE</span>
            </div>
            <span className="font-bold text-white text-[14px]">Zirve</span>
          </div>
        </div>
      </section>

      {/* --- Footer CTA Section --- */}
      <section className="relative w-full max-w-6xl mx-auto px-6 pt-32 pb-40 flex flex-col items-center text-center z-20 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-ai-cyan/10 via-ai-purple/10 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        {/* Giant Floating Robot / AI Avatar */}
        <div className="relative z-10 w-32 h-32 mb-10 group">
           <div className="absolute inset-0 bg-gradient-to-tr from-ai-cyan to-ai-purple rounded-full blur-[20px] opacity-50 group-hover:opacity-80 transition-opacity"></div>
           <div className="w-full h-full bg-[#05070A] rounded-full border-2 border-[#1E293B] shadow-[0_0_40px_rgba(138,43,226,0.5)] flex items-center justify-center relative overflow-hidden">
              <span className="material-symbols-outlined text-[64px] text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">smart_toy</span>
              {/* Scanline */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-ai-cyan shadow-[0_0_10px_#00F0FF] animate-scan opacity-70"></div>
           </div>
        </div>

        <h2 className="text-[40px] md:text-[64px] font-extrabold mb-6 text-white tracking-tight leading-[1.1] relative z-10">
          İşletmenizin Geleceği <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-cyan via-white to-pink-500">Bugünden Başlasın</span>
        </h2>
        <p className="text-gray-400 text-[18px] md:text-[20px] mb-12 max-w-[600px] font-medium relative z-10">
          Binlerce işletme arasına katılın, iş süreçlerinizi AI Esnaf'a bırakıp büyümeye odaklanın.
        </p>
        
        <div className="relative z-10">
          <button className="px-10 py-5 bg-gradient-to-r from-ai-cyan to-blue-600 rounded-full font-bold text-white text-[18px] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] flex items-center gap-3">
            Hemen Ücretsiz Deneyin
            <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-[13px] font-medium">
            <span className="material-symbols-outlined text-[16px]">credit_card_off</span> Kredi kartı gerekmez.
          </div>
        </div>
      </section>

      </main>

    </div>
  );
}
