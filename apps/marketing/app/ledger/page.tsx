
'use client';
import './ledger.css';
import LedgerThreeJs from '../../components/ledger/LedgerThreeJs';
import { useEffect } from 'react';

export default function LedgerPage() {
  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.ledger-fade-up').forEach(el => {
        observer.observe(el);
    });
    
    const nav = document.getElementById('top-nav');
    const onScroll = () => {
        if (!nav) return;
        if (window.scrollY > 20) {
            nav.style.backgroundColor = 'rgba(28, 27, 28, 0.8)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.backgroundColor = 'rgba(28, 27, 28, 0.6)';
            nav.style.boxShadow = 'none';
        }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="ledger-wrapper antialiased min-h-screen flex flex-col font-body-lg text-body-lg selection:bg-[#d0bcff]/30 selection:text-[#e9ddff]">
      
<nav className="fixed top-0 w-full z-50 bg-[#211e27]/60 dark:bg-[#211e27]/60 backdrop-blur-xl border-b border-white/15 shadow-none transition-all duration-300" id="top-nav">
<div className="flex justify-between items-center px-margin-desktop py-md max-w-7xl mx-auto">
<div className="font-headline-md text-headline-md font-bold text-[#e7e0ed] dark:text-[#e7e0ed] tracking-tight">
                Workigom Ledger
            </div>
<div className="hidden md:flex items-center gap-xl">

<a className="text-[#cbc3d7] hover:text-[#e7e0ed] transition-colors font-body-lg text-body-lg" href="#features">Features</a>
<a className="text-[#cbc3d7] hover:text-[#e7e0ed] transition-colors font-body-lg text-body-lg" href="#how-it-works">How it Works</a>
</div>
<div>
<button className="ledger-primary-glow-btn text-white font-label-md text-label-md px-lg py-sm rounded-full scale-95 active:scale-90 transition-transform">
                    Ledger'a Geç
                </button>
</div>
</div>
</nav>
<main className="flex-grow pt-24">

<section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop">

<div className="absolute inset-0 w-full h-full opacity-60 z-0">
  <LedgerThreeJs />
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-xl">
<h1 className="font-display-lg text-display-lg text-white mb-lg ledger-fade-up max-w-4xl tracking-tight leading-tight">
                    Muhasebede Yeni Çağ: <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] to-[#14d8ff]">Otonom Yapay Zeka İstasyonu</span>
</h1>
<p className="font-headline-md text-headline-md text-[#cbc3d7] mb-xl max-w-3xl ledger-fade-up" style={{ transitionDelay: '100ms' }}>
                    Mükelleflerinizden gelen tüm evrak ve verileri saniyeler içinde otomatik işleyen, kategorize eden ve onayınıza sunan akıllı çalışma alanınız.
                </p>
<div className="flex gap-md ledger-fade-up" style={{ transitionDelay: '200ms' }}>
<button className="ledger-primary-glow-btn text-white font-body-lg text-body-lg font-semibold px-xl py-md rounded-lg flex items-center gap-sm">
                        Hemen Başlayın
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
</button>
<button className="ledger-secondary-glass-btn text-white font-body-lg text-body-lg font-semibold px-xl py-md rounded-lg flex items-center gap-sm">
                        Demoyu İzle
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
</button>
</div>

<div className="mt-24 w-full max-w-6xl aspect-[16/9] ledger-glass-panel rounded-xl border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)] relative ledger-fade-up flex items-center justify-center overflow-hidden group" style={{ transitionDelay: '300ms' }}>

<div className="absolute inset-0 bg-gradient-to-tr from-[#d0bcff]/5 via-transparent to-[#14d8ff]/5 opacity-50"></div>

<div className="absolute top-0 left-0 w-full h-12 border-b border-[#494454]/30 flex items-center px-md gap-sm">
<div className="w-3 h-3 rounded-full bg-[#ffb4ab]/50"></div>
<div className="w-3 h-3 rounded-full bg-[#ffb869]/50"></div>
<div className="w-3 h-3 rounded-full bg-[#d0bcff]/50"></div>
<div className="ml-4 h-4 w-64 bg-[#37333d] rounded-full opacity-50"></div>
</div>
<div className="w-full h-full pt-16 p-lg grid grid-cols-12 gap-lg opacity-80">
<div className="col-span-3 flex flex-col gap-md">
<div className="h-8 w-3/4 bg-[#37333d] rounded"></div>
<div className="h-4 w-full bg-[#37333d]/50 rounded"></div>
<div className="h-4 w-5/6 bg-[#37333d]/50 rounded"></div>
<div className="h-4 w-full bg-[#37333d]/50 rounded"></div>
<div className="mt-auto h-32 w-full rounded border border-[#d0bcff]/20 bg-[#d0bcff]/5"></div>
</div>
<div className="col-span-9 flex flex-col gap-lg">
<div className="flex gap-md">
<div className="flex-1 h-24 rounded border border-white/5 bg-[#1d1a23] flex items-center p-md">
<div className="w-12 h-12 rounded-full bg-[#d0bcff]/20 mr-md"></div>
<div className="space-y-2 flex-1">
<div className="h-4 w-1/2 bg-[#37333d] rounded"></div>
<div className="h-3 w-1/4 bg-[#37333d]/50 rounded"></div>
</div>
</div>
<div className="flex-1 h-24 rounded border border-white/5 bg-[#1d1a23] flex items-center p-md">
<div className="w-12 h-12 rounded-full bg-[#14d8ff]/20 mr-md"></div>
<div className="space-y-2 flex-1">
<div className="h-4 w-1/2 bg-[#37333d] rounded"></div>
<div className="h-3 w-1/4 bg-[#37333d]/50 rounded"></div>
</div>
</div>
</div>
<div className="flex-1 rounded border border-white/5 bg-[#1d1a23] p-md flex flex-col">
<div className="h-6 w-1/4 bg-[#37333d] rounded mb-md"></div>
<div className="space-y-3 flex-1">
<div className="h-10 w-full border-b border-[#494454]/30 bg-[#37333d]/20 rounded-t"></div>
<div className="h-10 w-full border-b border-[#494454]/30 flex items-center px-sm gap-4">
<div className="h-3 w-8 bg-[#37333d] rounded"></div>
<div className="h-3 w-32 bg-[#37333d] rounded"></div>
<div className="h-3 w-24 bg-[#37333d] rounded ml-auto"></div>
</div>
<div className="h-10 w-full border-b border-[#494454]/30 flex items-center px-sm gap-4">
<div className="h-3 w-8 bg-[#37333d] rounded"></div>
<div className="h-3 w-40 bg-[#37333d] rounded"></div>
<div className="h-3 w-16 bg-[#37333d] rounded ml-auto"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto" id="features">
<div className="text-center mb-16 ledger-fade-up">
<h2 className="font-headline-lg text-headline-lg text-white mb-sm">Yapay Zeka Destekli Hassasiyet</h2>
<p className="text-[#cbc3d7] font-body-lg text-body-lg max-w-2xl mx-auto">Tüm iş akışınızı tek bir ekranda, benzersiz bir hız ve doğrulukla yönetin.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">

<div className="lg:col-span-2 ledger-glass-panel rounded-xl p-lg ledger-bento-glow-border ledger-fade-up group flex flex-col justify-between min-h-[300px]">
<div>
<div className="w-12 h-12 rounded-lg bg-[#d0bcff]/10 flex items-center justify-center mb-md border border-[#d0bcff]/20 group-hover:bg-[#d0bcff]/20 transition-colors">
<span className="material-symbols-outlined text-[#d0bcff]" style={{ fontVariationSettings: "'FILL' 1" }}>category</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-xs tracking-tight">AI Veri Sınıflandırma</h3>
<p className="text-[#cbc3d7] font-body-md text-body-md max-w-md">Fiş, fatura ve dekontları anında tanır; vergi kodları ve KDV oranlarını otomatik eşleştirir.</p>
</div>

<div className="mt-lg rounded-lg border border-[#494454]/30 bg-[#37333d]/50 p-md flex flex-col gap-sm">
<div className="flex items-center justify-between border-b border-[#494454]/30 pb-sm">
<span className="font-mono-data text-mono-data text-[#cbc3d7]">Fatura No: INV-2024-001</span>
<span className="px-2 py-1 rounded-full bg-[#d0bcff]/10 text-[#d0bcff] font-label-md text-label-md border border-[#d0bcff]/20">Eşleşti</span>
</div>
<div className="flex items-center gap-md">
<div className="flex-1 bg-[#37333d]/30 h-8 rounded px-sm flex items-center">
<span className="font-mono-data text-mono-data text-[#cbc3d7] text-xs">Hesap Kodu: 153.01</span>
</div>
<span className="material-symbols-outlined text-[#d0bcff]" style={{ fontSize: "16px" }}>arrow_forward</span>
<div className="flex-1 bg-[#d0bcff]/10 h-8 rounded px-sm flex items-center border border-[#d0bcff]/20">
<span className="font-mono-data text-mono-data text-[#d0bcff] text-xs">KDV: %20 - İndirilecek</span>
</div>
</div>
</div>
</div>

<div className="ledger-glass-panel rounded-xl p-lg ledger-bento-glow-border ledger-fade-up group flex flex-col justify-between min-h-[300px]" style={{ transitionDelay: '100ms' }}>
<div>
<div className="w-12 h-12 rounded-lg bg-[#14d8ff]/10 flex items-center justify-center mb-md border border-[#14d8ff]/20 group-hover:bg-[#14d8ff]/20 transition-colors">
<span className="material-symbols-outlined text-[#14d8ff]" style={{ fontVariationSettings: "'FILL' 1" }}>sync</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-xs tracking-tight">Flow Senkronizasyonu</h3>
<p className="text-[#cbc3d7] font-body-md text-body-md">Mükellef iletişimini merkezileştirin.</p>
</div>

<div className="mt-md rounded-lg border border-[#494454]/30 bg-[#37333d]/50 p-sm space-y-sm">
<div className="bg-[#37333d]/40 rounded p-sm max-w-[85%] self-start border border-white/5">
<p className="font-body-md text-body-md text-[#e7e0ed] text-xs">Ahmet Bey, Ekim ayı harcama fişleri ektedir.</p>
</div>
<div className="bg-[#d0bcff]/20 rounded p-sm max-w-[85%] ml-auto border border-[#d0bcff]/30 relative">
<p className="font-body-md text-body-md text-[#d0bcff]-fixed-dim text-xs">Teşekkürler, Ledger 4 belgenizi işledi.</p>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14d8ff] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#14d8ff]"></span>
</span>
</div>
</div>
</div>

