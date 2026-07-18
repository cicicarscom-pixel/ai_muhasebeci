"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PrimaryButton } from "../../../components/ledger/ui/Buttons";

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isApprovalRequest?: boolean;
}

export default function LedgerAiSettingsPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg_1",
      role: 'assistant',
      content: "Merhaba! Ben Ledger AI. Şu anda faturaları okurken 'Fatura Tarihi', 'VKN', 'Unvan', 'Matrah' ve 'KDV' alanlarını çıkarıyorum. Bu kurallara veya çıkardığım alanlara yeni bir şey eklemek ister misiniz?"
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Live Test State
  const [file, setFile] = useState<File | null>(null);
  const [testLoading, setTestLoading] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, showAdvanced]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI reasoning and response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: "Şu kolonu eklemek istediğinizi anlıyorum: 'Ödeme Yöntemi'. Bu değişikliği şemaya (v2) uygulayıp, bundan sonraki evraklarda kullanmaya başlayayım mı?",
          isApprovalRequest: true
        }
      ]);
    }, 1500);
  };

  const handleApproveChange = (msgId: string) => {
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, isApprovalRequest: false, content: m.content + "\n\n✅ Şema güncellendi (v2 kilitlendi)." } : m));
  };

  const handleRejectChange = (msgId: string) => {
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, isApprovalRequest: false, content: m.content + "\n\n❌ İptal edildi. Eski şema ile devam ediyorum." } : m));
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleRunTest = async () => {
    if (!file) return;
    setTestLoading(true);
    setTestResult(null);
    try {
      const base64 = await fileToBase64(file);
      // Fallback Supabase URL per the project constraints
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://127.0.0.1:54321';
      const response = await fetch(`${supabaseUrl}/functions/v1/process-document`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'test',
          mimeType: file.type || 'image/jpeg',
          fileBase64: base64
        })
      });

      if (!response.ok) {
        throw new Error(`Analiz başarısız: ${response.statusText}`);
      }

      const { extractedData } = await response.json();
      setTestResult(extractedData || { message: "Sonuç bulunamadı." });
    } catch (error: any) {
      console.error(error);
      setTestResult({ error: error.message || "Analiz sırasında bir hata oluştu." });
    } finally {
      setTestLoading(false);
    }
  };

  return (
    <div className="bg-[#12151C] text-text h-screen w-full flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center w-full px-6 z-50 bg-[#161B22]/90 backdrop-blur-md top-0 sticky h-[64px] border-b border-white/5 shadow-lg">
        <div className="flex items-center gap-1">
          <Link href="/ledger/dashboard" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-fast">
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

      {/* Main Content - Split View Grid */}
      <main className="flex-1 overflow-hidden p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full w-full max-w-7xl mx-auto">
          
          {/* Left Column: Chat Assistant */}
          <div className="flex flex-col bg-[#161B22] border border-white/5 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="p-4 border-b border-white/5 bg-[#1A1D24] flex justify-between items-center">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#9D5CFF]">forum</span>
                AI Asistan
              </h2>
              <button 
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-xs text-text-muted hover:text-[#00DAF3] transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">{showAdvanced ? 'expand_less' : 'expand_more'}</span>
                Gelişmiş Ayarlar
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
                    {/* Glow effect for assistant messages */}
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
                    
                    {msg.isApprovalRequest && (
                      <div className="mt-4 flex gap-3 border-t border-white/10 pt-4 relative z-10">
                        <button 
                          onClick={() => handleRejectChange(msg.id)}
                          className="flex-1 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-bold transition-colors"
                        >
                          İptal Et
                        </button>
                        <button 
                          onClick={() => handleApproveChange(msg.id)}
                          className="flex-1 py-2 rounded-lg bg-brand-primary text-[#090B10] hover:bg-brand-primary/90 text-xs font-bold transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                        >
                          Onayla ve Uygula
                        </button>
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

              {/* Advanced JSON Editor (Hidden by default) */}
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
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Örn: Yemek faturalarında bahşiş tutarını ayrı kolon yap..."
                  className="w-full bg-[#12151C] border border-white/10 focus:border-[#00DAF3]/50 rounded-xl py-3 pl-4 pr-12 text-white outline-none transition-colors text-sm shadow-inner"
                />
                <button 
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 p-1.5 bg-[#00DAF3]/10 text-[#00DAF3] hover:bg-[#00DAF3]/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Test */}
          <div className="flex flex-col bg-[#161B22] border border-white/5 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-[#1A1D24]">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00DAF3]">science</span>
                Canlı Test
              </h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <p className="text-sm text-text-muted">
                Ayarladığınız şema ve kuralların doğru çalışıp çalışmadığını test etmek için örnek bir fatura (PDF, JPG, PNG) yükleyin.
              </p>

              {/* Upload Area */}
              <label className="border-2 border-dashed border-white/10 hover:border-[#00DAF3]/50 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all bg-[#12151C]/50 relative group">
                <input type="file" accept="image/*,application/pdf" className="hidden" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
                }} />
                <div className="w-12 h-12 rounded-full bg-[#00DAF3]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px] text-[#00DAF3]">
                    {file ? 'file_present' : 'cloud_upload'}
                  </span>
                </div>
                <p className="text-white text-sm font-medium mb-1 text-center">
                  {file ? file.name : 'Fatura Yükle veya Sürükle'}
                </p>
                <p className="text-xs text-text-muted text-center">
                  Max 5MB (JPG, PNG, PDF)
                </p>
              </label>

              <button 
                onClick={handleRunTest}
                disabled={!file || testLoading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00DAF3] to-[#9D5CFF] hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,218,243,0.2)]"
              >
                {testLoading ? (
                  <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                ) : (
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                )}
                {testLoading ? 'Analiz Ediliyor...' : 'Yükle ve Test Et'}
              </button>

              {/* Result Area */}
              {testResult && (
                <div className="mt-6 animate-fade-in">
                  <h3 className="text-xs font-bold text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00ff7f] text-[16px]">check_circle</span>
                    JSON Çıktısı
                  </h3>
                  <div className="bg-[#090B10] border border-white/5 rounded-xl p-4 overflow-x-auto shadow-inner relative">
                    <pre className="text-xs text-[#00DAF3] font-mono whitespace-pre-wrap">
                      {JSON.stringify(testResult, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

