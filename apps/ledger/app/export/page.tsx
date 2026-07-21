"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';

interface Taxpayer {
  id: string;
  name: string;
}

interface Invoice {
  id: string;
  taxpayer_id: string;
  status: string;
  preview_data: any;
  mapped_data: any;
  created_at: string;
}

export default function ExportArchivePage() {
  const [taxpayers, setTaxpayers] = useState<Taxpayer[]>([]);
  const [selectedTaxpayer, setSelectedTaxpayer] = useState<string | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    fetchTaxpayers();
  }, []);

  useEffect(() => {
    if (selectedTaxpayer) {
      fetchLockedInvoices(selectedTaxpayer);
    } else {
      setInvoices([]);
    }
  }, [selectedTaxpayer]);

  const fetchTaxpayers = async () => {
    setIsLoading(true);
    const supabase = createClient();
    const { data, error } = await supabase.from('taxpayers').select('*').order('name');
    if (!error && data) {
      setTaxpayers(data);
      if (data.length > 0) {
        setSelectedTaxpayer(data[0].id);
      }
    }
    setIsLoading(false);
  };

  const fetchLockedInvoices = async (taxpayerId: string) => {
    setIsLoading(true);
    const supabase = createClient();
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('taxpayer_id', taxpayerId)
      .eq('status', 'locked')
      .order('created_at', { ascending: false });
      
    if (!error && data) {
      setInvoices(data);
    }
    setIsLoading(false);
  };

  const handleExport = async () => {
    if (invoices.length === 0 || !selectedTaxpayer) return;
    setIsExporting(true);

    try {
      // 1. Gather all dynamic data
      const exportData = invoices.map(inv => ({
        invoice_id: inv.id,
        created_at: inv.created_at,
        ...inv.preview_data,
        ...inv.mapped_data
      }));

      // 2. Generate JSON file
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `export_${selectedTaxpayer}_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // 3. Mark as exported in Supabase
      const invoiceIds = invoices.map(i => i.id);
      const supabase = createClient();
      await supabase
        .from('invoices')
        .update({ status: 'exported' })
        .in('id', invoiceIds);

      // 4. Refresh list
      fetchLockedInvoices(selectedTaxpayer);
    } catch (error) {
      console.error("Export error:", error);
      alert("Dışa aktarım sırasında bir hata oluştu.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="bg-[#12151C] text-text min-h-screen w-full flex flex-col antialiased">
      <header className="flex justify-between items-center w-full px-6 z-50 bg-[#161B22]/90 backdrop-blur-md top-0 sticky h-[64px] border-b border-white/5 shadow-lg">
        <div className="flex items-center gap-1">
          <Link href="/dashboard" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-fast">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-semibold text-sm">Geri</span>
          </Link>
          <div className="h-6 w-[1px] bg-white/10 mx-4"></div>
          <h1 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#9D5CFF] text-[20px]">archive</span>
            Onaylananlar ve Dışa Aktarım
          </h1>
        </div>
      </header>

      <main className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-4xl space-y-6">
          
          <div className="bg-[#161B22] border border-white/5 rounded-2xl shadow-xl overflow-hidden p-6">
            <h2 className="text-lg font-bold text-white mb-4">Mükellef Seçimi</h2>
            {isLoading && taxpayers.length === 0 ? (
              <p className="text-sm text-text-muted">Yükleniyor...</p>
            ) : (
              <select
                value={selectedTaxpayer || ''}
                onChange={(e) => setSelectedTaxpayer(e.target.value)}
                className="w-full bg-[#090B10] border border-white/10 focus:border-[#00DAF3]/50 rounded-xl py-3 px-4 text-white outline-none text-sm"
              >
                {taxpayers.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            )}
          </div>

          <div className="bg-[#161B22] border border-white/5 rounded-2xl shadow-xl overflow-hidden p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00DAF3]">task_alt</span>
                Onaylanmış Faturalar
                <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-full ml-2">
                  {invoices.length}
                </span>
              </h2>
              <button
                onClick={handleExport}
                disabled={invoices.length === 0 || isExporting}
                className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                  invoices.length === 0
                    ? 'bg-white/5 text-white/30 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#9D5CFF] to-[#00DAF3] text-white hover:opacity-90 shadow-md'
                }`}
              >
                {isExporting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Tümünü Dışa Aktar (JSON)
                  </>
                )}
              </button>
            </div>

            {isLoading && invoices.length === 0 ? (
              <div className="flex justify-center p-8">
                <div className="w-8 h-8 border-2 border-[#00DAF3]/30 border-t-[#00DAF3] rounded-full animate-spin" />
              </div>
            ) : invoices.length === 0 ? (
              <div className="text-center p-8 border border-dashed border-white/10 rounded-xl">
                <p className="text-text-muted text-sm">Bu mükellefe ait kilitlenmiş fatura bulunamadı.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {invoices.map((inv) => (
                  <div key={inv.id} className="bg-[#090B10] border border-white/5 p-4 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="text-xs text-text-muted uppercase mb-1">{inv.preview_data?.fatura_tipi || 'Fatura'}</p>
                      <p className="text-sm font-bold text-white">{inv.preview_data?.kesen_firma || 'Bilinmiyor'}</p>
                      <p className="text-xs text-text-muted mt-1">{new Date(inv.created_at).toLocaleDateString('tr-TR')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[#00DAF3]">
                        {inv.preview_data?.fatura_tutari 
                          ? new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(inv.preview_data.fatura_tutari)
                          : '0,00 ₺'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
