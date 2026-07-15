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
            value="131" 
            icon={<span className="material-symbols-outlined text-[18px]">description</span>}
            trend={{ direction: 'up', value: '22', label: 'bugün' }}
          />
          <MetricCard 
            title="KONTROL BEKLEYEN" 
            value="12" 
            icon={<span className="material-symbols-outlined text-[18px]">error</span>}
            trend={{ direction: 'up', value: '4', label: 'bugün' }}
          />
          <MetricCard 
            title="EKSİK BİLGİ" 
            value="4" 
            icon={<span className="material-symbols-outlined text-[18px]">help</span>}
            trend={{ direction: 'down', value: '1', label: 'bugün' }}
          />
          <MetricCard 
            title="TEKRAR İSTENECEK" 
            value="2" 
            icon={<span className="material-symbols-outlined text-[18px]">cancel</span>}
            trend={{ direction: 'up', value: '2', label: 'bugün' }}
          />
          <MetricCard 
            title="BUGÜN ONAYLANAN" 
            value="47" 
            icon={<span className="material-symbols-outlined text-[18px]">check_circle</span>}
            trend={{ direction: 'up', value: '15', label: 'bugün' }}
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
            {[
              { day: '26', month: 'MAY', title: 'KDV Beyannamesi', desc: '4 gün kaldı', color: 'primary' },
              { day: '31', month: 'MAY', title: 'Muhtasar', desc: '9 gün kaldı', color: 'primary' },
              { day: '10', month: 'HAZ', title: 'Kurumlar Vergisi', desc: '19 gün kaldı', color: 'text-muted' },
            ].map((d, i) => (
              <div key={i} className="flex items-center gap-1 p-2 rounded-input hover:bg-card/50 transition-colors duration-fast">
                <div className="w-[48px] h-[48px] rounded-button bg-card border border-border flex flex-col items-center justify-center shrink-0">
                  <span className="text-[14px] font-bold text-text leading-none">{d.day}</span>
                  <span className="text-[10px] text-text-muted font-bold tracking-tighter mt-1">{d.month}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-body font-semibold text-text">{d.title}</span>
                  <span className={`text-muted mt-1 text-${d.color}`}>{d.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </AppCard>

        {/* Operations Feed (4 cols) */}
        <AppCard className="col-span-4 p-6">
          <SectionHeader className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">stream</span>
            Operasyon Akışı
          </SectionHeader>
          <div className="flex flex-col gap-1">
            <ActivityCard className="border-success">
              <div className="w-[24px] h-[24px] rounded-full bg-success/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-success text-[14px]">rule</span>
              </div>
              <div className="flex-1">
                <span className="text-body font-semibold text-text block">3 yeni otomatik kural</span>
                <p className="text-muted text-text-muted mt-1">Opet, Shell ve Amazon faturaları için oluşturuldu.</p>
              </div>
            </ActivityCard>
            <ActivityCard className="border-primary">
              <div className="w-[24px] h-[24px] rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[14px]">description</span>
              </div>
              <div className="flex-1">
                <span className="text-body font-semibold text-text block">18 belge işlendi</span>
                <p className="text-muted text-text-muted mt-1">Son 1 saat içinde sisteme düşen evraklar kontrol bekliyor.</p>
              </div>
            </ActivityCard>
            <ActivityCard className="border-warning">
              <div className="w-[24px] h-[24px] rounded-full bg-warning/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-warning text-[14px]">forum</span>
              </div>
              <div className="flex-1">
                <span className="text-body font-semibold text-text block">5 müşteri cevapladı</span>
                <p className="text-muted text-text-muted mt-1">WhatsApp üzerinden gönderilen eksik evrak taleplerine yanıt geldi.</p>
              </div>
            </ActivityCard>
          </div>
        </AppCard>

        {/* AI Haber Bülteni / Mevzuat (5 cols) */}
        <AppCard className="col-span-5 p-6">
          <div className="flex justify-between items-center mb-6">
            <SectionHeader>Mevzuat ve Duyurular</SectionHeader>
            <a className="text-primary hover:underline transition-colors text-label font-medium" href="#">Tümünü Gör</a>
          </div>
          
          <div className="flex flex-col gap-4">
            
            {/* Haber Satırı 1 */}
            <div className="flex items-start gap-4 p-4 border border-border rounded-[14px] hover:border-primary transition-colors duration-180 cursor-pointer">
              <StatusBadge status="warning">İSMMMO - Acil</StatusBadge>
              <div className="flex-1 mt-[2px]">
                <p className="text-primary font-medium text-[14px] leading-snug">KDV Beyanname verme süresi uzatıldı.</p>
                <span className="text-text-muted text-[12px] mt-1 block">Bugün, 09:15 • AI Özeti</span>
              </div>
            </div>

            {/* Haber Satırı 2 */}
            <div className="flex items-start gap-4 p-4 border border-border rounded-[14px] hover:border-primary transition-colors duration-180 cursor-pointer">
              <StatusBadge status="info">GİB - Sirküler</StatusBadge>
              <div className="flex-1 mt-[2px]">
                <p className="text-primary font-medium text-[14px] leading-snug">E-Fatura geçiş zorunluluğu tebliği yayımlandı.</p>
                <span className="text-text-muted text-[12px] mt-1 block">Dün, 14:30 • AI Özeti</span>
              </div>
            </div>

            {/* Haber Satırı 3 */}
            <div className="flex items-start gap-4 p-4 border border-border rounded-[14px] hover:border-primary transition-colors duration-180 cursor-pointer">
              <StatusBadge status="success">SGK - Bilgi</StatusBadge>
              <div className="flex-1 mt-[2px]">
                <p className="text-primary font-medium text-[14px] leading-snug">Asgari ücret destek ödemeleri yatmaya başladı.</p>
                <span className="text-text-muted text-[12px] mt-1 block">2 Gün Önce, 10:00 • AI Özeti</span>
              </div>
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
                  <span className="text-card-title font-bold text-text">24</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-border text-[20px]">arrow_forward</span>

              <div className="flex items-center gap-1 bg-surface px-4 py-2 rounded-card border border-border">
                <div className="w-[32px] h-[32px] rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[16px]">bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-text-muted uppercase font-semibold">AI İşliyor</span>
                  <span className="text-card-title font-bold text-text">47</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-border text-[20px]">arrow_forward</span>

              <div className="flex items-center gap-1 bg-surface px-4 py-2 rounded-card border border-border">
                <div className="w-[32px] h-[32px] rounded-full bg-warning/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-warning text-[16px]">engineering</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-text-muted uppercase font-semibold">Kontrol</span>
                  <span className="text-card-title font-bold text-text">19</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-border text-[20px]">arrow_forward</span>

              <div className="flex items-center gap-1 bg-surface px-4 py-2 rounded-card border border-border">
                <div className="w-[32px] h-[32px] rounded-full bg-success/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-success text-[16px]">check_circle</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted text-text-muted uppercase font-semibold">Biten</span>
                  <span className="text-card-title font-bold text-text">156</span>
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
              <path d="M0,85 Q15,60 25,75 T45,40 T65,60 T85,30 T100,50 L100,100 L0,100 Z" fill="url(#chartGradient)"></path>
              <path d="M0,85 Q15,60 25,75 T45,40 T65,60 T85,30 T100,50" fill="none" stroke="var(--color-primary)" strokeWidth="2"></path>
              <circle cx="25" cy="75" fill="var(--color-surface)" r="2" stroke="var(--color-primary)" strokeWidth="2"></circle>
              <circle cx="45" cy="40" fill="var(--color-surface)" r="2" stroke="var(--color-primary)" strokeWidth="2"></circle>
              <circle cx="65" cy="60" fill="var(--color-surface)" r="2" stroke="var(--color-primary)" strokeWidth="2"></circle>
              <circle cx="85" cy="30" fill="var(--color-surface)" r="2" stroke="var(--color-primary)" strokeWidth="2"></circle>
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
            {[
              { name: 'Shell Türkiye', type: 'Fatura', date: 'Bugün', statusLabel: 'HAZIR', status: 'info', icon: 'local_gas_station' },
              { name: 'Migros A.Ş.', type: 'Fiş', date: 'Bugün', statusLabel: 'KONTROL', status: 'warning', icon: 'store' },
              { name: 'Opet Petrolcülük', type: 'Fatura', date: 'Dün', statusLabel: 'EKSİK BİLGİ', status: 'danger', icon: 'local_shipping' },
              { name: 'Turkcell', type: 'Fatura', date: 'Dün', statusLabel: 'HAZIR', status: 'info', icon: 'cell_tower' },
              { name: 'Yemeksepeti', type: 'Fiş', date: '2 GÜN ÖNCE', statusLabel: 'KONTROL', status: 'warning', icon: 'restaurant' },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-card/50 rounded-input transition-colors duration-fast cursor-pointer">
                <div className="flex items-center gap-1">
                  <div className="w-[32px] h-[32px] rounded-button bg-surface border border-border flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-text-muted text-[16px]">{doc.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-body text-text font-semibold">{doc.name}</span>
                    <span className="text-muted text-text-muted uppercase tracking-wider mt-1">{doc.type} • {doc.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {/* @ts-ignore */}
                  <StatusBadge status={doc.status}>{doc.statusLabel}</StatusBadge>
                  <span className="material-symbols-outlined text-text-muted hover:text-text transition-colors duration-fast">more_vert</span>
                </div>
              </div>
            ))}
          </div>
        </AppCard>

        {/* Empty space for future cards (6 cols) */}
        <div className="col-span-6"></div>
      </div>
    </div>
  );
}
