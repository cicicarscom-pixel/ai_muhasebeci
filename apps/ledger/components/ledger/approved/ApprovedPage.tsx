'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApprovedPage({ documents = [] }: { documents: any[] }) {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  // Group by organization
  const groupedDocs = documents.reduce((acc, doc) => {
    const orgId = doc.organization_id || 'unknown';
    if (!acc[orgId]) {
      acc[orgId] = {
        organization: doc.organizations || { name: 'Bilinmeyen Mükellef' },
        documents: []
      };
    }
    acc[orgId].documents.push(doc);
    return acc;
  }, {} as Record<string, { organization: any, documents: any[] }>);

  const toggleGroup = (orgId: string) => {
    setExpandedGroups(prev => 
      prev.includes(orgId) ? prev.filter(id => id !== orgId) : [...prev, orgId]
    );
  };

  const handleExport = (format: string, orgName: string, docs: any[]) => {
    // In a real app, this would call an API endpoint or generate the file client-side.
    // For now, we simulate the download for CSV to show it works, and alert for others.
    if (format === 'csv') {
      const headers = ['Tarih', 'Fatura No', 'Tip', 'Tutar', 'Para Birimi', 'Durum'];
      const rows = docs.map(d => {
        const date = d.document_date ? new Date(d.document_date).toLocaleDateString('tr-TR') : '-';
        const no = d.document_number || '-';
        const type = d.type === 'sales' ? 'SATIŞ' : 'GİDER';
        const amount = d.amount_minor ? d.amount_minor / 100 : (d.total_amount || 0);
        const curr = d.currency_code || 'TRY';
        const status = d.ledger_official_status;
        return [date, no, type, amount, curr, status].join(',');
      });
      const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `${orgName.replace(/\s+/g, '_')}_faturalar.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(`${orgName} için ${format.toUpperCase()} dışa aktarımı başlatılıyor... (${docs.length} evrak)`);
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    if (amount === undefined || amount === null) return '0,00 ₺';
    try {
      return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: currency || 'TRY' }).format(amount);
    } catch (e) {
      return `${amount} ${currency || 'TRY'}`;
    }
  };

  return (
    <div className="flex flex-col h-full bg-surface text-text overflow-hidden">
      {/* Header */}
      <header className="h-[80px] min-h-[80px] border-b border-border flex flex-col justify-center px-8 relative z-10 bg-surface/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[20px]">archive</span>
          </div>
          <div>
            <h1 className="text-[20px] font-bold text-white tracking-tight">Arşiv & Dışa Aktarım</h1>
            <p className="text-[13px] text-text-muted mt-0.5">
              Onaylanmış evrakları görüntüleyin ve Excel, XML, PDF olarak dışa aktarın.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-6xl mx-auto space-y-4">
          
          {Object.entries(groupedDocs).length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-text-muted">
              <span className="material-symbols-outlined text-[48px] mb-4 opacity-50">inventory_2</span>
              <p>Henüz onaylanmış veya arşivlenmiş evrak bulunmuyor.</p>
            </div>
          ) : (
            Object.entries(groupedDocs).map(([orgId, group]: [string, any]) => {
              const isExpanded = expandedGroups.includes(orgId);
              const orgName = group.organization?.name || 'Bilinmeyen Mükellef';
              
              return (
                <div key={orgId} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                  {/* Accordion Header */}
                  <div 
                    className="flex items-center justify-between p-5 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => toggleGroup(orgId)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center font-bold text-lg border border-brand-primary/30 shadow-glow-primary">
                        {orgName ? orgName.charAt(0).toUpperCase() : '?'}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base flex items-center gap-2">
                          {orgName}
                          <span className="px-2 py-0.5 rounded-full bg-white/10 text-text-muted text-[11px] font-medium border border-white/5">
                            {group.documents.length} Evrak
                          </span>
                        </h3>
                        <p className="text-[12px] text-text-muted mt-0.5">Toplu dışa aktarım seçenekleri için tıklayın.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                      {/* Export Buttons */}
                      <div className="flex items-center gap-2 mr-4">
                        <button onClick={() => handleExport('excel', orgName, group.documents)} className="h-8 px-3 rounded-md bg-[#107C41]/10 text-[#107C41] border border-[#107C41]/20 hover:bg-[#107C41]/20 text-[12px] font-bold flex items-center gap-1.5 transition-colors">
                          <span className="material-symbols-outlined text-[16px]">table_view</span> Excel
                        </button>
                        <button onClick={() => handleExport('xml', orgName, group.documents)} className="h-8 px-3 rounded-md bg-[#F48024]/10 text-[#F48024] border border-[#F48024]/20 hover:bg-[#F48024]/20 text-[12px] font-bold flex items-center gap-1.5 transition-colors">
                          <span className="material-symbols-outlined text-[16px]">code</span> XML
                        </button>
                        <button onClick={() => handleExport('csv', orgName, group.documents)} className="h-8 px-3 rounded-md bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/20 text-[12px] font-bold flex items-center gap-1.5 transition-colors">
                          <span className="material-symbols-outlined text-[16px]">data_object</span> CSV
                        </button>
                        <button onClick={() => handleExport('pdf', orgName, group.documents)} className="h-8 px-3 rounded-md bg-[#E3242B]/10 text-[#E3242B] border border-[#E3242B]/20 hover:bg-[#E3242B]/20 text-[12px] font-bold flex items-center gap-1.5 transition-colors">
                          <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span> PDF
                        </button>
                      </div>
                      
                      <button className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-all ${isExpanded ? 'rotate-180' : ''}`}>
                        <span className="material-symbols-outlined text-text-muted">expand_more</span>
                      </button>
                    </div>
                  </div>

                  {/* Accordion Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="border-t border-border bg-[#0E1116] p-0">
                          <table className="w-full text-left text-[13px]">
                            <thead className="bg-[#1A1D24] text-text-muted text-[11px] uppercase tracking-wider">
                              <tr>
                                <th className="px-5 py-3 font-medium">Fatura No</th>
                                <th className="px-5 py-3 font-medium">Tarih</th>
                                <th className="px-5 py-3 font-medium">Tip</th>
                                <th className="px-5 py-3 font-medium">Karşı Taraf</th>
                                <th className="px-5 py-3 font-medium text-right">Tutar</th>
                                <th className="px-5 py-3 font-medium text-center">Durum</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                              {group.documents.map((doc: any) => {
                                const amount = doc.amount_minor != null ? doc.amount_minor / 100 : (doc.total_amount || 0);
                                const isSales = doc.type === 'sales';
                                return (
                                  <tr key={doc.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-5 py-3 text-white font-medium">{doc.document_number || '-'}</td>
                                    <td className="px-5 py-3 text-text-muted">
                                      {doc.document_date ? new Date(doc.document_date).toLocaleDateString('tr-TR') : '-'}
                                    </td>
                                    <td className="px-5 py-3">
                                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isSales ? 'bg-success/20 text-success' : 'bg-[#9D5CFF]/20 text-[#9D5CFF]'}`}>
                                        {isSales ? 'SATIŞ' : 'GİDER'}
                                      </span>
                                    </td>
                                    <td className="px-5 py-3 text-text-muted truncate max-w-[200px]" title={doc.vendor_name || '-'}>
                                      {doc.vendor_name || '-'}
                                    </td>
                                    <td className="px-5 py-3 text-white text-right font-mono font-medium">
                                      {formatCurrency(amount, doc.currency_code || 'TRY')}
                                    </td>
                                    <td className="px-5 py-3 text-center">
                                      <span className="material-symbols-outlined text-[16px] text-success">check_circle</span>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
          
        </div>
      </main>
    </div>
  );
}
