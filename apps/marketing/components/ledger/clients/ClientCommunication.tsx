"use client";

import { Client } from "@/data/mock/clients";
import { CheckCircle2, FileText, Send, Phone, MessageSquare, AlertCircle } from "lucide-react";

interface ClientCommunicationProps {
  client: Client;
}

export function ClientCommunication({ client }: ClientCommunicationProps) {
  // Mock timeline events
  const events = [
    {
      id: 1,
      type: "ai_message",
      title: "Ledger AI Hatırlatma Gönderdi",
      description: "Mayıs ayı KDV evrakları için WhatsApp üzerinden otomatik hatırlatma yapıldı.",
      date: "Bugün, 10:30",
      status: "success",
      icon: MessageSquare,
      color: "text-[#00DAF3]",
      bg: "bg-[#00DAF3]/10",
    },
    {
      id: 2,
      type: "client_action",
      title: "Mükellef Evrak Yükledi",
      description: "Sisteme 12 adet fatura yüklendi. OCR taraması devam ediyor.",
      date: "Dün, 15:45",
      status: "pending",
      icon: FileText,
      color: "text-[#9D5CFF]",
      bg: "bg-[#9D5CFF]/10",
    },
    {
      id: 3,
      type: "advisor_note",
      title: "Sekreter / Müşavir Notu",
      description: "Mükellef arandı, eksik evrakları yarın getireceğini iletti.",
      date: "25 Mayıs, 11:20",
      status: "info",
      icon: Phone,
      color: "text-[#E3B341]",
      bg: "bg-[#E3B341]/10",
    },
    {
      id: 4,
      type: "system",
      title: "Geçici Vergi Beyannamesi Onaylandı",
      description: "1. Dönem geçici vergi beyannamesi GİB üzerinden onaylandı.",
      date: "14 Mayıs, 16:00",
      status: "success",
      icon: CheckCircle2,
      color: "text-[#3FB950]",
      bg: "bg-[#3FB950]/10",
    }
  ];

  return (
    <div className="flex h-full flex-col animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">İş Akışı / Sekreter Timeline</h3>
        <button className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/10 border border-white/5">
          + Yeni Aksiyon
        </button>
      </div>

      <div className="relative flex-1 pl-2 space-y-6 before:absolute before:left-[21px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
        {events.map((event) => {
          const Icon = event.icon;
          return (
            <div key={event.id} className="relative flex gap-1 items-start">
              <div className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${event.bg} border border-white/5 shadow-lg`}>
                <Icon className={`h-3.5 w-3.5 ${event.color}`} />
              </div>
              
              <div className="flex flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-1 flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[13px] font-semibold text-white">{event.title}</h4>
                  <span className="text-[11px] text-[#8B949E]">{event.date}</span>
                </div>
                <p className="text-[12px] text-[#8B949E] leading-relaxed">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
