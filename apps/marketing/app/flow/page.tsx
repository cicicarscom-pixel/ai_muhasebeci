"use client";

import React from 'react';
import { BackgroundEffects } from '../../components/effects/BackgroundEffects';
import { Navbar } from '../../components/layout/Navbar';
import { GlowButton } from '../../components/ui/GlowButton';
import { GlassCard } from '../../components/ui/GlassCard';
import { Play, CheckCircle, Star, ArrowRight, Bot, Image as ImageIcon, Receipt, BarChart3, CloudLightning, ShieldCheck, Mail, Workflow, FileText, Smartphone, ListChecks, UserCheck, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InstagramIcon, WhatsAppIcon, FacebookIcon, GoogleIcon, TikTokIcon } from '../../components/icons/social';
import { fadeIn, staggerContainer } from '../../animations/fade';
import { pulseGlow } from '../../animations/glow';
import { float } from '../../animations/float';

export default function FlowPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-[1400px] mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left: Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-widest uppercase">
              YENİ NESİL AI İŞLETİM SİSTEMİ
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05]">
              İşletmenizi Yöneten <br /> Tek <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Yapay Zeka</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Sosyal medyadan muhasebeye, müşteri iletişiminden içerik üretimine kadar tüm iş süreçlerinizi tek platformda otonom yapay zeka ile yönetin.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-6 text-sm text-gray-300">
              {['7/24 AI Asistan', 'Otomatik Yanıtlar', 'Akıllı Muhasebe', 'Gerçek Zamanlı Analiz'].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500" />
                  <span>{f}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 items-center pt-4">
              <GlowButton>
                Ücretsiz Deneyin <ArrowRight className="w-4 h-4 ml-2" />
              </GlowButton>
              <GlowButton variant="secondary">
                <Play className="w-4 h-4 mr-2" /> Canlı Demo İzle
              </GlowButton>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8 flex items-center gap-6 border-t border-white/10 w-full">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-[#0A0A0B] shadow-lg" />
                 ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  <span className="text-white ml-2 font-bold">4.9/5</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">1,000+ işletme AI Esnaf kullanıyor</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: AI Node Animation */}
          <motion.div 
             className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1000px]"
             style={{ y }}
          >
            {/* AI Core */}
            <motion.div 
              variants={pulseGlow}
              initial="initial"
              animate="animate"
              className="absolute z-20 w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-600/20 to-purple-600/20 border-2 border-cyan-500/50 flex items-center justify-center backdrop-blur-xl shadow-[0_0_80px_rgba(0,216,255,0.4)]"
            >
              <div className="w-32 h-32 rounded-full border border-purple-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="w-24 h-24 rounded-full border border-cyan-500/40 animate-[spin_15s_reverse_linear_infinite]" />
              </div>
              <span className="absolute text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-cyan-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">AI</span>
            </motion.div>

            {/* SVG Motion Paths (Energy Lines) */}
            <svg className="absolute inset-0 w-full h-full -z-10" style={{ filter: 'drop-shadow(0 0 8px rgba(139,92,246,0.5))' }}>
              <path d="M100,150 C250,150 300,300 350,300" stroke="url(#gradient-line)" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M100,300 C250,300 300,300 350,300" stroke="url(#gradient-line)" strokeWidth="2" fill="none" opacity="0.8" />
              <path d="M100,450 C250,450 300,300 350,300" stroke="url(#gradient-line)" strokeWidth="2" fill="none" opacity="0.5" />
              
              <path d="M450,300 C500,300 600,150 700,150" stroke="url(#gradient-line-2)" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M450,300 C500,300 600,300 700,300" stroke="url(#gradient-line-2)" strokeWidth="2" fill="none" opacity="0.8" />
              <path d="M450,300 C500,300 600,450 700,450" stroke="url(#gradient-line-2)" strokeWidth="2" fill="none" opacity="0.5" />

              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#00D8FF" />
                </linearGradient>
                <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D8FF" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inputs */}
            <div className="absolute left-0 flex flex-col gap-8 w-48 z-10">
              {[
                { label: 'Instagram', icon: InstagramIcon, count: '23', color: 'from-pink-500/20 to-purple-500/20', border: 'border-pink-500/30' },
                { label: 'WhatsApp', icon: WhatsAppIcon, count: '15', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30' },
                { label: 'Facebook', icon: FacebookIcon, count: '12', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/30' }
              ].map((item, i) => (
                <GlassCard key={i} className={`p-3 flex items-center justify-between border ${item.border} bg-gradient-to-r ${item.color}`}>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-white drop-shadow-md" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full font-bold">{item.count}</span>
                </GlassCard>
              ))}
            </div>

            {/* Outputs */}
            <div className="absolute right-0 flex flex-col gap-8 w-56 z-10">
              {[
                { title: 'AI YANITLIYOR', icon: Bot, desc: 'Merhaba! Size nasıl...', color: 'text-cyan-400' },
                { title: 'İÇERİK ÜRETİLİYOR', icon: ImageIcon, desc: 'Yeni gönderi hazır!', color: 'text-pink-400' },
                { title: 'MUHASEBE İŞLENİYOR', icon: Receipt, desc: 'Fatura okundu.', color: 'text-purple-400' }
              ].map((item, i) => (
                <GlassCard key={i} className="p-3 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`text-[10px] font-bold tracking-wider mb-1 ${item.color}`}>{item.title}</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-lg"><item.icon className="w-4 h-4 text-white" /></div>
                    <span className="text-xs text-gray-300 font-medium truncate">{item.desc}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 2. STAT BAR */}
        <section className="py-12 relative z-20">
          <GlassCard className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 p-8">
             {[
               { icon: MessageSquare, value: '12.5K+', label: 'Mesaj Yanıtlandı', color: 'text-cyan-400' },
               { icon: FileText, value: '3.2K+', label: 'Belge İşlendi', color: 'text-purple-400' },
               { icon: CloudLightning, value: '98.7%', label: 'Doğruluk Oranı', color: 'text-green-400' },
               { icon: ShieldCheck, value: '7/24', label: 'Kesintisiz Hizmet', color: 'text-yellow-400' },
             ].map((stat, i) => (
               <div key={i} className="flex flex-col items-center justify-center text-center px-4 hover:scale-105 transition-transform">
                 <div className="bg-white/5 p-3 rounded-xl mb-4 border border-white/5">
                   <stat.icon className={`w-6 h-6 ${stat.color}`} />
                 </div>
                 <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                 <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
               </div>
             ))}
          </GlassCard>
        </section>

        {/* 3. UNIFIED INBOX */}
        <section className="py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-widest uppercase">
              AI OMNICHANNEL GELEN KUTUSU
            </div>
            <h2 className="text-4xl font-bold leading-tight">Tüm Kanallar <br/> Tek Gelen Kutusunda</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Instagram, WhatsApp, Facebook ve daha fazlasından gelen tüm mesajlar tek ekranda. AI asistanınız 7/24 otomatik yanıtlar.
            </p>
            
            <div className="flex items-center gap-3">
              {[InstagramIcon, WhatsAppIcon, FacebookIcon, GoogleIcon, TikTokIcon].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <Icon className="w-5 h-5 text-gray-300" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-300">+3</div>
            </div>

            <div className="space-y-4 pt-4">
              {[
                'Anlık mesaj senkronizasyonu',
                'AI destekli otomatik yanıtlar',
                'Yorum ağacı görüntüleme',
                'Öncelik ve etiket yönetimi'
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <GlassCard className="h-[650px] flex flex-col p-2">
              <div className="flex items-center gap-2 p-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              
              <div className="flex-1 grid grid-cols-12 gap-2 overflow-hidden">
                {/* Sidebar */}
                <div className="col-span-3 border-r border-white/5 p-4 space-y-2">
                  <div className="flex items-center gap-2 font-bold mb-6 text-white"><Bot className="w-5 h-5 text-cyan-400"/> AI Esnaf</div>
                  <div className="bg-white/10 text-white p-2 rounded-lg text-sm flex justify-between items-center cursor-pointer">
                    Gelen Kutusu <span className="bg-indigo-500 text-[10px] px-2 py-0.5 rounded-full">62</span>
                  </div>
                  {['Tüm Mesajlar', 'Instagram', 'WhatsApp', 'Facebook'].map((m, i) => (
                    <div key={i} className="text-gray-400 p-2 rounded-lg text-sm hover:bg-white/5 transition-colors cursor-pointer">
                      {m}
                    </div>
                  ))}
                </div>

                {/* Message List */}
                <div className="col-span-4 border-r border-white/5 p-4 overflow-y-auto custom-scrollbar">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Tüm Mesajlar</div>
                  {[
                    { name: 'Instagram DM', preview: 'Merhaba, fiyat bilgisi...', time: '2dk', unread: true },
                    { name: 'WhatsApp', preview: 'Siparişim nerede kaldı?', time: '5dk', unread: false },
                    { name: 'Facebook', preview: 'Teşekkürler!', time: '15dk', unread: false },
                  ].map((m, i) => (
                    <div key={i} className={`p-3 rounded-xl mb-2 cursor-pointer transition-all ${m.unread ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5 border border-transparent'}`}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-gray-200">{m.name}</span>
                        <span className="text-xs text-gray-500">{m.time}</span>
                      </div>
                      <div className="text-xs text-gray-400 truncate">{m.preview}</div>
                    </div>
                  ))}
                </div>

                {/* Conversation Area */}
                <div className="col-span-5 flex flex-col relative bg-black/20 rounded-lg">
                  <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5 rounded-t-lg">
                    <span className="font-bold text-sm">Instagram DM</span>
                  </div>
                  
                  <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
                    <div className="self-start max-w-[85%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-gray-300">
                      Merhaba, bu ürünün fiyatı nedir? Stokta var mı?
                    </div>
                    
                    <div className="self-end max-w-[85%] bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/40 rounded-2xl rounded-tr-none p-4 text-sm text-white relative shadow-lg shadow-indigo-500/10">
                      <div className="absolute -top-3 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-[9px] font-black tracking-widest px-2 py-1 rounded-full text-black shadow-lg uppercase">
                        AI YANITLADI
                      </div>
                      Merhaba! 👋 Ürünümüzün fiyatı 1.250₺'dir. Stoklarımızda mevcut. Sipariş vermek ister misiniz?
                    </div>
                    
                    <div className="self-start max-w-[85%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-gray-300">
                      Teşekkürler!
                    </div>
                  </div>

                  <div className="p-4 border-t border-white/5 bg-white/5 rounded-b-lg">
                    <div className="bg-black/50 border border-white/10 rounded-full p-2 flex items-center gap-2">
                      <input type="text" placeholder="Yanıt yaz..." className="bg-transparent border-none outline-none flex-1 px-4 text-sm text-gray-300" />
                      <button className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white hover:bg-indigo-400 transition-colors">
                        <Play className="w-4 h-4 ml-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 4. AI FEATURES GRID */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">İşletmenizi Büyüten AI Gücü</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
             {/* Component-based extraction in a real app, here inline for demonstration */}
             {[
               { title: 'AI İçerik Üretimi', icon: Star, color: 'text-pink-500', bg: 'from-pink-900/40 to-purple-900/40', border: 'border-pink-500/20' },
               { title: 'AI Muhasebe', icon: Receipt, color: 'text-cyan-500', bg: 'from-cyan-900/40 to-blue-900/40', border: 'border-cyan-500/20' },
               { title: 'AI Asistan', icon: Bot, color: 'text-purple-500', bg: 'from-purple-900/40 to-indigo-900/40', border: 'border-purple-500/20' },
               { title: 'AI Analitik', icon: BarChart3, color: 'text-blue-500', bg: 'from-blue-900/40 to-cyan-900/40', border: 'border-blue-500/20' },
               { title: 'AI Otomasyon', icon: Workflow, color: 'text-emerald-500', bg: 'from-emerald-900/40 to-green-900/40', border: 'border-emerald-500/20' }
             ].map((feature, i) => (
               <GlassCard key={i} className="p-6 flex flex-col group cursor-pointer">
                 <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                   <feature.icon className={`w-5 h-5 ${feature.color}`} /> {feature.title}
                 </h3>
                 <p className="text-xs text-gray-400 mb-6 flex-1">Profesyonel yapay zeka gücü.</p>
                 <div className={`h-32 rounded-xl bg-gradient-to-br ${feature.bg} border ${feature.border} relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center shadow-inner`}>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-mono text-[10px] text-white/50">Canlı Demo {i+1}</span>
                 </div>
               </GlassCard>
             ))}
          </div>
        </section>

        {/* 5. WORKFLOW */}
        <section className="py-32 border-t border-white/5 relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-widest uppercase mb-6">
              AKILLI MUHASEBE SÜRECİ
            </div>
            <h2 className="text-4xl font-bold">Fatura'dan Rapor'a <br/> Otomatik Yolculuk</h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative max-w-5xl mx-auto">
            {/* Background glowing line */}
            <div className="hidden md:block absolute top-12 left-[5%] right-[5%] h-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 -z-10 blur-sm" />
            <div className="hidden md:block absolute top-12 left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 -z-10" />

            {[
              { step: 1, title: 'Tarama', icon: Smartphone, desc: 'Fiş/Fatura çekin' },
              { step: 2, title: 'AI Okuma', icon: FileText, desc: 'Veriler ayrıştırılır' },
              { step: 3, title: 'Kategorize', icon: ListChecks, desc: 'Giderler sınıflandırılır' },
              { step: 4, title: 'Muhasebeci', icon: UserCheck, desc: 'Belge iletilir' },
              { step: 5, title: 'Onay', icon: CheckCircle, desc: 'Sistem onaylar' },
              { step: 6, title: 'Rapor', icon: BarChart3, desc: 'Grafikler oluşur' }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center w-32 relative group">
                <GlassCard className="w-24 h-24 mb-6 rounded-2xl flex items-center justify-center bg-[#0A0A0B] border-white/10 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all z-10">
                  <s.icon className="w-8 h-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-indigo-600 border-2 border-[#0A0A0B] text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </div>
                </GlassCard>
                <h4 className="font-bold text-sm mb-2">{s.title}</h4>
                <p className="text-xs text-gray-500 leading-tight">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. INTEGRATIONS */}
        <section className="py-24">
          <h2 className="text-center text-sm font-bold text-gray-500 tracking-widest uppercase mb-12">KULLANDIĞINIZ PLATFORMLARLA TAM ENTEGRE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
             {[InstagramIcon, WhatsAppIcon, FacebookIcon, GoogleIcon, TikTokIcon, CloudLightning, ShieldCheck, Mail].map((Icon, i) => (
               <GlassCard key={i} className="p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 group cursor-pointer">
                 <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors drop-shadow-md" />
                 <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-300">Uygulama {i+1}</span>
               </GlassCard>
             ))}
          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-32">
          <GlassCard className="p-12 md:p-16 overflow-hidden relative shadow-[0_20px_60px_rgba(139,92,246,0.15)] flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border-white/10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="z-10 flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">İşletmenizin Geleceği <br/> Bugünden Başlasın</h2>
              <p className="text-lg text-gray-300 max-w-lg">
                AI Esnaf ile tanışın, işlerinizi kolaylaştırın ve büyümenize odaklanın.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <GlowButton>Ücretsiz Hesap Oluştur →</GlowButton>
                <GlowButton variant="secondary">Demo Talep Et</GlowButton>
              </div>
            </div>

            <div className="z-10 flex flex-col gap-4 bg-[#0A0A0B]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full md:w-auto shadow-2xl">
               {[
                 { icon: CheckCircle, text: '14 Gün Ücretsiz Deneme', color: 'text-green-400' },
                 { icon: Bot, text: 'Kurulum Desteği', color: 'text-purple-400' },
                 { icon: Clock, text: '7/24 Destek', color: 'text-cyan-400' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <div className="bg-white/5 p-2 rounded-lg">
                     <item.icon className={`w-5 h-5 ${item.color}`} />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-sm font-bold text-gray-200">{item.text}</span>
                     <span className="text-[10px] text-gray-500">Ekstra ücret yok</span>
                   </div>
                 </div>
               ))}
            </div>
          </GlassCard>
        </section>

      </main>
    </div>
  );
}