<div className="ledger-glass-panel rounded-xl p-lg ledger-bento-glow-border ledger-fade-up group flex flex-col justify-between min-h-[300px]" style={{ transitionDelay: '200ms' }}>
<div>
<div className="w-12 h-12 rounded-lg bg-[#ffb869]/10 flex items-center justify-center mb-md border border-[#ffb869]/20 group-hover:bg-[#ffb869]/20 transition-colors">
<span className="material-symbols-outlined text-[#ffb869]" style={{ fontVariationSettings: "'FILL' 1" }}>folder_managed</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-xs tracking-tight">RAG Drive Sync</h3>
<p className="text-[#cbc3d7] font-body-md text-body-md">Gelişmiş dosya arama ve analiz.</p>
</div>

<div className="mt-md flex flex-col items-center justify-center h-24 rounded-lg border border-[#494454]/30 bg-[#37333d]/50 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffb869]/10 via-transparent to-transparent opacity-50"></div>
<div className="w-full px-md flex items-center justify-between mb-sm z-10">
<div className="h-6 flex-1 bg-[#37333d]/50 rounded flex items-center px-sm border border-white/5">
<span className="material-symbols-outlined text-[#cbc3d7]" style={{ fontSize: "14px" }}>search</span>
<span className="font-mono-data text-mono-data text-[#cbc3d7] ml-2 text-xs">"2023 Kira Sözleşmesi"</span>
</div>
</div>
<div className="w-3/4 h-8 bg-[#ffb869]/10 rounded border border-[#ffb869]/30 flex items-center px-sm gap-2 z-10">
<span className="material-symbols-outlined text-[#ffb869]" style={{ fontSize: "14px" }}>description</span>
<span className="font-body-md text-body-md text-[#e7e0ed] text-xs truncate">Kira_Sozlesmesi_2023.pdf</span>
</div>
</div>
</div>

