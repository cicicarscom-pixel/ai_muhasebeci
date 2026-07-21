import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

interface MappingRule {
  source_field: string;
  target_column: string;
}

interface SchemaData {
  detected_columns: string[];
  mapping_rules: MappingRule[];
  analyzer_instructions: string;
}

interface SchemaApprovalCardProps {
  schemaData: SchemaData;
  onSaved?: () => void;
}

export default function SchemaApprovalCard({ schemaData, onSaved }: SchemaApprovalCardProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error: insertError } = await supabase
        .from('invoice_schemas')
        .insert({
          schema_rules: schemaData.mapping_rules
        });

      if (insertError) throw insertError;
      
      setSaved(true);
      if (onSaved) onSaved();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-[#1A1D24] border border-white/10 rounded-xl overflow-hidden w-full max-w-2xl shadow-lg my-4">
      <div className="bg-gradient-to-r from-[#9D5CFF]/20 to-[#00DAF3]/20 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00DAF3] text-[18px]">account_tree</span>
          Kolon Eşleştirme Şeması (Mimar AI)
        </h3>
        {saved && (
          <span className="text-[10px] font-bold uppercase bg-[#00ff7f]/20 text-[#00ff7f] px-2 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">check_circle</span>
            Kaydedildi
          </span>
        )}
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h4 className="text-xs text-text-muted uppercase tracking-wider mb-2 font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">view_column</span>
            Tespit Edilen Kolonlar ({schemaData.detected_columns?.length || 0})
          </h4>
          <div className="flex flex-wrap gap-2">
            {schemaData.detected_columns?.map((col, idx) => (
              <span key={idx} className="bg-[#090B10] border border-white/10 text-xs px-2 py-1 rounded-md text-white">
                {col}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-4">
          <h4 className="text-xs text-text-muted uppercase tracking-wider mb-2 font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">route</span>
            Eşleştirme Kuralları
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#090B10] text-text-muted uppercase">
                <tr>
                  <th className="px-3 py-2 rounded-tl-md">Fatura Bilgisi (Kaynak)</th>
                  <th className="px-3 py-2 w-8 text-center"></th>
                  <th className="px-3 py-2 rounded-tr-md">Ekran Kolonu (Hedef)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {schemaData.mapping_rules?.map((rule, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-2 text-white font-medium">{rule.source_field}</td>
                    <td className="px-3 py-2 text-center text-text-muted">
                      <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
                    </td>
                    <td className="px-3 py-2 text-[#00DAF3] font-medium">{rule.target_column}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="p-3 bg-[#12151C] border-t border-white/5">
        {error && (
          <div className="mb-3 text-xs text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
            Hata: {error}
          </div>
        )}
        
        {saved ? (
          <div className="text-center p-3 bg-[#00ff7f]/10 border border-[#00ff7f]/20 rounded-lg text-sm text-[#00ff7f] flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[24px]">task_alt</span>
            <p className="font-bold">✅ Şema başarıyla kaydedildi.</p>
            <p className="text-xs opacity-80">Artık bu şablona uygun faturaları eşleştirmeye başlayabilirsiniz.</p>
          </div>
        ) : (
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full py-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex justify-center items-center gap-2 bg-gradient-to-r from-[#9D5CFF] to-[#00DAF3] hover:opacity-90 text-white shadow-md"
          >
            {isSaving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span className="material-symbols-outlined text-[16px]">save</span>
                Bu Eşleştirmeyi Onayla ve Kaydet
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
