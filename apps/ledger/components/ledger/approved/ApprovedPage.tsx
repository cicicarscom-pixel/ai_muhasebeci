'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function ApprovedPage({ documents = [] }: { documents: any[] }) {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    const channel = supabase.channel('realtime-approved-docs')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'finance_documents' }, () => {
        router.refresh();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [router]);

  const formatNum = (val: any) => {
    if (val === null || val === undefined || val === '') return '';
    let numStr = String(val).trim();
    if (numStr.includes(',') && !numStr.includes('.')) numStr = numStr.replace(',', '.');
    else if (numStr.includes(',') && numStr.includes('.')) numStr = numStr.replace(/\./g, '').replace(',', '.');
    const num = parseFloat(numStr);
    if (isNaN(num)) return String(val);
    return num.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const parseTaxDetails = (doc: any) => {
    if (!doc.tax_details) return {};
    try {
      const details = typeof doc.tax_details === 'string' ? JSON.parse(doc.tax_details) : { ...doc.tax_details };
      const numFields = ['ozel_matrah', 'kdv_1', 'kdv_8', 'kdv_10', 'kdv_18', 'kdv_20', 'matrah_1', 'matrah_8', 'matrah_10', 'matrah_18', 'matrah_20', 'total'];
      numFields.forEach(field => {
        if (details[field] !== undefined && details[field] !== '') {
          details[field] = formatNum(details[field]);
        }
      });
      return details;
    } catch (e) { return {}; }
  };

  // Filter documents
  const filteredDocuments = documents.filter(doc => {
    const td = parseTaxDetails(doc);
    const orgName = (doc.organizations?.name || 'Bilinmeyen Mükellef').toLowerCase();
    
    const matchesSearch = orgName.includes(searchQuery.toLowerCase());
    
    let matchesDate = true;
    if (monthFilter) {
      const [year, month] = monthFilter.split('-');
      if (td.date) {
        const parts = td.date.split('.');
        if (parts.length === 3) {
          matchesDate = parts[1] === month && parts[2] === year;
        }
      } else if (doc.created_at) {
        const d = new Date(doc.created_at);
        matchesDate = d.getFullYear() === parseInt(year) && (d.getMonth() + 1).toString().padStart(2, '0') === month;
      }
    }
    
    return matchesSearch && matchesDate;
  });

  // Group by organization
  const groupedDocs = filteredDocuments.reduce((acc, doc) => {
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



  const handleExportCSV = (orgName: string, docs: any[]) => {
    // A-R sütunları - muhasebecinin Excel formatıyla birebir
    const headers = [
      'A-Fatura Tarihi',
      'B-Fatura Numarası',
      'C-Fatura Türü',
      'D-VKN TCKN',
      'E-Açıklama',
      'F-Tevkifat Oranı',
      'G-Özel Matrah',
      'H-%1 KDV Tutarı',
      'I-%8 KDV Tutarı',
      'J-%10 KDV Tutarı',
      'K-%18 KDV Tutarı',
      'L-%20 KDV Tutarı',
      'M-%1 Matrah',
      'N-%8 Matrah',
      'O-%10 Matrah',
      'P-%18 Matrah',
      'Q-%20 Matrah',
      'R-Toplam'
    ];
    const rows = docs.map(doc => {
      const td = parseTaxDetails(doc);
      return [
        td.date || (doc.created_at ? new Date(doc.created_at).toLocaleDateString('tr-TR') : ''),
        td.invoice_number || '',
        td.type || (doc.type === 'expense' ? 'ALIŞ' : doc.type === 'sales' ? 'SATIŞ' : ''),
        td.vendor_tax_id || '',
        `"${(td.title || doc.title || '').replace(/"/g, '""')}"`,
        td.tevkifat_orani || '',
        td.ozel_matrah || '',
        td.kdv_1 || '',
        td.kdv_8 || '',
        td.kdv_10 || '',
        td.kdv_18 || '',
        td.kdv_20 || '',
        td.matrah_1 || '',
        td.matrah_8 || '',
        td.matrah_10 || '',
        td.matrah_18 || '',
        td.matrah_20 || '',
        td.total || (doc.amount_minor != null ? (doc.amount_minor / 100).toFixed(2) : '')
      ].join(';');
    });
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(';'), ...rows].join('\n');
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `${orgName.replace(/\s+/g, '_')}_faturalar.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportExcel = (orgName: string, docs: any[]) => {
    // A-R sütunları - muhasebecinin Excel formatıyla birebir (tab ayrımlı)
    const headers = [
      'Fatura Tarihi',
      'Fatura Numarası',
      'Fatura Türü',
      'VKN TCKN',
      'Açıklama',
      'Tevkifat Oranı',
      'Özel Matrah',
      '%1 KDV',
      '%8 KDV',
      '%10 KDV',
      '%18 KDV',
      '%20 KDV',
      '%1 Matrah',
      '%8 Matrah',
      '%10 Matrah',
      '%18 Matrah',
      '%20 Matrah',
      'Toplam'
    ];
    const rowsHtml = docs.map(doc => {
      const td = parseTaxDetails(doc);
      return `<tr>
        <td>${td.date || (doc.created_at ? new Date(doc.created_at).toLocaleDateString('tr-TR') : '')}</td>
        <td>${td.invoice_number || ''}</td>
        <td>${td.type || (doc.type === 'expense' ? 'ALIŞ' : doc.type === 'sales' ? 'SATIŞ' : '')}</td>
        <td>${td.vendor_tax_id || ''}</td>
        <td>${td.title || doc.title || ''}</td>
        <td>${td.tevkifat_orani || ''}</td>
        <td>${td.ozel_matrah || ''}</td>
        <td>${td.kdv_1 || ''}</td>
        <td>${td.kdv_8 || ''}</td>
        <td>${td.kdv_10 || ''}</td>
        <td>${td.kdv_18 || ''}</td>
        <td>${td.kdv_20 || ''}</td>
        <td>${td.matrah_1 || ''}</td>
        <td>${td.matrah_8 || ''}</td>
        <td>${td.matrah_10 || ''}</td>
        <td>${td.matrah_18 || ''}</td>
        <td>${td.matrah_20 || ''}</td>
        <td>${td.total || (doc.amount_minor != null ? (doc.amount_minor / 100).toFixed(2) : '')}</td>
      </tr>`;
    }).join('');

    const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="utf-8" /></head>
      <body>
        <table border="1">
          <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </body>
    </html>`;

    const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${orgName.replace(/\s+/g, '_')}_faturalar.xls`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportXML = (orgName: string, docs: any[]) => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<Faturalar>\n';
    docs.forEach(doc => {
      const td = parseTaxDetails(doc);
      xml += '  <Fatura>\n';
      xml += `    <Tarih>${td.date || (doc.created_at ? new Date(doc.created_at).toLocaleDateString('tr-TR') : '')}</Tarih>\n`;
      xml += `    <FaturaNo>${td.invoice_number || ''}</FaturaNo>\n`;
      xml += `    <FaturaTuru>${td.type || (doc.type === 'expense' ? 'ALIŞ' : doc.type === 'sales' ? 'SATIŞ' : '')}</FaturaTuru>\n`;
      xml += `    <VKN>${td.vendor_tax_id || ''}</VKN>\n`;
      xml += `    <Aciklama>${(td.title || doc.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</Aciklama>\n`;
      xml += `    <TevkifatOrani>${td.tevkifat_orani || ''}</TevkifatOrani>\n`;
      xml += `    <OzelMatrah>${td.ozel_matrah || ''}</OzelMatrah>\n`;
      xml += `    <KDV1>${td.kdv_1 || ''}</KDV1>\n`;
      xml += `    <KDV8>${td.kdv_8 || ''}</KDV8>\n`;
      xml += `    <KDV10>${td.kdv_10 || ''}</KDV10>\n`;
      xml += `    <KDV18>${td.kdv_18 || ''}</KDV18>\n`;
      xml += `    <KDV20>${td.kdv_20 || ''}</KDV20>\n`;
      xml += `    <Matrah1>${td.matrah_1 || ''}</Matrah1>\n`;
      xml += `    <Matrah8>${td.matrah_8 || ''}</Matrah8>\n`;
      xml += `    <Matrah10>${td.matrah_10 || ''}</Matrah10>\n`;
      xml += `    <Matrah18>${td.matrah_18 || ''}</Matrah18>\n`;
      xml += `    <Matrah20>${td.matrah_20 || ''}</Matrah20>\n`;
      xml += `    <Toplam>${td.total || (doc.amount_minor != null ? (doc.amount_minor / 100).toFixed(2) : '')}</Toplam>\n`;
      xml += '  </Fatura>\n';
    });
    xml += '</Faturalar>';
    
    const blob = new Blob([xml], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${orgName.replace(/\s+/g, '_')}_faturalar.xml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportPDF = (orgName: string, docs: any[]) => {
    const headers = ['Fatura Tarihi', 'Fatura Numarası', 'Fatura Türü', 'VKN TCKN', 'Açıklama', 'Toplam'];
    const rows = docs.map(doc => {
      const td = parseTaxDetails(doc);
      return [
        td.date || '',
        td.invoice_number || '',
        td.type || '',
        td.vendor_tax_id || '',
        td.title || doc.title || '',
        td.total || (doc.amount_minor != null ? (doc.amount_minor / 100).toFixed(2) : '')
      ];
    });

    const html = `
      <html>
        <head>
          <title>${orgName} - Faturalar</title>
          <style>
            body { font-family: sans-serif; padding: 20px; }
            h2 { text-align: center; color: #333; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; font-size: 12px; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h2>${orgName} - Fatura Listesi</h2>
          <table>
            <thead>
              <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `;
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(html);
      win.document.close();
    } else {
      alert("Lütfen PDF yazdırmak için açılır pencere (pop-up) engelleyicisini kapatın.");
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
            <h1 className="text-[20px] font-bold text-white tracking-tight">Onaylananlar & Dışa Aktarım</h1>
            <p className="text-[13px] text-text-muted mt-0.5">
              Onaylanmış evrakları görüntüleyin ve Excel, CSV olarak dışa aktarın.
            </p>
          </div>
          <div className="ml-auto">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[12px] font-bold">
              {documents.length} Evrak
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-6xl mx-auto space-y-4">
          
          {/* Filters */}
          <div className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm">
            <div className="flex-1 flex items-center gap-2 bg-[#0E1116] border border-border rounded-lg px-3 py-2 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-text-muted text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="Mükellef adına göre ara..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm text-text placeholder:text-text-muted w-full"
              />
            </div>
            <div className="flex items-center gap-2 bg-[#0E1116] border border-border rounded-lg px-3 py-2 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-text-muted text-[20px]">calendar_month</span>
              <input 
                type="month" 
                value={monthFilter}
                onChange={(e) => setMonthFilter(e.target.value)}
                className="bg-transparent border-none outline-none text-sm text-text placeholder:text-text-muted [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[0.6]"
              />
            </div>
            {(searchQuery || monthFilter) && (
              <button 
                onClick={() => { setSearchQuery(''); setMonthFilter(''); }}
                className="text-[13px] text-text-muted hover:text-white px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
              >
                Temizle
              </button>
            )}
          </div>
          
          {Object.entries(groupedDocs).length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-text-muted">
              <span className="material-symbols-outlined text-[48px] mb-4 opacity-50">inventory_2</span>
              <p className="font-medium">Henüz onaylanmış evrak bulunmuyor.</p>
              <p className="text-[13px] mt-1">Onay Merkezi'nden evrakları onayladığınızda burada görünecektir.</p>
            </div>
          ) : (
            Object.entries(groupedDocs).map(([orgId, group]: [string, any]) => {
              const isExpanded = expandedGroups.includes(orgId);
              const orgName = group.organization?.name || 'Bilinmeyen Mükellef';
              const totalAmount = group.documents.reduce((sum: number, doc: any) => {
                return sum + (doc.amount_minor != null ? doc.amount_minor / 100 : 0);
              }, 0);
              
              return (
                <div key={orgId} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                  {/* Accordion Header */}
                  <div 
                    className="flex items-center justify-between p-5 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => toggleGroup(orgId)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg border border-primary/30">
                        {orgName ? orgName.charAt(0).toUpperCase() : '?'}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base flex items-center gap-2">
                          {orgName}
                          <span className="px-2 py-0.5 rounded-full bg-white/10 text-text-muted text-[11px] font-medium border border-white/5">
                            {group.documents.length} Evrak
                          </span>
                        </h3>
                        <p className="text-[12px] text-text-muted mt-0.5">
                          Toplam: <span className="text-white font-mono font-semibold">{formatCurrency(totalAmount, 'TRY')}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                      {/* Export Buttons */}
                      <div className="flex items-center gap-2 mr-4">
                        <button 
                          onClick={() => handleExportExcel(orgName, group.documents)} 
                          className="h-8 px-3 rounded-md bg-[#107C41]/10 text-[#107C41] border border-[#107C41]/20 hover:bg-[#107C41]/20 text-[12px] font-bold flex items-center gap-1.5 transition-colors">
                          <span className="material-symbols-outlined text-[16px]">table_view</span> Excel
                        </button>
                        <button 
                          onClick={() => handleExportCSV(orgName, group.documents)} 
                          className="h-8 px-3 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 text-[12px] font-bold flex items-center gap-1.5 transition-colors">
                          <span className="material-symbols-outlined text-[16px]">data_object</span> CSV
                        </button>
                        <button 
                          onClick={() => handleExportXML(orgName, group.documents)} 
                          className="h-8 px-3 rounded-md bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20 hover:bg-[#D97706]/20 text-[12px] font-bold flex items-center gap-1.5 transition-colors">
                          <span className="material-symbols-outlined text-[16px]">code</span> XML
                        </button>
                        <button 
                          onClick={() => handleExportPDF(orgName, group.documents)} 
                          className="h-8 px-3 rounded-md bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 hover:bg-[#EF4444]/20 text-[12px] font-bold flex items-center gap-1.5 transition-colors">
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
                                <th className="px-5 py-3 font-medium">VKN/TCKN</th>
                                <th className="px-5 py-3 font-medium text-right">Tutar</th>
                                <th className="px-5 py-3 font-medium text-center">Durum</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                              {group.documents.map((doc: any) => {
                                const td = parseTaxDetails(doc);
                                const invoiceNo = td.invoice_number || doc.invoice_number || '-';
                                const date = td.date || doc.issue_date || (doc.created_at ? new Date(doc.created_at).toLocaleDateString('tr-TR') : '-');
                                const name = td.title || doc.title || doc.counterparty_name || '-';
                                const taxId = td.vendor_tax_id || doc.vendor_tax_identifier || '-';
                                const amount = doc.amount_minor != null ? doc.amount_minor / 100 : 0;
                                const isSales = doc.type === 'sales';
                                return (
                                  <tr key={doc.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-5 py-3 text-white font-medium font-mono text-[12px]">{invoiceNo}</td>
                                    <td className="px-5 py-3 text-text-muted">{date}</td>
                                    <td className="px-5 py-3">
                                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isSales ? 'bg-success/20 text-success' : 'bg-[#9D5CFF]/20 text-[#9D5CFF]'}`}>
                                        {isSales ? 'SATIŞ' : 'GİDER'}
                                      </span>
                                    </td>
                                    <td className="px-5 py-3 text-text-muted truncate max-w-[200px]" title={name}>{name}</td>
                                    <td className="px-5 py-3 text-text-muted font-mono text-[12px]">{taxId}</td>
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