<div className="lg:col-span-2 ledger-glass-panel rounded-xl p-lg ledger-bento-glow-border ledger-fade-up group flex flex-col justify-between min-h-[300px]" style={{ transitionDelay: '300ms' }}>
<div>
<div className="w-12 h-12 rounded-lg bg-[#37333d] flex items-center justify-center mb-md border border-[#494454] group-hover:bg-[#37333d]/80 transition-colors">
<span className="material-symbols-outlined text-[#e7e0ed]" style={{ fontVariationSettings: "'FILL' 1" }}>publish</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-xs tracking-tight">Tek Tıkla Dışa Aktarım</h3>
<p className="text-[#cbc3d7] font-body-md text-body-md max-w-md">Onaylanan verileri kullandığınız muhasebe yazılımına anında entegre edin.</p>
</div>

<div className="mt-lg flex items-center gap-md">
<div className="flex items-center gap-sm bg-[#37333d] border border-[#494454]/50 rounded-lg px-md py-sm">
<div className="w-6 h-6 rounded bg-[#E45325] flex items-center justify-center">
<span className="text-white font-bold text-xs">L</span>
</div>
<span className="font-label-md text-label-md text-[#e7e0ed]">Luca</span>
</div>
<div className="w-8 h-[1px] bg-[#494454]"></div>
<div className="flex items-center gap-sm bg-[#37333d] border border-[#494454]/50 rounded-lg px-md py-sm">
<div className="w-6 h-6 rounded bg-[#004A99] flex items-center justify-center">
<span className="text-white font-bold text-xs">Z</span>
</div>
<span className="font-label-md text-label-md text-[#e7e0ed]">Zirve</span>
</div>
<div className="w-8 h-[1px] bg-[#494454]"></div>
<div className="w-10 h-10 rounded-full border border-dashed border-[#494454] flex items-center justify-center">
<span className="material-symbols-outlined text-[#494454] text-sm">add</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="how-it-works">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d0bcff]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
<div className="text-center mb-16 ledger-fade-up">
<h2 className="font-headline-lg text-headline-lg text-white mb-sm">Zahmetsiz Süreç</h2>
<p className="text-[#cbc3d7] font-body-lg text-body-lg">Evraktan bilançoya en kısa yol.</p>
</div>
<div className="relative border-l border-[#494454]/30 ml-4 md:ml-1/2 space-y-xl">

