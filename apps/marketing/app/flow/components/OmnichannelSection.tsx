"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OmnichannelSection() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "customer", text: "Merhaba, bu ürünün fiyatı nedir? Stokta var mı?" },
    { id: 2, sender: "ai", text: "Merhaba! 👋 Ürünümüzün fiyatı ₺1.250'dir. Stoklarımızda mevcut. Sipariş vermek ister misiniz?" },
    { id: 3, sender: "customer", text: "Teşekkürler!" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Demo animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Reset
      setMessages([{ id: 1, sender: "customer", text: "Merhaba, bu ürünün fiyatı nedir? Stokta var mı?" }]);
      
      // Wait a bit
      await new Promise(r => setTimeout(r, 2000));
      
      // AI starts typing
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1500));
      setIsTyping(false);
      
      // AI sends reply
      setMessages(prev => [...prev, { id: 2, sender: "ai", text: "Merhaba! 👋 Ürünümüzün fiyatı ₺1.250'dir. Stoklarımızda mevcut. Sipariş vermek ister misiniz?" }]);
      
      // Wait
      await new Promise(r => setTimeout(r, 2500));
      
      // Customer replies
      setMessages(prev => [...prev, { id: 3, sender: "customer", text: "Teşekkürler!" }]);
    };

    sequence();
    const interval = setInterval(sequence, 10000); // loop every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-32 flex flex-col md:flex-row items-center gap-12">
      
      {/* Left side text */}
      <div className="flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6"
        >
          <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">AI OMNICHANNEL GELEN KUTUSU</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[32px] md:text-[44px] font-extrabold mb-6 text-white tracking-tight leading-[1.1]"
        >
          Tüm Kanallar<br/>Tek Gelen Kutusunda
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#8E95B3] text-[16px] mb-8 max-w-[400px]"
        >
          Instagram, WhatsApp, Facebook ve daha fazlasından gelen tüm mesajlar tek ekranda. AI asistanınız 7/24 otomatik yanıtlar.
        </motion.p>

        {/* Channel Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 mb-8"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 flex items-center justify-center border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.3)]"><span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-[24px]">photo_camera</span></div>
          <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/30 shadow-[0_0_15px_rgba(37,211,102,0.3)]"><span className="material-symbols-outlined text-[#25D366] text-[24px]">chat</span></div>
          <div className="w-12 h-12 rounded-full bg-[#1877F2]/20 flex items-center justify-center border border-[#1877F2]/30 shadow-[0_0_15px_rgba(24,119,242,0.3)]"><span className="material-symbols-outlined text-[#1877F2] text-[24px]">thumb_up</span></div>
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-lg"><span className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#EA4335] via-[#FBBC05] to-[#34A853]">G</span></div>
          <div className="w-12 h-12 rounded-full bg-[#00B2FF]/20 flex items-center justify-center border border-[#00B2FF]/30 shadow-[0_0_15px_rgba(0,178,255,0.3)]"><span className="material-symbols-outlined text-[#00B2FF] text-[24px]">forum</span></div>
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-lg"><span className="text-[24px]">🎵</span></div>
          <div className="w-12 h-12 rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center shadow-lg"><span className="text-[#B4B8D0] text-[14px] font-bold">+3</span></div>
        </motion.div>

        {/* Feature Checkmarks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#8A2BE2]/20 border border-[#8A2BE2]/50 flex items-center justify-center"><span className="material-symbols-outlined text-[#8A2BE2] text-[12px]">check</span></div>
            <span className="text-white text-[14px]">Anlık mesaj senkronizasyonu</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#8A2BE2]/20 border border-[#8A2BE2]/50 flex items-center justify-center"><span className="material-symbols-outlined text-[#8A2BE2] text-[12px]">check</span></div>
            <span className="text-white text-[14px]">AI destekli otomatik yanıtlar</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#8A2BE2]/20 border border-[#8A2BE2]/50 flex items-center justify-center"><span className="material-symbols-outlined text-[#8A2BE2] text-[12px]">check</span></div>
            <span className="text-white text-[14px]">Yorum ağacı görüntüleme</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#8A2BE2]/20 border border-[#8A2BE2]/50 flex items-center justify-center"><span className="material-symbols-outlined text-[#8A2BE2] text-[12px]">check</span></div>
            <span className="text-white text-[14px]">Öncelik ve etiket yönetimi</span>
          </div>
        </motion.div>
      </div>

      {/* Right side Inbox UI */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex-[1.5] relative w-full h-[550px] bg-[#0A0D14]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,100,255,0.1)] flex overflow-hidden group"
      >
        {/* Glow behind the mockup */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/10 to-[#00F0FF]/5 pointer-events-none z-0"></div>
        
        {/* Sidebar */}
        <div className="w-[180px] border-r border-white/5 bg-[#0A0D14] flex flex-col p-4 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded bg-[#00F0FF]/20 flex items-center justify-center border border-[#00F0FF]/50"><span className="text-[#00F0FF] text-[12px] font-black">AI</span></div>
            <span className="text-white font-bold text-[13px]">AI Esnaf</span>
          </div>
          
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-3 bg-white/10 px-3 py-2.5 rounded-xl cursor-pointer border border-white/5">
              <span className="material-symbols-outlined text-[15px] text-blue-400">inbox</span>
              <span className="text-white text-[11px] font-medium">Gelen Kutusu</span>
              <span className="ml-auto bg-blue-500/20 text-blue-300 text-[9px] px-1.5 py-0.5 rounded-full font-bold">67</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[15px]">chat</span>
              <span className="text-[11px] font-medium">Tüm Mesajlar</span>
            </div>
            
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors mt-2">
              <span className="material-symbols-outlined text-[15px]">photo_camera</span>
              <span className="text-[11px] font-medium">Instagram</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[15px]">chat</span>
              <span className="text-[11px] font-medium">WhatsApp</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[15px]">thumb_up</span>
              <span className="text-[11px] font-medium">Facebook</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[15px]">forum</span>
              <span className="text-[11px] font-medium">Yorumlar</span>
            </div>
            
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors mt-2">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              <span className="text-[11px] font-medium">Bekleyenler</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[15px]">archive</span>
              <span className="text-[11px] font-medium">Arşiv</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[15px]">edit_document</span>
              <span className="text-[11px] font-medium">Taslaklar</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-xl cursor-pointer text-[#8E95B3] hover:text-white transition-colors mt-2">
              <span className="material-symbols-outlined text-[15px]">settings</span>
              <span className="text-[11px] font-medium">Ayarlar</span>
            </div>
          </div>
        </div>

        {/* Message List */}
        <div className="w-[280px] border-r border-white/5 flex flex-col bg-[#07090E]/80 relative z-10">
          <div className="p-5 border-b border-white/5 flex items-center justify-between">
            <span className="text-white font-bold text-[14px]">Tüm Mesajlar</span>
            <span className="material-symbols-outlined text-[#8E95B3] text-[16px]">filter_list</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
            <div className="bg-[#161922] border border-white/5 rounded-2xl p-4 flex flex-col cursor-pointer relative shadow-lg">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-md"><span className="material-symbols-outlined text-white text-[12px]">photo_camera</span></div>
                <span className="text-white text-[13px] font-semibold">Instagram DM</span>
                <span className="text-[#00F0FF] text-[10px] ml-auto font-medium">2dk</span>
              </div>
              <p className="text-[#8E95B3] text-[12px] line-clamp-1 ml-8">Merhaba, fiyat bilgisi alabilir miyim?</p>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></div>
            </div>
            
            <div className="hover:bg-white/5 rounded-2xl p-4 flex flex-col cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shadow-md"><span className="material-symbols-outlined text-white text-[12px]">chat</span></div>
                <span className="text-white text-[13px] font-medium">WhatsApp</span>
                <span className="text-[#8E95B3] text-[10px] ml-auto">5dk</span>
              </div>
              <p className="text-[#8E95B3] text-[12px] line-clamp-1 ml-8">Siparişim ne zaman kargoya verilir?</p>
            </div>
            
            <div className="hover:bg-white/5 rounded-2xl p-4 flex flex-col cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md"><span className="text-[12px] font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#EA4335] via-[#FBBC05] to-[#34A853]">G</span></div>
                <span className="text-white text-[13px] font-medium">Google Yorum</span>
                <span className="text-[#8E95B3] text-[10px] ml-auto">10dk</span>
              </div>
              <p className="text-[#8E95B3] text-[12px] line-clamp-1 ml-8">Harika hizmet. Çok memnun kaldım.</p>
            </div>

            <div className="hover:bg-white/5 rounded-2xl p-4 flex flex-col cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center shadow-md"><span className="material-symbols-outlined text-white text-[12px]">thumb_up</span></div>
                <span className="text-white text-[13px] font-medium">Facebook Mesaj</span>
                <span className="text-[#8E95B3] text-[10px] ml-auto">15dk</span>
              </div>
              <p className="text-[#8E95B3] text-[12px] line-clamp-1 ml-8">Ürünleriniz garantili mi?</p>
            </div>

            <div className="hover:bg-white/5 rounded-2xl p-4 flex flex-col cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-md"><span className="material-symbols-outlined text-white text-[12px]">photo_camera</span></div>
                <span className="text-white text-[13px] font-medium">Instagram Yorum</span>
                <span className="text-[#8E95B3] text-[10px] ml-auto">20dk</span>
              </div>
              <p className="text-[#8E95B3] text-[12px] line-clamp-1 ml-8">Bu ürünü nasıl satın alabilirim?</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-[#07090E]/60 relative z-10">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <span className="text-white font-bold text-[14px]">Instagram DM</span>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-[#8E95B3] text-[14px]">check</span>
              </div>
              <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-[#8E95B3] text-[18px]">more_horiz</span>
              </div>
            </div>
          </div>
          
          {/* AI Reply Badge */}
          <div className="absolute top-[80px] right-[-15px] z-30">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] p-[1.5px] rounded-full shadow-[0_0_30px_rgba(0,240,255,0.4)] relative"
            >
              <div className="bg-[#0A0D14] px-4 py-2 rounded-full flex items-center gap-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] font-black text-[11px] tracking-widest uppercase">AI OTOMATİK YANITLADI</span>
                <span className="material-symbols-outlined text-[#F5B400] text-[16px] drop-shadow-[0_0_8px_#F5B400]">kid_star</span>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 relative">
            
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`flex items-start gap-3 max-w-[85%] ${msg.sender === "ai" ? "ml-auto flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-2 ${msg.sender === "ai" ? "bg-transparent border-0" : "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg"}`}>
                    {msg.sender === "ai" ? (
                      <div className="w-6 h-6 rounded-full bg-[#181B2A] flex items-center justify-center border border-white/10 shadow-lg">
                        <span className="material-symbols-outlined text-white text-[12px]">workspace_premium</span>
                      </div>
                    ) : (
                      <span className="material-symbols-outlined text-white text-[16px]">person</span>
                    )}
                  </div>
                  
                  <div className={`p-4 text-[13px] shadow-lg leading-relaxed ${msg.sender === "ai" ? "bg-[#1C1F3B] border border-[#2B2F4C] text-white rounded-[20px] rounded-tr-[4px]" : "bg-transparent border border-white/5 text-[#B4B8D0] rounded-[20px] rounded-tl-[4px]"}`}>
                    {msg.text}
                    {msg.sender === "ai" && (
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                        <span className="text-[10px] text-[#8E95B3] font-medium">AI Yanıtladı • 2dk</span>
                        <div className="w-6 h-6 rounded-full bg-[#232B45] flex items-center justify-center border border-transparent hover:border-[#00F0FF]/50 cursor-pointer transition-colors"><span className="material-symbols-outlined text-[12px] text-white">edit</span></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 ml-auto"
              >
                <div className="bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 px-3 py-2 rounded-2xl rounded-tr-sm flex gap-1 items-center h-[34px]">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></motion.div>
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></motion.div>
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></motion.div>
                </div>
              </motion.div>
            )}
            
          </div>
          
          <div className="p-4 border-t border-white/5 bg-transparent pb-6">
            <div className="relative">
              <input type="text" placeholder="Yanıt yaz..." disabled className="w-full bg-[#0A0D14] border border-white/5 rounded-full px-5 py-3 text-[13px] text-white outline-none cursor-not-allowed shadow-inner" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#6B46C1] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[14px]">send</span></div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
