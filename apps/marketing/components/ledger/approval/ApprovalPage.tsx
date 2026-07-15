'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PrimaryButton, SecondaryButton, GhostButton } from '../ui/Buttons';
import { approveDocumentAction } from '../../../modules/ledger-ai/application/approve-document.action';

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
  const [accountId, setAccountId] = useState(draft?.ledger_account_code || '');
  const [rememberRule, setRememberRule] = useState(true);

  const formatCurrency = (amount: number, currency: string) => {
    if (amount === undefined || amount === null) return '-';
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: currency || 'TRY' }).format(amount);
  };

  const handleApprove = async () => {
    if (!activeDocument) return;
    if (!accountId) {
      alert('Lütfen taslak onaylanmadan önce bir hesap kodu girin (örn: 770).');
      return;
    }

    setIsSubmitting(true);
    const res = await approveDocumentAction(
      activeDocument.id, 
      accountId, 
      rememberRule, 
      activeDocument.vendor_name, 
      activeDocument.vendor_tax_identifier
    );

    if (!res.success) {
      alert('Onaylama başarısız: ' + res.error);
      setIsSubmitting(false);
    } else {
      router.push('/ledger/approval');
      router.refresh();
    }
  };

  return (
    <div className="bg-surface text-text h-full w-full flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center w-full px-6 z-50 bg-card/80 backdrop-blur-md top-0 sticky h-[64px] border-b border-border">
        <div className="flex items-center gap-1">
          <Link href="/ledger/workflow" className="flex items-center gap-2 text-text-muted hover:text-text transition-colors duration-fast">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-semibold text-body">Geri</span>
          </Link>
          <div className="h-6 w-[1px] bg-border mx-2"></div>
          {activeDocument ? (
            <>
              <h1 className="text-body font-bold text-text flex items-center gap-2">
                {activeDocument.vendor_name || 'Okunamadı'} 
                <span className="text-text-muted text-label font-medium">• {activeDocument.issue_date || 'Tarih Yok'}</span>
              </h1>
              <span className="inline-flex items-center rounded-badge bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary border border-primary/20 gap-1 ml-4">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                AI Tarafından Okundu
              </span>
            </>
          ) : (
            <h1 className="text-body font-bold text-text">Onay Merkezi</h1>
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
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
            {queue.length === 0 && (
              <div className="text-text-muted text-sm text-center py-8">Şu an onay bekleyen evrak bulunmuyor. Harika!</div>
            )}
            {queue.map(doc => {
              const isActive = activeDocument?.id === doc.id;
              return (
                <Link href={`/ledger/approval/${doc.id}`} key={doc.id}>
                  <div className={`p-4 rounded-card cursor-pointer flex flex-col gap-2 transition-all ${
                    isActive 
                      ? 'border border-primary/50 bg-primary/5 shadow-glow-primary' 
                      : 'border border-border hover:bg-card/50'
                  }`}>
                    <div className="flex items-center gap-1">
                      <div className={`w-[24px] h-[24px] rounded-[4px] flex items-center justify-center font-bold text-[12px] ${isActive ? 'bg-primary text-white' : 'bg-surface text-text-muted border border-border'}`}>
                        {doc.vendor_name ? doc.vendor_name.charAt(0).toUpperCase() : '?'}
                      </div>
                      <span className="text-text font-bold text-body truncate" title={doc.vendor_name}>{doc.vendor_name || 'Okunamadı'}</span>
                    </div>
                    <div className="flex items-end justify-between pl-[32px]">
                      <div className="flex flex-col gap-1">
                        <span className="text-text font-mono text-body font-bold">{formatCurrency(doc.total_amount, doc.currency)}</span>
                        <div className="flex items-center text-text-muted text-label gap-1 font-medium">
                          <span className="material-symbols-outlined text-[14px]">schedule</span>
                          {doc.issue_date || new Date(doc.created_at).toLocaleDateString('tr-TR')}
                        </div>
                      </div>
                      <span className="bg-surface text-primary border border-primary/20 text-[10px] px-2 py-1 rounded-badge font-bold uppercase">AI</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Workspace Wrapper */}
        <div className="flex-1 flex overflow-hidden">
          
          {!activeDocument ? (
            <div className="flex-1 flex flex-col items-center justify-center bg-card text-text-muted">
              <span className="material-symbols-outlined text-[64px] mb-4 opacity-50">quick_reference_all</span>
              <h2 className="text-xl font-bold text-text">Lütfen bir evrak seçin</h2>
              <p className="mt-2">Sol menüden onaylamak istediğiniz evrağı seçerek işleme başlayabilirsiniz.</p>
            </div>
          ) : (
            <>
              {/* Left Column: PDF Canvas */}
              <section className="w-1/2 h-full bg-card relative flex items-center justify-center p-8 overflow-hidden group">
                <div className="w-full h-full max-w-[800px] bg-white rounded-card shadow-2xl relative overflow-auto border border-border flex justify-center">
                  {imageUrl ? (
                    <img src={imageUrl} alt="Fatura" className="object-contain w-full h-auto max-h-full" />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                      <span className="material-symbols-outlined text-[48px] mb-4">image_not_supported</span>
                      Görsel yüklenemedi.
                    </div>
                  )}
                </div>
              </section>

              {/* Right Column: Operation Panel */}
              <section className="w-1/2 h-full bg-card flex flex-col border-l border-border relative overflow-y-auto custom-scrollbar">
                <div className="flex-1 flex flex-col justify-center min-h-max py-6">
                  {/* Form Area */}
                  <div className="px-8 pb-6">
                    <div className="max-w-xl mx-auto space-y-4">
                      
                      {/* Belge Section */}
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Tarihi</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[13px] text-[#0E1117] px-3 focus:outline-none focus:border-primary transition-all" type="text" readOnly value={activeDocument.issue_date || ''} />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Numarası</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[#0E1117] px-3 focus:outline-none focus:border-primary transition-all font-mono text-[13px]" type="text" readOnly value={activeDocument.invoice_number || ''} />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Türü</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[#0E1117] px-3 focus:outline-none focus:border-primary transition-all text-[13px] capitalize" type="text" readOnly value={activeDocument.document_type || ''} />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">VKN/TCKN</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[#0E1117] px-3 focus:outline-none focus:border-primary transition-all font-mono text-[13px]" type="text" readOnly value={activeDocument.vendor_tax_identifier || ''} />
                          </div>
                        </div>
                      </div>

                      {/* Ledger AI Hesap Kodu Section */}
                      <div className="mt-8 pt-6 border-t border-border">
                        <h3 className="text-text font-bold mb-4 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">neurology</span>
                          Ledger AI Muhasebe Taslağı
                        </h3>
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Hesap Kodu</label>
                            <input 
                              type="text" 
                              value={accountId}
                              onChange={(e) => setAccountId(e.target.value)}
                              placeholder="Örn: 770.01"
                              className="w-full h-12 bg-white border border-primary/50 shadow-glow-primary rounded-lg text-[#0E1117] px-4 focus:outline-none focus:border-primary transition-all font-mono font-bold text-[16px]"
                            />
                            {draft?.ledger_account_code && (
                              <p className="text-[11px] text-success mt-1">AI tarafından {draft.ledger_account_code} olarak önerildi.</p>
                            )}
                          </div>

                          {activeDocument.vendor_name && (
                            <div className="flex items-start gap-3 bg-primary/10 p-4 rounded-card border border-primary/20">
                              <input 
                                type="checkbox" 
                                id="rememberRule"
                                checked={rememberRule}
                                onChange={(e) => setRememberRule(e.target.checked)}
                                className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer border-border"
                              />
                              <label htmlFor="rememberRule" className="text-xs text-text-muted cursor-pointer leading-tight">
                                <strong className="text-text">Öğrenme Kuralı:</strong> Bundan sonra <strong>{activeDocument.vendor_name}</strong> firmasından gelen faturalara otomatik olarak <strong>{accountId || '...'}</strong> hesap kodunu uygula.
                              </label>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="px-8 py-6 max-w-xl mx-auto w-full flex items-center justify-between mt-auto border-t border-border bg-card">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-text-muted tracking-wider uppercase mb-1">Genel Toplam</span>
                      <span className="text-text text-[24px] font-bold font-mono">{formatCurrency(activeDocument.total_amount, activeDocument.currency)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SecondaryButton onClick={() => router.push('/ledger/workflow')}>İptal</SecondaryButton>
                      <PrimaryButton onClick={handleApprove} disabled={isSubmitting} className="flex items-center gap-2 group">
                        {isSubmitting ? 'İşleniyor...' : 'Onayla'}
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

        </div>
      </main>
    </div>
  );
}
