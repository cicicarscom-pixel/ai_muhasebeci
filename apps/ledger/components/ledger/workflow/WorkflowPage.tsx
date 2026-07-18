'use client';
import React from 'react';
import { PageTitle, SectionHeader } from '../ui/Typography';
import { MetricCard, AppCard } from '../ui/Cards';
import { SecondaryButton, GhostButton } from '../ui/Buttons';
import Link from 'next/link';

export default function WorkflowPage({ initialDocuments = [] }: { initialDocuments?: any[] }) {
  // 1. Yeni Geldi (uploaded and not yet processing)
  const yeniGeldi = initialDocuments.filter(d => d.processing_status === 'uploaded');
  
  // 2. AI İşliyor (currently processing by AI)
  const aiIsliyor = initialDocuments.filter(d => d.processing_status === 'processing');
  
  // 3. Kontrol Bekliyor (AI finished or failed, review pending)
  const kontrolBekliyor = initialDocuments.filter(d => 
    (d.processing_status === 'completed' || d.processing_status === 'failed') && d.review_status === 'pending'
  );
  
  // 4. Onaylandı (review completed/approved)
  const onaylandi = initialDocuments.filter(d => d.review_status === 'approved');

  const formatCurrency = (amount: number, currency: string) => {
    if (amount === undefined || amount === null) return '-';
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: currency || 'TRY' }).format(amount);
  };

  const totalAmount = initialDocuments.reduce((acc, doc) => acc + (Number(doc.total_amount) || 0), 0);

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
          value={initialDocuments.length.toString()}
          icon={<span className="material-symbols-outlined text-[18px]">description</span>}
        />
        <MetricCard 
          title="Toplam Tutar"
          value={formatCurrency(totalAmount, 'TRY')}
          icon={<span className="material-symbols-outlined text-[18px]">payments</span>}
        />
        <MetricCard 
          title="Onay Bekleyen"
          value={kontrolBekliyor.length.toString()}
          icon={<span className="material-symbols-outlined text-[18px]">hourglass_empty</span>}
        />
        <MetricCard 
          title="Onaylanan"
          value={onaylandi.length.toString()}
          icon={<span className="material-symbols-outlined text-[18px]">check_circle</span>}
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
            <span className="text-text text-muted font-bold px-2 py-1 rounded-badge bg-surface border border-border">{yeniGeldi.length}</span>
          </div>
          <p className="text-muted text-text-muted mb-4">AI okumayı bekliyor</p>
          
          <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1 pr-1">
            {yeniGeldi.length === 0 && (
              <GhostButton className="w-full mt-1 flex items-center justify-center gap-2 border border-border bg-surface text-gray-400">
                 Burada henüz evrak yok
              </GhostButton>
            )}
            {yeniGeldi.map(doc => (
              <AppCard key={doc.id} className="p-4 cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted text-[#58A6FF] font-semibold truncate" title={doc.organizations?.name}>{doc.organizations?.name || 'Bilinmiyor'}</span>
                  <span className="material-symbols-outlined text-text-muted text-[16px]">description</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-text-muted text-[16px]">calendar_today</span>
                  <span className="text-label text-text-muted" suppressHydrationWarning>{new Date(doc.created_at).toLocaleDateString('tr-TR')}</span>
                </div>
              </AppCard>
            ))}
          </div>
        </div>

        {/* Col 2: AI İşliyor */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-primary p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[18px]">neurology</span>
              <SectionHeader className="text-[14px]">AI İşliyor</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-2 py-1 rounded-badge bg-surface border border-border">{aiIsliyor.length}</span>
          </div>
          <p className="text-muted text-text-muted mb-4">Okuma ve analiz yapılıyor</p>
          
          <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1 pr-1">
             {aiIsliyor.length === 0 && (
               <GhostButton className="w-full mt-1 flex items-center justify-center gap-2 border border-border bg-surface text-gray-400">
                 Burada henüz evrak yok
              </GhostButton>
             )}
             {aiIsliyor.map(doc => (
               <AppCard key={doc.id} className="p-4 cursor-pointer">
                 <div className="flex justify-between items-center mb-4">
                   <span className="text-muted text-[#58A6FF] font-semibold truncate" title={doc.organizations?.name}>{doc.organizations?.name || 'Bilinmiyor'}</span>
                   <span className="material-symbols-outlined text-primary text-[18px] animate-spin">progress_activity</span>
                 </div>
                 <div className="flex items-center gap-2 mb-2">
                   <span className="material-symbols-outlined text-text-muted text-[16px]">calendar_today</span>
                   <span className="text-label text-text-muted" suppressHydrationWarning>{new Date(doc.created_at).toLocaleDateString('tr-TR')}</span>
                 </div>
               </AppCard>
             ))}
          </div>
        </div>

        {/* Col 3: Kontrol Bekliyor */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-warning p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[18px]">error</span>
              <SectionHeader className="text-[14px]">Kontrol Bekliyor</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-2 py-1 rounded-badge bg-surface border border-border">{kontrolBekliyor.length}</span>
          </div>
          <p className="text-muted text-text-muted mb-4">Müşavir kontrolü gerekli</p>
          
          <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1 pr-1">
            {kontrolBekliyor.length === 0 && (
              <GhostButton className="w-full mt-1 flex items-center justify-center gap-2 border border-border bg-surface text-gray-400">
                 Burada henüz evrak yok
              </GhostButton>
            )}
            {kontrolBekliyor.map(doc => (
              <Link href={`/approval/${doc.id}`} key={doc.id}>
                <AppCard className="p-4 cursor-pointer hover:border-warning/50 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted text-[#58A6FF] font-semibold truncate" title={doc.organizations?.name}>{doc.organizations?.name || 'Bilinmiyor'}</span>
                    <span className="bg-surface text-primary border border-primary/20 text-[10px] px-2 py-1 rounded-badge font-bold uppercase">AI</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-text-muted text-[18px]">domain</span>
                    <span className="text-body font-semibold text-text truncate" title={doc.vendor_name || 'Okunamadı'}>{doc.vendor_name || 'Okunamadı'}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-text-muted text-[18px]">payments</span>
                    <span className="text-card-title font-bold text-text">{formatCurrency(doc.total_amount, doc.currency)}</span>
                  </div>
                  {doc.accounting_drafts?.[0]?.ledger_account_code && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                      <span className="text-label font-bold text-warning">{doc.accounting_drafts[0].ledger_account_code}</span>
                      <span className="text-muted text-text-muted">Önerilen Kod</span>
                    </div>
                  )}
                </AppCard>
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4: Onaylandı */}
        <div className="flex flex-col min-w-[280px] w-[280px] bg-card/30 border border-border rounded-card border-l-[3px] border-l-success p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[18px]">check_circle</span>
              <SectionHeader className="text-[14px]">Onaylandı</SectionHeader>
            </div>
            <span className="text-text text-muted font-bold px-2 py-1 rounded-badge bg-surface border border-border">{onaylandi.length}</span>
          </div>
          <p className="text-muted text-text-muted mb-4">Toplu gönderime hazır</p>
          
          <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1 pr-1">
            {onaylandi.length === 0 && (
              <GhostButton className="w-full mt-1 flex items-center justify-center gap-2 border border-border bg-surface text-gray-400">
                 Burada henüz evrak yok
              </GhostButton>
            )}
            {onaylandi.map(doc => (
              <AppCard key={doc.id} className="p-4 cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted text-[#9D5CFF] font-semibold truncate" title={doc.organizations?.name}>{doc.organizations?.name || 'Bilinmiyor'}</span>
                  <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-text-muted text-[18px]">domain</span>
                  <span className="text-body font-semibold text-text truncate" title={doc.vendor_name || 'Okunamadı'}>{doc.vendor_name || 'Okunamadı'}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-text-muted text-[18px]">payments</span>
                  <span className="text-card-title font-bold text-text">{formatCurrency(doc.total_amount, doc.currency)}</span>
                </div>
                {doc.accounting_drafts?.[0]?.ledger_account_code && (
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                    <span className="text-label font-bold text-success">{doc.accounting_drafts[0].ledger_account_code}</span>
                    <span className="text-muted text-text-muted">Onaylanan Kod</span>
                  </div>
                )}
              </AppCard>
            ))}
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
