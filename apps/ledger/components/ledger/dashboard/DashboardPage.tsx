'use client';
import React from 'react';
import { MetricCard, AppCard } from '../ui/Cards';
import { SectionHeader, PageTitle } from '../ui/Typography';
import { StatusBadge } from '../ui/Badges';
import { ActivityCard } from '../ui/Cards';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Rhythm: Title -> Subtitle -> 24px -> KPI */}
      <div>
        <PageTitle>Dashboard</PageTitle>
        <p className="text-body text-text-muted mt-2">Welcome back. Here is your daily overview.</p>
      </div>

      {/* Grid Container: 12 Columns */}
      <div className="grid grid-cols-12 gap-1">
        
        {/* ROW 1: 5 KPI Cards */}
        <div className="col-span-12 grid grid-cols-5 gap-1">
          <MetricCard 
            title="HAZIR EVRAK" 
            value="0" 
            icon={<span className="material-symbols-outlined text-[18px]">description</span>}
            trend={{ direction: 'up', value: '0', label: 'bugün' }}
          />
          <MetricCard 
            title="KONTROL BEKLEYEN" 
            value="0" 
            icon={<span className="material-symbols-outlined text-[18px]">error</span>}
            trend={{ direction: 'up', value: '0', label: 'bugün' }}
          />
          <MetricCard 
            title="EKSİK BİLGİ" 
            value="0" 
            icon={<span className="material-symbols-outlined text-[18px]">help</span>}
            trend={{ direction: 'down', value: '0', label: 'bugün' }}
          />
          <MetricCard 
            title="TEKRAR İSTENECEK" 
            value="0" 
            icon={<span className="material-symbols-outlined text-[18px]">cancel</span>}
            trend={{ direction: 'up', value: '0', label: 'bugün' }}
          />
          <MetricCard 
            title="BUGÜN ONAYLANAN" 
            value="0" 
            icon={<span className="material-symbols-outlined text-[18px]">check_circle</span>}
            trend={{ direction: 'up', value: '0', label: 'bugün' }}
          />
        </div>

        {/* 32px spacing enforced by gap-8 below for content section rhythm */}
      </div>

      <div className="grid grid-cols-12 gap-1 pt-2">
        {/* ROW 2 */}
        {/* Upcoming Deadlines (3 cols) */}
        <AppCard className="col-span-3 p-6">
          <SectionHeader className="mb-4">Önemli Tarihler</SectionHeader>
          <div className="flex flex-col gap-1">
            <div className="text-text-muted text-center p-4 bg-surface rounded-card border border-border/50 text-body">
              Planlanmış tarih bulunmuyor.
            </div>
          </div>
        </AppCard>

        {/* Operations Feed (4 cols) */}
        <AppCard className="col-span-4 p-6">
          <SectionHeader className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">stream</span>
            Operasyon Akışı
          </SectionHeader>
          <div className="flex flex-col gap-1">
            <div className="text-text-muted text-center p-4 bg-surface rounded-card border border-border/50 text-body">
              Henüz bir operasyon yok.
            </div>
          </div>
        </AppCard>

        {/* AI Haber Bülteni / Mevzuat (5 cols) */}
        <AppCard className="col-span-5 p-6">
          <div className="flex justify-between items-center mb-6">
            <SectionHeader>Mevzuat ve Duyurular</SectionHeader>
            <a className="text-primary hover:underline transition-colors text-label font-medium" href="#">Tümünü Gör</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="text-text-muted text-center p-4 bg-surface rounded-card border border-border/50 text-body">
              Yeni duyuru bulunmuyor.
            </div>
          </div>
        </AppCard>

        {/* ROW 3 */}
        {/* Workflow Summary (7 cols) */}
        <AppCard className="col-span-7 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <SectionHeader>İş Akışı</SectionHeader>
            <a className="text-primary hover:underline transition-colors text-label font-medium" href="#">Detay</a>
          </div>
          <div className="flex-1 flex flex-col justify-center relative">
            <div className="absolute top-1/2 left-32 right-32 h-[1px] bg-border -translate-y-1/2 z-0"></div>
            <div className="flex justify-between items-center relative z-10 px-4">
              
              <div className="flex items-center gap-1 bg-surface px-4 py-2 rounded-card border border-border">
                <div className="w-[32px] h-[32px] rounded-full bg-border flex items-center justify-center">
                  <span className="material-symbols-outlined text-text-muted text-[16px]">inventory_2</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-text-muted uppercase font-semibold">Yeni</span>
                  <span className="text-card-title font-bold text-text">0</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-border text-[20px]">arrow_forward</span>

              <div className="flex items-center gap-1 bg-surface px-4 py-2 rounded-card border border-border">
                <div className="w-[32px] h-[32px] rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[16px]">bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-text-muted uppercase font-semibold">AI İşliyor</span>
                  <span className="text-card-title font-bold text-text">0</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-border text-[20px]">arrow_forward</span>

              <div className="flex items-center gap-1 bg-surface px-4 py-2 rounded-card border border-border">
                <div className="w-[32px] h-[32px] rounded-full bg-warning/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-warning text-[16px]">engineering</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-text-muted uppercase font-semibold">Kontrol</span>
                  <span className="text-card-title font-bold text-text">0</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-border text-[20px]">arrow_forward</span>

              <div className="flex items-center gap-1 bg-surface px-4 py-2 rounded-card border border-border">
                <div className="w-[32px] h-[32px] rounded-full bg-success/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-success text-[16px]">check_circle</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-text-muted uppercase font-semibold">Biten</span>
                  <span className="text-card-title font-bold text-text">0</span>
                </div>
              </div>

            </div>
          </div>
        </AppCard>

        {/* Workload Chart (5 cols) */}
        <AppCard className="col-span-5 p-6 flex flex-col min-h-[220px] max-h-[260px]">
          <div className="flex justify-between items-center mb-4">
            <SectionHeader>İş Yükü Trendi</SectionHeader>
            <select className="bg-surface border border-border rounded-input px-2 py-1 text-muted font-semibold text-text-muted focus:outline-none focus:border-primary appearance-none cursor-pointer">
              <option>BU HAFTA</option>
              <option>GEÇEN HAFTA</option>
            </select>
          </div>
          <div className="flex-1 relative mt-2">
            <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none opacity-5">
              <div className="h-[1px] bg-white"></div>
              <div className="h-[1px] bg-white"></div>
              <div className="h-[1px] bg-white"></div>
            </div>
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-muted font-medium text-text-muted/50 z-10 pointer-events-none">
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            <svg className="absolute inset-0 w-full h-[calc(100%-24px)] z-10 pl-6 pr-2 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.05"></stop>
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,100 L100,100 Z" fill="url(#chartGradient)"></path>
              <path d="M0,100 L100,100" fill="none" stroke="var(--color-primary)" strokeWidth="2"></path>
              <circle cx="25" cy="100" fill="var(--color-surface)" r="2" stroke="var(--color-primary)" strokeWidth="2"></circle>
              <circle cx="45" cy="100" fill="var(--color-surface)" r="2" stroke="var(--color-primary)" strokeWidth="2"></circle>
              <circle cx="65" cy="100" fill="var(--color-surface)" r="2" stroke="var(--color-primary)" strokeWidth="2"></circle>
              <circle cx="85" cy="100" fill="var(--color-surface)" r="2" stroke="var(--color-primary)" strokeWidth="2"></circle>
            </svg>
            <div className="absolute bottom-0 left-24 right-8 flex justify-between text-muted font-medium text-text-muted/50 z-10 uppercase tracking-tighter">
              <span>Pzt</span>
              <span>Sal</span>
              <span>Çar</span>
              <span>Per</span>
              <span>Cum</span>
              <span>Cmt</span>
              <span>Paz</span>
            </div>
          </div>
        </AppCard>
      </div>

      <div className="grid grid-cols-12 gap-1 pt-2">
        {/* ROW 4 */}
        {/* Recent Documents (6 cols) */}
        <AppCard className="col-span-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <SectionHeader>Son Gelenler</SectionHeader>
            <a className="text-primary hover:underline transition-colors text-label font-medium" href="#">Tümü</a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-text-muted text-center p-4 bg-surface rounded-card border border-border/50 text-body">
              Henüz evrak yüklenmemiş.
            </div>
          </div>
        </AppCard>

        {/* Empty space for future cards (6 cols) */}
        <div className="col-span-6"></div>
      </div>
    </div>
  );
}
