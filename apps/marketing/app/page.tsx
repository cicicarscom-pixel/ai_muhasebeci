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
          <a href="#" className="text-white">Ã–zellikler</a>
          <a href="#" className="hover:text-white transition-colors">FiyatlandÄ±rma</a>
          <a href="#" className="hover:text-white transition-colors">Ã‡Ã¶zÃ¼mler</a>
          <a href="#" className="hover:text-white transition-colors">Kaynaklar</a>
          <a href="#" className="hover:text-white transition-colors">Entegrasyonlar</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-[13px] font-semibold text-gray-300 hover:text-white transition-colors">GiriÅŸ Yap</a>
          <button className="bg-gradient-to-r from-ai-cyan to-ai-purple text-white text-[13px] font-bold px-6 py-2.5 rounded-full hover:shadow-neon-purple transition-all duration-300 transform hover:scale-105 border border-white/10">
            Ãœcretsiz Dene
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col lg:flex-row items-center gap-12 min-h-[85vh]">
        
        {/* Left Column (Text & Buttons) */}
        <div className="flex-1 flex flex-col items-start z-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-transparent border border-ai-purple/40 mb-8 shadow-[0_0_15px_rgba(138,43,226,0.1)]">
             <span className="text-[11px] font-bold tracking-wider text-gray-300 uppercase">YENÄ° NESÄ°L, AI Ä°ÅLETÄ°M SÄ°STEMÄ°</span>
          </div>
          
          <h1 className="text-[64px] md:text-[72px] leading-[1.05] font-extrabold tracking-tight mb-6">
            Ä°ÅŸletmenizi<br />
            YÃ¶neten Tek<br />
            <span className="text-ai-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Yapay </span>
            <span className="text-ai-purple drop-shadow-[0_0_15px_rgba(138,43,226,0.4)]">Zeka</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-light">
            Sosyal medyadan muhasebeye, mÃ¼ÅŸteri iletiÅŸiminden iÃ§erik Ã¼retimine kadar tÃ¼m iÅŸ sÃ¼reÃ§lerinizi tek platformda otonom yapay zeka ile yÃ¶netin.
          </p>
          
          {/* Checkmarks */}
          <div className="flex flex-wrap items-center gap-5 mb-12 text-[13px] font-medium text-gray-300">
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined text-gray-400 text-[12px]">check</span></div> 7/24 AI Asistan</div>
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined text-gray-400 text-[12px]">check</span></div> Otomatik YanÄ±tlar</div>
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined text-gray-400 text-[12px]">check</span></div> AkÄ±llÄ± Muhasebe</div>
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined text-gray-400 text-[12px]">check</span></div> GerÃ§ek ZamanlÄ± Analiz</div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,198,255,0.5)] transition-all duration-300 group border-none">
              Ãœcretsiz Deneyin <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-gray-700 text-white font-medium px-8 py-3.5 rounded-full flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
              <span className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center"><span className="material-symbols-outlined text-[14px] ml-0.5">play_arrow</span></span>
              CanlÄ± Demo Ä°zle
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
              <span className="text-[13px] text-gray-400 font-medium">1.000+ iÅŸletme AI Esnaf kullanÄ±yor</span>
            </div>
          </div>
        </div>

        {/* Right Column (AI Core Graphic) */}
        <div className="flex-1 relative h-[700px] w-full hidden lg:flex items-center justify-end xl:justify-center z-10 mt-10">
          {/* Responsive Scaling Wrapper */}
          <div className="relative w-[900px] h-[700px] scale-[0.6] lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-100 origin-right xl:origin-center flex-shrink-0">
          
            {/* Background Ambient Glow */}
            <div className="absolute left-[300px] top-[200px] pointer-events-none z-0">
              <div className="w-[300px] h-[300px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] rounded-full mix-blend-screen"></div>
            </div>

            {/* SVG Connecting lines */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <svg className="absolute inset-0 w-full h-full" style={{overflow: 'visible'}}>
                <defs>
                  <linearGradient id="neon-blue-pink" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0,150,255,0.8)" />
                    <stop offset="50%" stopColor="rgba(200,50,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(255,0,150,0.8)" />
                  </linearGradient>
                  <linearGradient id="neon-pink-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,0,150,0.8)" />
                    <stop offset="50%" stopColor="rgba(200,50,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(0,150,255,0.8)" />
                  </linearGradient>
                  <filter id="glow-strong" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Left side lines connecting to center globe (Globe center X=450, Y=350) */}
                {/* Left box right edge X=260 */}
                <path d="M 260,200 C 350,200 370,330 400,340" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,260 C 350,260 360,340 400,350" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,320 C 320,320 340,350 400,360" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,380 C 320,380 340,370 400,370" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,440 C 350,440 360,390 400,380" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,500 C 350,500 370,420 400,390" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />

                {/* Right side lines connecting from center globe to Right Nodes (Right Box Left Edge X=620) */}
                <path d="M 500,310 C 560,290 570,180 620,180" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 520,330 C 570,330 580,280 620,280" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 520,370 C 570,370 580,380 620,380" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 500,390 C 560,410 570,520 620,520" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" />
              </svg>
            </div>

            {/* Left Box: TÜM KANALLAR TEK YERDE */}
            <div className="absolute left-[0px] top-[140px] w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-5 shadow-2xl z-20">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">TÜM KANALLAR TEK YERDE</div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">photo_camera</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#f09433] transition-colors">Instagram</span>
                  </div>
                  <div className="bg-[#FF00AA]/20 text-[#FF00AA] px-2 py-0.5 rounded-full text-[11px] font-bold">23</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#25D366] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">chat</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                  </div>
                  <div className="bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded-full text-[11px] font-bold">15</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#1877F2] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">thumb_up</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#1877F2] transition-colors">Facebook</span>
                  </div>
                  <div className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full text-[11px] font-bold">12</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#F5B400] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">star</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#F5B400] transition-colors">Google Yorumlar</span>
                  </div>
                  <div className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full text-[11px] font-bold">8</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">forum</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#00B2FF] transition-colors">Messenger</span>
                  </div>
                  <div className="bg-blue-400/20 text-blue-400 px-2 py-0.5 rounded-full text-[11px] font-bold">7</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#0A66C2] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">work</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
                  </div>
                  <div className="bg-blue-600/20 text-blue-500 px-2 py-0.5 rounded-full text-[11px] font-bold">4</div>
                </div>
              </div>
            </div>

            {/* AI Assistant Tooltip */}
            <div className="absolute left-[200px] top-[100px] bg-[#1E293B] border border-[#334155] rounded-xl p-3 shadow-2xl z-30 w-[180px]">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-[#1E293B] border-l border-b border-[#334155] rotate-45"></div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">AI Asistan</span>
              </div>
              <p className="text-[12px] text-gray-200 leading-tight">Merhaba! Size nasl yardmc olabilirim?</p>
            </div>

            {/* Center Node (AI Globe) */}
            <div className="absolute left-[360px] top-[260px] flex flex-col items-center justify-center z-30">
              <div className="w-[180px] h-[180px] rounded-full relative flex items-center justify-center">
                {/* Intense backdrop glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF00AA]/60 via-[#8A2BE2]/60 to-[#00F0FF]/60 blur-[30px] rounded-full"></div>
                
                {/* Wireframe grids */}
                <div className="absolute w-full h-full rounded-full border border-blue-400/40 shadow-[inset_0_0_50px_rgba(0,100,255,0.8)]"></div>
                <div className="absolute w-full h-full rounded-full border border-blue-400/40 rotate-[45deg] scale-x-50"></div>
                <div className="absolute w-full h-full rounded-full border border-blue-400/40 rotate-[-45deg] scale-x-50"></div>
                <div className="absolute w-full h-full rounded-full border border-blue-400/40 rotate-[90deg] scale-y-50"></div>
                
                {/* Inner dark core */}
                <div className="w-[120px] h-[120px] bg-[#05070A] rounded-full shadow-[0_0_40px_rgba(138,43,226,0.8)] flex items-center justify-center z-10 border border-purple-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent"></div>
                  <span className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] z-10">AI</span>
                </div>

                {/* Connecting light dots on edge */}
                <div className="absolute left-[-5px] top-[40px] w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                <div className="absolute left-[-10px] top-[90px] w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                <div className="absolute left-[5px] top-[140px] w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>

                <div className="absolute right-[5px] top-[40px] w-2 h-2 rounded-full bg-[#FF00AA] shadow-[0_0_10px_#FF00AA]"></div>
                <div className="absolute right-[-10px] top-[90px] w-2 h-2 rounded-full bg-[#FF00AA] shadow-[0_0_10px_#FF00AA]"></div>
                <div className="absolute right-[5px] top-[140px] w-2 h-2 rounded-full bg-[#FF00AA] shadow-[0_0_10px_#FF00AA]"></div>
              </div>

              {/* Bottom Status Pill */}
              <div className="absolute bottom-[-50px] bg-[#0A0D14]/90 border border-[#1E293B] rounded-full px-4 py-2 shadow-xl flex items-center gap-2 z-40">
                <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div>
                <span className="text-[11px] font-bold text-gray-300 tracking-widest">7/24 OTONOM ÇALIŞIYOR</span>
              </div>
            </div>

            {/* Right Boxes Container */}
            <div className="absolute left-[620px] top-[120px] flex flex-col gap-4 z-20">
              
              {/* Box 1: İÇERİK ÜRETİYOR */}
              <div className="w-[280px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-4 shadow-2xl relative">
                <div className="absolute left-[-20px] top-[40%] w-2 h-2 rounded-full bg-[#FF00AA] shadow-[0_0_10px_#FF00AA]"></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">İÇERİK ÜRETİYOR</div>
                <div className="flex gap-3">
                   <div className="w-16 h-16 rounded-xl bg-[url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=150&auto=format&fit=crop')] bg-cover bg-center flex-shrink-0 border border-purple-500/30"></div>
                   <div className="flex flex-col justify-between">
                     <div className="text-[13px] leading-tight text-white font-medium">Yeni koleksiyon paylaşımı hazır! ✨</div>
                     <div className="flex gap-1.5 mt-2">
                       <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-white">photo_camera</span></div>
                       <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-white">thumb_up</span></div>
                       <div className="w-5 h-5 rounded-full bg-[#0A66C2] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-white">work</span></div>
                       <div className="w-5 h-5 rounded-full bg-[#EA4335] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-white">g_translate</span></div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Box 2: MÜŞTERİLERE YANIT VERİYOR */}
              <div className="w-[280px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-4 shadow-2xl relative">
                <div className="absolute left-[-20px] top-[40%] w-2 h-2 rounded-full bg-[#9D4EDD] shadow-[0_0_10px_#9D4EDD]"></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">MÜŞTERİLERE YANIT VERİYOR</div>
                <div className="bg-[#141A27] rounded-xl p-3 border border-[#232D42] flex items-start gap-3">
                   <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5"><span className="material-symbols-outlined text-[12px] text-white">chat</span></div>
                   <div className="text-[13px] leading-[1.4] text-gray-200">Siparişiniz yola çıktı!<br/>Teşekkürler. 🧡</div>
                </div>
              </div>

              {/* Box 3: MUHASEBEYE İŞLENİYOR */}
              <div className="w-[280px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-4 shadow-2xl relative">
                <div className="absolute left-[-20px] top-[40%] w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">MUHASEBEYE İŞLENİYOR</div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center flex-shrink-0 border border-[#1E293B]">
                     <span className="material-symbols-outlined text-[20px] text-blue-400">description</span>
                   </div>
                   <div className="flex flex-col flex-1">
                     <div className="text-[13px] font-bold text-white mb-1">Fatura okundu</div>
                     <div className="text-[12px] text-gray-400 mb-0.5">KDV: %20</div>
                     <div className="text-[13px] text-white mt-0.5">Tutar: <span className="font-bold">₺2.450</span></div>
                   </div>
                </div>
              </div>

              {/* Box 4: MUHASEBECİNİZLE PAYLAŞIYOR */}
              <div className="w-[280px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-4 shadow-2xl relative">
                <div className="absolute left-[-20px] top-[40%] w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_blue]"></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">MUHASEBECİNİZLE PAYLAŞIYOR</div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop')] bg-cover bg-center border-2 border-[#1E293B]"></div>
                   <div className="flex flex-col">
                     <div className="text-[13px] font-bold text-white mb-0.5">Yeni belge geldi</div>
                     <div className="text-[12px] text-[#F5B400] font-medium">Onay bekliyor</div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
          
          <div className="flex items-center gap-4 px-6 py-2">
             <div className="w-12 h-12 rounded-full bg-[#00F0FF]/10 flex items-center justify-center border border-[#00F0FF]/20">
               <span className="material-symbols-outlined text-[#00F0FF] text-xl">forum</span>
             </div>
             <div className="flex flex-col">
               <span className="text-2xl font-extrabold text-white">12.5K+</span>
               <span className="text-[12px] text-gray-400 font-medium mt-0.5">Mesaj YanÄ±tlandÄ±</span>
             </div>
          </div>
          
          <div className="w-px h-12 bg-gray-800 hidden md:block"></div>
          
          <div className="flex items-center gap-4 px-6 py-2">
             <div className="w-12 h-12 rounded-full bg-[#b785f5]/10 flex items-center justify-center border border-[#b785f5]/20">
               <span className="material-symbols-outlined text-[#b785f5] text-xl">description</span>
             </div>
             <div className="flex flex-col">
               <span className="text-2xl font-extrabold text-white">3.2K+</span>
               <span className="text-[12px] text-gray-400 font-medium mt-0.5">Belge Ä°ÅŸlendi</span>
             </div>
          </div>
          
          <div className="w-px h-12 bg-gray-800 hidden md:block"></div>
          
          <div className="flex items-center gap-4 px-6 py-2">
             <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
               <span className="material-symbols-outlined text-[#25D366] text-xl">verified</span>
             </div>
             <div className="flex flex-col">
               <span className="text-2xl font-extrabold text-white">98.7%</span>
               <span className="text-[12px] text-gray-400 font-medium mt-0.5">DoÄŸruluk OranÄ±</span>
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
             TÃ¼m Kanallar<br/>
             Tek Gelen Kutusunda
           </h2>
           
           <p className="text-gray-400 text-lg mb-8 leading-relaxed">
             Instagram, WhatsApp, Facebook ve daha fazlasÄ±ndan gelen tÃ¼m mesajlar tek ekranda. AI asistanÄ±nÄ±z 7/24 otomatik yanÄ±tlar.
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
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-ai-purple text-xl">check_circle</span> AnlÄ±k mesaj senkronizasyonu</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-ai-purple text-xl">check_circle</span> AI destekli otomatik yanÄ±tlar</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-ai-purple text-xl">check_circle</span> Yorum aÄŸacÄ± gÃ¶rÃ¼ntÃ¼leme</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-ai-purple text-xl">check_circle</span> Ã–ncelik ve etiket yÃ¶netimi</div>
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
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">forum</span> TÃ¼m Mesajlar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">photo_camera</span> Instagram</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">chat</span> WhatsApp</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">thumb_up</span> Facebook</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">star</span> Yorumlar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors mt-4"><span className="material-symbols-outlined text-[18px]">schedule</span> Bekleyenler</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">archive</span> ArÅŸiv</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors"><span className="material-symbols-outlined text-[18px]">drafts</span> Taslaklar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-[#20242D] cursor-pointer transition-colors mt-auto"><span className="material-symbols-outlined text-[18px]">settings</span> Ayarlar</div>
                 </div>
               </div>

               {/* Middle List */}
               <div className="w-[250px] bg-[#1A1D24] border-r border-[#2A2E35] flex flex-col">
                 <div className="p-4 border-b border-[#2A2E35] flex justify-between items-center">
                   <span className="font-bold text-gray-200 text-sm">TÃ¼m Mesajlar</span>
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
                     <div className="text-[12px] text-gray-500 truncate pl-7">SipariÅŸim ne zaman kargoya verilir?</div>
                   </div>

                   <div className="p-3 border-b border-[#2A2E35] hover:bg-[#20242D] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-[#F5B400] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">star</span></div>
                         <span className="font-bold text-gray-300 text-[13px]">Google Yorum</span>
                       </div>
                       <span className="text-[11px] text-gray-500">15 dk</span>
                     </div>
                     <div className="text-[12px] text-gray-500 truncate pl-7">Harika hizmet, Ã§ok memnun kaldÄ±m.</div>
                   </div>
                   
                   <div className="p-3 border-b border-[#2A2E35] hover:bg-[#20242D] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">thumb_up</span></div>
                         <span className="font-bold text-gray-300 text-[13px]">Facebook Mesaj</span>
                       </div>
                       <span className="text-[11px] text-gray-500">1 sa</span>
                     </div>
                     <div className="text-[12px] text-gray-500 truncate pl-7">ÃœrÃ¼nleriniz garantili mi?</div>
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
                       Merhaba, bu Ã¼rÃ¼nÃ¼n fiyatÄ± nedir? S bedeni var mÄ±?
                     </div>
                   </div>

                   {/* AI Auto Reply Badge */}
                   <div className="self-end mb-[-8px] z-10 flex items-center">
                     <div className="bg-gradient-to-r from-[#0055FF] to-[#8A2BE2] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(138,43,226,0.5)] border border-white/20 flex items-center gap-1">
                       AI OTOMATÄ°K YANITLADI <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                     </div>
                   </div>

                   {/* AI Message */}
                   <div className="flex flex-col items-end gap-1 w-full">
                     <div className="bg-[#2A2E35] text-gray-200 p-3 rounded-2xl rounded-tr-sm text-[13px] max-w-[80%] border border-[#3A3F47]">
                       Merhaba! ğŸ‘‹ ÃœrÃ¼nÃ¼mÃ¼zÃ¼n fiyatÄ± â‚º1.250'dir. StoklarÄ±mÄ±zda mevcut. SipariÅŸ vermek ister misiniz?
                     </div>
                     <div className="flex items-center gap-1 text-[10px] text-gray-500 mr-1">
                       <span>AI YanÄ±tladÄ±</span>
                       <span>â€¢</span>
                       <span>2 dk</span>
                     </div>
                   </div>

                   {/* Action buttons */}
                   <div className="self-end flex gap-2 mt-2">
                     <button className="bg-[#252A33] text-gray-300 border border-[#3A3F47] px-4 py-1.5 rounded-full text-[12px] hover:bg-[#303642] transition-colors">
                       TeÅŸekkÃ¼rler!
                     </button>
                   </div>
                 </div>

                 <div className="p-4 border-t border-[#2A2E35]">
                   <div className="bg-[#20242D] border border-[#3A3F47] rounded-full px-4 py-2 flex items-center justify-between">
                     <input type="text" placeholder="YanÄ±t yaz..." className="bg-transparent border-none outline-none text-sm text-gray-300 w-full placeholder-gray-600" />
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
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
          <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase">GÃœÃ‡LÃœ AI Ã–ZELLÄ°KLERÄ°</span>
        </div>
        
        <h2 className="text-[32px] md:text-[40px] font-extrabold mb-12 text-center">
          Ä°ÅŸletmenizi BÃ¼yÃ¼ten AI GÃ¼cÃ¼
        </h2>

        {/* Horizontal scrollable / grid container */}
        <div className="w-full flex overflow-x-auto pb-8 gap-5 snap-x snap-mandatory scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          
          {/* Card 1: AI Ä°Ã§erik */}
          <div className="min-w-[280px] w-[280px] h-[360px] bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col snap-center hover:border-pink-500/50 transition-colors group">
            <h3 className="font-bold text-lg mb-2 text-white">AI Ä°Ã§erik Ãœretimi</h3>
            <p className="text-[13px] text-gray-400 mb-4 leading-relaxed">Sadece birkaÃ§ kelime ile profesyonel gÃ¶rseller ve metinler oluÅŸturun.</p>
            
            <div className="flex-1 bg-[#1A1D24] rounded-xl border border-[#2A2E35] mt-auto flex flex-col p-3 overflow-hidden relative">
              <div className="flex gap-2 mb-3">
                <div className="bg-[#252A33] text-gray-300 text-[10px] px-2 py-1 rounded font-bold">OluÅŸtur</div>
                <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">thumb_up</span></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">photo_camera</span></div>
                <div className="w-6 h-6 rounded-full bg-[#1DA1F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">flutter_dash</span></div>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden border border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                <div className="absolute w-[150%] h-[150%] bg-white/5 rotate-45 transform translate-y-[-50%] translate-x-[-20%] animate-[scan_4s_linear_infinite]"></div>
                <h4 className="text-[20px] font-black text-white text-center leading-tight drop-shadow-lg z-10">YENÄ° SEZON<br/><span className="text-ai-cyan">Ä°NDÄ°RÄ°MÄ°!</span></h4>
              </div>
            </div>
          </div>

          {/* Card 2: AI Muhasebe */}
          <div className="min-w-[280px] w-[280px] h-[360px] bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col snap-center hover:border-cyan-500/50 transition-colors group">
            <h3 className="font-bold text-lg mb-2 text-white">AI Muhasebe</h3>
            <p className="text-[13px] text-gray-400 mb-4 leading-relaxed">FaturalarÄ± tarayÄ±n, AI tÃ¼m bilgileri ayÄ±klar ve kaydeder.</p>
            
            <div className="flex-1 bg-[#1A1D24] rounded-xl border border-[#2A2E35] mt-auto flex flex-col items-center justify-center p-3 relative overflow-hidden">
               {/* Glowing receipt */}
               <div className="w-[180px] bg-white/90 rounded-sm shadow-[0_0_25px_rgba(0,240,255,0.4)] p-4 transform rotate-[-3deg] relative z-10 flex flex-col font-mono-sm text-gray-800">
                 <div className="text-center font-bold text-[14px] border-b border-gray-300 pb-2 mb-2">FATURA</div>
                 <div className="text-[10px] flex justify-between mb-1"><span>Tarih:</span><span className="font-bold">24.05.2024</span></div>
                 <div className="text-[10px] flex justify-between mb-1"><span>Tutar:</span><span className="font-bold">â‚º2.450,00</span></div>
                 <div className="text-[10px] flex justify-between mb-1"><span>KDV:</span><span className="font-bold">%20</span></div>
                 <div className="text-[10px] flex justify-between mt-2 pt-2 border-t border-gray-300"><span>SatÄ±cÄ±:</span><span className="font-bold truncate max-w-[80px]">ABC Ltd. Åti.</span></div>
               </div>
               
               {/* Scan line */}
               <div className="absolute top-0 left-0 w-full h-1 bg-ai-cyan shadow-[0_0_10px_#00F0FF] z-20 animate-[scan_2.5s_ease-in-out_infinite_alternate]"></div>

               {/* Accuracy badge */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-full px-3 py-1 text-[11px] font-bold z-20 backdrop-blur-md">
                 %99.2 DoÄŸruluk
               </div>
            </div>
          </div>

          {/* Card 3: AI Asistan */}
          <div className="min-w-[280px] w-[280px] h-[360px] bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col snap-center hover:border-purple-500/50 transition-colors group">
            <h3 className="font-bold text-lg mb-2 text-white">AI Asistan</h3>
            <p className="text-[13px] text-gray-400 mb-4 leading-relaxed">DoÄŸal dil ile iÅŸletmenizle ilgili her soruya anÄ±nda cevap alÄ±n.</p>
            
            <div className="flex-1 bg-[#1A1D24] rounded-xl border border-[#2A2E35] mt-auto flex flex-col p-3 overflow-hidden gap-2">
               <div className="self-end bg-[#252A33] text-gray-300 p-2.5 rounded-xl rounded-tr-sm text-[11px] border border-[#3A3F47] max-w-[90%]">
                 Bu ayki toplam harcamam ne?
               </div>
               
               <div className="self-start bg-[#1a1b2e] border border-[#302a5c] text-gray-200 p-2.5 rounded-xl rounded-tl-sm text-[11px] max-w-[95%] flex items-start gap-2">
                 <div className="w-4 h-4 rounded bg-gradient-to-br from-ai-cyan to-ai-purple flex-shrink-0 flex items-center justify-center mt-0.5"><span className="material-symbols-outlined text-white text-[10px]">smart_toy</span></div>
                 <span>Bu ay toplam harcamanÄ±z<br/><span className="font-bold text-white">â‚º48.250,80'dir.</span></span>
               </div>
               
               <div className="self-end bg-[#252A33] text-gray-300 p-2.5 rounded-xl rounded-tr-sm text-[11px] border border-[#3A3F47] max-w-[90%] opacity-50">
                 En Ã§ok hangi Ã¼rÃ¼nÃ¼ sattÄ±m?
               </div>

               {/* Audio Waveform */}
               <div className="mt-auto h-8 w-full flex items-center justify-center gap-[2px]">
                 {[...Array(24)].map((_, i) => (
                   <div key={i} className="w-[3px] bg-gradient-to-t from-ai-purple to-ai-cyan rounded-full animate-pulse" style={{
                     height: `${Math.max(4, Math.random() * 24)}px`,
                     animationDelay: `${i * 0.1}s`,
                     animationDuration: '0.8s'
                   }}></div>
                 ))}
               </div>
            </div>
          </div>

          {/* Card 4: AI Analitik */}
          <div className="min-w-[280px] w-[280px] h-[360px] bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col snap-center hover:border-blue-500/50 transition-colors group">
            <h3 className="font-bold text-lg mb-2 text-white">AI Analitik</h3>
            <p className="text-[13px] text-gray-400 mb-4 leading-relaxed">TÃ¼m performans verilerinizi akÄ±llÄ± grafiklerle analiz edin.</p>
            
            <div className="flex-1 bg-[#1A1D24] rounded-xl border border-[#2A2E35] mt-auto flex flex-col p-4 relative overflow-hidden">
               <div className="text-[11px] text-gray-400 mb-1">Toplam Gelir</div>
               <div className="flex items-end gap-2 mb-4">
                 <span className="text-xl font-bold text-white">â‚º125,430</span>
                 <span className="text-[11px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded font-bold mb-1">+25.5%</span>
               </div>
               
               {/* Animated Chart SVG */}
               <div className="flex-1 w-full relative flex items-end">
                  <svg className="w-full h-full preserve-3d" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(138,43,226,0.4)" />
                        <stop offset="100%" stopColor="rgba(138,43,226,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,100 L0,70 Q25,80 50,50 T100,40 T150,60 T200,20 L200,100 Z" fill="url(#chart-grad)" />
                    <path d="M0,70 Q25,80 50,50 T100,40 T150,60 T200,20" fill="none" stroke="#8A2BE2" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(138,43,226,0.8)]" />
                    
                    {/* Glowing dot on the peak */}
                    <circle cx="200" cy="20" r="4" fill="#fff" className="animate-pulse shadow-[0_0_10px_#fff]" />
                  </svg>
               </div>
            </div>
          </div>

          {/* Card 5: AI Otomasyon */}
          <div className="min-w-[280px] w-[280px] h-[360px] bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col snap-center hover:border-green-500/50 transition-colors group">
            <h3 className="font-bold text-lg mb-2 text-white">AI Otomasyon</h3>
            <p className="text-[13px] text-gray-400 mb-4 leading-relaxed">Ä°ÅŸ sÃ¼reÃ§lerinizi otomatikleÅŸtirin, zaman kazanÄ±n.</p>
            
            <div className="flex-1 bg-[#1A1D24] rounded-xl border border-[#2A2E35] mt-auto flex flex-col p-4 justify-center gap-3">
               
               <div className="flex items-center gap-3 bg-[#20242D] border border-[#2A2E35] p-2.5 rounded-lg">
                 <div className="w-6 h-6 rounded bg-[#252A33] border border-[#3A3F47] flex items-center justify-center">
                   <span className="material-symbols-outlined text-[#00F0FF] text-[14px]">receipt</span>
                 </div>
                 <span className="text-[12px] text-gray-300 font-medium">Yeni Fatura YÃ¼klendi</span>
               </div>
               
               <div className="flex justify-center -my-2"><span className="material-symbols-outlined text-gray-600 text-[16px]">arrow_downward</span></div>

               <div className="flex items-center gap-3 bg-[#1a2221] border border-[#203a31] p-2.5 rounded-lg">
                 <div className="w-6 h-6 rounded bg-[#1e2e28] border border-[#25D366]/30 flex items-center justify-center">
                   <span className="material-symbols-outlined text-[#25D366] text-[14px]">psychology</span>
                 </div>
                 <span className="text-[12px] text-[#25D366] font-medium">AI Okudu ve Ä°ÅŸledi</span>
               </div>
               
               <div className="flex justify-center -my-2"><span className="material-symbols-outlined text-gray-600 text-[16px]">arrow_downward</span></div>

               <div className="flex items-center gap-3 bg-[#20242D] border border-[#2A2E35] p-2.5 rounded-lg opacity-60">
                 <div className="w-6 h-6 rounded bg-[#252A33] border border-[#3A3F47] flex items-center justify-center">
                   <span className="material-symbols-outlined text-gray-400 text-[14px]">send</span>
                 </div>
                 <span className="text-[12px] text-gray-400 font-medium">Muhasebeciye GÃ¶nderildi</span>
               </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- Workflow Process Section --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
          <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase">AKILLI MUHASEBE SÃœRECÄ°</span>
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
               <p className="text-[11px] text-gray-400">FaturanÄ±zÄ± Ã§ekin veya yÃ¼kleyin.</p>
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
               <p className="text-[11px] text-gray-400">AI tÃ¼m bilgileri otomatik olarak Ã§Ä±karÄ±r.</p>
             </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-[15%]">
             <div className="w-24 h-24 rounded-2xl bg-[#121418] border border-[#F5B400]/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(245,180,0,0.2)] relative group">
               <div className="w-full px-3 flex flex-col gap-1.5">
                 <div className="flex justify-between items-center bg-[#252A33] px-1.5 py-0.5 rounded text-[8px] border-l-2 border-[#F5B400]"><span className="text-gray-300">Yemek</span><span className="font-bold text-[#F5B400]">â‚º450</span></div>
                 <div className="flex justify-between items-center bg-[#252A33] px-1.5 py-0.5 rounded text-[8px] border-l-2 border-ai-cyan"><span className="text-gray-300">UlaÅŸÄ±m</span><span className="font-bold text-ai-cyan">â‚º250</span></div>
                 <div className="flex justify-between items-center bg-[#252A33] px-1.5 py-0.5 rounded text-[8px] border-l-2 border-ai-purple"><span className="text-gray-300">Ofis</span><span className="font-bold text-ai-purple">â‚º350</span></div>
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
               <div className="bg-ai-blue text-white text-[7px] px-2 py-0.5 rounded-full mt-2 font-bold">Ä°ncele</div>
               <span className="text-[10px] text-gray-400 font-bold mt-2 absolute bottom-2">4. Muhasebeci</span>
             </div>
             <div className="text-center">
               <h4 className="font-bold text-white text-sm mb-1">4. Muhasebeci</h4>
               <p className="text-[11px] text-gray-400">Muhasebeciniz anÄ±nda belgeyi alÄ±r.</p>
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
               <p className="text-[11px] text-gray-400">OnaylanÄ±r ve muhasebe programÄ±na aktarÄ±lÄ±r.</p>
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
               <p className="text-[11px] text-gray-400">RaporlarÄ±nÄ±z otomatik oluÅŸturulur.</p>
             </div>
          </div>

        </div>
      </section>

      {/* --- Integrations Section --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
          <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase">GÃœÃ‡LÃœ ENTEGRASYONLAR</span>
        </div>
        
        <h2 className="text-[32px] md:text-[40px] font-extrabold mb-12 text-center">
          KullandÄ±ÄŸÄ±nÄ±z Platformlarla Tam Entegre
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
            <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200">Muhasebe<br/>ProgramlarÄ±</span>
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
               Ä°ÅŸletmenizin GeleceÄŸi<br/>BugÃ¼nden BaÅŸlasÄ±n
             </h2>
             <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md">
               AI Esnaf ile tanÄ±ÅŸÄ±n, iÅŸlerinizi kolaylaÅŸtÄ±rÄ±n ve bÃ¼yÃ¼menize odaklanÄ±n.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="bg-gradient-to-r from-ai-purple to-indigo-600 text-white font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(138,43,226,0.6)] transition-all duration-300">
                  Ãœcretsiz Hesap OluÅŸtur <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
                 <span className="font-bold text-white text-[15px]">14 GÃ¼n Ãœcretsiz Deneme</span>
                 <span className="text-[12px] text-gray-400">Kredi kartÄ± gerekmez</span>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-lg bg-[#252A33] border border-[#3A3F47] flex items-center justify-center flex-shrink-0 mt-1">
                 <span className="material-symbols-outlined text-gray-300 text-[16px]">headphones</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-white text-[15px]">Kurulum DesteÄŸi</span>
                 <span className="text-[12px] text-gray-400">Ekibimiz sizinle ilgilenecek</span>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-lg bg-[#252A33] border border-[#3A3F47] flex items-center justify-center flex-shrink-0 mt-1">
                 <span className="material-symbols-outlined text-gray-300 text-[16px]">support_agent</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-white text-[15px]">7/24 Destek</span>
                 <span className="text-[12px] text-gray-400">Her zaman yanÄ±nÄ±zdayÄ±z</span>
               </div>
             </div>
           </div>

         </div>
      </section>

    </div>
  );
}

