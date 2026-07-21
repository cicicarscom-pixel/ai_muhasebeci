import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

interface PreviewData {
  mukellef_adi: string;
  kesen_firma: string;
  fatura_tipi: string;
  fatura_tutari: number;
}

interface InvoicePreviewCardProps {
  invoiceId: string;
  previewData: PreviewData;
  onLocked?: () => void;
}

export default function InvoicePreviewCard({ invoiceId, previewData, onLocked }: InvoicePreviewCardProps) {
  const [isLocking, setIsLocking] = useState(false);
  const [locked, setLocked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLock = async () => {
    setIsLocking(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error: updateError } = await supabase
        .from('invoices')
        .update({ status: 'locked' })
        .eq('id', invoiceId);

      if (updateError) throw updateError;
      
      setLocked(true);
      if (onLocked) onLocked();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLocking(false);
    }
  };

  return (
    <div className="bg-[#1A1D24] border border-white/10 rounded-xl overflow-hidden max-w-sm w-full shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9D5CFF]/20 to-[#00DAF3]/20 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00DAF3] text-[18px]">receipt_long</span>
          Fatura Önizleme
        </h3>
        {locked && (
          <span className="text-[10px] font-bold uppercase bg-[#00ff7f]/20 text-[#00ff7f] px-2 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">lock</span>
            Kilitli
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Mükellef</p>
            <p className="font-medium text-white truncate" title={previewData.mukellef_adi}>
              {previewData.mukellef_adi || '-'}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Tip</p>
            <p className="font-medium text-white">
              {previewData.fatura_tipi || '-'}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Kesen Firma</p>
            <p className="font-medium text-white truncate" title={previewData.kesen_firma}>
              {previewData.kesen_firma || '-'}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-text-muted">Fatura Tutarı</span>
          <span className="text-lg font-bold text-[#00DAF3]">
            {typeof previewData.fatura_tutari === 'number' 
              ? new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(previewData.fatura_tutari)
              : previewData.fatura_tutari || '0,00 ₺'}
          </span>
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="p-3 bg-[#12151C] border-t border-white/5">
        {error && (
          <div className="mb-2 text-[10px] text-red-400 bg-red-400/10 p-2 rounded">
            Hata: {error}
          </div>
        )}
        <button
          onClick={handleLock}
          disabled={locked || isLocking}
          className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex justify-center items-center gap-2 ${
            locked
              ? 'bg-white/5 text-white/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#9D5CFF] to-[#00DAF3] hover:opacity-90 text-white shadow-md'
          }`}
        >
          {isLocking ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : locked ? (
            <>
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Onaylandı ve Kilitlendi
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[16px]">lock_person</span>
              Onayla ve Kilitle
            </>
          )}
        </button>
      </div>
    </div>
  );
}
