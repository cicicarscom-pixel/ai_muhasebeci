"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isApprovalRequest?: boolean;
  invoiceData?: any;
}

export default function LedgerAiSettingsPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg_1",
      role: 'assistant',
      content: "Merhaba! Fatura onay ekranınızı, alışkın olduğunuz muhasebe programına (Zirve, Logo, Excel vb.) göre sadece 1 dakikada yapılandıralım.\n\nLütfen bu sohbete şu iki dosyayı yükleyin:\n1. Sisteme işlediğiniz örnek bir fatura.\n2. Bu faturayı kaydettiğiniz programın, fatura kaydedilmiş (doldurulmuş) haldeki ekran görüntüsü.\n\nİkisini yüklediğiniz anda eşleştirmeyi yapıp çalışma ekranınızı hazırlayacağım. 🚀"
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [invoiceAttachment, setInvoiceAttachment] = useState<File | null>(null);
  const [uiAttachment, setUiAttachment] = useState<File | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const invoiceInputRef = useRef<HTMLInputElement>(null);
  const uiInputRef = useRef<HTMLInputElement>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, showAdvanced]);

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

  const handleSend = async () => {
    if (!inputValue.trim() && !invoiceAttachment && !uiAttachment) return;

    let content = inputValue;
    let invoiceUrl = null;
    let mimeTypeInvoice = null;
    let uiUrl = null;
    let mimeTypeUi = null;

    setIsTyping(true); // Start typing early since upload takes time

    try {
      if (invoiceAttachment) {
        invoiceUrl = await uploadToStorage(invoiceAttachment);
        mimeTypeInvoice = invoiceAttachment.type;
        content = `[Fatura: ${invoiceAttachment.name}]\n${content}`;
      }
      
      if (uiAttachment) {
        uiUrl = await uploadToStorage(uiAttachment);
        mimeTypeUi = uiAttachment.type;
        content = `[Ekran Görüntüsü: ${uiAttachment.name}]\n${content}`;
      }

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: content.trim()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue("");
      setInvoiceAttachment(null);
      setUiAttachment(null);

      const supabase = createClient();
      let assistantContent = "";
      let parsedInvoiceData = null;

      if (invoiceUrl && uiUrl) {
        // İki görsel de yüklendiyse Şema Oluşturucu (generate-schema) çalışır
        const { data, error } = await supabase.functions.invoke('ledger-generate-schema', {
          body: {
            invoiceUrl: invoiceUrl,
            invoiceMimeType: mimeTypeInvoice || 'image/jpeg',
            uiScreenshotUrl: uiUrl,
            uiScreenshotMimeType: mimeTypeUi || 'image/jpeg'
          }
        });

        if (error) throw new Error(error.message);
        if (data && data.error) throw new Error(data.error);
        
        parsedInvoiceData = null;
        assistantContent = data.text || "Harika! Muhasebe ekranınızı faturanızla eşleştirdim ve size özel dinamik şemayı oluşturdum. Aşağıdan inceleyebilirsiniz.";
      } else if (invoiceUrl) {
        // Sadece fatura yüklendiyse process-document çalışır
        const { data, error } = await supabase.functions.invoke('ledger-process-document', {
          body: {
            mode: 'test',
            mimeType: mimeTypeInvoice || 'image/jpeg',
            imageUrl: invoiceUrl
          }
        });

        if (error) throw new Error(error.message);
        if (data && data.error) throw new Error(data.error);
        if (data && data.success === false) throw new Error(data.error || "Bilinmeyen analiz hatası");
        
        parsedInvoiceData = data.extractedData;
        assistantContent = "Yüklediğiniz belgeyi mevcut şemaya göre analiz ettim. Çıktı formatını veya kuralları değiştirmek isterseniz ekran görüntüsü yükleyebilirsiniz.";
      } else {
        // Sadece sohbet ediliyorsa ledger-ai-chat'e git
        const { data, error } = await supabase.functions.invoke('ledger-ai-chat', {
          body: {
            prompt: content.trim(),
            mode: 'playground',
            customInstruction: "Sen uzman bir Workigom Mali Müşavir Asistanısın. Kullanıcıya ASLA kod, JSON veya teknik terim gösterme. Yaptığın işlemleri, muhasebeciye veya mükellefe açıklıyormuş gibi, doğal dilde, kibar ve profesyonel bir üslupla teyit et."
          }
        });

        if (error) throw new Error(error.message);
        if (data && data.error) throw new Error(data.error);
        assistantContent = data.text || "Üzgünüm, şu an yanıt oluşturamıyorum.";
      }

      setMessages(prev => [
        ...prev, 
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: assistantContent,
          invoiceData: parsedInvoiceData
        }
      ]);
    } catch (err: any) {
      console.error("RAW ERROR:", err);
      setMessages(prev => [
        ...prev, 
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: `[DEV ERROR] İşlem başarısız oldu. Gelen Ham Hata: ${err.message}`
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    if (e.clipboardData.files.length > 0) {
      setInvoiceAttachment(e.clipboardData.files[0]);
    }
  };

  const renderInvoiceTable = (testResult: any) => {
    console.log("AI Response Data:", testResult);
    if (!testResult) return null;
    if (testResult.error) {
      return (
        <div className="mt-4 bg-red-500/10 text-red-400 p-4 rounded-xl border border-red-500/20 text-xs">
          {testResult.error}
        </div>
      );
    }

    return (
      <div className="mt-4 bg-[#090B10] border border-white/5 rounded-xl overflow-hidden shadow-inner flex flex-col w-full">
        <div className="bg-[#1A1D24] px-4 py-2 border-b border-white/5 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00ff7f] text-[16px]">check_circle</span>
          <span className="text-xs font-bold text-white">Analiz Sonucu</span>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 border-b border-white/5">
          <div>
            <span className="text-[10px] text-text-muted uppercase tracking-wider">Tedarikçi</span>
            <p className="text-sm text-white font-semibold">{testResult.vendor_name || '-'}</p>
            <p className="text-xs text-text-muted">{testResult.vendor_tax_identifier || '-'}</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-text-muted uppercase tracking-wider">Tarih & Fatura No</span>
            <p className="text-sm text-white font-semibold">{testResult.issue_date || '-'}</p>
            <p className="text-xs text-text-muted">{testResult.invoice_number || '-'}</p>
          </div>
        </div>
        
        {(testResult.line_items && testResult.line_items.length > 0) || testResult.columns ? (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs text-text-muted">
              <thead className="bg-white/5 text-[10px] uppercase">
                <tr>
                  {testResult.columns ? (
                    testResult.columns.map((col: any, idx: number) => (
                      <th key={idx} className="px-4 py-2 font-medium">{col.name}</th>
                    ))
                  ) : testResult.line_items && testResult.line_items.length > 0 ? (
                    Object.keys(testResult.line_items[0]).map((key, idx) => (
                      <th key={idx} className="px-4 py-2 font-medium">{key}</th>
                    ))
                  ) : null}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {testResult.line_items ? (
                  testResult.line_items.map((item: any, rowIdx: number) => (
                    <tr key={rowIdx} className="hover:bg-white/5 transition-colors">
                      {testResult.columns ? (
                        testResult.columns.map((col: any, colIdx: number) => (
                          <td key={colIdx} className="px-4 py-3 text-white">
                            {item[col.name] || item[col.mapped_from] || '-'}
                          </td>
                        ))
                      ) : (
                        Object.values(item).map((val: any, valIdx: number) => (
                          <td key={valIdx} className="px-4 py-3 text-white">
                            {typeof val === 'object' ? JSON.stringify(val) : String(val)}
                          </td>
                        ))
                      )}
                    </tr>
                  ))
                ) : testResult.columns ? (
                  <tr className="hover:bg-white/5 transition-colors">
                    {testResult.columns.map((col: any, colIdx: number) => (
                      <td key={colIdx} className="px-4 py-3 text-text-muted italic text-[10px]">
                        Eşleşme: {col.mapped_from}
                      </td>
                    ))}
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        ) : null}

        <div className="bg-[#12151C] p-4 flex justify-end">
          <div className="w-56 space-y-2">
            <div className="flex justify-between text-xs text-text-muted">
              <span>Net Tutar:</span>
              <span>{testResult.net_amount || 0}</span>
            </div>
            <div className="flex justify-between text-xs text-text-muted">
              <span>KDV Tutarı:</span>
              <span>{testResult.tax_amount || 0}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-white border-t border-white/10 pt-2">
              <span>Genel Toplam:</span>
              <span>{testResult.total_amount || 0}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#12151C] text-text h-screen w-full flex flex-col antialiased">
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

      {/* Main Content - Single Centered Chat Interface */}
      <main className="flex-1 overflow-hidden p-6 flex justify-center">
        <div className="flex flex-col w-full max-w-4xl bg-[#161B22] border border-white/5 rounded-2xl shadow-xl overflow-hidden relative">
          
          <div className="p-4 border-b border-white/5 bg-[#1A1D24] flex justify-between items-center">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#9D5CFF]">forum</span>
              Ledger AI Asistan
            </h2>
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs text-text-muted hover:text-[#00DAF3] transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">{showAdvanced ? 'expand_less' : 'expand_more'}</span>
              Şema Kuralları
            </button>
          </div>

          {/* Chat History */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 shadow-md ${
                  msg.role === 'user' 
                    ? 'bg-brand-primary text-[#090B10] rounded-tr-sm' 
                    : 'bg-[#1A1D24] text-white border border-white/5 rounded-tl-sm relative'
                }`}>
                  {msg.role === 'assistant' && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9D5CFF]/10 to-[#00DAF3]/10 pointer-events-none"></div>
                  )}
                  <div className="flex items-center gap-2 mb-2 opacity-80 relative z-10">
                    <span className="material-symbols-outlined text-[16px]">
                      {msg.role === 'user' ? 'person' : 'smart_toy'}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {msg.role === 'user' ? 'Mali Müşavir' : 'Ledger AI'}
                    </span>
                  </div>
                  
                  <p className="text-[14px] leading-relaxed whitespace-pre-wrap relative z-10">{msg.content}</p>
                  
                  {/* Inline visual table rendering if invoiceData is attached */}
                  {msg.invoiceData && (
                    <div className="relative z-10">
                      {renderInvoiceTable(msg.invoiceData)}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1A1D24] border border-white/5 rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center">
                  <div className="w-2 h-2 bg-[#00DAF3] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#00DAF3] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-[#00DAF3] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}

            {/* Advanced JSON Editor */}
            {showAdvanced && (
              <div className="mt-8 p-4 bg-[#12151C] border border-white/10 rounded-xl">
                <h3 className="text-xs font-bold text-text-muted mb-2 uppercase tracking-wider">Manuel JSON Şeması Düzenle</h3>
                <textarea 
                  className="w-full h-40 bg-[#090B10] text-[#00DAF3] border border-white/5 rounded-lg p-3 text-xs font-mono outline-none focus:border-[#00DAF3]/50 transition-colors"
                  defaultValue={'{\n  "vendor_name": "string",\n  "total_amount": "number"\n}'}
                ></textarea>
                <button className="mt-3 w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-bold transition-colors">Şemayı Kaydet</button>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-[#1A1D24] border-t border-white/5">
            <div className="flex gap-2 mb-3">
              {invoiceAttachment && (
                <div className="flex items-center gap-2 bg-[#12151C] border border-[#00DAF3]/30 w-fit px-3 py-1.5 rounded-lg animate-fade-in">
                  <span className="material-symbols-outlined text-[16px] text-[#00DAF3]">receipt</span>
                  <span className="text-xs text-[#00DAF3] font-medium truncate max-w-[150px]">{invoiceAttachment.name}</span>
                  <button onClick={() => setInvoiceAttachment(null)} className="text-[#00DAF3] hover:text-red-400 ml-1 transition-colors">
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </div>
              )}
              {uiAttachment && (
                <div className="flex items-center gap-2 bg-[#12151C] border border-[#9D5CFF]/30 w-fit px-3 py-1.5 rounded-lg animate-fade-in">
                  <span className="material-symbols-outlined text-[16px] text-[#9D5CFF]">desktop_windows</span>
                  <span className="text-xs text-[#9D5CFF] font-medium truncate max-w-[150px]">{uiAttachment.name}</span>
                  <button onClick={() => setUiAttachment(null)} className="text-[#9D5CFF] hover:text-red-400 ml-1 transition-colors">
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </div>
              )}
            </div>
            
            <div className="relative flex items-center gap-2">
              <input 
                type="file" 
                ref={invoiceInputRef} 
                className="hidden" 
                accept=".jpg,.jpeg,.png,.pdf,.xml,.xlsx,.xls"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) setInvoiceAttachment(e.target.files[0]);
                }} 
              />
              <input 
                type="file" 
                ref={uiInputRef} 
                className="hidden" 
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) setUiAttachment(e.target.files[0]);
                }} 
              />
              <button 
                onClick={() => invoiceInputRef.current?.click()}
                className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-text-muted hover:text-[#00DAF3] transition-colors flex shrink-0 items-center gap-1 group"
                title="Fatura Yükle"
              >
                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">receipt</span>
              </button>
              <button 
                onClick={() => uiInputRef.current?.click()}
                className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-text-muted hover:text-[#9D5CFF] transition-colors flex shrink-0 items-center gap-1 group"
                title="Muhasebe Ekranı Yükle"
              >
                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">desktop_windows</span>
              </button>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                onPaste={handlePaste}
                placeholder="Örn: Yemek faturalarında bahşiş tutarını ayrı kolon yap veya faturanı buraya yapıştır..."
                className="w-full bg-[#12151C] border border-white/10 focus:border-[#00DAF3]/50 rounded-xl py-3 pl-4 pr-12 text-white outline-none transition-colors text-sm shadow-inner"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() && !invoiceAttachment && !uiAttachment}
                className="absolute right-2 p-1.5 bg-[#00DAF3]/10 text-[#00DAF3] hover:bg-[#00DAF3]/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors z-10"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
