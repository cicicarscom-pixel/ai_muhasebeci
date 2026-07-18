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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

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

  return (
    <div className="bg-surface text-text h-full w-full flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center w-full px-6 z-50 bg-card/80 backdrop-blur-md top-0 sticky h-[64px] border-b border-border">
        <div className="flex items-center gap-1">
          <Link href="/ledger/dashboard" className="flex items-center gap-2 text-text-muted hover:text-text transition-colors duration-fast">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-semibold text-body">Geri</span>
          </Link>
          <div className="h-6 w-[1px] bg-border mx-2"></div>
          <h1 className="text-body font-bold text-text flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-primary text-[20px]">auto_awesome</span>
            Yapay Zeka Ayarları (Ledger AI)
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-label font-bold text-text-muted">Aktif Şema: <span className="text-brand-primary">v1</span></span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center overflow-hidden p-6">
        <div className="w-full max-w-3xl flex flex-col bg-card border border-border rounded-2xl shadow-xl overflow-hidden relative">
          
          {/* Chat History */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.role === 'user' 
                    ? 'bg-brand-primary text-[#090B10] rounded-tr-sm' 
                    : 'bg-[#1A1D24] text-white border border-white/10 rounded-tl-sm'
                }`}>
                  <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="material-symbols-outlined text-[16px]">
                      {msg.role === 'user' ? 'person' : 'smart_toy'}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {msg.role === 'user' ? 'Mali Müşavir' : 'Ledger AI'}
                    </span>
                  </div>
                  <p className="text-[14px] leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  
                  {msg.isApprovalRequest && (
                    <div className="mt-4 flex gap-3 border-t border-white/10 pt-4">
                      <button 
                        onClick={() => handleRejectChange(msg.id)}
                        className="flex-1 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 text-sm font-bold transition-colors"
                      >
                        İptal Et
                      </button>
                      <button 
                        onClick={() => handleApproveChange(msg.id)}
                        className="flex-1 py-2 rounded-lg bg-brand-primary text-[#090B10] hover:bg-brand-primary/90 text-sm font-bold transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]"
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
                <div className="bg-[#1A1D24] border border-white/10 rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-surface border-t border-border">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Örn: Yemek faturalarında bahşiş tutarını da ayrı bir kolon olarak ekle..."
                className="w-full bg-[#1A1D24] border border-white/10 focus:border-brand-primary rounded-xl py-4 pl-4 pr-14 text-white outline-none transition-colors text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="absolute right-2 p-2 bg-brand-primary text-[#090B10] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-primary/90 transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