<div className="relative pl-lg ledger-fade-up">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#14d8ff] shadow-[0_0_10px_rgba(20,216,255,0.8)]"></div>
<h3 className="font-headline-md text-headline-md text-white mb-xs flex items-center gap-sm">
<span className="text-[#14d8ff] font-mono-data text-mono-data opacity-70">01.</span> Veri Akar
                        </h3>
<p className="text-[#cbc3d7] font-body-md text-body-md max-w-lg">Müşterileriniz evraklarını WhatsApp, e-posta veya mobil uygulama üzerinden gönderir. Ledger tüm kanalları dinler.</p>
</div>

<div className="relative pl-lg ledger-fade-up" style={{ transitionDelay: '150ms' }}>
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#d0bcff] shadow-[0_0_10px_rgba(208,188,255,0.8)]"></div>
<h3 className="font-headline-md text-headline-md text-white mb-xs flex items-center gap-sm">
<span className="text-[#d0bcff] font-mono-data text-mono-data opacity-70">02.</span> AI Çözer
                        </h3>
<p className="text-[#cbc3d7] font-body-md text-body-md max-w-lg">Optik karakter tanıma (OCR) ve doğal dil işleme (NLP) algoritmaları verileri okur, tutarları çıkarır ve yasal mevzuata uygun hesap kodlarına yerleştirir.</p>
</div>

