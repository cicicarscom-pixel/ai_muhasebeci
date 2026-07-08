"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, CheckCircle, Play, FileText, Bot, ArrowRight, LineChart, MessageSquarePlus, UploadCloud, FileCheck, DollarSign, BarChart3, LayoutDashboard, Clock, Grid } from 'lucide-react';
import { cn } from '../../utils/cn';
import { InstagramIcon, WhatsAppIcon, FacebookIcon } from '../../components/icons/social';

// Hero Node Animation Component
const NodeAnimation = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Central AI Node */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute z-10 w-32 h-32 rounded-full bg-indigo-900/40 border border-indigo-500/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(139,92,246,0.3)]"
      >
        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">AI</span>
      </motion.div>

      {/* Connected Nodes - Left (Inputs) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {[
          { icon: InstagramIcon, color: "text-pink-500", label: "Instagram", count: "23" },
          { icon: WhatsAppIcon, color: "text-green-500", label: "WhatsApp", count: "15" },
          { icon: FacebookIcon, color: "text-blue-500", label: "Facebook", count: "12" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + (i * 0.2) }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full py-2 px-4 backdrop-blur-sm"
          >
            <item.icon className={cn("w-5 h-5", item.color)} />
            <span className="text-sm text-gray-300">{item.label}</span>
            <span className="text-xs font-medium bg-white/10 px-2 py-0.5 rounded-full text-white">{item.count}</span>
          </motion.div>
        ))}
      </div>

      {/* Connected Nodes - Right (Outputs) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {[
          { title: "AI YANITLIYOR", icon: Bot, desc: "Merhaba! Size nasıl..." },
          { title: "İÇERİK ÜRETİLİYOR", icon: Star, desc: "Yeni gönderi hazır!" },
          { title: "MUHASEBE İŞLENİYOR", icon: FileText, desc: "Fatura okundu." },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + (i * 0.2) }}
            className="flex flex-col bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm min-w-[160px]"
          >
            <div className="text-[10px] font-semibold text-cyan-400 mb-1">{item.title}</div>
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-1.5 rounded-md"><item.icon className="w-4 h-4 text-purple-400" /></div>
              <span className="text-xs text-gray-300">{item.desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Connecting Lines (Simplified with CSS for brevity) */}
      <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" preserveAspectRatio="none">
         <path d="M150,100 C250,100 250,200 400,200" stroke="rgba(139,92,246,0.3)" strokeWidth="2" fill="none" />
         <path d="M150,200 C250,200 250,200 400,200" stroke="rgba(139,92,246,0.3)" strokeWidth="2" fill="none" />
         <path d="M150,300 C250,300 250,200 400,200" stroke="rgba(139,92,246,0.3)" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

