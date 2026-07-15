'use client';
import React from 'react';
import { PageTitle, SectionHeader } from '../ui/Typography';
import { MetricCard } from '../ui/Cards';
import { SecondaryButton, GhostButton } from '../ui/Buttons';

export default function WorkflowPage() {
  return (
    <div className="flex flex-col h-full w-full bg-surface text-text p-6 overflow-hidden gap-6">
      
      {/* Page Rhythm: Title -> Subtitle */}
      <div>
        <div className="flex justify-between items-start">
          <div>
            <PageTitle>İş Akışı</PageTitle>
            <p className="text-body text-text-muted mt-2">Tüm evrak işlemlerinizi ve onay süreçlerini buradan yönetin.</p>
          </div>
          <SecondaryButton className="flex items-center gap-2 py-2 px-4">
            <span className="material-symbols-outlined text-[18px]">filter_alt</span>
            Filtreler
          </SecondaryButton>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-1">
        <MetricCard 
          title="Toplam Evrak"
          value="0"
          icon={<span className="material-symbols-outlined text-[18px]">description</span>}
        />
        <MetricCard 
          title="Toplam Tutar"
          value="₺0,00"
          icon={<span className="material-symbols-outlined text-[18px]">payments</span>}
        />
        <MetricCard 
          title="Bugün İşlenen"
          value="0"
          icon={<span className="material-symbols-outlined text-[18px]">check_circle</span>}
        />
        <MetricCard 
          title="Ortalama Süre"
          value="0dk"
          icon={<span className="material-symbols-outlined text-[18px]">schedule</span>}
        />
      </div>

      <div className="flex-1 flex gap-1 overflow-x-auto pb-4 custom-scrollbar pt-2">
        
        {/* Col 1: Yeni Geldi */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-[#7B61FF] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[18px]">download</span>
              <SectionHeader className="text-[14px]">Yeni Geldi</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-2 py-1 rounded-badge bg-surface border border-border">0</span>
          </div>
          <p className="text-muted text-text-muted mb-4">AI okumayı bekliyor</p>
          
          <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1 pr-1">
            <GhostButton className="w-full mt-1 flex items-center justify-center gap-2 border border-border bg-surface text-gray-400">
               Burada henüz evrak yok
            </GhostButton>
          </div>
        </div>

        {/* Col 2: AI İşliyor */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-primary p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[18px]">neurology</span>
              <SectionHeader className="text-[14px]">AI İşliyor</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-2 py-1 rounded-badge bg-surface border border-border">0</span>
          </div>
          <p className="text-muted text-text-muted mb-4">Okuma ve analiz yapılıyor</p>
          
          <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1 pr-1">
             <GhostButton className="w-full mt-1 flex items-center justify-center gap-2 border border-border bg-surface text-gray-400">
               Burada henüz evrak yok
            </GhostButton>
          </div>
        </div>

        {/* Col 3: Kontrol Bekliyor */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-warning p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[18px]">error</span>
              <SectionHeader className="text-[14px]">Kontrol Bekliyor</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-2 py-1 rounded-badge bg-surface border border-border">0</span>
          </div>
          <p className="text-muted text-text-muted mb-4">Müşavir kontrolü gerekli</p>
          
          <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1 pr-1">
            <GhostButton className="w-full mt-1 flex items-center justify-center gap-2 border border-border bg-surface text-gray-400">
               Burada henüz evrak yok
            </GhostButton>
          </div>
        </div>

        {/* Col 4: Onaylandı */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-success p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[18px]">check_circle</span>
              <SectionHeader className="text-[14px]">Onaylandı</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-2 py-1 rounded-badge bg-surface border border-border">0</span>
          </div>
          <p className="text-muted text-text-muted mb-4">Toplu gönderime hazır</p>
          
          <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1 pr-1">
            <GhostButton className="w-full mt-1 flex items-center justify-center gap-2 border border-border bg-surface text-gray-400">
               Burada henüz evrak yok
            </GhostButton>
          </div>
        </div>

      </div>

      {/* Footer: Shortcuts */}
      <div className="shrink-0 bg-surface border border-border rounded-card flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-warning text-[20px]">temp_preferences_custom</span>
          <span className="text-warning text-label font-bold ml-1">İpucu:</span>
          <span className="text-text-muted text-label">Kartları sürükleyip bırakarak durumlarını değiştirebilirsiniz.</span>
        </div>
        <GhostButton className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">apps</span> Tüm kısayollar
        </GhostButton>
      </div>
      
    </div>
  );
}
