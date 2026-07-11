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
    <nav className="fixed left-0 top-0 h-full w-[64px] bg-surface/80 backdrop-blur-3xl border-r border-white/5 shadow-[20px_0_40px_rgba(0,0,0,0.4)] z-50 flex flex-col items-center py-6">
      <div className="mb-10 w-full flex items-center justify-center px-4 relative group">
        <span className="material-symbols-outlined text-primary-container text-3xl glow-text cursor-pointer">token</span>
      </div>
      
      <div className="flex-1 w-full flex flex-col gap-2 px-2">
        <SidebarItem icon="dashboard" label="Dashboard" href="/ledger/dashboard" active={isActive('/ledger/dashboard')} />
        <SidebarItem icon="description" label="Evrak Merkezi" href="#" />
        <SidebarItem icon="account_tree" label="İş Akışı" href="/ledger/workflow" active={isActive('/ledger/workflow')} />
        <SidebarItem icon="fact_check" label="Onay Merkezi" href="/ledger/approval/1" active={pathname?.startsWith('/ledger/approval')} />
        <SidebarItem icon="analytics" label="Analitik" href="/ledger/analytics" active={isActive('/ledger/analytics')} />
        <SidebarItem icon="settings" label="Ayarlar" href="/ledger/settings" active={isActive('/ledger/settings')} />
      </div>

      <div className="mt-auto w-full flex flex-col gap-2 px-2 pb-4">
        <SidebarItem icon="help" label="Destek" href="#" />
        <SidebarItem icon="logout" label="Çıkış" href="#" />
      </div>
    </nav>
  );
}

function SidebarItem({ icon, label, href, active }: { icon: string, label: string, href: string, active?: boolean }) {
  return (
    <Link href={href} className={`relative flex items-center justify-center w-12 h-12 rounded-lg group/item transition-all ${active ? 'bg-primary-container/10 text-primary-container border-l-4 border-primary-container shadow-[inset_0_0_15px_rgba(0,229,253,0.15)]' : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'}`}>
      <span className="material-symbols-outlined text-xl glow-text" style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
      
      {/* Kanat (Wing Tooltip) */}
      <div className="absolute left-[56px] top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover/item:opacity-100 transition-opacity duration-200 z-50 flex items-center">
        {/* Triangle pointer */}
        <div className="w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-[#00daf3]/20 backdrop-blur-md -mr-[1px]"></div>
        {/* Label background */}
        <div className="bg-[#00daf3]/20 backdrop-blur-md border border-[#00daf3]/30 text-[#00daf3] px-3 py-2 rounded-lg whitespace-nowrap shadow-[0_0_15px_rgba(0,229,253,0.2)] font-semibold text-sm">
          {label}
        </div>
      </div>
    </Link>
  );
}
