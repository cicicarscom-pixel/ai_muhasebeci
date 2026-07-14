'use client';
import React from 'react';
import { PageTitle, SectionHeader } from '../ui/Typography';
import { AppCard, MetricCard } from '../ui/Cards';
import { SecondaryButton, GhostButton } from '../ui/Buttons';
import { FilterBar } from '../ui/Forms';

export default function WorkflowPage() {
  return (
    <div className="flex flex-col h-full w-full bg-surface text-text p-24 overflow-hidden gap-24">
      
      {/* Page Rhythm: Title -> Subtitle */}
      <div>
        <div className="flex justify-between items-start">
          <div>
            <PageTitle>İş Akışı</PageTitle>
            <p className="text-body text-text-muted mt-8">Tüm evrak işlemlerinizi ve onay süreçlerini buradan yönetin.</p>
          </div>
          <SecondaryButton className="flex items-center gap-8 py-8 px-16">
            <span className="material-symbols-outlined text-[18px]">filter_alt</span>
            Filtreler
          </SecondaryButton>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-16">
        <MetricCard 
          title="Toplam Evrak"
          value="203"
          icon={<span className="material-symbols-outlined text-[18px]">description</span>}
          trend={{ direction: 'up', value: '%12', label: 'bugün' }}
        />
        <MetricCard 
          title="Toplam Tutar"
          value="₺2.458.750,00"
          icon={<span className="material-symbols-outlined text-[18px]">payments</span>}
          trend={{ direction: 'up', value: '%8', label: 'bugün' }}
        />
        <MetricCard 
          title="Bugün İşlenen"
          value="47"
          icon={<span className="material-symbols-outlined text-[18px]">check_circle</span>}
          trend={{ direction: 'up', value: '%25', label: 'bugün' }}
        />
        <MetricCard 
          title="Ortalama Süre"
          value="2sa 14dk"
          icon={<span className="material-symbols-outlined text-[18px]">schedule</span>}
          trend={{ direction: 'down', value: '%5', label: 'bugün' }}
        />
      </div>

      {/* 32px spacing is managed by flex gap-32 below */}
      <div className="flex-1 flex gap-16 overflow-x-auto pb-16 custom-scrollbar pt-8">
        
        {/* Col 1: Yeni Geldi */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-[#7B61FF] p-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-8">
              <span className="material-symbols-outlined text-text-muted text-[18px]">download</span>
              <SectionHeader className="text-[14px]">Yeni Geldi</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-8 py-4 rounded-badge bg-surface border border-border">18</span>
          </div>
          <p className="text-muted text-text-muted mb-16">AI okumayı bekliyor</p>
          
          <div className="flex flex-col gap-16 overflow-y-auto custom-scrollbar flex-1 pr-4">
            
            <AppCard className="p-16 cursor-pointer">
              <div className="flex justify-between items-center mb-16">
                <span className="text-muted text-[#58A6FF] font-semibold">ABC Yazılım Ltd.</span>
                <span className="material-symbols-outlined text-text-muted text-[16px]">description</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[18px]">domain</span>
                <span className="text-body font-semibold text-text">Türk Telekom</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[16px]">calendar_today</span>
                <span className="text-label text-text-muted">26.05.2025</span>
              </div>
              <div className="flex items-center gap-8 mb-16">
                <span className="material-symbols-outlined text-text-muted text-[18px]">payments</span>
                <span className="text-card-title font-bold text-text">₺12.350,00</span>
              </div>
              <div className="flex items-center gap-4 text-muted text-text-muted">
                <span className="material-symbols-outlined text-[14px]">mail</span> E-Posta
              </div>
            </AppCard>

            <AppCard className="p-16 cursor-pointer">
              <div className="flex justify-between items-center mb-16">
                <span className="text-muted text-[#9D5CFF] font-semibold">XYZ Gıda San. Ltd.</span>
                <span className="material-symbols-outlined text-text-muted text-[16px]">description</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[18px]">local_gas_station</span>
                <span className="text-body font-semibold text-text">Shell Türkiye</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[16px]">calendar_today</span>
                <span className="text-label text-text-muted">26.05.2025</span>
              </div>
              <div className="flex items-center gap-8 mb-16">
                <span className="material-symbols-outlined text-text-muted text-[18px]">payments</span>
                <span className="text-card-title font-bold text-text">₺18.250,00</span>
              </div>
              <div className="flex items-center gap-4 text-muted text-success">
                <span className="material-symbols-outlined text-[14px]">chat</span> WhatsApp
              </div>
            </AppCard>

            <GhostButton className="w-full mt-4 flex items-center justify-center gap-8 border border-border bg-surface">
              <span className="material-symbols-outlined text-[18px]">add</span> Dosya ekle
            </GhostButton>
          </div>
        </div>

        {/* Col 2: AI İşliyor */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-primary p-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-8">
              <span className="material-symbols-outlined text-text-muted text-[18px]">neurology</span>
              <SectionHeader className="text-[14px]">AI İşliyor</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-8 py-4 rounded-badge bg-surface border border-border">6</span>
          </div>
          <p className="text-muted text-text-muted mb-16">Okuma ve analiz yapılıyor</p>
          
          <div className="flex flex-col gap-16 overflow-y-auto custom-scrollbar flex-1 pr-4">
            <AppCard className="p-16 cursor-pointer">
              <div className="flex justify-between items-center mb-16">
                <span className="text-muted text-[#58A6FF] font-semibold">ABC Yazılım Ltd.</span>
                <span className="material-symbols-outlined text-primary text-[16px]">find_replace</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[18px]">phone_iphone</span>
                <span className="text-body font-semibold text-text">Turkcell</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[16px]">calendar_today</span>
                <span className="text-label text-text-muted">26.05.2025</span>
              </div>
              <div className="flex items-center gap-8 mb-16">
                <span className="material-symbols-outlined text-text-muted text-[18px]">payments</span>
                <span className="text-card-title font-bold text-text">₺7.890,00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-muted text-text-muted">
                  <span className="material-symbols-outlined text-[14px]">cloud_sync</span> Flow Sync
                </div>
                <span className="material-symbols-outlined text-primary text-[18px] animate-spin">progress_activity</span>
              </div>
            </AppCard>
            
            <GhostButton className="w-full mt-4 flex items-center justify-center gap-8 border border-border bg-surface">
              <span className="material-symbols-outlined text-[18px]">add</span>
            </GhostButton>
          </div>
        </div>

        {/* Col 3: Kontrol Bekliyor */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-warning p-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-8">
              <span className="material-symbols-outlined text-text-muted text-[18px]">error</span>
              <SectionHeader className="text-[14px]">Kontrol Bekliyor</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-8 py-4 rounded-badge bg-surface border border-border">19</span>
          </div>
          <p className="text-muted text-text-muted mb-16">Müşavir kontrolü gerekli</p>
          
          <div className="flex flex-col gap-16 overflow-y-auto custom-scrollbar flex-1 pr-4">
            <AppCard className="p-16 cursor-pointer">
              <div className="flex justify-between items-center mb-16">
                <span className="text-muted text-[#58A6FF] font-semibold">ABC Yazılım Ltd.</span>
                <div className="flex items-center gap-8">
                  <div className="bg-warning/10 text-warning text-muted font-bold px-8 py-4 rounded-badge flex items-center gap-4 border border-warning/20">
                    <span className="material-symbols-outlined text-[14px]">hourglass_empty</span> 3 gün
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[18px]">skull</span>
                <span className="text-body font-semibold text-text">Shell Türkiye</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[16px]">calendar_today</span>
                <span className="text-label text-text-muted">26.05.2025</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[18px]">payments</span>
                <span className="text-card-title font-bold text-text">₺18.250,00</span>
              </div>
              <div className="flex items-center gap-8 mb-16">
                <span className="text-label font-bold text-success">760</span>
                <span className="text-muted text-text-muted">Akaryakıt Gideri</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-muted text-success">
                  <span className="material-symbols-outlined text-[14px]">chat</span> WhatsApp
                </div>
                <div className="flex items-center gap-8">
                  <span className="bg-surface text-primary border border-primary/20 text-[10px] px-8 py-4 rounded-badge font-bold uppercase">AI</span>
                </div>
              </div>
            </AppCard>
            
            <GhostButton className="w-full mt-4 flex items-center justify-center gap-8 border border-border bg-surface">
              <span className="material-symbols-outlined text-[18px]">add</span>
            </GhostButton>
          </div>
        </div>

        {/* Col 4: Onaylandı */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-success p-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-8">
              <span className="material-symbols-outlined text-text-muted text-[18px]">check_circle</span>
              <SectionHeader className="text-[14px]">Onaylandı</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-8 py-4 rounded-badge bg-surface border border-border">31</span>
          </div>
          <p className="text-muted text-text-muted mb-16">Toplu gönderime hazır</p>
          
          <div className="flex flex-col gap-16 overflow-y-auto custom-scrollbar flex-1 pr-4">
            <AppCard className="p-16 cursor-pointer">
              <div className="flex justify-between items-center mb-16">
                <span className="text-muted text-[#9D5CFF] font-semibold">ABC Yazılım Ltd.</span>
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[18px]">local_fire_department</span>
                <span className="text-body font-semibold text-text">İGDAŞ</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[16px]">calendar_today</span>
                <span className="text-label text-text-muted">25.05.2025</span>
              </div>
              <div className="flex items-center gap-8 mb-8">
                <span className="material-symbols-outlined text-text-muted text-[18px]">payments</span>
                <span className="text-card-title font-bold text-text">₺6.250,00</span>
              </div>
              <div className="flex items-center gap-8 mb-16">
                <span className="text-label font-bold text-success">770</span>
                <span className="text-muted text-text-muted">Doğalgaz Gideri</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-muted text-text-muted">
                  <span className="material-symbols-outlined text-[14px]">mail</span> E-Posta
                </div>
                <span className="bg-surface text-primary border border-primary/20 text-[10px] px-8 py-4 rounded-badge font-bold uppercase">AI</span>
              </div>
            </AppCard>
            
            <GhostButton className="w-full mt-4 flex items-center justify-center gap-8 border border-border bg-surface">
              <span className="material-symbols-outlined text-[18px]">add</span>
            </GhostButton>
          </div>
        </div>

      </div>

      {/* Footer: Shortcuts */}
      <div className="shrink-0 bg-surface border border-border rounded-card flex items-center justify-between p-16">
        <div className="flex items-center gap-8">
          <span className="material-symbols-outlined text-warning text-[20px]">temp_preferences_custom</span>
          <span className="text-warning text-label font-bold ml-4">İpucu:</span>
          <span className="text-text-muted text-label">Kartları sürükleyip bırakarak durumlarını değiştirebilirsiniz.</span>
        </div>
        <GhostButton className="flex items-center gap-8">
          <span className="material-symbols-outlined text-[16px]">apps</span> Tüm kısayollar
        </GhostButton>
      </div>
      
    </div>
  );
}
