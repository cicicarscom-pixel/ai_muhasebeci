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
        <SidebarItem icon="dashboard" label="Dashboard" href="/ledger/dashboard" active={isActive('/ledger/dashboard')} color="#00daf3" />
        <SidebarItem icon="groups" label="Mükellefler" href="/ledger/clients" active={isActive('/ledger/clients')} color="#f59e0b" />
        <SidebarItem icon="account_tree" label="İş Akışı" href="/ledger/workflow" active={isActive('/ledger/workflow')} color="#9d5cff" />
        <SidebarItem icon="fact_check" label="Onay Merkezi" href="/ledger/approval/1" active={pathname?.startsWith('/ledger/approval')} color="#10b981" />
        <SidebarItem icon="analytics" label="Analitik" href="/ledger/analytics" active={isActive('/ledger/analytics')} color="#ec4899" />
        <SidebarItem icon="settings" label="Ayarlar" href="/ledger/settings" active={isActive('/ledger/settings')} color="#9ca3af" />
      </div>

      <div className="mt-auto w-full flex flex-col gap-1.5 items-center pb-2">
        <SidebarItem icon="help" label="Destek" href="#" color="#9ca3af" />
        <SidebarItem icon="logout" label="Çıkış" href="#" color="#ef4444" />
      </div>
    </nav>
  );
}

function SidebarItem({ icon, label, href, active, color = "#00daf3" }: { icon: string, label: string, href: string, active?: boolean, color?: string }) {
  return (
    <Link href={href} className={`relative flex items-center justify-center w-10 h-10 rounded-lg group/item transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${active ? 'bg-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] border-l-2' : 'text-on-surface-variant hover:bg-white/5 hover:scale-105'}`} style={active ? { borderColor: color, color: color } : {}}>
      <span className="material-symbols-outlined text-[20px] transition-all duration-300" style={active ? { fontVariationSettings: "'FILL' 1" } : { color: 'inherit' }} >{icon}</span>
      
      {/* Kanat (Wing Tooltip) */}
      <div className="absolute left-[48px] top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-50 flex items-center">
        {/* Label background with glass effect */}
        <div className="backdrop-blur-xl px-3 py-1.5 rounded-lg whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.2)] font-semibold text-[11px] tracking-wide relative" style={{ backgroundColor: `${color}1A`, border: `1px solid ${color}33`, color: color }}>
          <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[6px]" style={{ borderRightColor: `${color}33` }}></div>
          {label}
        </div>
      </div>
    </Link>
  );
}
