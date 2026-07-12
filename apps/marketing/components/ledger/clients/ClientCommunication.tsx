"use client";

import { Client } from "@/data/mock/clients";
import { aiMessages } from "@/data/mock/aiMessages";
import { Bot, User, ShieldAlert, CheckCircle2, Send, Clock } from "lucide-react";
import { useMemo } from "react";

interface ClientCommunicationProps {
  client: Client;
}

export function ClientCommunication({ client }: ClientCommunicationProps) {
  const messages = useMemo(() => {
    return aiMessages.filter((msg) => msg.clientId === client.id);
  }, [client.id]);

  return (
    <div className="flex h-full flex-col animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex-1 space-y-6">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/10">
                {msg.sender === "Ledger AI" ? (
                  <Bot className="h-4 w-4 text-[#00DAF3]" />
                ) : msg.sender === "Client" ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <ShieldAlert className="h-4 w-4 text-[#8B949E]" />
                )}
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-white">{msg.sender}</span>
                  <span className="text-[11px] text-[#8B949E]">• {msg.timestamp}</span>
                </div>
                
                <div className={`mt-1.5 rounded-2xl p-3 text-sm ${
                  msg.sender === "Ledger AI" 
                    ? "bg-[#00DAF3]/10 text-[#D7DEE7] border border-[#00DAF3]/20 rounded-tl-sm"
                    : msg.sender === "Client"
                    ? "bg-white/[0.04] text-white border border-white/5 rounded-tr-sm"
                    : "bg-transparent p-0 text-[#8B949E] italic"
                }`}>
                  {msg.content}
                </div>
                
                {msg.result && (
                  <div className="mt-2 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#3FB950]" />
                    <span className="text-[11px] font-medium text-[#3FB950]">
                      İletişim sonucu: {msg.result}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-32 flex-col items-center justify-center text-center text-[#8B949E]">
            <Bot className="mb-2 h-8 w-8 opacity-50" />
            <p className="text-sm">Ledger AI ile iletişim geçmişi bulunmuyor.</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-6">
        <button className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-white/10">
          <Send className="h-4 w-4" />
          Mesaj Gönder
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-white/5">
          <User className="h-4 w-4" />
          Görüşmeyi Devral
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-white/5">
          <Clock className="h-4 w-4" />
          Takip Tarihi Oluştur
        </button>
      </div>
    </div>
  );
}
