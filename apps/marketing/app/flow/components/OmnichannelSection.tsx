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
          className="flex gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">photo_camera</span></div>
          <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">chat</span></div>
          <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">thumb_up</span></div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-[#EA4335] text-[18px]">mail</span></div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">forum</span></div>
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">music_note</span></div>
          <div className="w-10 h-10 rounded-full bg-[#111424] border border-[#232B45] flex items-center justify-center shadow-lg"><span className="text-[#B4B8D0] text-[12px] font-bold">+3</span></div>
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
        <div className="w-[200px] border-r border-white/10 bg-[#07090E]/50 flex flex-col p-4 relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 rounded bg-[#00F0FF]/20 flex items-center justify-center border border-[#00F0FF]/50"><span className="text-[#00F0FF] text-[12px] font-black">AI</span></div>
            <span className="text-white font-bold text-[14px]">AI Esnaf</span>
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
              <span className="material-symbols-outlined text-[16px] text-[#00F0FF]">inbox</span>
              <span className="text-white text-[12px] font-medium">Gelen Kutusu</span>
              <span className="ml-auto bg-[#8A2BE2] text-white text-[9px] px-1.5 py-0.5 rounded-full">62</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2 rounded-lg cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span className="text-[12px] font-medium">Tüm Mesajlar</span>
            </div>
            
            <div className="h-[1px] w-full bg-white/5 my-2"></div>
            
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2 rounded-lg cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              <span className="text-[12px] font-medium">Instagram</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2 rounded-lg cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span className="text-[12px] font-medium">WhatsApp</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2 rounded-lg cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">thumb_up</span>
              <span className="text-[12px] font-medium">Facebook</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/5 px-3 py-2 rounded-lg cursor-pointer text-[#8E95B3] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">forum</span>
              <span className="text-[12px] font-medium">Yorumlar</span>
            </div>
          </div>
        </div>

        {/* Message List */}
        <div className="w-[280px] border-r border-white/10 flex flex-col bg-[#07090E]/30 relative z-10">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <span className="text-white font-bold text-[14px]">Tüm Mesajlar</span>
            <span className="material-symbols-outlined text-[#8E95B3] text-[16px]">filter_list</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
            <div className="bg-white/10 border border-white/10 rounded-xl p-3 flex flex-col cursor-pointer relative">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">photo_camera</span></div>
                <span className="text-white text-[12px] font-medium">Instagram DM</span>
                <span className="text-[#8E95B3] text-[10px] ml-auto">2dk</span>
              </div>
              <p className="text-[#B4B8D0] text-[11px] line-clamp-1">Merhaba, fiyat bilgisi alabilir miyim?</p>
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></div>
            </div>
            
            <div className="hover:bg-white/5 rounded-xl p-3 flex flex-col cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">chat</span></div>
                <span className="text-white text-[12px] font-medium">WhatsApp</span>
                <span className="text-[#8E95B3] text-[10px] ml-auto">5dk</span>
              </div>
              <p className="text-[#8E95B3] text-[11px] line-clamp-1">Siparişim ne zaman kargoya verilir?</p>
            </div>
            
            <div className="hover:bg-white/5 rounded-xl p-3 flex flex-col cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-[#F5B400] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[10px]">star</span></div>
                <span className="text-white text-[12px] font-medium">Google Yorum</span>
                <span className="text-[#8E95B3] text-[10px] ml-auto">15dk</span>
              </div>
              <p className="text-[#8E95B3] text-[11px] line-clamp-1">Harika hizmet. Çok memnun kaldım.</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-[#07090E]/10 relative z-10">
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#0A0D14]/80">
            <span className="text-white font-bold text-[14px]">Instagram DM</span>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-[#8E95B3] text-[16px] cursor-pointer">check_circle</span>
              <span className="material-symbols-outlined text-[#8E95B3] text-[16px] cursor-pointer">more_horiz</span>
            </div>
          </div>
          
          {/* AI Reply Badge */}
          <div className="absolute top-[80px] right-[20px] z-30">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] p-[1px] rounded-full shadow-[0_0_20px_rgba(138,43,226,0.4)]"
            >
              <div className="bg-[#0A0D14] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] font-black text-[10px] tracking-wider">AI OTOMATİK YANITLADI</span>
                <span className="material-symbols-outlined text-[#00F0FF] text-[14px]">auto_awesome</span>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 relative">
            
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`flex items-end gap-2 max-w-[80%] ${msg.sender === "ai" ? "ml-auto flex-row-reverse" : ""}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === "ai" ? "bg-[#00F0FF]/20 border border-[#00F0FF]/50" : "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"}`}>
                    {msg.sender === "ai" ? (
                      <span className="material-symbols-outlined text-[#00F0FF] text-[12px]">smart_toy</span>
                    ) : (
                      <span className="material-symbols-outlined text-white text-[12px]">person</span>
                    )}
                  </div>
                  
                  <div className={`p-3 rounded-2xl text-[12px] ${msg.sender === "ai" ? "bg-[#8A2BE2]/20 border border-[#8A2BE2]/30 text-white rounded-tr-sm relative" : "bg-[#161922] border border-white/5 text-[#B4B8D0] rounded-tl-sm"}`}>
                    {msg.text}
                    {msg.sender === "ai" && (
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10">
                        <span className="text-[9px] text-[#8E95B3]">AI Yanıtladı • Şimdi</span>
                        <div className="w-5 h-5 rounded-full bg-[#111424] flex items-center justify-center border border-white/10 hover:border-[#00F0FF]/50 cursor-pointer transition-colors"><span className="material-symbols-outlined text-[10px] text-[#8E95B3]">edit</span></div>
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
          
          <div className="p-4 border-t border-white/10 bg-[#0A0D14]/80">
            <div className="relative">
              <input type="text" placeholder="Yanıt yaz..." disabled className="w-full bg-[#161922] border border-white/10 rounded-full px-4 py-2.5 text-[12px] text-white outline-none cursor-not-allowed" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#8A2BE2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">send</span></div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
