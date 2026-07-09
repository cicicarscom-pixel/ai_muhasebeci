"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [activeSignal, setActiveSignal] = useState<number>(0);
  const [pulse, setPulse] = useState(false);

  // Animate the signals moving through the paths
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % 5);
      setPulse(true);
      setTimeout(() => setPulse(false), 500);
    }, 2500); // Trigger every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 w-full max-w-[1440px] mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center justify-between min-h-[90vh]">
      
      {/* Left Column (Text & CTA) */}
      <div className="flex-1 max-w-[600px] z-20 mb-16 lg:mb-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6"
        >
          <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">YENİ NESİL AI İŞLETİM SİSTEMİ</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[40px] md:text-[54px] lg:text-[64px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
        >
          İşletmenizi<br/>
          Yöneten Tek<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]">Yapay </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF]">Zeka</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[15px] md:text-[17px] text-[#8E95B3] mb-10 max-w-[450px] leading-relaxed"
        >
          Sosyal medyadan muhasebeye, müşteri iletişiminden içerik üretimine kadar tüm iş süreçlerinizi tek platformda otonom yapay zeka ile yönetin.
        </motion.p>

        {/* Feature Ticks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
        >
          {['7/24 AI Asistan', 'Otomatik Yanıtlar', 'Akıllı Muhasebe', 'Gerçek Zamanlı Analiz'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#8A2BE2]/20 flex items-center justify-center border border-[#8A2BE2]/50">
                <span className="material-symbols-outlined text-[#8A2BE2] text-[10px]">check</span>
              </div>
              <span className="text-[#B4B8D0] text-[12px] font-medium">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,240,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#00F0FF] to-[#0080FF] text-white font-bold px-8 py-3.5 rounded-full transition-all text-[14px] flex items-center gap-2"
          >
            Ücretsiz Deneyin <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </motion.button>
          
          <motion.button 
            whileHover={{ backgroundColor: "rgba(17, 20, 36, 1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-[#232B45] text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-[14px] flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span> Canlı Demo İzle
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="User" className="w-8 h-8 rounded-full border-2 border-[#07090E]" />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 text-[#F5B400] text-[14px]">
              {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1" }}>star</span>)}
              <span className="text-white font-bold ml-1">4.9/5</span>
            </div>
            <div className="text-[11px] text-[#8E95B3]">1.000+ işletme AI Esnaf kullanıyor</div>
          </div>
        </motion.div>
      </div>

      {/* Right Column (AI Core Graphic) */}
      <div className="flex-[1.2] relative w-full h-[600px] hidden lg:flex items-center justify-center z-10 overflow-hidden">
        <div className="relative w-[850px] h-[600px] min-w-[850px] flex items-center justify-center scale-[0.7] lg:scale-[0.8] xl:scale-100 origin-center">
        
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div 
            animate={{ scale: pulse ? 1.1 : 1, opacity: pulse ? 0.6 : 0.4 }}
            transition={{ duration: 0.5 }}
            className="w-[450px] h-[450px] rounded-full mix-blend-screen" 
            style={{background:'radial-gradient(circle at center, rgba(138,43,226,0.35) 0%, rgba(0,100,255,0.2) 40%, rgba(0,0,0,0) 70%)',filter:'blur(60px)'}}
          />
        </div>

        {/* SVG Connecting lines */}
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

             {/* Base Lines (always visible) */}
             <g stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.4">
                <path id="pathL1" d="M 240,155 C 290,155 310,260 370,275" fill="none" />
                <path id="pathL2" d="M 240,205 C 295,205 315,280 370,285" fill="none" />
                <path id="pathL3" d="M 240,255 C 290,255 320,290 370,292" fill="none" />
                <path id="pathL4" d="M 240,305 C 290,305 325,298 370,298" fill="none" />
                <path id="pathL5" d="M 240,355 C 290,355 325,308 370,305" fill="none" />
                <path id="pathL6" d="M 240,405 C 290,405 320,315 370,312" fill="none" />
             </g>

             <g stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" opacity="0.4">
                <path id="pathR1" d="M 480,268 C 530,268 545,140 600,138" fill="none" />
                <path id="pathR2" d="M 480,288 C 525,288 545,258 600,258" fill="none" />
                <path id="pathR3" d="M 480,308 C 525,308 548,368 600,368" fill="none" />
                <path id="pathR4" d="M 480,328 C 535,328 545,468 600,468" fill="none" />
             </g>

             {/* Animated Signal Lines */}
             <g fill="none" strokeWidth="4" strokeLinecap="round" filter="url(#glow-ultra)">
               <motion.path 
                 d="M 240,155 C 290,155 310,260 370,275" 
                 stroke="#00F0FF"
                 strokeDasharray="10 1000"
                 animate={activeSignal === 0 ? { strokeDashoffset: [1000, 0] } : { strokeDashoffset: 1000 }}
                 transition={{ duration: 1, ease: "linear" }}
               />
               <motion.path 
                 d="M 240,205 C 295,205 315,280 370,285" 
                 stroke="#25D366"
                 strokeDasharray="10 1000"
                 animate={activeSignal === 1 ? { strokeDashoffset: [1000, 0] } : { strokeDashoffset: 1000 }}
                 transition={{ duration: 1, ease: "linear" }}
               />
               <motion.path 
                 d="M 480,288 C 525,288 545,258 600,258" 
                 stroke="#FF00FF"
                 strokeDasharray="10 1000"
                 animate={activeSignal === 2 || activeSignal === 0 || activeSignal === 1 ? { strokeDashoffset: [1000, 0] } : { strokeDashoffset: 1000 }}
                 transition={{ duration: 1, ease: "linear", delay: 1 }}
               />
               <motion.path 
                 d="M 480,308 C 525,308 548,368 600,368" 
                 stroke="#00F0FF"
                 strokeDasharray="10 1000"
                 animate={activeSignal === 3 ? { strokeDashoffset: [1000, 0] } : { strokeDashoffset: 1000 }}
                 transition={{ duration: 1, ease: "linear", delay: 1 }}
               />
               <motion.path 
                 d="M 480,328 C 535,328 545,468 600,468" 
                 stroke="#F5B400"
                 strokeDasharray="10 1000"
                 animate={activeSignal === 4 ? { strokeDashoffset: [1000, 0] } : { strokeDashoffset: 1000 }}
                 transition={{ duration: 1, ease: "linear", delay: 1 }}
               />
             </g>

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
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-[30px] top-[120px] w-[210px] bg-[#0A0D14]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-4 shadow-2xl z-20"
        >
          <div className="text-[9px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-4">MÜŞTERİ KANALLARI</div>
          <div className="flex flex-col gap-3">
            <motion.div animate={activeSignal === 0 ? { scale: [1, 1.05, 1], x: [0, 5, 0] } : {}} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-[5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">photo_camera</span></div>
                <span className={`text-[12px] font-medium ${activeSignal === 0 ? 'text-white' : 'text-gray-400'}`}>Instagram</span>
              </div>
              <div className="bg-[#E11D48] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">23</div>
            </motion.div>
            <motion.div animate={activeSignal === 1 ? { scale: [1, 1.05, 1], x: [0, 5, 0] } : {}} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-[5px] bg-[#25D366] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">chat</span></div>
                <span className={`text-[12px] font-medium ${activeSignal === 1 ? 'text-white' : 'text-gray-400'}`}>WhatsApp</span>
              </div>
              <div className="bg-[#E11D48] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">15</div>
            </motion.div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-[5px] bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">thumb_up</span></div>
                <span className="text-[12px] font-medium text-gray-400">Facebook</span>
              </div>
              <div className="bg-[#1E3A8A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">12</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-[5px] bg-[#F5B400] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">star</span></div>
                <span className="text-[12px] font-medium text-gray-400">Google Yorumlar</span>
              </div>
              <div className="bg-[#1E3A8A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">8</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-[5px] bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">forum</span></div>
                <span className="text-[12px] font-medium text-gray-400">Messenger</span>
              </div>
              <div className="bg-[#1E3A8A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">7</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-[5px] bg-[#0A66C2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">work</span></div>
                <span className="text-[12px] font-medium text-gray-400">LinkedIn</span>
              </div>
              <div className="bg-[#1E3A8A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">4</div>
            </div>
          </div>
        </motion.div>

        {/* Central AI Sphere - Cosmic Nebula */}
        <motion.div 
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          className="absolute z-30 flex flex-col items-center justify-center"
          style={{ left: '425px', top: '295px' }}
        >
          
          {/* Top Chat Bubble */}
          <AnimatePresence>
            {(activeSignal === 0 || activeSignal === 1) && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-[-140px] left-[-20px] bg-[#0A0D14]/90 border border-white/5 rounded-xl rounded-bl-sm p-3 w-[150px] shadow-2xl flex flex-col gap-1.5 z-40 backdrop-blur-md"
              >
                <div className="text-[9px] text-[#B4B8D0] font-bold uppercase tracking-widest">AI ASİSTAN</div>
                <div className="text-[11px] text-white leading-tight">Merhaba! Size nasıl yardımcı olabilirim?</div>
                <div className="absolute right-[-15px] top-[15px] w-6 h-6 rounded-full bg-[#0A0D14] border border-[#00F0FF]/30 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  <span className="material-symbols-outlined text-[12px] text-[#00F0FF]">graphic_eq</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glowing Cosmic Nebula Sphere */}
          <div className="w-[180px] h-[180px] rounded-full relative flex items-center justify-center" style={{ borderRadius: '50%' }}>
            {/* Glowing 3D Sphere matching target (Blue/Cyan energy ball) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00F0FF]/40 via-[#0080FF]/20 to-[#8A2BE2]/40 blur-[15px]" style={{ borderRadius: '50%' }}></div>
            <div className="absolute w-[140px] h-[140px] rounded-full border-[2px] border-[#00F0FF]/60 shadow-[0_0_30px_#00F0FF,inset_0_0_30px_#00F0FF]" style={{ borderRadius: '50%' }}></div>
            
            {/* Inner Grid/Wireframe */}
            <div className="absolute w-[140px] h-[140px] rounded-full overflow-hidden opacity-40" style={{ borderRadius: '50%' }}>
               <div className="w-full h-full border border-[#00F0FF] rounded-full scale-x-50" style={{ borderRadius: '50%' }}></div>
               <div className="w-full h-full border border-[#00F0FF] rounded-full scale-y-50 absolute top-0 left-0" style={{ borderRadius: '50%' }}></div>
               <div className="w-full h-full border border-[#00F0FF] rounded-full scale-x-[0.25] absolute top-0 left-0" style={{ borderRadius: '50%' }}></div>
               <div className="w-full h-full border border-[#00F0FF] rounded-full scale-y-[0.25] absolute top-0 left-0" style={{ borderRadius: '50%' }}></div>
            </div>

            <div className="w-[90px] h-[90px] rounded-[50%] z-10 relative flex items-center justify-center bg-[#07090E] border border-[#00F0FF]/80 shadow-[0_0_20px_#00F0FF]" style={{ borderRadius: '50%' }}>
              <motion.span 
                animate={{ scale: pulse ? 1.1 : 1 }}
                className="text-[36px] font-black text-white z-10" 
                style={{textShadow:'0 0 15px rgba(255,255,255,1), 0 0 30px rgba(0,240,255,0.8)'}}
              >
                AI
              </motion.span>
            </div>
          </div>

          {/* Bottom Status Pill */}
          <div className="absolute bottom-[-60px] bg-[#0A0D14]/90 border border-white/5 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 z-40 backdrop-blur-md">
            <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]"></motion.div>
            <span className="text-[9px] font-bold text-white tracking-widest">7/24 OTONOM ÇALIŞIYOR</span>
          </div>
        </motion.div>

        {/* Right Boxes */}
        <div className="absolute right-[10px] top-[100px] w-[200px] flex flex-col gap-3 z-20">
          
          {/* Box 1: AI YANITLIYOR */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`bg-[#0A0D14]/90 backdrop-blur-xl border ${activeSignal === 0 ? 'border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.2)]' : 'border-white/5'} rounded-2xl p-2.5 shadow-2xl transition-all duration-300`}
          >
            <div className="text-[8px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-1.5">AI YANITLIYOR</div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-[10px]">photo_camera</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-white leading-tight">Merhaba! Size nasıl yardımcı olabilirim?</span>
                <div className="bg-white/10 rounded-full w-8 h-3 flex items-center justify-center gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 2: İÇERİK ÜRETİYOR */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`bg-[#0A0D14]/90 backdrop-blur-xl border ${activeSignal === 1 ? 'border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)]' : 'border-white/5'} rounded-2xl p-2.5 shadow-2xl transition-all duration-300`}
          >
            <div className="text-[8px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-1.5">İÇERİK ÜRETİYOR</div>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded overflow-hidden relative shrink-0">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100&h=100" alt="Shoe" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-purple-500/30 mix-blend-color"></div>
              </div>
              <div className="flex flex-col justify-between py-0.5">
                <span className="text-[9px] text-white leading-tight">Yeni gönderi hazır! ✨</span>
              </div>
            </div>
          </motion.div>

          {/* Box 3: MUHASEBEYE İŞLENİYOR */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`bg-[#0A0D14]/90 backdrop-blur-xl border ${activeSignal === 2 ? 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'border-white/5'} rounded-2xl p-2.5 shadow-2xl transition-all duration-300`}
          >
            <div className="text-[8px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-1.5">MUHASEBEYE İŞLENİYOR</div>
            <div className="flex gap-2 items-center">
              <div className="w-6 h-8 bg-blue-500/20 rounded flex items-center justify-center border border-blue-500/50 shrink-0">
                <span className="material-symbols-outlined text-blue-400 text-[14px]">receipt_long</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] text-white font-bold mb-0.5">Fatura okundu</span>
                <span className="text-[8px] text-gray-400">KDV: %20</span>
                <span className="text-[8px] text-gray-400">Tutar: <span className="text-white font-bold">₺2.450</span></span>
              </div>
            </div>
          </motion.div>

          {/* Box 4: MUHASEBECİNİZ */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className={`bg-[#0A0D14]/90 backdrop-blur-xl border ${activeSignal === 3 ? 'border-yellow-500/50 shadow-[0_0_15px_rgba(245,180,0,0.2)]' : 'border-white/5'} rounded-2xl p-2.5 shadow-2xl transition-all duration-300 flex items-center justify-between`}
          >
            <div className="flex flex-col">
              <div className="text-[8px] font-bold text-[#B4B8D0] uppercase tracking-widest mb-1">MUHASEBECİNİZ</div>
              <span className="text-[9px] text-white font-bold">Yeni belge geldi</span>
              <span className="text-[8px] text-[#F5B400] font-medium">Onay bekliyor</span>
            </div>
            <img src="https://i.pravatar.cc/100?img=11" className="w-8 h-8 rounded-full border border-white/20 shrink-0" alt="Muhasebeci" />
          </motion.div>

        </div>
        
        </div>
      </div>
    </section>
  );
}
