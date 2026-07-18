import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../ui/Buttons';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  taxpayerName: string;
  documentCount: number;
  onExport: (format: string, autoArchive: boolean) => void;
}

export function ExportModal({ isOpen, onClose, taxpayerName, documentCount, onExport }: ExportModalProps) {
  const [format, setFormat] = useState('excel');
  const [autoArchive, setAutoArchive] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleExport = () => {
    setIsExporting(true);
    // Simulate export process
    setTimeout(() => {
      setIsExporting(false);
      onExport(format, autoArchive);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-surface border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl relative animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-primary text-2xl">file_download</span>
            <h2 className="text-xl font-bold text-text">Dışa Aktar</h2>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Info */}
        <div className="bg-[#1A1D24] rounded-lg p-4 mb-6 border border-white/5">
          <p className="text-sm text-text-muted mb-1">Seçili Mükellef</p>
          <p className="text-base font-bold text-white truncate">{taxpayerName}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs font-bold bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full border border-brand-primary/20">
              {documentCount} Evrak
            </span>
            <span className="text-xs text-text-muted">şemaya uygun hazırlandı.</span>
          </div>
        </div>

        {/* Format Selection */}
        <div className="space-y-3 mb-6">
          <label className="text-sm font-bold text-text-muted uppercase tracking-wider">Format Seçimi</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'excel', label: 'Excel', icon: 'table_view' },
              { id: 'csv', label: 'CSV', icon: 'data_object' },
              { id: 'xml', label: 'XML', icon: 'code' },
              { id: 'pdf', label: 'PDF', icon: 'picture_as_pdf' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFormat(f.id)}
                className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${
                  format === f.id 
                    ? 'border-brand-primary bg-brand-primary/5 text-white' 
                    : 'border-white/10 text-text-muted hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                <span className="font-medium">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Archive Option */}
        <div className="mb-8">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
              autoArchive ? 'bg-brand-primary border-brand-primary text-[#090B10]' : 'border-white/20 bg-transparent group-hover:border-white/40'
            }`}>
              {autoArchive && <span className="material-symbols-outlined text-[14px] font-bold">check</span>}
            </div>
            <span className="text-sm text-white font-medium select-none">
              Aktarım sonrası evrakları otomatik arşivle
            </span>
          </label>
          <input 
            type="checkbox" 
            className="hidden" 
            checked={autoArchive} 
            onChange={(e) => setAutoArchive(e.target.checked)} 
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <SecondaryButton onClick={onClose} className="flex-1">İptal</SecondaryButton>
          <PrimaryButton onClick={handleExport} disabled={isExporting} className="flex-1 flex justify-center items-center gap-2">
            {isExporting ? (
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">download</span>
                Dışa Aktar
              </>
            )}
          </PrimaryButton>
        </div>

      </div>
    </div>
  );
}
