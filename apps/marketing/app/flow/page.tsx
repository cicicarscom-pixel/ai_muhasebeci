export const dynamic = 'force-dynamic';
import React from 'react';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white font-sans overflow-x-hidden selection:bg-ai-purple selection:text-white">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-hero-glow blur-3xl opacity-60 mix-blend-screen"></div>
        <div className="absolute top-[300px] left-[-300px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,rgba(0,0,0,0)_60%)] blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-[800px] right-[-300px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.05)_0%,rgba(0,0,0,0)_60%)] blur-[100px] mix-blend-screen"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      </div>

      {/* --- Navbar --- */}
      <nav className="relative z-50 flex items-center justify-between max-w-[1200px] mx-auto px-6 py-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center p-[1px]">
             <div className="w-full h-full bg-[#07090E] rounded-[7px] flex items-center justify-center">
                <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-br from-[#00F0FF] to-[#8A2BE2] text-[18px]">smart_toy</span>
             </div>
          </div>
          <span className="font-extrabold text-[22px] tracking-tight text-white">AI Esnaf</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-gray-400">
          <a href="#" className="text-white">Özellikler</a>
          <a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a>
          <a href="#" className="hover:text-white transition-colors">Çözümler</a>
          <a href="#" className="hover:text-white transition-colors">Kaynaklar</a>
          <a href="#" className="hover:text-white transition-colors">Entegrasyonlar</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-[13px] font-semibold text-gray-300 hover:text-white transition-colors">Giriş Yap</a>
          <button className="bg-gradient-to-r from-[#8A2BE2] to-[#6A0DAD] text-white text-[13px] font-bold px-6 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(138,43,226,0.6)] transition-all">
            Ücretsiz Dene
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center gap-8 min-h-[80vh]">
        
        {/* Left Column (Text & Buttons) */}
        <div className="flex-1 flex flex-col items-start z-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6">
             <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">YENİ NESİL, AI İŞLETİM SİSTEMİ</span>
          </div>
          
          <h1 className="text-[52px] md:text-[60px] leading-[1.05] font-extrabold tracking-tight mb-6 text-white">
            İşletmenizi<br />
            Yöneten Tek<br />
            <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">Yapay </span>
            <span className="text-[#8A2BE2] drop-shadow-[0_0_10px_rgba(138,43,226,0.4)]">Zeka</span>
          </h1>
          
          <p className="text-[#8E95B3] text-[16px] max-w-[480px] mb-8 leading-relaxed font-medium">
            Sosyal medyadan muhasebeye, müşteri iletişiminden içerik üretimine kadar tüm iş süreçlerinizi tek platformda otonom yapay zeka ile yönetin.
          </p>
          
          <div className="flex flex-wrap items-center gap-5 mb-10 text-[12px] font-semibold text-[#8E95B3]">
            <div className="flex items-center gap-2"><div className="w-[18px] h-[18px] rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center"><span className="material-symbols-outlined text-[#B4B8D0] text-[12px]">check</span></div> 7/24 AI Asistan</div>
            <div className="flex items-center gap-2"><div className="w-[18px] h-[18px] rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center"><span className="material-symbols-outlined text-[#B4B8D0] text-[12px]">check</span></div> Otomatik Yanıtlar</div>
            <div className="flex items-center gap-2"><div className="w-[18px] h-[18px] rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center"><span className="material-symbols-outlined text-[#B4B8D0] text-[12px]">check</span></div> Akıllı Muhasebe</div>
            <div className="flex items-center gap-2"><div className="w-[18px] h-[18px] rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center"><span className="material-symbols-outlined text-[#B4B8D0] text-[12px]">check</span></div> Gerçek Zamanlı Analiz</div>
          </div>
          
          <div className="flex items-center gap-4 mb-10">
            <button className="bg-gradient-to-r from-[#00F0FF] to-[#0080FF] text-white font-bold px-7 py-3 rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all text-[14px]">
              Ücretsiz Deneyin <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
            <button className="bg-transparent border border-[#232B45] text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2 hover:bg-[#111424] transition-colors text-[14px]">
              <span className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center"><span className="material-symbols-outlined text-[12px] ml-0.5">play_arrow</span></span>
              Canlı Demo İzle
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-[#07090E]" alt="User" />
              <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-[#07090E]" alt="User" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-[#07090E]" alt="User" />
              <img src="https://i.pravatar.cc/100?img=4" className="w-10 h-10 rounded-full border-2 border-[#07090E]" alt="User" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#F5B400]">
                <span className="material-symbols-outlined text-[14px]" data-weight="fill">star</span>
                <span className="material-symbols-outlined text-[14px]" data-weight="fill">star</span>
                <span className="material-symbols-outlined text-[14px]" data-weight="fill">star</span>
                <span className="material-symbols-outlined text-[14px]" data-weight="fill">star</span>
                <span className="material-symbols-outlined text-[14px]" data-weight="fill">star_half</span>
                <span className="text-white font-bold ml-1 text-[13px]">4.9/5</span>
              </div>
              <span className="text-[11px] text-[#8E95B3] font-medium mt-0.5">1.000+ işletme AI Esnaf kullanıyor</span>
            </div>
          </div>
        </div>

        {/* Right Column (AI Core Graphic) */}
        <div className="flex-[1.2] relative w-full h-[600px] hidden lg:flex items-center justify-center z-10">
          <div className="relative w-full max-w-[850px] aspect-[4/3] flex items-center justify-center scale-[0.85] xl:scale-100 origin-center">
          
          {/* Background Ambient Glow - Much stronger */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[450px] h-[450px] rounded-full mix-blend-screen" style={{background:'radial-gradient(circle at center, rgba(138,43,226,0.35) 0%, rgba(0,100,255,0.2) 40%, rgba(0,0,0,0) 70%)',filter:'blur(60px)'}}></div>
          </div>

          {/* SVG Connecting lines - Thicker, more curves, stronger glow */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center">
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 850 600" preserveAspectRatio="xMidYMid meet">
               <defs>
                 <linearGradient id="neon-blue-pink" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#00F0FF" />
                   <stop offset="100%" stopColor="#8A2BE2" />
                 </linearGradient>
                 <linearGradient id="neon-pink-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#8A2BE2" />
                   <stop offset="100%" stopColor="#00F0FF" />
                 </linearGradient>
                 <linearGradient id="neon-pink-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#FF00FF" />
                   <stop offset="100%" stopColor="#8A2BE2" />
                 </linearGradient>
                 <filter id="glow-strong" x="-30%" y="-30%" width="160%" height="160%">
                   <feGaussianBlur stdDeviation="4" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
                 <filter id="glow-ultra" x="-40%" y="-40%" width="180%" height="180%">
                   <feGaussianBlur stdDeviation="6" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
               </defs>

               {/* Left side lines - thicker, more organic curves */}
               <path d="M 240,155 C 290,155 310,260 370,275" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 238,158 C 285,170 325,250 372,272" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.4" />
               <path d="M 240,205 C 295,205 315,280 370,285" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 237,208 C 280,220 330,270 373,283" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.4" />
               <path d="M 240,255 C 290,255 320,290 370,292" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 238,258 C 285,265 335,285 373,290" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.35" />
               <path d="M 240,305 C 290,305 325,298 370,298" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 237,308 C 280,310 340,300 373,296" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.35" />
               <path d="M 240,355 C 290,355 325,308 370,305" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 238,360 C 285,350 340,310 373,303" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.35" />
               <path d="M 240,405 C 290,405 320,315 370,312" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 237,410 C 280,400 335,318 373,310" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.35" />
               
               {/* Right side lines - thicker, more organic curves */}
               <path d="M 480,268 C 530,268 545,140 600,138" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 482,265 C 535,260 550,145 602,140" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.4" />
               <path d="M 480,288 C 525,288 545,258 600,258" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 482,285 C 530,282 550,262 602,260" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.4" />
               <path d="M 480,308 C 525,308 548,368 600,368" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 482,305 C 530,310 553,365 602,370" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.35" />
               <path d="M 480,328 C 535,328 545,468 600,468" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.9" />
               <path d="M 482,325 C 540,335 548,465 602,470" fill="none" stroke="url(#neon-pink-magenta)" strokeWidth="1.5" filter="url(#glow-ultra)" opacity="0.35" />
               
               {/* Glowing dots on lines */}
               <circle cx="270" cy="185" r="3" fill="#00F0FF" filter="url(#glow-ultra)" />
               <circle cx="305" cy="248" r="3" fill="#00F0FF" filter="url(#glow-ultra)" />
               <circle cx="285" cy="330" r="3" fill="#FF00FF" filter="url(#glow-ultra)" />
               <circle cx="265" cy="380" r="3" fill="#8A2BE2" filter="url(#glow-ultra)" />
               <circle cx="545" cy="195" r="3" fill="#8A2BE2" filter="url(#glow-ultra)" />
               <circle cx="530" cy="300" r="3" fill="#FF00FF" filter="url(#glow-ultra)" />
               <circle cx="555" cy="420" r="3" fill="#8A2BE2" filter="url(#glow-ultra)" />
            </svg>
          </div>

          {/* Left Box: TÜM KANALLAR TEK YERDE */}
          <div className="absolute left-[30px] top-[120px] w-[210px] bg-[#0A0D14]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-4 shadow-2xl z-20">
            <div className="text-[9px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-4">TÜM KANALLAR TEK YERDE</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">photo_camera</span></div>
                  <span className="text-[12px] font-medium text-white">Instagram</span>
                </div>
                <div className="bg-[#E11D48] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">23</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[5px] bg-[#25D366] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">chat</span></div>
                  <span className="text-[12px] font-medium text-white">WhatsApp</span>
                </div>
                <div className="bg-[#E11D48] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">15</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[5px] bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">thumb_up</span></div>
                  <span className="text-[12px] font-medium text-white">Facebook</span>
                </div>
                <div className="bg-[#1E3A8A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">12</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[5px] bg-[#F5B400] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">star</span></div>
                  <span className="text-[12px] font-medium text-white">Google Yorumlar</span>
                </div>
                <div className="bg-[#1E3A8A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">8</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[5px] bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">forum</span></div>
                  <span className="text-[12px] font-medium text-white">Messenger</span>
                </div>
                <div className="bg-[#1E3A8A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">7</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[5px] bg-[#0A66C2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">work</span></div>
                  <span className="text-[12px] font-medium text-white">LinkedIn</span>
                </div>
                <div className="bg-[#1E3A8A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">4</div>
              </div>
            </div>
          </div>

          {/* Central AI Sphere - Cosmic Nebula */}
          <div className="absolute z-30 flex flex-col items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-3">
            
            {/* Top Chat Bubble */}
            <div className="absolute top-[-95px] left-[-20px] bg-[#0A0D14]/90 border border-white/5 rounded-xl rounded-bl-sm p-3 w-[150px] shadow-2xl flex flex-col gap-1.5 z-40 backdrop-blur-md">
              <div className="text-[9px] text-[#B4B8D0] font-bold uppercase tracking-widest">AI ASİSTAN</div>
              <div className="text-[11px] text-white leading-tight">Merhaba! Size nasıl yardımcı olabilirim?</div>
              <div className="absolute right-[-15px] top-[15px] w-6 h-6 rounded-full bg-[#0A0D14] border border-[#00F0FF]/30 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                <span className="material-symbols-outlined text-[12px] text-[#00F0FF]">graphic_eq</span>
              </div>
            </div>

            {/* Glowing Cosmic Nebula Sphere */}
            <div className="w-[180px] h-[180px] rounded-full relative flex items-center justify-center mt-6">
              {/* Outer glow layers */}
              <div className="absolute w-[280px] h-[280px] rounded-full" style={{background:'radial-gradient(circle at center, rgba(138,43,226,0.4) 0%, rgba(0,100,255,0.15) 40%, transparent 70%)',filter:'blur(30px)'}}></div>
              <div className="absolute w-[220px] h-[220px] rounded-full" style={{background:'radial-gradient(circle at center, rgba(255,0,255,0.2) 0%, rgba(138,43,226,0.15) 50%, transparent 70%)',filter:'blur(20px)'}}></div>
              
              {/* Outer ring glow */}
              <div className="absolute w-full h-full rounded-full" style={{boxShadow:'0 0 40px rgba(138,43,226,0.6), 0 0 80px rgba(138,43,226,0.3), 0 0 120px rgba(0,100,255,0.2), inset 0 0 40px rgba(138,43,226,0.4), inset 0 0 80px rgba(0,50,255,0.2)',border:'2px solid rgba(138,43,226,0.5)'}}></div>
              
              {/* Wireframe globe rings */}
              <div className="absolute w-full h-full rounded-full border border-blue-400/40 shadow-[inset_0_0_30px_rgba(100,0,255,0.5)]"></div>
              <div className="absolute w-full h-full rounded-full border border-purple-400/25 rotate-[45deg] scale-x-50"></div>
              <div className="absolute w-full h-full rounded-full border border-purple-400/25 rotate-[-45deg] scale-x-50"></div>
              <div className="absolute w-full h-full rounded-full border border-blue-400/25 rotate-[90deg] scale-y-50"></div>
              <div className="absolute w-[140%] h-[140%] rounded-full border border-purple-500/10"></div>
              
              {/* Nebula core */}
              <div className="w-[120px] h-[120px] rounded-full z-10 relative overflow-hidden flex items-center justify-center" style={{background:'radial-gradient(circle at 35% 35%, rgba(180,100,255,0.9) 0%, rgba(100,0,200,0.8) 25%, rgba(50,0,150,0.9) 50%, rgba(20,0,80,1) 75%, rgba(5,7,10,1) 100%)',boxShadow:'0 0 30px rgba(138,43,226,0.8), 0 0 60px rgba(100,0,200,0.4), inset 0 0 20px rgba(0,100,255,0.3)'}}>
                {/* Light streaks inside */}
                <div className="absolute w-full h-full" style={{background:'conic-gradient(from 45deg, transparent 0%, rgba(0,200,255,0.15) 10%, transparent 20%, rgba(255,0,255,0.1) 40%, transparent 50%, rgba(100,150,255,0.15) 65%, transparent 75%, rgba(200,100,255,0.1) 90%, transparent 100%)'}}></div>
                <div className="absolute w-[60%] h-[60%] rounded-full" style={{background:'radial-gradient(circle at 40% 40%, rgba(200,150,255,0.6) 0%, transparent 60%)',filter:'blur(8px)'}}></div>
                <span className="text-[42px] font-black text-white z-10" style={{textShadow:'0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(138,43,226,0.6), 0 0 60px rgba(0,100,255,0.4)'}}>AI</span>
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div className="absolute bottom-[-30px] bg-[#0A0D14]/90 border border-white/5 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 z-40 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]"></div>
              <span className="text-[9px] font-bold text-white tracking-widest">7/24 OTONOM ÇALIŞIYOR</span>
            </div>
          </div>

          {/* Right Boxes Container */}
          <div className="absolute right-[10px] top-[100px] flex flex-col gap-4 z-20">
            
            {/* Box 1: İÇERİK ÜRETİYOR */}
            <div className="w-[220px] bg-[#0A0D14]/90 backdrop-blur-xl border border-white/5 rounded-[12px] p-3 shadow-2xl relative">
              <div className="text-[9px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-2">İÇERİK ÜRETİYOR</div>
              <div className="flex gap-3 items-center">
                 <div className="w-12 h-12 rounded-lg bg-[url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=150&auto=format&fit=crop')] bg-cover bg-center border border-purple-500/30 flex-shrink-0"></div>
                 <div className="flex flex-col">
                   <div className="text-[11px] leading-[1.2] text-white font-medium mb-1.5">Yeni koleksiyon paylaşımı hazır! ✨</div>
                   <div className="flex gap-1">
                     <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">photo_camera</span></div>
                     <div className="w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">thumb_up</span></div>
                     <div className="w-4 h-4 rounded-full bg-[#0A66C2] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">work</span></div>
                     <div className="w-4 h-4 rounded-full bg-[#EA4335] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">g_translate</span></div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Box 2: MÜŞTERİLERE YANIT VERİYOR */}
            <div className="w-[220px] bg-[#0A0D14]/90 backdrop-blur-xl border border-white/5 rounded-[12px] p-3 shadow-2xl relative">
              <div className="text-[9px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-2">MÜŞTERİLERE YANIT VERİYOR</div>
              <div className="bg-[#111424] rounded-lg p-2 border border-[#232B45] flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-[10px] text-white">chat</span></div>
                 <div className="text-[11px] leading-[1.3] text-[#B4B8D0]">Siparişiniz yola çıktı!<br/><span className="text-white">Teşekkürler. 🧡</span></div>
              </div>
            </div>

            {/* Box 3: MUHASEBEYE İŞLENİYOR */}
            <div className="w-[220px] bg-[#0A0D14]/90 backdrop-blur-xl border border-white/5 rounded-[12px] p-3 shadow-2xl relative">
              <div className="text-[9px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-2">MUHASEBEYE İŞLENİYOR</div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-[#111424] flex items-center justify-center flex-shrink-0 border border-[#00F0FF]/30">
                   <span className="material-symbols-outlined text-[18px] text-[#00F0FF]">description</span>
                 </div>
                 <div className="flex flex-col flex-1">
                   <div className="text-[11px] font-bold text-white mb-0.5">Fatura okundu</div>
                   <div className="text-[10px] text-[#B4B8D0]">KDV: %20</div>
                   <div className="text-[11px] text-[#B4B8D0] mt-0.5">Tutar: <span className="font-bold text-white">₺2.450</span></div>
                 </div>
              </div>
            </div>

            {/* Box 4: MUHASEBECİNİZLE PAYLAŞIYOR */}
            <div className="w-[220px] bg-[#0A0D14]/90 backdrop-blur-xl border border-white/5 rounded-[12px] p-3 shadow-2xl relative">
              <div className="text-[9px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-2">MUHASEBECİNİZLE PAYLAŞIYOR</div>
              <div className="flex items-center gap-3">
                 <div className="w-9 h-9 rounded-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop')] bg-cover bg-center border-2 border-[#111424]"></div>
                 <div className="flex flex-col">
                   <div className="text-[11px] font-bold text-white mb-0.5">Yeni belge geldi</div>
                   <div className="text-[10px] text-[#F5B400] font-medium">Onay bekliyor</div>
                 </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </main>

      {/* --- Stats Row --- */}
      <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between border-y border-white/5 py-8 gap-8">
          <div className="flex items-center gap-4 px-4 flex-1 justify-center md:justify-start">
             <div className="w-10 h-10 rounded-full bg-[#00F0FF]/10 flex items-center justify-center border border-[#00F0FF]/20">
               <span className="material-symbols-outlined text-[#00F0FF] text-[18px]">forum</span>
             </div>
             <div className="flex flex-col">
               <span className="text-[24px] font-extrabold text-white leading-tight">12.5K+</span>
               <span className="text-[12px] text-[#B4B8D0] font-medium">Mesaj Yanıtlandı</span>
             </div>
          </div>
          
          <div className="w-px h-12 bg-white/5 hidden md:block"></div>
          
          <div className="flex items-center gap-4 px-4 flex-1 justify-center">
             <div className="w-10 h-10 rounded-full bg-[#8A2BE2]/10 flex items-center justify-center border border-[#8A2BE2]/20">
               <span className="material-symbols-outlined text-[#8A2BE2] text-[18px]">description</span>
             </div>
             <div className="flex flex-col">
               <span className="text-[24px] font-extrabold text-white leading-tight">3.2K+</span>
               <span className="text-[12px] text-[#B4B8D0] font-medium">Belge İşlendi</span>
             </div>
          </div>
          
          <div className="w-px h-12 bg-white/5 hidden md:block"></div>
          
          <div className="flex items-center gap-4 px-4 flex-1 justify-center">
             <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
               <span className="material-symbols-outlined text-[#10B981] text-[18px]">verified</span>
             </div>
             <div className="flex flex-col">
               <span className="text-[24px] font-extrabold text-white leading-tight">98.7%</span>
               <span className="text-[12px] text-[#B4B8D0] font-medium">Doğruluk Oranı</span>
             </div>
          </div>
          
          <div className="w-px h-12 bg-white/5 hidden md:block"></div>
          
          <div className="flex items-center gap-4 px-4 flex-1 justify-center md:justify-end">
             <div className="w-10 h-10 rounded-full bg-[#F5B400]/10 flex items-center justify-center border border-[#F5B400]/20">
               <span className="material-symbols-outlined text-[#F5B400] text-[18px]">bolt</span>
             </div>
             <div className="flex flex-col">
               <span className="text-[24px] font-extrabold text-white leading-tight">7/24</span>
               <span className="text-[12px] text-[#B4B8D0] font-medium">Kesintisiz Hizmet</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- Omnichannel Inbox Section --- */}
      <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-32 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Text Side */}
        <div className="flex-[0.8] flex flex-col items-start">
           <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6">
             <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">AI OMNICHANNEL GELEN KUTUSU</span>
           </div>
           
           <h2 className="text-[36px] md:text-[44px] font-extrabold leading-[1.15] mb-6 text-white tracking-tight">
             Tüm Kanallar<br/>
             Tek Gelen Kutusunda
           </h2>
           
           <p className="text-[#8E95B3] text-[15px] mb-8 leading-relaxed font-medium">
             Instagram, WhatsApp, Facebook ve daha fazlasından gelen tüm mesajlar tek ekranda. AI asistanınız 7/24 otomatik yanıtlar.
           </p>

           {/* Social Icons Row */}
           <div className="flex flex-wrap items-center gap-3 mb-10">
             <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">photo_camera</span></div>
             <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">chat</span></div>
             <div className="w-9 h-9 rounded-lg bg-[#1877F2] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">thumb_up</span></div>
             <div className="w-9 h-9 rounded-lg bg-[#F5B400] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">star</span></div>
             <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">forum</span></div>
             <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">music_note</span></div>
             <div className="w-9 h-9 rounded-lg bg-[#111424] border border-[#232B45] flex items-center justify-center text-[12px] font-bold text-[#B4B8D0]">+3</div>
           </div>

           {/* Checkmarks */}
           <div className="flex flex-col gap-4 text-[#B4B8D0] font-medium text-[14px]">
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[#8A2BE2] text-[18px]">check_circle</span> Anlık mesaj senkronizasyonu</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[#8A2BE2] text-[18px]">check_circle</span> AI destekli otomatik yanıtlar</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[#8A2BE2] text-[18px]">check_circle</span> Yorum ağacı görüntüleme</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[#8A2BE2] text-[18px]">check_circle</span> Öncelik ve etiket yönetimi</div>
           </div>
        </div>

        {/* Dashboard Mockup Side */}
        <div className="flex-[1.2] w-full">
           <div className="w-full bg-[#0D1017] rounded-2xl border border-white/5 shadow-2xl overflow-hidden flex flex-col font-sans relative">
             
             {/* Glow behind mockup */}
             <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF]/10 to-[#8A2BE2]/10 blur-xl z-[-1]"></div>

             {/* Mockup Header */}
             <div className="h-10 bg-[#161922] border-b border-white/5 flex items-center px-4 gap-4 justify-between">
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded flex items-center justify-center bg-gradient-to-br from-[#00F0FF] to-[#8A2BE2]"><span className="material-symbols-outlined text-white text-[10px]">smart_toy</span></div>
                 <span className="font-bold text-[12px] text-gray-200">AI Esnaf</span>
               </div>
               <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
               </div>
             </div>

             <div className="flex h-[450px]">
               {/* Sidebar */}
               <div className="w-[180px] bg-[#0A0D14] border-r border-white/5 flex flex-col p-3">
                 <div className="bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 rounded-lg p-2 flex items-center justify-between mb-4 cursor-pointer">
                   <div className="flex items-center gap-2 text-white">
                     <span className="material-symbols-outlined text-[16px]">inbox</span>
                     <span className="text-[12px] font-medium">Gelen Kutusu</span>
                   </div>
                   <span className="bg-[#8A2BE2] text-white text-[9px] px-1.5 py-0.5 rounded font-bold">82</span>
                 </div>
                 
                 <div className="flex flex-col gap-1.5 text-[12px]">
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-300 bg-white/5"><span className="material-symbols-outlined text-[16px]">forum</span> Tüm Mesajlar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors"><span className="material-symbols-outlined text-[16px]">photo_camera</span> Instagram</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors"><span className="material-symbols-outlined text-[16px]">chat</span> WhatsApp</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors"><span className="material-symbols-outlined text-[16px]">thumb_up</span> Facebook</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors"><span className="material-symbols-outlined text-[16px]">star</span> Yorumlar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors mt-2"><span className="material-symbols-outlined text-[16px]">schedule</span> Bekleyenler</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors"><span className="material-symbols-outlined text-[16px]">archive</span> Arşiv</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors"><span className="material-symbols-outlined text-[16px]">drafts</span> Taslaklar</div>
                   <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors mt-auto"><span className="material-symbols-outlined text-[16px]">settings</span> Ayarlar</div>
                 </div>
               </div>

               {/* Middle List */}
               <div className="w-[220px] bg-[#0D1017] border-r border-white/5 flex flex-col">
                 <div className="p-3 border-b border-white/5 flex justify-between items-center">
                   <span className="font-bold text-gray-200 text-[13px]">Tüm Mesajlar</span>
                   <span className="material-symbols-outlined text-gray-400 text-[16px]">filter_list</span>
                 </div>
                 
                 <div className="flex-1 overflow-y-auto">
                   {/* Item 1 */}
                   <div className="p-3 border-b border-white/5 bg-[#161922] border-l-2 border-l-[#8A2BE2] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-[4px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">photo_camera</span></div>
                         <span className="font-bold text-white text-[12px]">Instagram DM</span>
                       </div>
                       <span className="text-[10px] text-gray-400">2 dk</span>
                     </div>
                     <div className="text-[11px] text-gray-300 truncate pl-7">Merhaba, fiyat bilgisi alabilir miyim?</div>
                   </div>

                   {/* Item 2 */}
                   <div className="p-3 border-b border-white/5 hover:bg-[#161922] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-[4px] bg-[#25D366] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">chat</span></div>
                         <span className="font-medium text-gray-300 text-[12px]">WhatsApp</span>
                       </div>
                       <span className="text-[10px] text-gray-500">5 dk</span>
                     </div>
                     <div className="text-[11px] text-gray-500 truncate pl-7">Siparişim ne zaman kargoya verilir?</div>
                   </div>

                   {/* Item 3 */}
                   <div className="p-3 border-b border-white/5 hover:bg-[#161922] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-[4px] bg-[#F5B400] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">star</span></div>
                         <span className="font-medium text-gray-300 text-[12px]">Google Yorum</span>
                       </div>
                       <span className="text-[10px] text-gray-500">15 dk</span>
                     </div>
                     <div className="text-[11px] text-gray-500 truncate pl-7">Harika hizmet, çok memnun kaldım.</div>
                   </div>
                   
                   {/* Item 4 */}
                   <div className="p-3 border-b border-white/5 hover:bg-[#161922] cursor-pointer">
                     <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-[4px] bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">thumb_up</span></div>
                         <span className="font-medium text-gray-300 text-[12px]">Facebook Mesaj</span>
                       </div>
                       <span className="text-[10px] text-gray-500">1 sa</span>
                     </div>
                     <div className="text-[11px] text-gray-500 truncate pl-7">Ürünleriniz garantili mi?</div>
                   </div>
                 </div>
               </div>

               {/* Right Chat View */}
               <div className="flex-1 bg-[#0A0D14] flex flex-col relative">
                 <div className="h-[52px] border-b border-white/5 flex items-center justify-between px-4">
                   <div className="flex items-center gap-3">
                     <div className="w-7 h-7 rounded-[5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[14px]">photo_camera</span></div>
                     <span className="font-bold text-white text-[13px]">Instagram DM</span>
                   </div>
                   <div className="flex gap-3 text-gray-400">
                     <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-white">search</span>
                     <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-white">more_horiz</span>
                   </div>
                 </div>

                 <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 relative">
                   {/* User Message */}
                   <div className="flex items-start gap-3 w-full">
                     <div className="w-6 h-6 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
                       <img src="https://i.pravatar.cc/100?img=12" alt="user" />
                     </div>
                     <div className="bg-[#161922] text-gray-200 p-3 rounded-2xl rounded-tl-sm text-[12px] max-w-[80%] border border-white/5">
                       Merhaba, bu ürünün fiyatı nedir? S bedeni var mı?
                     </div>
                   </div>

                   {/* AI Auto Reply Badge */}
                   <div className="self-end mb-[-12px] z-10 flex items-center">
                     <div className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(138,43,226,0.5)] border border-white/20 flex items-center gap-1">
                       AI OTOMATİK YANITLADI <span className="material-symbols-outlined text-[10px]">auto_awesome</span>
                     </div>
                   </div>

                   {/* AI Message */}
                   <div className="flex flex-col items-end gap-1 w-full">
                     <div className="bg-[#161922] text-gray-200 p-3 rounded-2xl rounded-tr-sm text-[12px] max-w-[80%] border border-[#8A2BE2]/30">
                       Merhaba! 👋 Ürünümüzün fiyatı ₺1.250'dir. Stoklarımızda mevcut. Sipariş vermek ister misiniz?
                     </div>
                     <div className="flex items-center gap-1 text-[9px] text-gray-500 mr-1">
                       <span>AI Yanıtladı</span>
                       <span>•</span>
                       <span>2 dk</span>
                     </div>
                   </div>

                   <div className="self-end flex gap-2 mt-2">
                     <button className="bg-[#161922] text-gray-300 border border-white/10 px-4 py-1.5 rounded-full text-[11px] hover:bg-white/10 transition-colors">
                       Teşekkürler!
                     </button>
                   </div>
                 </div>

                 <div className="p-3 border-t border-white/5">
                   <div className="bg-[#161922] border border-white/5 rounded-full px-3 py-1.5 flex items-center justify-between">
                     <input type="text" placeholder="Yanıt yaz..." className="bg-transparent border-none outline-none text-[12px] text-gray-300 w-full placeholder-gray-600 px-2" />
                     <button className="w-7 h-7 rounded-full bg-[#8A2BE2] flex items-center justify-center hover:bg-[#6A0DAD] transition-colors flex-shrink-0">
                       <span className="material-symbols-outlined text-white text-[14px]">send</span>
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-32 flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6">
          <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">GÜÇLÜ AI ÖZELLİKLERİ</span>
        </div>
        
        <h2 className="text-[32px] md:text-[40px] font-extrabold mb-12 text-center text-white tracking-tight">
          İşletmenizi Büyüten AI Gücü
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
          {/* Card 1: AI İçerik */}
          <div className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-pink-500/50 transition-colors group">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI İçerik Üretimi</h3>
            <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium">Sadece birkaç kelime ile profesyonel görseller ve metinler oluşturun.</p>
            
            <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col p-3 relative overflow-hidden">
              <div className="flex gap-2 mb-3 items-center">
                <div className="bg-[#8A2BE2] text-white text-[9px] px-2 py-1 rounded font-bold">Oluştur</div>
                <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">thumb_up</span></div>
                <div className="w-5 h-5 rounded-full bg-[#E11D48] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">photo_camera</span></div>
                <div className="w-5 h-5 rounded-full bg-[#1DA1F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">flutter_dash</span></div>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden border border-pink-500/30 group-hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-shadow">
                <h4 className="text-[16px] font-black text-white text-center leading-tight drop-shadow-lg z-10">YENİ SEZON<br/><span className="text-[#00F0FF]">İNDİRİMİ!</span></h4>
              </div>
            </div>
          </div>

          {/* Card 2: AI Muhasebe */}
          <div className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-cyan-500/50 transition-colors group">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI Muhasebe</h3>
            <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium">Faturaları tarayın, AI tüm bilgileri ayıklar ve kaydeder.</p>
            
            <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col items-center justify-center p-3 relative overflow-hidden">
               <div className="w-[140px] bg-white rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] p-3 transform rotate-[-3deg] relative z-10 flex flex-col font-mono text-gray-800">
                 <div className="text-center font-bold text-[12px] border-b border-gray-300 pb-1 mb-2">FATURA</div>
                 <div className="text-[9px] flex justify-between mb-1"><span>Tarih:</span><span className="font-bold">24.05.2024</span></div>
                 <div className="text-[9px] flex justify-between mb-1"><span>Tutar:</span><span className="font-bold">₺2.450,00</span></div>
                 <div className="text-[9px] flex justify-between mb-1"><span>KDV:</span><span className="font-bold">%20</span></div>
                 <div className="text-[9px] flex justify-between mt-2 pt-1 border-t border-gray-300"><span>Satıcı:</span><span className="font-bold">ABC Ltd.</span></div>
               </div>
               <div className="absolute top-0 left-0 w-full h-1 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF] z-20 animate-[scan_2.5s_ease-in-out_infinite_alternate]"></div>
               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-full px-3 py-1 text-[9px] font-bold z-20">
                 %99.2 Doğruluk
               </div>
            </div>
          </div>

          {/* Card 3: AI Asistan */}
          <div className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-purple-500/50 transition-colors group">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI Asistan</h3>
            <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium">Doğal dil ile işletmenizle ilgili her soruya anında cevap alın.</p>
            
            <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col p-3 gap-2 justify-end relative overflow-hidden">
               <div className="bg-[#252A33] text-gray-200 p-2.5 rounded-xl rounded-tr-sm text-[10px] self-end max-w-[85%]">
                 Bu ayki toplam harcamam ne?
               </div>
               <div className="bg-[#8A2BE2]/20 border border-[#8A2BE2]/50 text-[#E0B0FF] p-2.5 rounded-xl rounded-tl-sm text-[10px] self-start max-w-[85%] flex gap-2">
                 <span className="material-symbols-outlined text-[14px]">smart_toy</span>
                 <div>Bu ay toplam harcamanız <span className="font-bold text-white">₺48.250,00</span>'dir.</div>
               </div>
               <div className="bg-[#252A33] text-gray-200 p-2 rounded-full text-[9px] self-end flex items-center gap-1 opacity-70">
                 En çok hangi ürünü sattım? <span className="material-symbols-outlined text-[10px]">arrow_upward</span>
               </div>
               
               <div className="w-full h-8 bg-gradient-to-r from-transparent via-[#8A2BE2]/20 to-transparent mt-2 rounded-full flex items-center justify-center border border-white/5">
                 <div className="flex gap-0.5 items-center">
                   {[1,3,2,5,3,4,2,3,1,2].map((h, i) => (
                     <div key={i} className="w-1 bg-[#8A2BE2] rounded-full" style={{height: `${h * 4}px`}}></div>
                   ))}
                 </div>
               </div>
            </div>
          </div>

          {/* Card 4: AI Analitik */}
          <div className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-green-500/50 transition-colors group">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI Analitik</h3>
            <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium">Tüm performans verilerinizi akıllı grafiklerle analiz edin.</p>
            
            <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col p-4 relative overflow-hidden">
               <div className="text-[10px] text-gray-400 font-bold">Toplam Gelir</div>
               <div className="flex items-end gap-2 mb-4">
                 <div className="text-[20px] font-black text-white">₺125,430</div>
                 <div className="text-[10px] font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded flex items-center mb-1">
                   <span className="material-symbols-outlined text-[10px]">trending_up</span> +23.5%
                 </div>
               </div>
               <div className="w-full h-[80px] mt-auto relative flex items-end">
                 {/* Simple SVG Graph */}
                 <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                   <path d="M0,30 L15,15 L30,25 L50,5 L70,20 L85,10 L100,15 L100,40 L0,40 Z" fill="url(#graph-grad)" opacity="0.3" />
                   <path d="M0,30 L15,15 L30,25 L50,5 L70,20 L85,10 L100,15" fill="none" stroke="#8A2BE2" strokeWidth="2" />
                   <defs>
                     <linearGradient id="graph-grad" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#8A2BE2" />
                       <stop offset="100%" stopColor="transparent" />
                     </linearGradient>
                   </defs>
                 </svg>
                 <div className="absolute top-[5px] left-[50%] w-2 h-2 bg-white rounded-full border-[2px] border-[#8A2BE2] shadow-[0_0_10px_#8A2BE2]"></div>
               </div>
            </div>
          </div>

          {/* Card 5: AI Otomasyon */}
          <div className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-yellow-500/50 transition-colors group">
            <h3 className="font-bold text-[15px] mb-2 text-white">AI Otomasyon</h3>
            <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium">İş süreçlerinizi otomatikleştirin, zaman kazanın.</p>
            
            <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col p-4 relative overflow-hidden gap-3 justify-center">
               
               <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-[#252A33] flex items-center justify-center border border-white/10 text-[10px]"><span className="material-symbols-outlined text-[12px] text-gray-400">receipt</span></div>
                   <span className="text-[11px] font-medium text-gray-300">Yeni Fatura Yüklendi</span>
                 </div>
                 
                 <div className="w-[1px] h-3 bg-white/10 ml-[9px] -my-2"></div>
                 
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-[#8A2BE2]/20 flex items-center justify-center border border-[#8A2BE2]/50 text-[10px]"><span className="material-symbols-outlined text-[12px] text-[#00F0FF]">smart_toy</span></div>
                   <span className="text-[11px] font-medium text-white">AI Okudu ve İşledi</span>
                 </div>
                 
                 <div className="w-[1px] h-3 bg-white/10 ml-[9px] -my-2"></div>
                 
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-[#252A33] flex items-center justify-center border border-white/10 text-[10px]"><span className="material-symbols-outlined text-[12px] text-gray-400">send</span></div>
                   <span className="text-[11px] font-medium text-gray-300">Muhasebeciye Gönderildi</span>
                 </div>
                 
                 <div className="w-[1px] h-3 bg-white/10 ml-[9px] -my-2"></div>
                 
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-[#252A33] flex items-center justify-center border border-white/10 text-[10px]"><span className="material-symbols-outlined text-[12px] text-gray-400">inventory_2</span></div>
                   <span className="text-[11px] font-medium text-gray-300">Arşivlendi</span>
                 </div>
               </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- Workflow Section --- */}
      <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-32 flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6">
          <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">AKILLI MUHASEBE SÜRECİ</span>
        </div>
        
        <h2 className="text-[32px] md:text-[40px] font-extrabold mb-16 text-center text-white tracking-tight">
          Fatura'dan Rapor'a<br/>Otomatik Yolculuk
        </h2>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 relative">
           
           {/* Step 1 */}
           <div className="flex flex-col items-center z-10">
             <div className="w-20 h-24 bg-[#0D1017] border border-white/10 rounded-xl mb-4 flex items-center justify-center relative shadow-lg">
               <div className="w-12 h-16 bg-white/5 border border-white/10 rounded-md"></div>
               <div className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-[#00F0FF] flex items-center justify-center border-2 border-[#07090E]"><span className="material-symbols-outlined text-[12px] text-[#07090E]">document_scanner</span></div>
             </div>
             <span className="font-bold text-white text-[13px] mb-1">1. Tarama</span>
             <span className="text-[10px] text-[#8E95B3] text-center w-24">Faturanızı çekin veya yükleyin.</span>
           </div>

           <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent border-t border-dashed border-[#00F0FF]/30 mt-[-50px]"></div>

           {/* Step 2 */}
           <div className="flex flex-col items-center z-10">
             <div className="w-20 h-24 bg-[#0D1017] border border-[#00F0FF]/30 rounded-xl mb-4 flex items-center justify-center relative shadow-[0_0_15px_rgba(0,240,255,0.2)]">
               <span className="text-[30px] font-black text-[#00F0FF]">AI</span>
             </div>
             <span className="font-bold text-white text-[13px] mb-1">2. AI Okuma</span>
             <span className="text-[10px] text-[#8E95B3] text-center w-24">AI tüm bilgileri otomatik olarak çıkarır.</span>
           </div>

           <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#F5B400]/50 to-transparent border-t border-dashed border-[#F5B400]/30 mt-[-50px]"></div>

           {/* Step 3 */}
           <div className="flex flex-col items-center z-10">
             <div className="w-24 h-24 bg-[#0D1017] border border-white/10 rounded-xl mb-4 flex flex-col items-center justify-center gap-1.5 shadow-lg p-2">
               <div className="flex items-center gap-2 w-full"><div className="w-3 h-3 rounded bg-[#F5B400] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">restaurant</span></div><span className="text-[8px] text-gray-400">Yemek</span><span className="text-[8px] text-white ml-auto">₺450</span></div>
               <div className="flex items-center gap-2 w-full"><div className="w-3 h-3 rounded bg-[#00F0FF] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">directions_car</span></div><span className="text-[8px] text-gray-400">Ulaşım</span><span className="text-[8px] text-white ml-auto">₺250</span></div>
               <div className="flex items-center gap-2 w-full"><div className="w-3 h-3 rounded bg-[#8A2BE2] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">work</span></div><span className="text-[8px] text-gray-400">Ofis</span><span className="text-[8px] text-white ml-auto">₺350</span></div>
             </div>
             <span className="font-bold text-white text-[13px] mb-1">3. Kategorize</span>
             <span className="text-[10px] text-[#8E95B3] text-center w-24">Giderler otomatik kategorize edilir.</span>
           </div>

           <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent border-t border-dashed border-blue-500/30 mt-[-50px]"></div>

           {/* Step 4 */}
           <div className="flex flex-col items-center z-10">
             <div className="w-20 h-24 bg-[#0D1017] border border-white/10 rounded-xl mb-4 flex flex-col items-center justify-center relative shadow-lg">
               <img src="https://i.pravatar.cc/100?img=11" className="w-10 h-10 rounded-full border-2 border-[#161922] mb-2" alt="Muhasebeci" />
               <div className="bg-blue-500 text-white text-[7px] font-bold px-2 py-0.5 rounded-full">İncele</div>
             </div>
             <span className="font-bold text-white text-[13px] mb-1">4. Muhasebeci</span>
             <span className="text-[10px] text-[#8E95B3] text-center w-24">Muhasebeciniz anında belgeyi alır.</span>
           </div>

           <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent border-t border-dashed border-[#10B981]/30 mt-[-50px]"></div>

           {/* Step 5 */}
           <div className="flex flex-col items-center z-10">
             <div className="w-20 h-24 bg-[#0D1017] border border-[#10B981]/30 rounded-xl mb-4 flex items-center justify-center relative shadow-[0_0_15px_rgba(16,185,129,0.2)]">
               <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[20px]">check</span></div>
             </div>
             <span className="font-bold text-white text-[13px] mb-1">5. Onay</span>
             <span className="text-[10px] text-[#8E95B3] text-center w-24">Onaylanır ve muhasebe programına aktarılır.</span>
           </div>

           <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#8A2BE2]/50 to-transparent border-t border-dashed border-[#8A2BE2]/30 mt-[-50px]"></div>

           {/* Step 6 */}
           <div className="flex flex-col items-center z-10">
             <div className="w-20 h-24 bg-[#0D1017] border border-[#8A2BE2]/30 rounded-xl mb-4 flex items-end justify-center gap-1 pb-3 relative shadow-[0_0_15px_rgba(138,43,226,0.2)]">
               <div className="w-2 bg-[#8A2BE2]/40 rounded-t-sm h-[20%]"></div>
               <div className="w-2 bg-[#8A2BE2]/60 rounded-t-sm h-[40%]"></div>
               <div className="w-2 bg-[#8A2BE2]/80 rounded-t-sm h-[60%]"></div>
               <div className="w-2 bg-[#8A2BE2] rounded-t-sm h-[80%]"></div>
             </div>
             <span className="font-bold text-white text-[13px] mb-1">6. Rapor</span>
             <span className="text-[10px] text-[#8E95B3] text-center w-24">Raporlarınız otomatik oluşturulur.</span>
           </div>

        </div>
      </section>

      {/* --- Integrations Section --- */}
      <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-32 flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6">
          <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">GÜÇLÜ ENTEGRASYONLAR</span>
        </div>
        
        <h2 className="text-[28px] md:text-[36px] font-extrabold mb-12 text-center text-white tracking-tight">
          Kullandığınız Platformlarla Tam Entegre
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
           {/* Icons */}
           <div className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#161922] transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[20px]">photo_camera</span></div>
             <span className="text-[10px] font-bold text-gray-400 text-center">Instagram<br/>Graph API</span>
           </div>
           
           <div className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#161922] transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[20px]">chat</span></div>
             <span className="text-[10px] font-bold text-gray-400 text-center">WhatsApp<br/>Cloud API</span>
           </div>

           <div className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#161922] transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[20px]">thumb_up</span></div>
             <span className="text-[10px] font-bold text-gray-400 text-center">Facebook<br/>Messenger</span>
           </div>

           <div className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#161922] transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center"><span className="material-symbols-outlined text-[#EA4335] text-[20px]">mail</span></div>
             <span className="text-[10px] font-bold text-gray-400 text-center">Google<br/>Business</span>
           </div>

           <div className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#161922] transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center"><span className="material-symbols-outlined text-white text-[20px]">music_note</span></div>
             <span className="text-[10px] font-bold text-gray-400 text-center">TikTok<br/>API</span>
           </div>

           <div className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#161922] transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-xl bg-[#0F9D58] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[20px]">folder</span></div>
             <span className="text-[10px] font-bold text-gray-400 text-center">Google Drive<br/>RAG Sync</span>
           </div>

           <div className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#161922] transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-xl bg-[#8A2BE2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[20px]">api</span></div>
             <span className="text-[10px] font-bold text-gray-400 text-center">Zemio<br/>Sosyal API</span>
           </div>

           <div className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#161922] transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-xl bg-[#00F0FF] flex items-center justify-center"><span className="material-symbols-outlined text-[#07090E] text-[20px]">account_balance</span></div>
             <span className="text-[10px] font-bold text-gray-400 text-center">Muhasebe<br/>Programları</span>
           </div>
        </div>
      </section>

      {/* --- Bottom CTA Section --- */}
      <section className="relative z-20 w-full max-w-[1000px] mx-auto px-6 pb-20">
        <div className="w-full bg-gradient-to-r from-[#0D1017] to-[#161922] border border-white/10 rounded-[32px] p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-2xl relative">
          
          <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] bg-[#00F0FF]/10 blur-[100px] rounded-full"></div>
          
          <div className="flex-1 z-10 flex flex-col items-start">
             <h2 className="text-[36px] font-extrabold text-white mb-4 leading-tight tracking-tight">
               İşletmenizin Geleceği<br/>Bugünden Başlasın
             </h2>
             <p className="text-[#8E95B3] text-[14px] mb-8 font-medium max-w-[350px]">
               AI Esnaf ile tanışın, işlerinizi kolaylaştırın ve büyümenize odaklanın.
             </p>
             <div className="flex items-center gap-4">
               <button className="bg-gradient-to-r from-[#00F0FF] to-[#0080FF] text-white font-bold px-8 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all text-[14px]">
                 Ücretsiz Hesap Oluştur <span className="material-symbols-outlined text-[16px] align-middle ml-1">arrow_forward</span>
               </button>
               <button className="bg-transparent border border-[#232B45] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#111424] transition-colors text-[14px]">
                 Demo Talep Et
               </button>
             </div>
          </div>

          <div className="w-[300px] flex flex-col gap-6 z-10 mt-10 md:mt-0">
             <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-[#B4B8D0] text-[16px]">credit_card</span></div>
               <div>
                 <div className="text-[13px] font-bold text-white mb-0.5">14 Gün Ücretsiz Deneme</div>
                 <div className="text-[11px] text-[#8E95B3]">Kredi kartı gerekmez</div>
               </div>
             </div>
             
             <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-[#B4B8D0] text-[16px]">headset_mic</span></div>
               <div>
                 <div className="text-[13px] font-bold text-white mb-0.5">Kurulum Desteği</div>
                 <div className="text-[11px] text-[#8E95B3]">Ekibimiz sizinle ilgilenecek</div>
               </div>
             </div>
             
             <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-[#B4B8D0] text-[16px]">support_agent</span></div>
               <div>
                 <div className="text-[13px] font-bold text-white mb-0.5">7/24 Destek</div>
                 <div className="text-[11px] text-[#8E95B3]">Her zaman yanınızdayız</div>
               </div>
             </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
