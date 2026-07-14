'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-[56px] bg-surface/80 backdrop-blur-3xl border-r border-white/5 shadow-[20px_0_40px_rgba(0,0,0,0.4)] z-50 flex flex-col items-center py-5">
      <div className="mb-8 w-full flex items-center justify-center relative group">
        <span className="material-symbols-outlined text-primary-container text-2xl glow-text cursor-pointer hover:scale-110 transition-transform">token</span>
      </div>
      
      <div className="flex-1 w-full flex flex-col gap-1.5 items-center">
        <SidebarItem icon="dashboard" label="Dashboard" href="/ledger/dashboard" active={isActive('/ledger/dashboard')} />
        <SidebarItem icon="groups" label="Mükellefler" href="/ledger/clients" active={isActive('/ledger/clients')} />
        <SidebarItem icon="account_tree" label="İş Akışı" href="/ledger/workflow" active={isActive('/ledger/workflow')} />
        <SidebarItem icon="fact_check" label="Onay Merkezi" href="/ledger/approval/1" active={pathname?.startsWith('/ledger/approval')} />
        <SidebarItem icon="analytics" label="Analitik" href="/ledger/analytics" active={isActive('/ledger/analytics')} />
        <SidebarItem icon="settings" label="Ayarlar" href="/ledger/settings" active={isActive('/ledger/settings')} />
      </div>

      <div className="mt-auto w-full flex flex-col gap-1.5 items-center pb-2">
        <SidebarItem icon="help" label="Destek" href="#" />
        <SidebarItem icon="logout" label="Çıkış" href="#" />
      </div>
    </nav>
  );
}

function SidebarItem({ icon, label, href, active }: { icon: string, label: string, href: string, active?: boolean }) {
  return (
    <Link href={href} className={`relative flex items-center justify-center w-10 h-10 rounded-lg group/item transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${active ? 'bg-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] border-l-2 border-[#00C8FF]' : 'hover:bg-white/5 hover:scale-105'}`}>
      <span className={`material-symbols-outlined text-[20px] transition-all duration-300 ${active ? 'bg-clip-text text-transparent bg-gradient-to-br from-[#00C8FF] via-[#2979FF] to-[#7B61FF]' : 'text-[#7A8495] group-hover/item:text-[#FFFFFF]'}`} style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
      
      {/* Kanat (Wing Tooltip) */}
      <div className="absolute left-[48px] top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-50 flex items-center">
        {/* Label background with glass effect */}
        <div className={`backdrop-blur-xl px-3 py-1.5 rounded-lg whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.2)] font-semibold text-[11px] tracking-wide relative ${active ? 'bg-[#00C8FF]/10 border border-[#00C8FF]/20 text-[#00C8FF]' : 'bg-white/5 border border-white/10 text-white'}`}>
          <div className={`absolute -left-[5px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[6px] ${active ? 'border-r-[#00C8FF]/20' : 'border-r-white/10'}`}></div>
          {label}
        </div>
      </div>
    </Link>
  );
}