<div className="relative pl-lg ledger-fade-up" style={{ transitionDelay: '300ms' }}>
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#ffb869] shadow-[0_0_10px_rgba(255,184,105,0.8)]"></div>
<h3 className="font-headline-md text-headline-md text-white mb-xs flex items-center gap-sm">
<span className="text-[#ffb869] font-mono-data text-mono-data opacity-70">03.</span> Siz Onaylarsınız
                        </h3>
<p className="text-[#cbc3d7] font-body-md text-body-md max-w-lg">Derlenmiş taslak fişleri tek ekranda inceler, saniyeler içinde onaylar ve mevcut mali yazılımınıza aktarırsınız.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-margin-mobile md:px-margin-desktop relative">
<div className="max-w-4xl mx-auto ledger-glass-panel rounded-2xl p-xl md:p-24 text-center border border-[#d0bcff]/20 shadow-[0_0_50px_rgba(139,92,246,0.1)] ledger-fade-up overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-[#d0bcff]/10 to-transparent opacity-50"></div>
<h2 className="font-display-lg text-display-lg text-white mb-md relative z-10 tracking-tight">Manuel veri girişini tarihe gömün. <br/><span className="text-[#d0bcff]-fixed-dim">Danışmanlığa odaklanın.</span></h2>
<p className="text-[#cbc3d7] font-body-lg text-body-lg mb-xl max-w-2xl mx-auto relative z-10">Zamanınızı veri girmeye değil, işinizi büyütmeye ayırın. Ledger ile muhasebe süreçlerinizi hemen otomatikleştirin.</p>
<button className="ledger-primary-glow-btn ledger-animate-pulse-glow text-white font-headline-md text-headline-md px-xl py-lg rounded-xl relative z-10 flex items-center justify-center gap-sm mx-auto">
                    Ledger Workspace'e Geçin
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
</button>
</div>
</section>
</main>

<footer className="bg-[#1d1a23]est dark:bg-[#1d1a23]est w-full py-xl border-t border-[#494454]/30 flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-lg no shadows">
<div className="font-headline-md text-headline-md font-bold text-[#e7e0ed]">
            Workigom Ledger
        </div>
<div className="flex flex-wrap items-center justify-center gap-md md:gap-lg">
<a className="text-[#cbc3d7] font-body-md text-body-md hover:text-[#d0bcff] transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-[#cbc3d7] font-body-md text-body-md hover:text-[#d0bcff] transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-[#cbc3d7] font-body-md text-body-md hover:text-[#d0bcff] transition-colors opacity-80 hover:opacity-100" href="#">Contact Support</a>
<a className="text-[#cbc3d7] font-body-md text-body-md hover:text-[#d0bcff] transition-colors opacity-80 hover:opacity-100" href="#">API Documentation</a>
</div>
<div className="text-[#d0bcff] dark:text-[#d0bcff] font-body-md text-body-md text-center md:text-right">
            © 2024 Workigom Ledger. Precision Luxury in AI Accounting.
        </div>
</footer>

    </div>
  );
}
