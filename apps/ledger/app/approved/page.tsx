"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExportModal } from "../../components/ledger/export/ExportModal";

// Mock Data for Approved Documents
const MOCK_APPROVED_DOCS = [
  {
    id: "doc-1",
    taxpayerName: "Ahmet Yılmaz (WG-12345)",
    vendorName: "Migros Ticaret A.Ş.",
    type: "Gider",
    amount: "1.250,00 ₺",
    date: "12 Eki 2026",
    status: "approved"
  },
  {
    id: "doc-2",
    taxpayerName: "Ahmet Yılmaz (WG-12345)",
    vendorName: "Shell Petrol",
    type: "Gider",
    amount: "850,00 ₺",
    date: "15 Eki 2026",
    status: "approved"
  },
  {
    id: "doc-3",
    taxpayerName: "Zeynep Kaya Tasarım (WG-98765)",
    vendorName: "Apple Store",
    type: "Gider",
    amount: "45.999,00 ₺",
    date: "18 Eki 2026",
    status: "approved"
  }
];

export default function ApprovedPage() {
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [selectedTaxpayer, setSelectedTaxpayer] = useState("");
  const [documents, setDocuments] = useState(MOCK_APPROVED_DOCS);

  // Group documents by taxpayer
  const groupedDocs = documents.reduce((acc, doc) => {
    if (!acc[doc.taxpayerName]) acc[doc.taxpayerName] = [];
    acc[doc.taxpayerName].push(doc);
    return acc;
  }, {} as Record<string, typeof MOCK_APPROVED_DOCS>);

  const handleOpenExport = (taxpayer: string) => {
    setSelectedTaxpayer(taxpayer);
    setExportModalOpen(true);
  };

  const handleExportComplete = (format: string, autoArchive: boolean) => {
    setExportModalOpen(false);
    
    // Create a mock export record and optionally archive
    if (autoArchive) {
      // Remove the documents for the selected taxpayer from the screen (Inbox Zero)
      setDocuments(prev => prev.filter(doc => doc.taxpayerName !== selectedTaxpayer));
      alert(`Belgeler başarıyla ${format.toUpperCase()} olarak dışa aktarıldı ve Arşivlendi!`);
    } else {
      alert(`Belgeler başarıyla ${format.toUpperCase()} olarak dışa aktarıldı.`);
    }
  };

  return (
    <div className="bg-surface text-text h-full w-full flex flex-col antialiased">
      {/* Top Navigation */}
      <header className="flex justify-between items-center w-full px-6 z-50 bg-card/80 backdrop-blur-md top-0 sticky h-[64px] border-b border-border">
        <div className="flex items-center gap-1">
          <Link href="/ledger/dashboard" className="flex items-center gap-2 text-text-muted hover:text-text transition-colors duration-fast">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-semibold text-body">Geri</span>
          </Link>
          <div className="h-6 w-[1px] bg-border mx-2"></div>
          <h1 className="text-body font-bold text-text flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00ff7f] text-[20px]">check_circle</span>
            Onaylanan Evraklar (Dışa Aktarıma Hazır)
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {Object.keys(groupedDocs).length === 0 ? (
            <div className="text-center py-20 bg-card border border-border rounded-2xl">
              <span className="material-symbols-outlined text-6xl text-text-muted opacity-50 mb-4">inventory_2</span>
              <h3 className="text-xl font-bold text-white mb-2">Onaylanmış Evrak Yok</h3>
              <p className="text-text-muted">Şu an için dışa aktarılmayı bekleyen onaylı evrak bulunmuyor. Inbox Zero!</p>
            </div>
          ) : (
            Object.entries(groupedDocs).map(([taxpayer, docs]) => (
              <div key={taxpayer} className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg animate-fade-in">
                {/* Accordion Header */}
                <div className="bg-[#1A1D24] px-6 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                      <span className="material-symbols-outlined text-brand-primary text-[20px]">storefront</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{taxpayer}</h3>
                      <p className="text-text-muted text-sm">{docs.length} adet onaylanmış evrak bekliyor</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleOpenExport(taxpayer)}
                    className="bg-brand-primary text-[#090B10] font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-brand-primary/90 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Dışa Aktar
                  </button>
                </div>

                {/* Document List */}
                <div className="p-2">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="px-4 py-3 text-xs font-bold text-text-muted uppercase tracking-wider w-[40px]"></th>
                        <th className="px-4 py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Unvan / Açıklama</th>
                        <th className="px-4 py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Tarih</th>
                        <th className="px-4 py-3 text-xs font-bold text-text-muted uppercase tracking-wider text-right">Tutar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {docs.map((doc, idx) => (
                        <tr key={doc.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                          <td className="px-4 py-3 text-text-muted text-sm">{idx + 1}</td>
                          <td className="px-4 py-3">
                            <span className="text-white font-medium block">{doc.vendorName}</span>
                            <span className="text-[10px] text-text-muted uppercase border border-white/10 rounded-sm px-1.5 mt-1 inline-block bg-[#1A1D24]">{doc.type}</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-text-muted">{doc.date}</td>
                          <td className="px-4 py-3 text-right text-white font-bold font-mono">{doc.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}

        </div>
      </main>

      <ExportModal 
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        taxpayerName={selectedTaxpayer}
        documentCount={selectedTaxpayer ? groupedDocs[selectedTaxpayer]?.length : 0}
        onExport={handleExportComplete}
      />
    </div>
  );
}
