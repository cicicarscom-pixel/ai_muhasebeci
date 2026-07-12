'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isWorkflow = pathname?.includes('/workflow');
  
  return (
    <header className={`fixed top-0 ${isWorkflow ? 'right-0' : 'right-[360px]'} left-[56px] h-16 bg-surface/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-40 flex items-center justify-between px-6 pl-8`}>
      <div className="flex flex-col justify-center">
        <h1 className="text-[16px] font-semibold text-on-surface flex items-center gap-2 tracking-tight leading-none mb-1">
          Günaydın, Ahmet Bey <span className="text-[14px] animate-pulse">👋</span>
        </h1>
        <p className="text-[10px] text-on-surface-variant leading-none">
          AI Asistanınız size harika bir gün geçirmeniz için hazır.
        </p>
      </div>
      <div className="flex items-center gap-6">
        {/* Actions */}
        <button className="relative text-on-surface-variant hover:text-primary-container hover:bg-white/5 transition-all p-1.5 rounded-full active:scale-95">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-error rounded-full ring-2 ring-surface"></span>
        </button>
        
        {/* Profile */}
        <div className="flex items-center gap-2.5 pl-4 border-l border-white/10 cursor-pointer hover:bg-white/5 p-1.5 rounded-lg transition-all">
          <img 
            className="w-7 h-7 rounded-full object-cover border border-primary-container/30 p-0.5" 
            alt="Profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPO2S5Ej4i3F_TVZ3dUC2ggrw233UmltDDGSl7V7SvfOGE6T03SyHfm5cmSL2FaAhhl3W21tkm7Z0OMpeADR6SRLzA5L_wyYQovtiSbdprdaKT4ivzaPYWtWxufcC0gp3uGL5yE-enGEYy2BQ2QprlTFC0XNQWNH6mOHb9BAqpTxlps_X3L16XRICrpBH_3sNJkFxxc1tQ5In1EUv0CHpuPMX_KOKD2qrDTeLq8EWCUFL79rQKxThYgFDo030UMFTbXx2A1xx3zuY"
          />
          <div className="hidden md:flex flex-col justify-center">
            <span className="font-h3 text-on-surface text-[11px] font-semibold leading-tight">Ahmet Yılmaz</span>
            <span className="font-caption text-on-surface-variant text-[9px] leading-tight">Mali Müşavir</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant text-sm">expand_more</span>
        </div>
      </div>
    </header>
  );
}
