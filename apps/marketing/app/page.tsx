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

      {/* --- Hero Section --- */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col lg:flex-row items-center gap-12 min-h-[85vh]">
        
        {/* Left Column (Text & Buttons) */}
        <div className="flex-1 flex flex-col items-start z-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-transparent border border-ai-purple/40 mb-8 shadow-[0_0_15px_rgba(138,43,226,0.1)]">
             <span className="text-[11px] font-bold tracking-wider text-gray-300 uppercase">YENİ NESİL, AI İŞLETİM SİSTEMİ</span>
          </div>
          
          <h1 className="text-[64px] md:text-[72px] leading-[1.05] font-extrabold tracking-tight mb-6">
            İşletmenizi<br />
            Yöneten Tek<br />
            <span className="text-ai-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Yapay </span>
            <span className="text-ai-purple drop-shadow-[0_0_15px_rgba(138,43,226,0.4)]">Zeka</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-light">
            Sosyal medyadan muhasebeye, müşteri iletişiminden içerik üretimine kadar tüm iş süreçlerinizi tek platformda otonom yapay zeka ile yönetin.
          </p>
          
          {/* Checkmarks */}
          <div className="flex flex-wrap items-center gap-5 mb-12 text-[13px] font-medium text-gray-300">
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined text-gray-400 text-[12px]">check</span></div> 7/24 AI Asistan</div>
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined text-gray-400 text-[12px]">check</span></div> Otomatik Yanıtlar</div>
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined text-gray-400 text-[12px]">check</span></div> Akıllı Muhasebe</div>
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined text-gray-400 text-[12px]">check</span></div> Gerçek Zamanlı Analiz</div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,198,255,0.5)] transition-all duration-300 group border-none">
              Ücretsiz Deneyin <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-gray-700 text-white font-medium px-8 py-3.5 rounded-full flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
              <span className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center"><span className="material-symbols-outlined text-[14px] ml-0.5">play_arrow</span></span>
              Canlı Demo İzle
            </button>
          </div>
          
          {/* Social Proof */}
          <div className="flex items-center gap-5">
            <div className="flex -space-x-4">
              <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full border-[3px] border-ai-dark object-cover" alt="User" />
              <img src="https://i.pravatar.cc/100?img=2" className="w-12 h-12 rounded-full border-[3px] border-ai-dark object-cover" alt="User" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-12 h-12 rounded-full border-[3px] border-ai-dark object-cover" alt="User" />
              <img src="https://i.pravatar.cc/100?img=4" className="w-12 h-12 rounded-full border-[3px] border-ai-dark object-cover" alt="User" />
              <img src="https://i.pravatar.cc/100?img=5" className="w-12 h-12 rounded-full border-[3px] border-ai-dark object-cover" alt="User" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-yellow-500">
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
        <div className="flex-[1.2] relative h-[700px] w-full hidden lg:flex items-center justify-end xl:justify-center z-10 mt-10">
          <div className="relative w-[900px] h-[700px] scale-[0.6] lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-100 origin-right xl:origin-center flex items-center justify-center flex-shrink-0">
          
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[400px] h-[400px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
          </div>

          {/* SVG Connecting lines (Pixel Perfect) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <svg className="absolute inset-0 w-full h-full" style={{overflow: 'visible'}}>
              <defs>
                <linearGradient id="line-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,150,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(200,50,255,0.4)" />
                </linearGradient>
                <linearGradient id="line-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(200,50,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(0,150,255,0.8)" />
                </linearGradient>
                <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Left Lines (from Left Box to AI Globe) */}
              <path d="M 240,175 C 300,175 320,310 370,310" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,230 C 300,230 320,330 370,330" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,285 C 310,285 330,350 370,350" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,340 C 310,340 330,370 370,370" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,395 C 300,395 320,390 370,390" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,450 C 300,450 320,410 370,410" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />

              {/* Left Dots */}
              <circle cx="240" cy="175" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="230" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="285" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="340" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="395" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="450" r="3" fill="#00f0ff" filter="url(#glow-line)" />

              {/* Right Lines (from AI Globe to Right Boxes) */}
              <path d="M 530,310 C 580,310 600,180 650,180" fill="none" stroke="url(#line-grad-right)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 530,330 C 580,330 600,290 650,290" fill="none" stroke="url(#line-grad-right)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 530,370 C 580,370 600,400 650,400" fill="none" stroke="url(#line-grad-right)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 530,390 C 580,390 600,510 650,510" fill="none" stroke="url(#line-grad-right)" strokeWidth="2" filter="url(#glow-line)" />

              {/* Right Dots */}
              <circle cx="650" cy="180" r="3" fill="#FF00AA" filter="url(#glow-line)" />
              <circle cx="650" cy="290" r="3" fill="#FF00AA" filter="url(#glow-line)" />
              <circle cx="650" cy="400" r="3" fill="#FF00AA" filter="url(#glow-line)" />
              <circle cx="650" cy="510" r="3" fill="#FF00AA" filter="url(#glow-line)" />
            </svg>
          </div>

          {/* Left Box: MÜŞTERİ KANALLARI */}
          <div className="absolute left-[0px] top-[130px] w-[240px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-5 shadow-2xl z-20">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">MÜŞTERİ KANALLARI</div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">Instagram</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#E1306C] text-white rounded-full text-[10px] font-bold">23</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-[#25D366] flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.127.553 4.195 1.603 6.012L.484 22.1l4.172-1.096A11.97 11.97 0 0012.03 24c6.635 0 12.03-5.395 12.03-12.03S18.666 0 12.031 0zm6.81 17.15c-.29.816-1.636 1.545-2.27 1.62-.577.068-1.32-.016-3.665-.986-2.825-1.168-4.636-4.047-4.773-4.23-.137-.183-1.14-1.517-1.14-2.89 0-1.373.714-2.046.97-2.316.255-.27.555-.337.74-.337.185 0 .37.001.528.008.163.007.382-.061.597.458.223.538.74 1.808.807 1.944.067.136.111.295.019.477-.091.182-.138.295-.274.455-.136.16-.29.351-.413.483-.136.143-.28.297-.123.568.156.27.694 1.148 1.492 1.859.992.884 1.85 1.157 2.124 1.294.274.137.433.114.596-.068.163-.182.7-.818.89-1.101.19-.283.376-.237.625-.148.249.09 1.571.741 1.84 8.877.27.136.449.204.514.318.065.114.065.666-.225 1.48z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">WhatsApp</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#25D366] text-white rounded-full text-[10px] font-bold">15</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-[#1877F2] flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">Facebook</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#1877F2] text-white rounded-full text-[10px] font-bold">12</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-white flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.825-.075-1.62-.21-2.385H12.24v4.515h6.45c-.285 1.455-1.095 2.685-2.325 3.51v2.925h3.765c2.205-2.025 3.615-5.01 3.615-8.565z"/><path fill="#34A853" d="M12.24 24c3.24 0 5.955-1.08 7.935-2.91l-3.765-2.925c-1.08.72-2.46 1.14-4.17 1.14-3.21 0-5.925-2.16-6.9-5.07H1.455v3.015C3.42 21.18 7.5 24 12.24 24z"/><path fill="#FBBC05" d="M5.34 15.135c-.24-.72-.375-1.5-.375-2.31s.135-1.59.375-2.31V7.5H1.455C.705 8.985.285 10.68.285 12.42c0 1.74.42 3.435 1.17 4.92l3.885-2.205z"/><path fill="#EA4335" d="M12.24 4.86c1.77 0 3.36.6 4.605 1.785l3.45-3.45C18.195 1.215 15.48 0 12.24 0 7.5 0 3.42 2.82 1.455 6.75l3.885 3.015c.975-2.91 3.69-5.07 6.9-5.07z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">Google Yorumlar</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-gray-700 text-white rounded-full text-[10px] font-bold">8</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-[#00B2FF] flex items-center justify-center shadow-lg">
                    <svg className="w-[16px] h-[16px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.14 2 11.25c0 2.912 1.488 5.49 3.791 7.159V22l3.463-1.895A10.74 10.74 0 0012 20.5c5.523 0 10-4.14 10-9.25S17.523 2 12 2zm1.096 12.21l-2.73-2.905-5.32 2.905 5.867-6.22 2.763 2.906 5.286-2.906-5.866 6.22z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">Messenger</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#00B2FF] text-white rounded-full text-[10px] font-bold">7</div>
              </div>
            </div>
          </div>

          {/* AI Assistant Tooltip */}
          <div className="absolute left-[260px] top-[90px] bg-[#0F141F] border border-[#1E293B] rounded-2xl p-4 shadow-2xl z-30 w-[190px]">
            <div className="absolute -left-2 top-5 w-4 h-4 bg-[#0F141F] border-l border-b border-[#1E293B] rotate-45"></div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">AI ASİSTAN</span>
            </div>
            <p className="text-[12px] text-gray-200 leading-tight">Merhaba! Size nasıl yardımcı olabilirim?</p>
            <div className="absolute right-[-15px] top-[40px] w-8 h-8 rounded-full bg-[#1A1F2B] border border-[#2A3142] flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] text-blue-400">graphic_eq</span>
            </div>
          </div>

          {/* Center Node (AI Globe) */}
          <div className="absolute left-[370px] top-[210px] flex flex-col items-center justify-center z-30">
            <div className="w-[160px] h-[160px] rounded-full relative flex items-center justify-center">
              {/* Intense backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF00AA]/40 via-[#8A2BE2]/40 to-[#00F0FF]/40 blur-[40px] rounded-full"></div>
              
              {/* Wireframe grids */}
              <div className="absolute w-full h-full rounded-full border border-blue-500/30 shadow-[inset_0_0_30px_rgba(0,100,255,0.4)]"></div>
              <div className="absolute w-full h-full rounded-full border border-blue-400/20 rotate-[45deg] scale-x-50"></div>
              <div className="absolute w-full h-full rounded-full border border-blue-400/20 rotate-[-45deg] scale-x-50"></div>
              <div className="absolute w-full h-full rounded-full border border-blue-400/20 rotate-[90deg] scale-y-50"></div>
              
              {/* Inner dark core */}
              <div className="w-[100px] h-[100px] bg-[#05070A] rounded-full shadow-[0_0_30px_rgba(138,43,226,0.6)] flex items-center justify-center z-10 border border-purple-500/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent"></div>
                <span className="text-[48px] font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] z-10 tracking-tighter">AI</span>
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div className="absolute bottom-[-60px] bg-[#0A0D14]/90 border border-[#1E293B] rounded-full px-4 py-2.5 shadow-xl flex items-center gap-2 z-40">
              <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div>
              <span className="text-[11px] font-bold text-gray-300 tracking-widest uppercase">7/24 OTONOM ÇALIŞIYOR</span>
            </div>
            {/* Connection line for status pill */}
            <div className="absolute bottom-[-22px] w-[2px] h-[30px] bg-gradient-to-b from-purple-500/50 to-[#1E293B]"></div>
          </div>

          {/* Right Boxes Container */}
          <div className="absolute left-[650px] top-[140px] flex flex-col gap-4 z-20">
            
            {/* Box 1: AI YANITLIYOR */}
            <div className="w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl relative">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">AI YANITLIYOR</div>
              <div className="bg-[#141A27] rounded-xl p-3 border border-[#232D42] flex items-start gap-2.5">
                 <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center flex-shrink-0 mt-0.5">
                   <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                 </div>
                 <div className="flex flex-col gap-2">
                   <div className="text-[11px] leading-[1.4] text-gray-200">Merhaba! Size nasıl yardımcı olabilirim?</div>
                   <div className="flex gap-1">
                     <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                     <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                     <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Box 2: İÇERİK ÜRETİLİYOR */}
            <div className="w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl relative">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">İÇERİK ÜRETİLİYOR</div>
              <div className="flex gap-3 items-center">
                 <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex-shrink-0 border border-pink-500/30 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                   <span className="material-symbols-outlined text-white text-[20px] drop-shadow-md">auto_awesome</span>
                 </div>
                 <div className="text-[12px] leading-snug text-white font-medium">Yeni gönderi hazır! ✨</div>
              </div>
            </div>

            {/* Box 3: MUHASEBEYE İŞLENİYOR */}
            <div className="w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl relative">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">MUHASEBEYE İŞLENİYOR</div>
              <div className="flex items-start gap-3">
                 <div className="w-9 h-9 rounded-xl bg-[#0F172A] flex items-center justify-center flex-shrink-0 border border-[#1E293B]">
                   <span className="material-symbols-outlined text-[18px] text-[#00F0FF]">description</span>
                 </div>
                 <div className="flex flex-col flex-1">
                   <div className="text-[12px] font-bold text-white mb-0.5">Fatura okundu</div>
                   <div className="text-[11px] text-gray-400 mb-0.5">KDV: %20</div>
                   <div className="text-[12px] text-white">Tutar: <span className="font-bold">₺2.450</span></div>
                 </div>
              </div>
            </div>

            {/* Box 4: MUHASEBECİNİZ */}
            <div className="w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl relative">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">MUHASEBECİNİZ</div>
              <div className="flex items-center gap-3">
                 <div className="w-9 h-9 rounded-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop')] bg-cover bg-center border-2 border-[#1E293B]"></div>
                 <div className="flex flex-col">
                   <div className="text-[12px] font-bold text-white mb-0.5">Yeni belge geldi</div>
                   <div className="text-[11px] text-[#F5B400] font-medium">Onay bekliyor</div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      </main>

      {/* --- Stats Row --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-800 rounded-2xl p-4 bg-[#101216]/50 backdrop-blur-sm">
          
          <div className="flex items-center gap-4 px-6 py-2">
             <div className="w-12 h-12 rounded-full bg-[#00F0FF]/10 flex items-center justify-center border border-[#00F0FF]/20">
               <span className="material-symbols-outlined text-[#00F0FF] text-xl">forum</span>
             </div>
             <div className="flex flex-col">
               <span className="text-2xl font-extrabold text-white">12.5K+</span>
               <span className="text-[12px] text-gray-400 font-medium mt-0.5">Mesaj Yanıtlandı</span>
             </div>
          </div>
          
          <div className="w-px h-12 bg-gray-800 hidden md:block"></div>
          
          <div className="flex items-center gap-4 px-6 py-2">
             <div className="w-12 h-12 rounded-full bg-[#b785f5]/10 flex items-center justify-center border border-[#b785f5]/20">
               <span className="material-symbols-outlined text-[#b785f5] text-xl">description</span>
             </div>
             <div className="flex flex-col">
               <span className="text-2xl font-extrabold text-white">3.2K+</span>
               <span className="text-[12px] text-gray-400 font-medium mt-0.5">Belge İşlendi</span>
             </div>
          </div>
          
          <div className="w-px h-12 bg-gray-800 hidden md:block"></div>
          
          <div className="flex items-center gap-4 px-6 py-2">
             <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
               <span className="material-symbols-outlined text-[#25D366] text-xl">verified</span>
             </div>
             <div className="flex flex-col">
               <span className="text-2xl font-extrabold text-white">98.7%</span>
               <span className="text-[12px] text-gray-400 font-medium mt-0.5">Doğruluk Oranı</span>
             </div>
          </div>
          
          <div className="w-px h-12 bg-gray-800 hidden md:block"></div>
          
          <div className="flex items-center gap-4 px-6 py-2">
             <div className="w-12 h-12 rounded-full bg-[#F5B400]/10 flex items-center justify-center border border-[#F5B400]/20">
               <span className="material-symbols-outlined text-[#F5B400] text-xl">bolt</span>
             </div>
             <div className="flex flex-col">
               <span className="text-2xl font-extrabold text-white">7/24</span>
               <span className="text-[12px] text-gray-400 font-medium mt-0.5">Kesintisiz Hizmet</span>
             </div>
          </div>
          
        </div>
      </section>

      {/* --- Omnichannel Inbox Section --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Text Side */}
        <div className="flex-1 flex flex-col items-start w-full">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
             <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase">AI OMNICHANNEL GELEN KUTUSU</span>
           </div>
           
           <h2 className="text-[40px] md:text-[48px] font-extrabold leading-[1.1] mb-6">
             Tüm Kanallar<br/>
             Tek Gelen Kutusunda
           </h2>
           
           <p className="text-gray-400 text-lg mb-8 leading-relaxed">
             Instagram, WhatsApp, Facebook ve daha fazlasından gelen tüm mesajlar tek ekranda. AI asistanınız 7/24 otomatik yanıtlar.
           </p>

           {/* Social Icons Row */}
           <div className="flex items-center gap-3 mb-10">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-lg">photo_camera</span></div>
             <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-lg">chat</span></div>
             <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-lg">thumb_up</span></div>
             <div className="w-10 h-10 rounded-full bg-[#F5B400] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-lg">star</span></div>
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-lg">forum</span></div>
             <div className="w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-lg">music_note</span></div>
             <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm font-bold text-gray-300">+3</div>
           </div>

           {/* Checkmarks */}
           <div className="flex flex-col gap-4 text-gray-300 font-medium">
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-ai-purple text-xl">check_circle</span> Anlık mesaj senkronizasyonu</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-ai-purple text-xl">check_circle</span> AI destekli otomatik yanıtlar</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-ai-purple text-xl">check_circle</span> Yorum ağacı görüntüleme</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-ai-purple text-xl">check_circle</span> Öncelik ve etiket yönetimi</div>
           </div>
        </div>

        {/* Dashboard Mockup Side */}
        <div className="flex-[1.5] w-full max-w-[800px]">
           <div className="w-full bg-[#1A1D24] rounded-2xl border border-[#2A2E35] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-body-sm relative">
             
             {/* Glow behind mockup */}
             <div className="absolute -inset-1 bg-gradient-to-r from-ai-cyan/20 via-ai-purple/20 to-ai-blue/20 blur-2xl z-[-1]"></div>

             {/* Mockup Header */}
             <div className="h-12 bg-[#20242D] border-b border-[#2A2E35] flex items-center px-4 gap-4 justify-between">
               <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded flex items-center justify-center bg-gradient-to-br from-ai-cyan to-ai-blue"><span className="material-symbols-outlined text-white text-[12px]">smart_toy</span></div>
                 <span className="font-bold text-sm text-gray-200">AI Esnaf</span>
               </div>
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
               </div>
             </div>

             <div className="flex h-[500px]">
               {/* Sidebar */}
               <div className="w-[200px] bg-[#161920] border-r border-[#2A2E35] flex flex-col p-3">
                 <div className="bg-[#2A2E35]/50 border border-[#3A3F47] rounded-lg p-2 flex items-center justify-between mb-4 cursor-pointer hover:bg-[#2A2E35] transition-colors">
                   <div className="flex items-center gap-2 text-gray-300">
                     <span className="material-symbols-outlined text-[18px]">inbox</span>
                     <span className="text-[13px] font-medium">Gelen Kutusu</span>
                   </div>
                   <span className="bg-ai-blue text-white text-[10px] px-1.5 py-0.5 rounded font-bold">82</span>
                 </div>
                 
                 <div className="flex flex-col gap-1 text-[13px]">
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">forum</span> Tüm Mesajlar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">photo_camera</span> Instagram</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">chat</span> WhatsApp</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">thumb_up</span> Facebook</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">star</span> Yorumlar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors mt-4"><span className="material-symbols-outlined text-[18px]">schedule</span> Bekleyenler</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">archive</span> Arşiv</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">drafts</span> Taslaklar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors mt-auto"><span className="material-symbols-outlined text-[18px]">settings</span> Ayarlar</div>
                 </div>
               </div>

               {/* Middle List */}
               <div className="w-[250px] bg-[#1A1D24] border-r border-[#2A2E35] flex flex-col">
                 <div className="p-4 border-b border-[#2A2E35] flex justify-between items-center">
                   <span className="font-bold text-gray-200 text-sm">Tüm Mesajlar</span>
                   <span className="material-symbols-outlined text-gray-400 text-[18px]">filter_list</span>
                 </div>
                 
                 <div className="flex-1 overflow-y-auto">
                   <div className="p-3 border-b border-[#2A2E35] hover:bg-[#20242D] cursor-pointer bg-[#252A33] border-l-2 border-l-ai-cyan">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">photo_camera</span></div>
                         <span className="font-bold text-gray-200 text-[13px]">Instagram DM</span>
                       </div>
                       <span className="text-[11px] text-gray-500">2 dk</span>
                     </div>
                     <div className="text-[12px] text-gray-400 truncate pl-7">Merhaba, fiyat bilgisi alabilir miyim?</div>
                   </div>

                   <div className="p-3 border-b border-[#2A2E35] hover:bg-[#20242D] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">chat</span></div>
                         <span className="font-bold text-gray-300 text-[13px]">WhatsApp</span>
                       </div>
                       <span className="text-[11px] text-gray-500">5 dk</span>
                     </div>
                     <div className="text-[12px] text-gray-500 truncate pl-7">Siparişim ne zaman kargoya verilir?</div>
                   </div>

                   <div className="p-3 border-b border-[#2A2E35] hover:bg-[#20242D] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-[#F5B400] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">star</span></div>
                         <span className="font-bold text-gray-300 text-[13px]">Google Yorum</span>
                       </div>
                       <span className="text-[11px] text-gray-500">15 dk</span>
                     </div>
                     <div className="text-[12px] text-gray-500 truncate pl-7">Harika hizmet, çok memnun kaldım.</div>
                   </div>
                   
                   <div className="p-3 border-b border-[#2A2E35] hover:bg-[#20242D] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">thumb_up</span></div>
                         <span className="font-bold text-gray-300 text-[13px]">Facebook Mesaj</span>
                       </div>
                       <span className="text-[11px] text-gray-500">1 sa</span>
                     </div>
                     <div className="text-[12px] text-gray-500 truncate pl-7">Ürünleriniz garantili mi?</div>
                   </div>
                 </div>
               </div>

               {/* Right Chat View */}
               <div className="flex-1 bg-[#161920] flex flex-col relative">
                 <div className="h-14 border-b border-[#2A2E35] flex items-center justify-between px-4">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[14px]">photo_camera</span></div>
                     <span className="font-bold text-gray-200 text-[14px]">Instagram DM</span>
                   </div>
                   <div className="flex gap-3 text-gray-400">
                     <span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-white">search</span>
                     <span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-white">more_horiz</span>
                   </div>
                 </div>

                 <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                   {/* User Message */}
                   <div className="flex items-start gap-3 w-full">
                     <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
                       <img src="https://i.pravatar.cc/100?img=12" alt="user" />
                     </div>
                     <div className="bg-[#252A33] text-gray-200 p-3 rounded-2xl rounded-tl-sm text-[13px] max-w-[80%] border border-[#3A3F47]">
                       Merhaba, bu ürünün fiyatı nedir? S bedeni var mı?
                     </div>
                   </div>

                   {/* AI Auto Reply Badge */}
                   <div className="self-end mb-[-8px] z-10 flex items-center">
                     <div className="bg-gradient-to-r from-[#0055FF] to-[#8A2BE2] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(138,43,226,0.5)] border border-white/20 flex items-center gap-1">
                       AI OTOMATİK YANITLADI <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                     </div>
                   </div>

                   {/* AI Message */}
                   <div className="flex flex-col items-end gap-1 w-full">
                     <div className="bg-[#2A2E35] text-gray-200 p-3 rounded-2xl rounded-tr-sm text-[13px] max-w-[80%] border border-[#3A3F47]">
                       Merhaba! 👋 Ürünümüzün fiyatı ₺1.250'dir. Stoklarımızda mevcut. Sipariş vermek ister misiniz?
                     </div>
                     <div className="flex items-center gap-1 text-[10px] text-gray-500 mr-1">
                       <span>AI Yanıtladı</span>
                       <span>•</span>
                       <span>2 dk</span>
                     </div>
                   </div>

                   {/* Action buttons */}
                   <div className="self-end flex gap-2 mt-2">
                     <button className="bg-[#252A33] text-gray-300 border border-[#3A3F47] px-4 py-1.5 rounded-full text-[12px] hover:bg-[#303642] transition-colors">
                       Teşekkürler!
                     </button>
                   </div>
                 </div>

                 <div className="p-4 border-t border-[#2A2E35]">
                   <div className="bg-[#20242D] border border-[#3A3F47] rounded-full px-4 py-2 flex items-center justify-between">
                     <input type="text" placeholder="Yanıt yaz..." className="bg-transparent border-none outline-none text-sm text-gray-300 w-full placeholder-gray-600" />
                     <button className="w-8 h-8 rounded-full bg-ai-purple flex items-center justify-center text-white hover:bg-ai-purple/80 transition-colors flex-shrink-0">
                       <span className="material-symbols-outlined text-[16px] ml-1">send</span>
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* --- AI Power Features Grid --- */}
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
          <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase">GÜÇLÜ AI ÖZELLİKLERİ</span>
        </div>
        
        <h2 className="text-[28px] md:text-[36px] font-extrabold mb-12 text-center text-white tracking-tight">
          İşletmenizi Büyüten AI Gücü
        </h2>

        {/* CSS Grid for perfect wrapping */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-6">
          
          {/* Card 1: AI İçerik Üretimi */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-pink-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI İçerik Üretimi</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">Sadece birkaç kelime ile profesyonel görseller ve metinler oluşturun.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] relative">
              <div className="flex gap-2 mb-3">
                <div className="bg-[#252A33] text-gray-300 text-[10px] px-2 py-1 rounded font-bold">Oluştur</div>
                <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center"><svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center"><svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></div>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden border border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                <span className="font-bold text-white text-[10px] tracking-widest relative z-10 drop-shadow-md">YENİ SEZON İNDİRİMİ!</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Muhasebe */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-cyan-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI Muhasebe</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">Faturaları tarayın, AI tüm bilgileri ayıklar ve kaydeder.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] relative items-center justify-center">
              <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-cyan-500/10 blur-[30px] rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
              
              <div className="w-[80%] h-auto bg-white rounded-lg p-3 shadow-lg relative transform group-hover:scale-105 transition-transform rotate-2 border border-gray-200">
                 <div className="text-[8px] font-bold text-gray-800 border-b border-gray-200 pb-1 mb-1">FATURA</div>
                 <div className="text-[6px] text-gray-500 flex justify-between"><span>Tarih:</span> <span>24.05.2024</span></div>
                 <div className="text-[6px] text-gray-500 flex justify-between"><span>Tutar:</span> <span className="font-bold text-black">₺2.450,00</span></div>
                 <div className="text-[6px] text-gray-500 flex justify-between mb-1"><span>KDV:</span> <span>%20</span></div>
                 <div className="text-[5px] text-gray-400 border-t border-gray-100 pt-1">Satıcı: ABC Ltd. Şti.</div>
              </div>
              
              <div className="absolute bottom-3 bg-[#0F141F] text-[#25D366] text-[10px] font-bold px-3 py-1.5 rounded-lg border border-[#25D366]/30 shadow-lg z-10 w-[80%] text-center">
                %99.2 Doğruluk
              </div>
            </div>
          </div>

          {/* Card 3: AI Asistan */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-blue-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI Asistan</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">Doğal dil ile işletmenizle ilgili her soruya anında cevap alın.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] justify-between relative overflow-hidden">
               
               <div className="bg-[#2A2E35] rounded-lg rounded-tr-none p-2 max-w-[85%] self-end border border-[#3A3F47] group-hover:-translate-y-1 transition-transform">
                 <p className="text-[9px] text-white">Bu ayki toplam harcamam ne?</p>
               </div>
               
               <div className="bg-[#1D212B] rounded-lg rounded-tl-none p-2 max-w-[85%] self-start flex items-start gap-1.5 border border-[#2A2E35] group-hover:translate-y-1 transition-transform mt-1">
                 <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="material-symbols-outlined text-white text-[8px]">smart_toy</span></div>
                 <p className="text-[9px] text-gray-300 leading-tight">Bu ay toplam harcamanız ₺48.250,00'dir.</p>
               </div>
               
               <div className="bg-[#2A2E35] rounded-lg rounded-tr-none p-2 max-w-[85%] self-end border border-[#3A3F47] mt-1 opacity-50">
                 <p className="text-[9px] text-white">En çok hangi ürünü sattım? </p>
               </div>
               
               {/* Audio Waveform */}
               <div className="mt-auto h-6 w-full flex items-center justify-center gap-[2px] bg-[#121418] rounded-full border border-[#2A2E35] px-3 py-1">
                  <div className="flex-1 flex items-center justify-center gap-[2px]">
                     <div className="w-[2px] h-[4px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                     <div className="w-[2px] h-[8px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                     <div className="w-[2px] h-[12px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                     <div className="w-[2px] h-[6px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                     <div className="w-[2px] h-[14px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                     <div className="w-[2px] h-[10px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                     <div className="w-[2px] h-[6px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                     <div className="w-[2px] h-[4px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                  </div>
                  <span className="material-symbols-outlined text-[10px] text-gray-400">mic</span>
               </div>
            </div>
          </div>

          {/* Card 4: AI Analitik */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-purple-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI Analitik</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">Tüm performans verilerinizi akıllı grafiklerle analiz edin.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] relative overflow-hidden">
              <div className="flex justify-between items-center mb-1 relative z-10">
                <span className="text-[9px] text-gray-400 font-bold uppercase">Toplam Gelir</span>
              </div>
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <div className="text-[16px] font-bold text-white">₺125,430</div>
                <span className="text-[9px] text-green-400 font-bold bg-green-400/10 px-1.5 py-0.5 rounded">+25.5%</span>
              </div>
              
              {/* Chart line */}
              <svg className="absolute bottom-0 left-0 w-full h-[80px]" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 L0,70 Q25,30 50,70 T100,20 L100,100 Z" fill="url(#chart-grad)" opacity="0.4" className="group-hover:opacity-70 transition-opacity" />
                <path d="M0,70 Q25,30 50,70 T100,20" fill="none" stroke="#A855F7" strokeWidth="3" className="group-hover:stroke-pink-500 transition-colors drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
                <defs>
                  <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute right-[10%] top-[40%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff] group-hover:scale-150 transition-transform animate-pulse"></div>
            </div>
          </div>

          {/* Card 5: AI Otomasyon */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-green-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI Otomasyon</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">İş süreçlerinizi otomatikleştirin, zaman kazanın.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] justify-center relative gap-1.5">
               <div className="flex items-center gap-2 bg-[#20242D] border border-[#2A2E35] p-2 rounded-lg">
                 <div className="w-5 h-5 rounded bg-[#252A33] border border-[#3A3F47] flex items-center justify-center">
                   <span className="material-symbols-outlined text-[#00F0FF] text-[12px]">receipt</span>
                 </div>
                 <span className="text-[10px] text-gray-300 font-medium">Yeni Fatura Yüklendi</span>
               </div>
               
               <div className="flex justify-center -my-1"><span className="material-symbols-outlined text-gray-600 text-[12px]">arrow_downward</span></div>

               <div className="flex items-center gap-2 bg-[#1a2221] border border-[#203a31] p-2 rounded-lg">
                 <div className="w-5 h-5 rounded bg-[#1e2e28] border border-[#25D366]/30 flex items-center justify-center">
                   <span className="material-symbols-outlined text-[#25D366] text-[12px]">psychology</span>
                 </div>
                 <span className="text-[10px] text-[#25D366] font-medium">AI Okudu ve İşledi</span>
               </div>
               
               <div className="flex justify-center -my-1"><span className="material-symbols-outlined text-gray-600 text-[12px]">arrow_downward</span></div>

               <div className="flex items-center gap-2 bg-[#20242D] border border-[#2A2E35] p-2 rounded-lg opacity-60">
                 <div className="w-5 h-5 rounded bg-[#252A33] border border-[#3A3F47] flex items-center justify-center">
                   <span className="material-symbols-outlined text-gray-400 text-[12px]">send</span>
                 </div>
                 <span className="text-[10px] text-gray-400 font-medium">Muhasebeciye Gönderildi</span>
               </div>

               <div className="flex items-center gap-2 bg-[#20242D] border border-[#2A2E35] p-2 rounded-lg opacity-30">
                 <div className="w-5 h-5 rounded bg-[#252A33] border border-[#3A3F47] flex items-center justify-center">
                   <span className="material-symbols-outlined text-gray-400 text-[12px]">archive</span>
                 </div>
                 <span className="text-[10px] text-gray-400 font-medium">Arşivlendi</span>
               </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* --- Workflow Process Section --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
          <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase">AKILLI MUHASEBE SÜRECİ</span>
        </div>
        
        <h2 className="text-[32px] md:text-[40px] font-extrabold mb-24 text-center">
          Fatura'dan Rapor'a<br/>
          Otomatik Yolculuk
        </h2>

        {/* Timeline Container */}
        <div className="w-full relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 px-4">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[50px] left-[5%] right-[5%] h-[2px] bg-gray-800 z-0">
             {/* Animated active line segment */}
             <div className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-ai-cyan to-ai-purple animate-[scan_4s_linear_infinite] rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-[15%]">
             <div className="w-24 h-24 rounded-2xl bg-[#121418] border border-[#2A2E35] flex flex-col items-center justify-center shadow-lg relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#2A2E35] to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
               {/* Mini Phone mockup */}
               <div className="w-8 h-14 border-2 border-gray-500 rounded flex flex-col p-[2px] mb-1">
                 <div className="flex-1 bg-gray-700 rounded-sm"></div>
               </div>
               <span className="text-[10px] text-gray-400 font-bold mt-1">1. Tarama</span>
             </div>
             <div className="text-center">
               <h4 className="font-bold text-white text-sm mb-1">1. Tarama</h4>
               <p className="text-[11px] text-gray-400">Faturanızı çekin veya yükleyin.</p>
             </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-[15%]">
             <div className="w-24 h-24 rounded-2xl bg-[#121418] border border-ai-cyan/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)] relative group">
               {/* Data extraction visual */}
               <div className="flex gap-2">
                 <div className="w-6 h-8 border border-gray-600 rounded-sm flex flex-col p-1 gap-[2px]">
                   <div className="w-full h-[2px] bg-gray-500"></div><div className="w-3/4 h-[2px] bg-gray-500"></div>
                 </div>
                 <span className="material-symbols-outlined text-ai-cyan text-[16px] animate-pulse">arrow_forward</span>
                 <div className="w-6 h-8 bg-[#1A2329] border border-ai-cyan/50 rounded-sm flex flex-col p-1 gap-[2px] justify-center items-center">
                   <span className="text-[6px] font-bold text-ai-cyan">JSON</span>
                 </div>
               </div>
               <span className="text-[10px] text-ai-cyan font-bold mt-2">2. AI Okuma</span>
             </div>
             <div className="text-center">
               <h4 className="font-bold text-white text-sm mb-1">2. AI Okuma</h4>
               <p className="text-[11px] text-gray-400">AI tüm bilgileri otomatik olarak çıkarır.</p>
             </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-[15%]">
             <div className="w-24 h-24 rounded-2xl bg-[#121418] border border-[#F5B400]/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(245,180,0,0.2)] relative group">
               <div className="w-full px-3 flex flex-col gap-1.5">
                 <div className="flex justify-between items-center bg-[#252A33] px-1.5 py-0.5 rounded text-[8px] border-l-2 border-[#F5B400]"><span className="text-gray-300">Yemek</span><span className="font-bold text-[#F5B400]">₺450</span></div>
                 <div className="flex justify-between items-center bg-[#252A33] px-1.5 py-0.5 rounded text-[8px] border-l-2 border-ai-cyan"><span className="text-gray-300">Ulaşım</span><span className="font-bold text-ai-cyan">₺250</span></div>
                 <div className="flex justify-between items-center bg-[#252A33] px-1.5 py-0.5 rounded text-[8px] border-l-2 border-ai-purple"><span className="text-gray-300">Ofis</span><span className="font-bold text-ai-purple">₺350</span></div>
               </div>
               <span className="text-[10px] text-[#F5B400] font-bold mt-2">3. Kategorize</span>
             </div>
             <div className="text-center">
               <h4 className="font-bold text-white text-sm mb-1">3. Kategorize</h4>
               <p className="text-[11px] text-gray-400">Giderler otomatik kategorize edilir.</p>
             </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-[15%]">
             <div className="w-24 h-24 rounded-2xl bg-[#121418] border border-[#2A2E35] flex flex-col items-center justify-center shadow-lg relative group overflow-hidden">
               {/* Mini notification mockup */}
               <div className="bg-[#1A1D24] w-[90%] rounded-lg border border-[#3A3F47] p-1.5 flex gap-1.5 items-center">
                 <img src="https://i.pravatar.cc/100?img=11" className="w-6 h-6 rounded-full" alt="avatar"/>
                 <div className="flex flex-col">
                   <span className="text-[7px] font-bold text-white">Yeni Belge Geldi</span>
                   <span className="text-[6px] text-gray-400">Onay Bekliyor</span>
                 </div>
               </div>
               <div className="bg-ai-blue text-white text-[7px] px-2 py-0.5 rounded-full mt-2 font-bold">İncele</div>
               <span className="text-[10px] text-gray-400 font-bold mt-2 absolute bottom-2">4. Muhasebeci</span>
             </div>
             <div className="text-center">
               <h4 className="font-bold text-white text-sm mb-1">4. Muhasebeci</h4>
               <p className="text-[11px] text-gray-400">Muhasebeciniz anında belgeyi alır.</p>
             </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-[15%]">
             <div className="w-24 h-24 rounded-2xl bg-[#121418] border border-[#25D366]/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.2)] relative group">
               <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center mb-1">
                 <span className="material-symbols-outlined text-[#25D366] text-xl">check_circle</span>
               </div>
               <span className="text-[10px] text-[#25D366] font-bold mt-1">5. Onay</span>
             </div>
             <div className="text-center">
               <h4 className="font-bold text-white text-sm mb-1">5. Onay</h4>
               <p className="text-[11px] text-gray-400">Onaylanır ve muhasebe programına aktarılır.</p>
             </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-[15%]">
             <div className="w-24 h-24 rounded-2xl bg-[#121418] border border-[#8A2BE2]/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.2)] relative group">
               <div className="flex items-end gap-1 h-10 mb-1">
                 <div className="w-2 h-4 bg-ai-purple/40 rounded-t-sm"></div>
                 <div className="w-2 h-6 bg-ai-purple/60 rounded-t-sm"></div>
                 <div className="w-2 h-8 bg-ai-purple/80 rounded-t-sm"></div>
                 <div className="w-2 h-10 bg-ai-purple rounded-t-sm shadow-[0_0_8px_rgba(138,43,226,0.8)]"></div>
               </div>
               <span className="text-[10px] text-ai-purple font-bold mt-1">6. Rapor</span>
             </div>
             <div className="text-center">
               <h4 className="font-bold text-white text-sm mb-1">6. Rapor</h4>
               <p className="text-[11px] text-gray-400">Raporlarınız otomatik oluşturulur.</p>
             </div>
          </div>

        </div>
      </section>

      {/* --- Integrations Section --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
          <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase">GÜÇLÜ ENTEGRASYONLAR</span>
        </div>
        
        <h2 className="text-[32px] md:text-[40px] font-extrabold mb-12 text-center">
          Kullandığınız Platformlarla Tam Entegre
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          
          <div className="w-[120px] h-[100px] bg-[#121418] border border-[#2A2E35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-white">photo_camera</span></div>
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">Instagram<br/>Graph API</span>
          </div>

          <div className="w-[120px] h-[100px] bg-[#121418] border border-[#2A2E35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(37,211,102,0.2)] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-white">chat</span></div>
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">WhatsApp<br/>Cloud API</span>
          </div>

          <div className="w-[120px] h-[100px] bg-[#121418] border border-[#2A2E35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(24,119,242,0.2)] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-white">forum</span></div>
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">Facebook<br/>Messenger</span>
          </div>

          <div className="w-[120px] h-[100px] bg-[#121418] border border-[#2A2E35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(234,67,53,0.2)] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#EA4335" d="M24 12.27c0-.84-.07-1.65-.2-2.45H12v4.64h6.73c-.29 1.5-.1 3.12 1.48 4.22v3.5h4.74c2.78-2.55 4.38-6.31 4.38-10.9z"/><path fill="#34A853" d="M12 24c3.37 0 6.2-1.12 8.27-3.02l-4.74-3.5c-1.12.75-2.55 1.2-3.53 1.2-2.7 0-5-1.83-5.83-4.28H1.32v3.63C3.4 22.18 7.4 24 12 24z"/><path fill="#FBBC05" d="M6.17 14.4c-.2-.62-.32-1.28-.32-1.95s.12-1.33.32-1.95V6.87H1.32C.48 8.55 0 10.22 0 12s.48 3.45 1.32 5.13l4.85-2.73z"/><path fill="#4285F4" d="M12 4.67c1.83 0 3.48.63 4.77 1.87l3.58-3.58C18.2 1.13 15.37 0 12 0 7.4 0 3.4 1.82 1.32 5.87l4.85 3.63C7 7.05 9.3 4.67 12 4.67z"/></svg>
            </div>
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">Google<br/>Business</span>
          </div>

          <div className="w-[120px] h-[100px] bg-[#121418] border border-[#2A2E35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-gray-400/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform">
               {/* TikTok icon approximation */}
               <svg fill="#fff" viewBox="0 0 448 512" className="w-5 h-5"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
            </div>
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">TikTok<br/>API</span>
          </div>
          
          <div className="w-[120px] h-[100px] bg-[#121418] border border-[#2A2E35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(255,180,0,0.2)] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-[#2A2E35] flex items-center justify-center group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined text-yellow-500">add_to_drive</span>
            </div>
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">Google Drive<br/>RAG Sync</span>
          </div>

          <div className="w-[120px] h-[100px] bg-[#121418] border border-[#2A2E35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(138,43,226,0.2)] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-[#2A2E35] flex items-center justify-center group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined text-ai-purple">hub</span>
            </div>
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">Zendesk<br/>Sosyal API</span>
          </div>

          <div className="w-[120px] h-[100px] bg-[#121418] border border-[#2A2E35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-ai-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[#1A1D24] border border-[#2A2E35] flex items-center justify-center group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined text-ai-cyan">account_balance</span>
            </div>
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">Muhasebe<br/>Programları</span>
          </div>
          
        </div>
      </section>

      {/* --- Footer CTA Section --- */}
      <section className="relative z-20 w-full max-w-5xl mx-auto px-6 py-20">
         <div className="w-full bg-gradient-to-r from-[#141824] to-[#121620] rounded-[32px] border border-[#2A3040] shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
           
           {/* Ambient internal glow */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-ai-purple/20 to-transparent blur-[80px] pointer-events-none rounded-full"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-ai-cyan/10 to-transparent blur-[80px] pointer-events-none rounded-full"></div>

           {/* Left Robot Graphic (CSS/SVG representation) */}
           <div className="hidden md:flex w-[200px] h-[250px] relative z-10 flex-col items-center justify-center">
             {/* Glowing aura */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.2)_0%,rgba(0,0,0,0)_70%)]"></div>
             {/* Robot Body Parts */}
             <div className="w-32 h-28 bg-[#E5E7EB] rounded-[40px] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),_0_20px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative z-20 border-b-4 border-gray-300">
               {/* Visor */}
               <div className="w-24 h-10 bg-[#121418] rounded-full flex items-center justify-center shadow-[inset_0_5px_10px_rgba(0,0,0,0.8)] overflow-hidden">
                  <div className="w-16 h-4 flex justify-between px-1">
                    <div className="w-5 h-4 bg-ai-cyan rounded-full shadow-[0_0_10px_#00F0FF] animate-pulse"></div>
                    <div className="w-5 h-4 bg-ai-cyan rounded-full shadow-[0_0_10px_#00F0FF] animate-pulse"></div>
                  </div>
               </div>
               {/* Ears */}
               <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-10 bg-[#9CA3AF] rounded-l-lg shadow-inner"></div>
               <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-10 bg-[#9CA3AF] rounded-r-lg shadow-inner"></div>
             </div>
             <div className="w-16 h-8 bg-[#9CA3AF] rounded-b-xl z-10 shadow-inner -mt-2"></div>
             <div className="w-28 h-20 bg-[#F3F4F6] rounded-t-3xl shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2)] z-20 mt-1 relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-ai-cyan/20 border-2 border-ai-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  <div className="w-3 h-3 bg-ai-cyan rounded-full"></div>
                </div>
             </div>
           </div>

           {/* Middle Text & Buttons */}
           <div className="flex-1 z-10 flex flex-col items-center md:items-start text-center md:text-left">
             <h2 className="text-[36px] md:text-[44px] font-extrabold leading-[1.1] mb-4 text-white">
               İşletmenizin Geleceği<br/>Bugünden Başlasın
             </h2>
             <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md">
               AI Esnaf ile tanışın, işlerinizi kolaylaştırın ve büyümenize odaklanın.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="bg-gradient-to-r from-ai-purple to-indigo-600 text-white font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(138,43,226,0.6)] transition-all duration-300">
                  Ücretsiz Hesap Oluştur <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button className="bg-[#1A1D24] border border-[#2A2E35] text-white font-medium px-6 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-[#20242D] transition-colors">
                  Demo Talep Et <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
             </div>
           </div>

           {/* Right Features List */}
           <div className="flex flex-col gap-6 z-10 w-full md:w-auto bg-[#0B0D13]/50 p-6 rounded-2xl border border-white/5">
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-lg bg-[#252A33] border border-[#3A3F47] flex items-center justify-center flex-shrink-0 mt-1">
                 <span className="material-symbols-outlined text-gray-300 text-[16px]">calendar_month</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-white text-[15px]">14 Gün Ücretsiz Deneme</span>
                 <span className="text-[12px] text-gray-400">Kredi kartı gerekmez</span>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-lg bg-[#252A33] border border-[#3A3F47] flex items-center justify-center flex-shrink-0 mt-1">
                 <span className="material-symbols-outlined text-gray-300 text-[16px]">headphones</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-white text-[15px]">Kurulum Desteği</span>
                 <span className="text-[12px] text-gray-400">Ekibimiz sizinle ilgilenecek</span>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-lg bg-[#252A33] border border-[#3A3F47] flex items-center justify-center flex-shrink-0 mt-1">
                 <span className="material-symbols-outlined text-gray-300 text-[16px]">support_agent</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-white text-[15px]">7/24 Destek</span>
                 <span className="text-[12px] text-gray-400">Her zaman yanınızdayız</span>
               </div>
             </div>
           </div>

         </div>
      </section>

    </div>
  );
}