export default function FlowLandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0D14] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10" />

        <div className="flex flex-col items-start space-y-8 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide">
            YENİ NESİL AI İŞLETİM SİSTEMİ
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            İşletmenizi Yöneten Tek <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Yapay Zeka
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Sosyal medyadan muhasebeye, müşteri iletişiminden içerik üretimine kadar tüm iş süreçlerinizi tek platformda otonom yapay zeka ile yönetin.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_20px_rgba(0,216,255,0.3)]">
              Ücretsiz Deneyin <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              <Play className="w-4 h-4" /> Canlı Demo İzle
            </button>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-white/10 w-full">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#0B0D14]" />
                ))}
             </div>
             <div>
               <div className="flex items-center gap-1 text-yellow-500">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                 <span className="text-white ml-2 font-semibold">4.9/5</span>
               </div>
               <p className="text-xs text-gray-500 mt-1">1,000+ işletme AI Esnaf kullanıyor</p>
             </div>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block">
          <NodeAnimation />
        </div>
      </section>

      {/* 2. UNIFIED INBOX MOCKUP */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 space-y-4">
           <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium tracking-wide">
             AI OMNICHANNEL GELEN KUTUSU
           </div>
           <h2 className="text-4xl font-bold">Tüm Kanallar<br/>Tek Gelen Kutusunda</h2>
           <p className="text-gray-400 max-w-2xl mx-auto">
             Instagram, WhatsApp, Facebook ve daha fazlasından gelen tüm mesajlar tek ekranda. AI asistanınız 7/24 otomatik yanıtlar.
           </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 overflow-hidden shadow-2xl shadow-indigo-500/10">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          {/* Mockup Top Bar */}
          <div className="flex items-center gap-2 mb-4 px-2">
             <div className="w-3 h-3 rounded-full bg-red-500/50" />
             <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
             <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col gap-2 border-r border-white/10 pr-4">
               <div className="flex items-center gap-2 text-white font-medium p-2 mb-4">
                 <LayoutDashboard className="w-5 h-5 text-cyan-400" />
                 <span>AI Esnaf</span>
               </div>
               {[
                 { label: "Gelen Kutusu", active: true, badge: "62" },
                 { label: "Tüm Mesajlar" },
                 { label: "Instagram" },
                 { label: "WhatsApp" },
                 { label: "Facebook" },
               ].map((item, i) => (
                 <div key={i} className={cn("flex justify-between items-center p-2.5 rounded-lg text-sm cursor-pointer", item.active ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5")}>
                   <span>{item.label}</span>
                   {item.badge && <span className="bg-indigo-500 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>}
                 </div>
               ))}
            </div>

            {/* Chat List */}
            <div className="hidden md:flex flex-col gap-2 border-r border-white/10 pr-4 col-span-1">
               <div className="font-medium p-2 border-b border-white/10 mb-2">Tüm Mesajlar</div>
               {[
                 { name: "Instagram DM", text: "Merhaba, fiyat bilgisi alabilir miyim?", time: "2dk", unread: true },
                 { name: "WhatsApp", text: "Siparişim ne zaman kargoya verilir?", time: "5dk", unread: false },
               ].map((chat, i) => (
                 <div key={i} className={cn("p-3 rounded-xl cursor-pointer transition-colors", chat.unread ? "bg-white/5 border border-white/10" : "hover:bg-white/5")}>
                   <div className="flex justify-between items-center mb-1">
                     <span className="font-medium text-sm text-gray-200">{chat.name}</span>
                     <span className="text-xs text-gray-500">{chat.time}</span>
                   </div>
                   <p className="text-xs text-gray-400 truncate">{chat.text}</p>
                 </div>
               ))}
            </div>

            {/* Chat Area */}
            <div className="col-span-1 md:col-span-2 flex flex-col relative bg-black/20 rounded-xl border border-white/5">
               <div className="p-4 border-b border-white/10 flex justify-between items-center">
                 <span className="font-medium text-sm">Instagram DM</span>
               </div>
               
               <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
                 {/* Messages */}
                 <div className="self-start max-w-[80%] bg-white/10 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-200 border border-white/5">
                   Merhaba, bu ürünün fiyatı nedir? Stokta var mı?
                 </div>
                 
                 <div className="self-end max-w-[80%] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl rounded-tr-sm p-3 text-sm text-gray-200 border border-indigo-500/30 relative mt-4">
                   <div className="absolute -top-3 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-[10px] font-bold px-2 py-0.5 rounded-full text-black shadow-lg">
                     AI YANITLADI
                   </div>
                   Merhaba! 👋 Ürünümüzün fiyatı 1.250₺'dir. Stoklarımızda mevcut. Sipariş vermek ister misiniz?
                 </div>
                 
                 <div className="self-start max-w-[80%] bg-white/10 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-200 border border-white/5">
                   Teşekkürler!
                 </div>
               </div>

               {/* Input area */}
               <div className="p-3 border-t border-white/10 mt-auto">
                 <div className="bg-white/5 border border-white/10 rounded-full p-2 flex items-center">
                   <input type="text" placeholder="Yanıt yaz..." className="bg-transparent border-none outline-none flex-1 px-3 text-sm text-gray-300" />
                   <button className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                     <Play className="w-4 h-4 ml-0.5" />
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID (AI GÜCÜ) */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold mb-4">İşletmenizi Büyüten AI Gücü</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors group">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Star className="text-pink-500 w-5 h-5"/> AI İçerik Üretimi</h3>
            <p className="text-sm text-gray-400 mb-6 flex-1">Sadece birkaç kelime ile profesyonel görseller ve metinler oluşturun.</p>
            <div className="h-32 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-pink-500/20 flex items-center justify-center relative overflow-hidden group-hover:border-pink-500/50 transition-colors">
              <span className="font-bold text-pink-200 text-lg z-10 drop-shadow-md">YENİ SEZON İNDİRİMİ!</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors group">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><FileText className="text-cyan-500 w-5 h-5"/> AI Muhasebe</h3>
            <p className="text-sm text-gray-400 mb-6 flex-1">Faturaları tarayın, AI tüm bilgileri ayıklar ve kaydeder.</p>
            <div className="h-32 rounded-xl bg-cyan-950/30 border border-cyan-500/20 p-3 flex flex-col relative group-hover:border-cyan-500/50 transition-colors">
              <div className="w-full bg-white/5 p-2 rounded text-[10px] text-gray-400 font-mono flex-1 border border-white/5">
                FATURA<br/>
                Tarih: 24.05.2024<br/>
                Tutar: ₺2,450.00
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500/20 text-green-400 text-[10px] px-2 py-1 rounded font-medium border border-green-500/20">
                %99.2 Doğruluk
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors group">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Bot className="text-purple-500 w-5 h-5"/> AI Asistan</h3>
            <p className="text-sm text-gray-400 mb-6 flex-1">Doğal dil ile işletmenizle ilgili her soruya anında cevap alın.</p>
            <div className="h-32 rounded-xl bg-purple-950/30 border border-purple-500/20 flex flex-col justify-end p-2 gap-2 group-hover:border-purple-500/50 transition-colors">
              <div className="self-end bg-white/10 rounded-lg p-2 text-[10px] text-gray-300 max-w-[80%]">Bu ayki toplam harcamam ne?</div>
              <div className="self-start bg-purple-500/20 border border-purple-500/30 rounded-lg p-2 text-[10px] text-purple-200 max-w-[80%]">Toplam harcamanız ₺45,250.00'dır.</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors group">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><LineChart className="text-blue-500 w-5 h-5"/> AI Analitik</h3>
            <p className="text-sm text-gray-400 mb-6 flex-1">Tüm performans verilerinizi akıllı grafiklerle analiz edin.</p>
            <div className="h-32 rounded-xl bg-blue-950/30 border border-blue-500/20 flex flex-col justify-between p-3 group-hover:border-blue-500/50 transition-colors">
              <div className="text-xs text-gray-400">Toplam Gelir</div>
              <div className="text-xl font-bold text-white">₺125,430</div>
              <div className="mt-auto h-10 w-full flex items-end justify-between gap-1">
                {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                  <div key={i} className="w-full bg-blue-500/50 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
           <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium tracking-wide mb-4">
             AKILLI MUHASEBE SÜRECİ
           </div>
           <h2 className="text-3xl font-bold">Fatura'dan Rapor'a<br/>Otomatik Yolculuk</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative">
           {/* Horizontal Line for Desktop */}
           <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 -z-10" />

           {[
             { step: "1", title: "Tarama", desc: "Faturanızı çekin veya yükleyin.", icon: UploadCloud },
             { step: "2", title: "AI Okuma", desc: "Tüm bilgileri otomatik çıkarır.", icon: Bot },
             { step: "3", title: "Kategorize", desc: "Giderler otomatik kategorize edilir.", icon: Grid },
             { step: "4", title: "Muhasebeci", desc: "Muhasebeciniz anında belgeyi alır.", icon: FileCheck },
             { step: "5", title: "Onay", desc: "Onaylanır ve programa aktarılır.", icon: CheckCircle },
             { step: "6", title: "Rapor", desc: "Raporlarınız otomatik oluşturulur.", icon: BarChart3 },
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center text-center max-w-[150px] relative group">
               <div className="w-16 h-16 rounded-2xl bg-[#0B0D14] border border-white/10 flex items-center justify-center mb-4 relative z-10 group-hover:border-purple-500/50 transition-colors shadow-lg">
                 <item.icon className="w-6 h-6 text-gray-300 group-hover:text-purple-400 transition-colors" />
                 <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-600 text-[10px] font-bold flex items-center justify-center border border-[#0B0D14]">
                   {item.step}
                 </div>
               </div>
               <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
               <p className="text-[11px] text-gray-500 leading-tight">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 5. CTA & FOOTER */}
      <section className="relative max-w-5xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
          
          <div className="z-10 flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">İşletmenizin Geleceği<br/>Bugünden Başlasın</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              AI Esnaf ile tanışın, işlerinizi kolaylaştırın ve büyümenize odaklanın.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity">
                Ücretsiz Hesap Oluştur →
              </button>
              <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                Demo Talep Et
              </button>
            </div>
          </div>

          <div className="z-10 flex flex-col gap-4 text-sm bg-black/20 p-6 rounded-2xl border border-white/5">
             <div className="flex items-center gap-3">
               <CheckCircle className="w-5 h-5 text-green-400" />
               <span className="text-gray-200">14 Gün Ücretsiz Deneme</span>
             </div>
             <div className="flex items-center gap-3">
               <Bot className="w-5 h-5 text-purple-400" />
               <span className="text-gray-200">Kurulum Desteği</span>
             </div>
             <div className="flex items-center gap-3">
               <Clock className="w-5 h-5 text-cyan-400" />
               <span className="text-gray-200">7/24 Destek</span>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
