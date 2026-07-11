'use client';
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-[64px] h-16 md:h-20 bg-surface/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-40 flex items-center justify-between px-6 pl-8">
      <div className="flex items-center gap-4">
        <span className="font-h1 text-h1 text-primary-container dark:text-primary-fixed-dim tracking-tight glow-text">Universe UI</span>
      </div>
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            className="bg-surface-container-high/50 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 w-64 transition-all" 
            placeholder="Ara..." 
            type="text"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
            <span className="text-[10px] bg-surface-bright px-1.5 py-0.5 rounded text-on-surface-variant border border-white/10">⌘</span>
            <span className="text-[10px] bg-surface-bright px-1.5 py-0.5 rounded text-on-surface-variant border border-white/10">K</span>
          </div>
        </div>
        
        {/* Actions */}
        <button className="relative text-on-surface-variant hover:text-primary-container hover:bg-white/5 transition-all p-2 rounded-full active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
        </button>
        
        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-white/10 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all">
          <img 
            className="w-9 h-9 rounded-full object-cover border border-primary-container/30 p-0.5" 
            alt="Profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPO2S5Ej4i3F_TVZ3dUC2ggrw233UmltDDGSl7V7SvfOGE6T03SyHfm5cmSL2FaAhhl3W21tkm7Z0OMpeADR6SRLzA5L_wyYQovtiSbdprdaKT4ivzaPYWtWxufcC0gp3uGL5yE-enGEYy2BQ2QprlTFC0XNQWNH6mOHb9BAqpTxlps_X3L16XRICrpBH_3sNJkFxxc1tQ5In1EUv0CHpuPMX_KOKD2qrDTeLq8EWCUFL79rQKxThYgFDo030UMFTbXx2A1xx3zuY"
          />
          <div className="hidden md:flex flex-col">
            <span className="font-h3 text-h3 text-on-surface text-xs font-semibold">Ahmet Yılmaz</span>
            <span className="font-caption text-caption text-on-surface-variant text-[10px]">Mali Müşavir</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant text-sm">expand_more</span>
        </div>
      </div>
    </header>
  );
}
