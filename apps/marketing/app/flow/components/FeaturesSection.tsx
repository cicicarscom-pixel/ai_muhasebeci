"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Analitik kartı için data noktaları
  const pathData = "M0,30 L15,15 L30,25 L50,5 L70,20 L85,10 L100,15";
  const pathFillData = "M0,30 L15,15 L30,25 L50,5 L70,20 L85,10 L100,15 L100,40 L0,40 Z";

  return (
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-32 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6"
      >
        <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">GÜÇLÜ AI ÖZELLİKLERİ</span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[32px] md:text-[40px] font-extrabold mb-12 text-center text-white tracking-tight"
      >
        İşletmenizi Büyüten AI Gücü
      </motion.h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Card 1: AI İçerik Üretimi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onHoverStart={() => setActiveCard(0)}
          onHoverEnd={() => setActiveCard(null)}
          className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-pink-500/50 transition-colors group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="font-bold text-[15px] mb-2 text-white relative z-10">AI İçerik Üretimi</h3>
          <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium relative z-10">
            Sadece birkaç kelime ile profesyonel görseller ve metinler oluşturun.
          </p>
          
          <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col p-3 relative overflow-hidden group-hover:border-pink-500/30 transition-colors">
            <div className="flex gap-2 mb-3 items-center">
              <motion.div 
                animate={activeCard === 0 ? { scale: [1, 1.05, 1], boxShadow: ["0 0 0px rgba(138,43,226,0)", "0 0 10px rgba(138,43,226,0.8)", "0 0 0px rgba(138,43,226,0)"] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bg-[#8A2BE2] text-white text-[9px] px-2 py-1 rounded font-bold"
              >
                Oluştur
              </motion.div>
              <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">thumb_up</span></div>
              <div className="w-5 h-5 rounded-full bg-[#E11D48] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">photo_camera</span></div>
              <div className="w-5 h-5 rounded-full bg-[#1DA1F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">flutter_dash</span></div>
            </div>
            
            <div className="flex-1 rounded-lg bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden border border-pink-500/30">
              <motion.div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"
                animate={activeCard === 0 ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.h4 
                animate={activeCard === 0 ? { y: [0, -2, 0] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[16px] font-black text-white text-center leading-tight drop-shadow-lg z-10"
              >
                YENİ SEZON<br/><span className="text-[#00F0FF]">İNDİRİMİ!</span>
              </motion.h4>
            </div>
          </div>
        </motion.div>

        {/* Card 2: AI Muhasebe */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onHoverStart={() => setActiveCard(1)}
          onHoverEnd={() => setActiveCard(null)}
          className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-cyan-500/50 transition-colors group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="font-bold text-[15px] mb-2 text-white relative z-10">AI Muhasebe</h3>
          <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium relative z-10">
            Faturaları tarayın, AI tüm bilgileri ayıklar ve kaydeder.
          </p>
          
          <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
            <motion.div 
              animate={activeCard === 1 ? { rotate: [-3, 0, -3], y: [0, -5, 0] } : { rotate: -3 }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-[140px] bg-white rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] p-3 relative z-10 flex flex-col font-mono text-gray-800"
            >
              <div className="text-center font-bold text-[12px] border-b border-gray-300 pb-1 mb-2">FATURA</div>
              <div className="text-[9px] flex justify-between mb-1"><span>Tarih:</span><span className="font-bold">24.05.2024</span></div>
              <div className="text-[9px] flex justify-between mb-1"><span>Tutar:</span><span className="font-bold">₺2.450,00</span></div>
              <div className="text-[9px] flex justify-between mb-1"><span>KDV:</span><span className="font-bold">%20</span></div>
              <div className="text-[9px] flex justify-between mt-2 pt-1 border-t border-gray-300"><span>Satıcı:</span><span className="font-bold">ABC Ltd.</span></div>
            </motion.div>
            
            {/* Scanning Laser */}
            <motion.div 
              className="absolute left-0 w-full h-1 bg-[#00F0FF] shadow-[0_0_15px_#00F0FF,0_0_5px_#white] z-20"
              initial={{ top: "10%" }}
              animate={activeCard === 1 ? { top: ["10%", "90%", "10%"] } : { top: ["10%", "90%", "10%"] }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            />
            
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-full px-3 py-1 text-[9px] font-bold z-20">
              %99.2 Doğruluk
            </div>
          </div>
        </motion.div>

        {/* Card 3: AI Asistan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onHoverStart={() => setActiveCard(2)}
          onHoverEnd={() => setActiveCard(null)}
          className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-purple-500/50 transition-colors group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="font-bold text-[15px] mb-2 text-white relative z-10">AI Asistan</h3>
          <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium relative z-10">
            Doğal dil ile işletmenizle ilgili her soruya anında cevap alın.
          </p>
          
          <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col p-3 gap-2 justify-end relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
            <div className="bg-[#252A33] text-gray-200 p-2.5 rounded-xl rounded-tr-sm text-[10px] self-end max-w-[85%]">
              Bu ayki toplam harcamam ne?
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={activeCard === 2 ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#8A2BE2]/20 border border-[#8A2BE2]/50 text-[#E0B0FF] p-2.5 rounded-xl rounded-tl-sm text-[10px] self-start max-w-[85%] flex gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">smart_toy</span>
              <div>Bu ay toplam harcamanız <span className="font-bold text-white">₺48.250,00</span>'dir.</div>
            </motion.div>
            
            <div className="bg-[#252A33] text-gray-200 p-2 rounded-full text-[9px] self-end flex items-center gap-1 opacity-70">
              En çok hangi ürünü sattım? <span className="material-symbols-outlined text-[10px]">arrow_upward</span>
            </div>
            
            {/* Audio Wave Animation */}
            <div className="w-full h-8 bg-gradient-to-r from-transparent via-[#8A2BE2]/20 to-transparent mt-2 rounded-full flex items-center justify-center border border-white/5 overflow-hidden">
              <div className="flex gap-1 items-center h-full py-1">
                {[4, 12, 8, 20, 12, 16, 8, 12, 4, 8].map((h, i) => (
                  <motion.div 
                    key={i}
                    className="w-1 bg-[#8A2BE2] rounded-full"
                    animate={activeCard === 2 ? { height: [`${h}px`, `${h * 1.5}px`, `${h}px`] } : { height: `${h}px` }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: AI Analitik */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          onHoverStart={() => setActiveCard(3)}
          onHoverEnd={() => setActiveCard(null)}
          className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-green-500/50 transition-colors group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="font-bold text-[15px] mb-2 text-white relative z-10">AI Analitik</h3>
          <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium relative z-10">
            Tüm performans verilerinizi akıllı grafiklerle analiz edin.
          </p>
          
          <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col p-4 relative overflow-hidden group-hover:border-green-500/30 transition-colors">
            <div className="text-[10px] text-gray-400 font-bold">Toplam Gelir</div>
            <div className="flex items-end gap-2 mb-4">
              <div className="text-[20px] font-black text-white">₺125,430</div>
              <motion.div 
                animate={activeCard === 3 ? { y: [0, -2, 0] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-[10px] font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded flex items-center mb-1"
              >
                <span className="material-symbols-outlined text-[10px]">trending_up</span> +23.5%
              </motion.div>
            </div>
            
            <div className="w-full h-[80px] mt-auto relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="graph-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8A2BE2"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
                <motion.path 
                  d={pathFillData} 
                  fill="url(#graph-grad)" 
                  opacity="0.3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 1 }}
                />
                <motion.path 
                  d={pathData} 
                  fill="none" 
                  stroke="#8A2BE2" 
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={activeCard === 3 ? { pathLength: 1 } : { pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
              
              {/* Glowing Dot on Graph */}
              <motion.div 
                className="absolute top-[5px] left-[50%] w-2 h-2 bg-white rounded-full border-[2px] border-[#8A2BE2] shadow-[0_0_10px_#8A2BE2]"
                animate={activeCard === 3 ? { scale: [1, 1.5, 1], boxShadow: ["0 0 10px #8A2BE2", "0 0 20px #8A2BE2", "0 0 10px #8A2BE2"] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>

        {/* Card 5: AI Otomasyon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          onHoverStart={() => setActiveCard(4)}
          onHoverEnd={() => setActiveCard(null)}
          className="w-full h-[340px] bg-[#0D1017] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-yellow-500/50 transition-colors group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="font-bold text-[15px] mb-2 text-white relative z-10">AI Otomasyon</h3>
          <p className="text-[12px] text-[#8E95B3] mb-4 leading-relaxed font-medium relative z-10">
            İş süreçlerinizi otomatikleştirin, zaman kazanın.
          </p>
          
          <div className="flex-1 bg-[#161922] rounded-xl border border-white/5 mt-auto flex flex-col p-4 relative overflow-hidden gap-3 justify-center group-hover:border-yellow-500/30 transition-colors">
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-5 h-5 rounded-full bg-[#252A33] flex items-center justify-center border border-white/10 text-[10px]">
                <span className="material-symbols-outlined text-[12px] text-gray-400">receipt</span>
              </div>
              <span className="text-[11px] font-medium text-gray-300">Yeni Fatura Yüklendi</span>
            </div>
            
            <div className="w-[1px] h-3 bg-white/10 ml-[9px] -my-2 relative z-0">
              <motion.div 
                className="w-full bg-[#00F0FF] shadow-[0_0_5px_#00F0FF]"
                animate={activeCard === 4 ? { height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] } : { height: "0%" }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                style={{ position: "absolute" }}
              />
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-5 h-5 rounded-full bg-[#8A2BE2]/20 flex items-center justify-center border border-[#8A2BE2]/50 text-[10px]">
                <motion.span 
                  animate={activeCard === 4 ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="material-symbols-outlined text-[12px] text-[#00F0FF]"
                >
                  smart_toy
                </motion.span>
              </div>
              <span className="text-[11px] font-medium text-white">AI Okudu ve İşledi</span>
            </div>
            
            <div className="w-[1px] h-3 bg-white/10 ml-[9px] -my-2 relative z-0">
              <motion.div 
                className="w-full bg-[#00F0FF] shadow-[0_0_5px_#00F0FF]"
                animate={activeCard === 4 ? { height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] } : { height: "0%" }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                style={{ position: "absolute" }}
              />
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-5 h-5 rounded-full bg-[#252A33] flex items-center justify-center border border-white/10 text-[10px]">
                <span className="material-symbols-outlined text-[12px] text-gray-400">send</span>
              </div>
              <span className="text-[11px] font-medium text-gray-300">Muhasebeciye Gönderildi</span>
            </div>

            <div className="w-[1px] h-3 bg-white/10 ml-[9px] -my-2 relative z-0">
               <motion.div 
                className="w-full bg-[#00F0FF] shadow-[0_0_5px_#00F0FF]"
                animate={activeCard === 4 ? { height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] } : { height: "0%" }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                style={{ position: "absolute" }}
              />
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-5 h-5 rounded-full bg-[#252A33] flex items-center justify-center border border-white/10 text-[10px]">
                <span className="material-symbols-outlined text-[12px] text-gray-400">inventory_2</span>
              </div>
              <span className="text-[11px] font-medium text-gray-300">Arşivlendi</span>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
