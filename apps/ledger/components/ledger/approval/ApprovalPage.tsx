'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { GhostButton, PrimaryButton, SecondaryButton } from '../ui/Buttons';
import { InvoiceCard } from '../ui/InvoiceCard';
import { approveDocumentAction } from '../../../modules/ledger-ai/application/approve-document.action';

import { createClient } from '@/utils/supabase/client';

// Fixed field list - no longer depends on dynamic schema from DB
const INVOICE_FIELDS = [
  { key: 'invoice_number', label: 'FATURA NUMARASI' },
  { key: 'date', label: 'FATURA TARİHİ' },
  { key: 'type', label: 'FATURA TÜRÜ' },
  { key: 'vendor_tax_id', label: 'VKN / TCKN' },
  { key: 'title', label: 'AÇIKLAMA' },
  { key: 'tax_rate', label: 'TOPLAM ORAN' },
  { key: 'amount', label: 'ÖZL MATRAHİ' },
  { key: 'kdv_1', label: '%1\'LİK KDV' },
  { key: 'kdv_8', label: '%8\'LİK KDV' },
  { key: 'kdv_10', label: '%10\'LUK KDV' },
  { key: 'kdv_18', label: '%18\'LİK KDV' },
  { key: 'kdv_20', label: '%20\'LİK KDV' },
  { key: 'kdv_total_1', label: '%1\'LİK MATRAHİ' },
  { key: 'kdv_total_8', label: '%8\'LİK MATRAHİ' },
  { key: 'kdv_total_10', label: '%10\'LUK MATRAHİ' },
  { key: 'kdv_total_18', label: '%18\'LİK MATRAHİ' },
  { key: 'kdv_total_20', label: '%20\'LİK MATRAHİ' },
  { key: 'total', label: 'TOPLAM' },
];

