"use client";

import { motion } from "framer-motion";
import { Bot, Minus, Pin, Send, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface LedgerAIChatPanelProps {
  contextLabel: string;
  onClose: () => void;
}

export function LedgerAIChatPanel({ contextLabel, onClose }: LedgerAIChatPanelProps) {
  const [messages, setMessages] = useState<{ id: string; role: "ai" | "user"; text: string }[]>([
    {
      id: "1",
      role: "ai",
      text: "Merhaba, ben Ledger AI. Şu anda " + contextLabel + " ekranındayız. Size nasıl yardımcı olabilirim?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", text: inputValue },
      { id: (Date.now() + 1).toString(), role: "ai", text: "Bu bir simülasyon yanıtıdır. İsteğiniz Ledger AI sistemine kaydedildi." },
    ]);
    setInputValue("");
  };

  return (
    <motion.section
      key="panel"
      initial={{ opacity: 0, y: 18, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 18, scale: 0.92 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="flex h-[36rem] w-[25rem] flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#12151C]/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
    >
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#9D5CFF]">
            <Bot className="h-5 w-5 text-white" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Ledger AI</p>
            <p className="text-xs text-[#3FB950]">● Çevrimiçi</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="rounded-lg p-2 text-[#8B949E] transition hover:bg-white/5 hover:text-white" aria-label="Sohbeti sabitle">
            <Pin className="h-4 w-4" />
          </button>
          <button onClick={onClose} className="rounded-lg p-2 text-[#8B949E] transition hover:bg-white/5 hover:text-white" aria-label="Sohbeti küçült">
            <Minus className="h-4 w-4" />
          </button>
          <button onClick={onClose} className="rounded-lg p-2 text-[#8B949E] transition hover:bg-white/5 hover:text-white" aria-label="Sohbeti kapat">
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="border-b border-white/5 px-4 py-2">
        <span className="inline-flex rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1 text-[11px] text-[#00DAF3]">
          Bağlam: {contextLabel}
        </span>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[85%] rounded-2xl p-3 text-sm ${
              msg.role === "ai"
                ? "rounded-tl-md border border-white/5 bg-white/[0.04] text-[#D7DEE7]"
                : "ml-auto rounded-tr-md bg-gradient-to-r from-[#3B82F6] to-[#9D5CFF] text-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-white/5 px-4 py-3">
        {["Özetle", "Durumu kontrol et", "Takip oluştur"].map((command) => (
          <button
            key={command}
            onClick={() => setInputValue(command)}
            className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-[#8B949E] transition hover:border-cyan-400/20 hover:text-white"
          >
            {command}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/5 p-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ledger AI’a sorun..."
          className="min-w-0 flex-1 rounded-xl border border-white/5 bg-white/[0.035] px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#65707D] focus:border-cyan-400/30 transition-colors"
        />
        <button
          type="submit"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#9D5CFF] text-white transition hover:brightness-110"
          aria-label="Mesaj gönder"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </motion.section>
  );
}
