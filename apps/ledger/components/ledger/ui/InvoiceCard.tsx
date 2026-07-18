import React from "react";

export interface InvoiceCardProps {
  id: string;
  vendorName: string;
  taxpayerName: string;
  type: string; // 'invoice' | 'receipt' | 'income' | 'expense'
  amountMinor: number;
  currencyCode: string;
  date: string;
  isActive: boolean;
  confidenceScore?: number;
  onSelect: () => void;
  onDelete: () => void;
}

export function InvoiceCard({
  vendorName,
  taxpayerName,
  type,
  amountMinor,
  currencyCode,
  date,
  isActive,
  confidenceScore = 98,
  onSelect,
  onDelete
}: InvoiceCardProps) {
  const formatCurrency = (amount: number, curr: string) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: curr || 'TRY' }).format(amount / 100);
  };

  const isExpense = type === 'expense' || type === 'invoice' || type === 'receipt';
  const typeLabel = isExpense ? 'GİDER' : 'GELİR';
  const typeColor = isExpense ? 'text-[#b600f8] bg-[#b600f8]/10 border-[#b600f8]/20' : 'text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/20';
  
  return (
    <div 
      onClick={onSelect}
      className={`group flex flex-col gap-2 p-4 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
      isActive 
        ? 'border-brand-primary bg-brand-primary/5 shadow-[0_0_15px_rgba(0,229,255,0.1)]' 
        : 'border-white/10 hover:border-white/20 bg-[#1A1D24]/80 hover:bg-[#2A2D34]'
    } border`}
    >
      {/* Sahiplik Etiketi (Ownership Tag) */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted bg-white/5 px-2 py-0.5 rounded-sm border border-white/5 truncate max-w-[70%]">
          {taxpayerName || 'Bilinmeyen Mükellef'}
        </span>
        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${typeColor}`}>
          {typeLabel}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center font-bold text-lg ${isActive ? 'bg-brand-primary text-[#090B10]' : 'bg-[#353436] text-white border border-white/10'}`}>
          {vendorName ? vendorName.charAt(0).toUpperCase() : '?'}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-sm truncate" title={vendorName}>{vendorName || 'Okunamadı'}</h3>
          <div className="flex items-center gap-1 mt-0.5 text-text-muted text-[11px] font-medium">
            <span className="material-symbols-outlined text-[12px]">calendar_today</span>
            {date || 'Tarih Yok'}
          </div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="text-text-muted hover:text-red-400 p-1.5 transition-colors rounded-lg hover:bg-red-500/10 opacity-0 group-hover:opacity-100 absolute right-2 top-10"
          title="Sil"
        >
          <span className="material-symbols-outlined text-[16px]">delete</span>
        </button>
      </div>

      <div className="flex items-end justify-between mt-1">
        <span className="text-white font-mono text-base font-bold tracking-tight">
          {formatCurrency(amountMinor || 0, currencyCode)}
        </span>
        <span className="text-brand-primary text-[10px] font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
          %{confidenceScore} AI
        </span>
      </div>
    </div>
  );
}