export default function ApprovalPage({ 
  queue = [], 
  activeDocument = null, 
  draft = null, 
  imageUrl = null 
}: { 
  queue?: any[], 
  activeDocument?: any, 
  draft?: any, 
  imageUrl?: string | null 
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});

  // Parse tax_details from activeDocument and populate fields
  useEffect(() => {
    if (!activeDocument) {
      setFieldValues({});
      return;
    }
    let taxDetails: any = {};
    if (activeDocument.tax_details) {
      try {
        taxDetails = typeof activeDocument.tax_details === 'string'
          ? JSON.parse(activeDocument.tax_details)
          : activeDocument.tax_details;
      } catch (e) {}
    }
    const values: Record<string, string> = {};
    INVOICE_FIELDS.forEach(field => {
      const val = taxDetails[field.key];
      if (val !== undefined && val !== null && val !== '') {
        values[field.key] = String(val);
      } else {
        // Direct document fields
        const directVal = activeDocument[field.key];
        if (directVal !== undefined && directVal !== null && directVal !== '') {
          values[field.key] = String(directVal);
        } else {
          values[field.key] = '';
        }
      }
    });
    setFieldValues(values);
  }, [activeDocument?.id]);

  // Reset zoom and rotation when active document changes
  React.useEffect(() => {
    setZoom(100);
    setRotation(0);
  }, [activeDocument?.id]);

  useEffect(() => {
    if (!activeDocument && queue.length > 0) {
      router.push(`/approval/${queue[0].id}`);
    }
  }, [activeDocument, queue, router]);

  const formatCurrency = (amount: number, currency: string) => {
    if (amount === undefined || amount === null) return '0,00 ₺';
    try {
      return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: currency || 'TRY' }).format(amount);
    } catch (e) {
      return `${amount} ${currency || 'TRY'}`;
    }
  };

  const handleApprove = async () => {
    if (!activeDocument) return;
    setIsSubmitting(true);
    const accountId = draft?.ledger_account_code || '770'; 
    const vName = fieldValues['title'] || activeDocument.title || activeDocument.counterparty_name || 'Bilinmiyor';
    const vTaxId = fieldValues['vendor_tax_id'] || activeDocument.tax_id || '';

    try {
      const res = await approveDocumentAction(
        activeDocument.id, 
        accountId, 
        true, 
        vName, 
        vTaxId,
        fieldValues  // Pass all field values to lock into the record
      );

      if (!res.success) {
        alert('Onaylama başarısız: ' + res.error);
        setIsSubmitting(false);
      } else {
        window.location.href = '/ledger/approval';
      }
    } catch (e) {
      window.location.href = '/ledger/approval';
    }
  };

  const handleDelete = async () => {
    if (!activeDocument) return;
    if (!confirm('Bu evrakı tamamen silmek istediğinize emin misiniz?')) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch('/ledger/api/delete-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documentId: activeDocument.id })
      });
      const data = await res.json();
      
      if (!data.success) {
        alert('Silme başarısız: ' + data.error);
        setIsSubmitting(false);
      } else {
        window.location.href = '/ledger/approval';
      }
    } catch (e) {
      alert('Sunucu hatası. Lütfen sayfayı yenileyip tekrar deneyin.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface text-text h-full w-full flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center w-full px-6 z-50 bg-card/80 backdrop-blur-md top-0 sticky h-[64px] border-b border-border">
        <div className="flex items-center gap-1">
          <Link href="/workflow" className="flex items-center gap-2 text-text-muted hover:text-text transition-colors duration-fast">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-semibold text-body">Geri</span>
          </Link>
          <div className="h-6 w-[1px] bg-border mx-2"></div>
          {activeDocument ? (
            <h1 className="text-body font-bold text-text flex items-center gap-2">
              {activeDocument.title || activeDocument.counterparty_name || activeDocument.vendor_name || 'Bilinmiyor'}
              <span className="text-text-muted text-label font-medium">• {activeDocument.issue_date || 'Tarih Yok'}</span>
            </h1>
          ) : (
            <h1 className="text-body font-bold text-text flex items-center gap-2">
              Onay Merkezi
            </h1>
          )}
          {activeDocument && (
            <span className="inline-flex items-center rounded-badge bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary border border-primary/20 gap-1 ml-4">
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              %98 AI Güven
            </span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Document Queue */}
        <aside className="w-[320px] flex-shrink-0 bg-surface flex flex-col border-r border-border z-10 h-full">
          {/* Header */}
          <div className="px-6 py-6 flex items-center justify-between">
            <h2 className="text-text font-bold text-card-title">Evrak Kuyruğu</h2>
            <div className="flex items-center gap-1">
              <span className="text-text-muted text-label font-bold">{queue.length}</span>
              <button className="text-text-muted hover:text-text transition-colors duration-fast">
                <span className="material-symbols-outlined text-[20px]">filter_alt</span>
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex px-6 pt-1 gap-1 border-b border-border">
            <button className="pb-4 text-primary text-label border-b-2 border-primary font-bold">Tümü</button>
            <button className="pb-4 text-text-muted text-label hover:text-text font-bold transition-colors">Kontrol Bekleyen</button>
            <button className="pb-4 text-text-muted text-label hover:text-text font-bold transition-colors">Eksik Bilgi</button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
            {queue.length === 0 && (
              <div className="text-text-muted text-sm text-center py-8">Şu an onay bekleyen evrak bulunmuyor.</div>
            )}
            {queue.map(doc => (
              <InvoiceCard
                key={doc.id}
                id={doc.id}
                vendorName={doc.title || doc.counterparty_name || doc.vendor_name || 'Okunamadı'}
                taxpayerName={doc.organizations?.name || 'Bilinmiyor'}
                type={doc.type || 'expense'}
                amountMinor={doc.amount_minor || 0}
                currencyCode={doc.currency_code || 'TRY'}
                date={doc.created_at ? new Date(doc.created_at).toLocaleDateString('tr-TR') : 'Bilinmiyor'}
                isActive={activeDocument?.id === doc.id}
                onSelect={() => router.push(`/approval/${doc.id}`)}
                onDelete={async () => {
                  if (confirm('Bu evrakı tamamen silmek istediğinize emin misiniz?')) {
                    setIsSubmitting(true);
                    try {
                      const res = await fetch('/ledger/api/delete-document', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ documentId: doc.id })
                      });
                      const data = await res.json();
                      setIsSubmitting(false);
                      if (!data.success) alert('Silme başarısız: ' + data.error);
                      else window.location.href = '/ledger/approval';
                    } catch (e) {
                      setIsSubmitting(false);
                      alert('Sunucu hatası oluştu.');
                    }
                  }
                }}
              />
            ))}
          </div>

          {/* Footer / Pagination */}
          <div className="p-6 border-t border-border flex items-center justify-between text-text-muted text-label font-medium">
            <span>Toplam {queue.length} evrak</span>
            <div className="flex items-center gap-1">
              <button className="hover:text-text disabled:opacity-50 transition-colors" disabled>
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <span className="font-mono">1 / 1</span>
              <button className="hover:text-text transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Workspace Wrapper */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Column (PDF Canvas or Empty State) */}
          <section className="flex-1 h-full bg-card relative flex items-center justify-center p-8 overflow-hidden group">
            {!activeDocument ? (
              <div className="flex flex-col items-center justify-center text-text-muted">
                <span className="material-symbols-outlined text-[64px] mb-4 opacity-50">quick_reference_all</span>
                <h2 className="text-xl font-bold text-text">Lütfen bir evrak seçin</h2>
                <p className="mt-2">Sol menüden onaylamak istediğiniz evrağı seçerek işleme başlayabilirsiniz.</p>
              </div>
            ) : (
              <>
                {/* Floating Toolbar */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-md border border-border rounded-full px-2 py-1 flex items-center gap-1 z-20 opacity-80 hover:opacity-100 transition-opacity duration-fast shadow-glow-primary">
                  <button className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Search">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </button>
                  <div className="w-[1px] h-4 bg-border mx-1"></div>
                  <button 
                    onClick={() => setZoom(z => Math.max(25, z - 25))}
                    className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Zoom Out">
                    <span className="material-symbols-outlined text-[20px]">zoom_out</span>
                  </button>
                  <span className="text-label font-bold text-text px-2 w-[64px] text-center">%{zoom}</span>
                  <button 
                    onClick={() => setZoom(z => Math.min(300, z + 25))}
                    className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Zoom In">
                    <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                  </button>
                  <div className="w-[1px] h-4 bg-border mx-1"></div>
                  <button 
                    onClick={() => setRotation(r => r + 90)}
                    className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Rotate">
                    <span className="material-symbols-outlined text-[20px]">rotate_right</span>
                  </button>
                </div>

                <div className="w-full max-w-[600px] h-full max-h-[800px] bg-white rounded-card shadow-2xl relative overflow-auto border border-border flex flex-col items-center print:border-none print:shadow-none print:max-h-none print:h-auto print:max-w-none">
                  
                  {/* Ownership Stamp / Header */}
                  <div className="w-full bg-slate-100 border-b border-border py-3 px-6 text-center text-slate-800 font-bold uppercase tracking-wider text-[11px] print:bg-white print:border-black print:text-black print:text-sm shrink-0">
                    MÜKELLEF: {activeDocument.organizations?.name || 'Bilinmiyor'}
                  </div>

                  <div className="w-full flex-1 flex justify-center items-center overflow-hidden relative bg-[#F8F9FA] p-4 cursor-grab active:cursor-grabbing">
                    {imageUrl ? (
                      <motion.div 
                        drag
                        dragMomentum={false}
                        animate={{ scale: zoom / 100, rotate: rotation }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="flex origin-center justify-center items-center"
                      >
                        <img 
                          src={imageUrl} 
                          alt="Document" 
                          className="object-contain print:w-full max-w-full bg-white shadow-sm border border-border/10 pointer-events-none"
                          style={{ maxHeight: '1000px' }}
                        />
                      </motion.div>
                    ) : (
                      <div className="flex items-center justify-center h-full w-full text-gray-400 print:hidden absolute inset-0">
                        Görsel yüklenemedi.
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </section>

          {/* Right Column: Operation Panel */}
          <section className="w-[550px] flex-shrink-0 h-full bg-card flex flex-col border-l border-border relative overflow-y-auto custom-scrollbar">
            <div className="flex-1 flex flex-col justify-center min-h-max py-6">
              {/* Form Area */}
              <div className="px-8 pb-6">
                <div className="max-w-xl mx-auto space-y-4">
                  
                  {/* AI Info Banner */}
                  <div className="space-y-4">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">auto_awesome</span>
                      <span className="text-[12px] font-medium text-text-muted">
                        {activeDocument ? 'AI tarafından taranan fatura bilgileri. Düzenleyebilir ve onaylayabilirsiniz.' : 'Soldan bir evrak seçerek AI analizini başlatın.'}
                      </span>
                    </div>
                    
                    {/* Invoice Fields Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {INVOICE_FIELDS.map(field => (
                        <div key={field.key} className="space-y-1">
                          <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">{field.label}</label>
                          <input 
                            className="w-full h-10 bg-[#1A1D24] border border-white/10 rounded-lg text-[13px] text-white px-3 focus:outline-none focus:border-primary transition-all"
                            type="text" 
                            value={fieldValues[field.key] || ''}
                            onChange={(e) => setFieldValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                            disabled={!activeDocument} 
                            placeholder={activeDocument ? '—' : ''}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="px-8 py-6 max-w-xl mx-auto w-full flex items-center justify-between mt-2 border-t border-border">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-muted tracking-wider uppercase mb-1">Genel Toplam</span>
                  <span className="text-text text-[24px] font-bold font-mono">
                    {activeDocument ? formatCurrency(
                      activeDocument.amount_minor != null 
                        ? activeDocument.amount_minor / 100 
                        : 0, 
                      activeDocument.currency_code || 'TRY'
                    ) : '0,00 ₺'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <GhostButton onClick={handleDelete} disabled={isSubmitting || !activeDocument} className="text-[#FF4A4A] hover:bg-[#FF4A4A]/10 border border-transparent hover:border-[#FF4A4A]/20 transition-colors">Sil</GhostButton>
                  <SecondaryButton onClick={() => router.push('/approval')} disabled={!activeDocument}>Taslak</SecondaryButton>
                  <PrimaryButton onClick={handleApprove} disabled={isSubmitting || !activeDocument} className="flex items-center gap-2 group">
                    {isSubmitting ? 'Onaylanıyor...' : 'Onayla'}
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
