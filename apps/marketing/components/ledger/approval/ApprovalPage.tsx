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

  const formatCurrency = (amount: number, currency: string) => {
    if (amount === undefined || amount === null) return '0.00';
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: currency || 'TRY' }).format(amount);
  };

  const handleApprove = async () => {
    if (!activeDocument) return;
    setIsSubmitting(true);
    // Just a placeholder account code since the original design didn't have an input for it
    const accountId = draft?.ledger_account_code || '770'; 
    const res = await approveDocumentAction(
      activeDocument.id, 
      accountId, 
      true, 
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
            <h1 className="text-body font-bold text-text flex items-center gap-2">
              {activeDocument.vendor_name || 'Bilinmiyor'}
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
            {queue.map(doc => {
              const isActive = activeDocument?.id === doc.id;
              const firstLetter = doc.vendor_name ? doc.vendor_name.charAt(0).toUpperCase() : '?';
              return (
                <Link href={`/ledger/approval/${doc.id}`} key={doc.id}>
                  <div className={`p-4 rounded-card cursor-pointer flex flex-col gap-2 transition-all ${
                    isActive 
                      ? 'border border-primary/50 bg-primary/5 shadow-glow-primary' 
                      : 'border border-border hover:bg-card/50'
                  }`}>
                    <div className="flex items-center gap-1">
                      <div className={`w-[24px] h-[24px] rounded-[4px] flex items-center justify-center font-bold text-[12px] ${isActive ? 'bg-primary text-white' : 'bg-[#FF7900] text-white'}`}>
                        {firstLetter}
                      </div>
                      <span className="text-text font-bold text-body truncate">{doc.vendor_name || 'Okunamadı'}</span>
                    </div>
                    <div className="flex items-end justify-between pl-[40px]">
                      <div className="flex flex-col gap-1">
                        <span className="text-text font-mono text-body font-bold">{formatCurrency(doc.total_amount, doc.currency)}</span>
                        <div className="flex items-center text-text-muted text-label gap-1 font-medium">
                          <span className="material-symbols-outlined text-[14px]">schedule</span>
                          {doc.issue_date || new Date(doc.created_at).toLocaleDateString('tr-TR')}
                        </div>
                      </div>
                      <span className="text-primary text-label font-bold">%98</span>
                    </div>
                  </div>
                </Link>
              );
            })}
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
                {/* Floating Toolbar */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-md border border-border rounded-full px-2 py-1 flex items-center gap-1 z-10 opacity-80 hover:opacity-100 transition-opacity duration-fast shadow-glow-primary">
                  <button className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Search">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </button>
                  <div className="w-[1px] h-4 bg-border mx-1"></div>
                  <button className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Zoom Out">
                    <span className="material-symbols-outlined text-[20px]">zoom_out</span>
                  </button>
                  <span className="text-label font-bold text-text px-2 w-[64px] text-center">%100</span>
                  <button className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Zoom In">
                    <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                  </button>
                  <div className="w-[1px] h-4 bg-border mx-1"></div>
                  <button className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Rotate">
                    <span className="material-symbols-outlined text-[20px]">rotate_right</span>
                  </button>
                </div>

                <div className="w-full max-w-[600px] h-full max-h-[800px] bg-white rounded-card shadow-2xl relative overflow-auto border border-border flex justify-center">
                  {imageUrl ? (
                    <img src={imageUrl} alt="Document" className="object-contain w-full h-auto" />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full text-gray-400">
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
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Tarihi</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[13px] text-[#0E1117] px-3 focus:outline-none focus:border-primary transition-all" type="text" defaultValue={activeDocument.issue_date || ''} />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Numarası</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[#0E1117] px-3 focus:outline-none focus:border-primary transition-all font-mono text-[13px]" type="text" defaultValue={activeDocument.invoice_number || ''} />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Türü</label>
                            <select className="w-full h-9 bg-white border border-border rounded-lg text-[13px] text-[#0E1117] px-3 appearance-none focus:outline-none focus:border-primary transition-all" defaultValue={activeDocument.document_type || 'Alış Faturası'}>
                              <option value="invoice">Alış Faturası</option>
                              <option value="receipt">Fiş</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">VKN/TCKN</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[#0E1117] px-3 focus:outline-none focus:border-primary transition-all font-mono text-[13px]" type="text" defaultValue={activeDocument.vendor_tax_identifier || ''} />
                          </div>
                          <div className="col-span-2 space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Açıklama</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[13px] text-[#0E1117] px-3 focus:outline-none focus:border-primary transition-all" type="text" defaultValue={activeDocument.vendor_name || ''} />
                          </div>
                        </div>
                      </div>

                      {/* Vergiler Section */}
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Tevkifat Oranı</label>
                            <select className="w-full h-9 bg-white border border-border rounded-lg text-[13px] text-[#0E1117] px-3 appearance-none focus:outline-none focus:border-primary transition-all">
                              <option>Yok</option>
                              <option>2/10</option>
                              <option>5/10</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Özel Matrah</label>
                            <input className="w-full h-9 bg-white border border-border rounded-lg text-[#0E1117] px-3 text-right focus:outline-none focus:border-primary transition-all font-mono text-[13px]" type="text" defaultValue="0.00" />
                          </div>
                        </div>

                        <div className="bg-card border border-border rounded-card p-3 overflow-x-auto custom-scrollbar">
                          <div className="min-w-[420px]">
                            {/* KDV Fields */}
                            <div className="grid grid-cols-5 gap-2 mb-3">
                              <div className="space-y-1"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%1 KDV</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue="0.00" /></div>
                              <div className="space-y-1"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%8 KDV</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue="0.00" /></div>
                              <div className="space-y-1"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%10 KDV</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue="0.00" /></div>
                              <div className="space-y-1"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%18 KDV</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue="0.00" /></div>
                              <div className="space-y-1"><label className="text-label font-bold text-primary uppercase px-2 whitespace-nowrap">%20 KDV</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue={activeDocument.tax_amount || "0.00"} /></div>
                            </div>
                            {/* Matrah Fields */}
                            <div className="grid grid-cols-5 gap-2">
                              <div className="space-y-1"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%1 Matrah</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue="0.00" /></div>
                              <div className="space-y-1"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%8 Matrah</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue="0.00" /></div>
                              <div className="space-y-1"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%10 Matrah</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue="0.00" /></div>
                              <div className="space-y-1"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%18 Matrah</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue="0.00" /></div>
                              <div className="space-y-1"><label className="text-label font-bold text-primary uppercase px-2 whitespace-nowrap">%20 Matrah</label><input className="w-full h-[32px] bg-white border border-border focus:border-primary outline-none text-body font-mono font-bold text-[#0E1117] px-2 text-right transition-colors rounded-md" defaultValue={activeDocument.net_amount || "0.00"} /></div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="px-8 py-6 max-w-xl mx-auto w-full flex items-center justify-between mt-2 border-t border-border">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-text-muted tracking-wider uppercase mb-1">Genel Toplam</span>
                      <span className="text-text text-[24px] font-bold font-mono">{formatCurrency(activeDocument.total_amount, activeDocument.currency)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SecondaryButton onClick={() => router.push('/ledger/approval')}>Taslak</SecondaryButton>
                      <PrimaryButton onClick={handleApprove} disabled={isSubmitting} className="flex items-center gap-2 group">
                        {isSubmitting ? 'Onaylanıyor...' : 'Onayla'}
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
