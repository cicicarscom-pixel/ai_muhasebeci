"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import SchemaApprovalCard from '@/components/SchemaApprovalCard';

export default function LedgerAiSettingsPage() {
  const [invoiceAttachment, setInvoiceAttachment] = useState<File | null>(null);
  const [uiAttachment, setUiAttachment] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [schemaResult, setSchemaResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const invoiceInputRef = useRef<HTMLInputElement>(null);
  const uiInputRef = useRef<HTMLInputElement>(null);

  const uploadToStorage = async (file: File): Promise<string> => {
    const supabase = createClient();
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { error: uploadError } = await supabase.storage.from('invoices').upload(filePath, file);
    if (uploadError) {
      throw new Error("Storage Upload Error: " + uploadError.message);
    }

    const { data } = supabase.storage.from('invoices').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleExtractSchema = async () => {
    if (!invoiceAttachment || !uiAttachment) {
      setErrorMsg("Lütfen hem örnek faturayı hem de muhasebe ekranını yükleyin.");
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setSchemaResult(null);

    try {
      const invoiceUrl = await uploadToStorage(invoiceAttachment);
      const mimeTypeInvoice = invoiceAttachment.type;
      
      const uiUrl = await uploadToStorage(uiAttachment);
      const mimeTypeUi = uiAttachment.type;

      const supabase = createClient();

      const { data, error } = await supabase.functions.invoke('ledger_mimar_google_api', {
        body: {
          invoiceBase64: invoiceUrl, 
          invoiceMimeType: mimeTypeInvoice || 'image/jpeg',
          uiScreenshotBase64: uiUrl,
          uiScreenshotMimeType: mimeTypeUi || 'image/jpeg'
        }
      });

      if (error) throw new Error(error.message);
      if (data && data.error) throw new Error(data.error);
      
      setSchemaResult(data);
    } catch (err: any) {
      console.error("Schema Extraction Error:", err);
      setErrorMsg(`İşlem başarısız oldu: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#12151C] text-text min-h-screen w-full flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center w-full px-6 z-50 bg-[#161B22]/90 backdrop-blur-md top-0 sticky h-[64px] border-b border-white/5 shadow-lg">
        <div className="flex items-center gap-1">
          <Link href="/dashboard" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-fast">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-semibold text-sm">Geri</span>
          </Link>
          <div className="h-6 w-[1px] bg-white/10 mx-4"></div>
          <h1 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00DAF3] text-[20px]">auto_awesome</span>
            Yapay Zeka Ayarları (Ledger AI)
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-text-muted bg-[#12151C] px-3 py-1 rounded-full border border-white/5">
            Aktif Şema: <span className="text-[#00DAF3]">v2</span>
          </span>
        </div>
      </header>

      {/* Main Content - Dual Dropzones */}
      <main className="flex-1 overflow-y-auto p-8 flex flex-col items-center">
        <div className="w-full max-w-5xl space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Fatura & Ekran Eşleştirme</h2>
            <p className="text-sm text-text-muted">Muhasebe programınızın arayüzünü ve örnek bir faturayı yükleyin, yapay zeka sizin için doğru kolonları eşleştirsin.</p>
          </div>

          {errorMsg && (
            <div className="bg-red-500/10 text-red-400 p-4 rounded-xl border border-red-500/20 text-sm text-center">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1: Invoice */}
            <div 
              className="bg-[#161B22] border-2 border-dashed border-white/10 hover:border-[#00DAF3]/50 transition-colors rounded-2xl p-8 flex flex-col items-center justify-center min-h-[250px] cursor-pointer"
              onClick={() => invoiceInputRef.current?.click()}
            >
              <input 
                type="file" 
                ref={invoiceInputRef} 
                className="hidden" 
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) setInvoiceAttachment(e.target.files[0]);
                }} 
              />
              <span className="material-symbols-outlined text-4xl text-[#00DAF3] mb-4">receipt</span>
              <h3 className="text-white font-bold mb-2">Örnek Fatura Yükle</h3>
              {invoiceAttachment ? (
                <p className="text-[#00DAF3] text-sm text-center font-medium break-all px-4">{invoiceAttachment.name}</p>
              ) : (
                <p className="text-text-muted text-xs text-center px-4">Tıklayın veya dosyanızı buraya sürükleyin</p>
              )}
            </div>

            {/* Box 2: UI Screenshot */}
            <div 
              className="bg-[#161B22] border-2 border-dashed border-white/10 hover:border-[#9D5CFF]/50 transition-colors rounded-2xl p-8 flex flex-col items-center justify-center min-h-[250px] cursor-pointer"
              onClick={() => uiInputRef.current?.click()}
            >
              <input 
                type="file" 
                ref={uiInputRef} 
                className="hidden" 
                accept=".jpg,.jpeg,.png"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) setUiAttachment(e.target.files[0]);
                }} 
              />
              <span className="material-symbols-outlined text-4xl text-[#9D5CFF] mb-4">desktop_windows</span>
              <h3 className="text-white font-bold mb-2">Muhasebe Ekranı Yükle</h3>
              {uiAttachment ? (
                <p className="text-[#9D5CFF] text-sm text-center font-medium break-all px-4">{uiAttachment.name}</p>
              ) : (
                <p className="text-text-muted text-xs text-center px-4">Tıklayın veya muhasebe programınızın boş ekran görüntüsünü sürükleyin</p>
              )}
            </div>

          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleExtractSchema}
              disabled={isLoading || !invoiceAttachment || !uiAttachment}
              className="bg-gradient-to-r from-[#00DAF3] to-[#9D5CFF] text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  Analiz Ediliyor...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                  Şemayı Çıkar
                </>
              )}
            </button>
          </div>

          {/* Result Area */}
          {schemaResult && (
            <div className="mt-12 animate-fade-in w-full flex justify-center">
              <div className="w-full max-w-3xl">
                <SchemaApprovalCard 
                  schemaData={schemaResult} 
                />
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
