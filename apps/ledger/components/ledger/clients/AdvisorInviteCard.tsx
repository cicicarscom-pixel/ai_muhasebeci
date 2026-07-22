"use client";

import { useState } from "react";
import { Copy, QrCode, Link as LinkIcon, Send, Filter, Plus } from "lucide-react";
import { AddClientDialog } from "./AddClientDialog";

interface AdvisorInviteCardProps {
  advisorCode: string;
}

export function AdvisorInviteCard({ advisorCode }: AdvisorInviteCardProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="flex h-[110px] items-center justify-between rounded-[16px] border border-cyan-400/20 bg-[#161B22] p-6 shadow-[0_0_20px_rgba(0,218,243,0.05)]">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[#8B949E]">
          Müşavir Bağlantı Kodunuz
        </span>
        <div className="mt-1 flex items-center gap-3">
          <span className="text-2xl font-bold tracking-wider text-white">
            {advisorCode}
          </span>
          <button
            className="flex h-2 w-2 items-center justify-center rounded-lg bg-white/5 text-[#8B949E] transition hover:bg-white/10 hover:text-white"
            title="Kopyala"
          >
            <Copy className="h-1 w-1" />
          </button>
        </div>
        <p className="mt-1 text-xs text-[#8B949E]">
          Bu kodu mevcut Flow kullanıcılarıyla paylaşabilirsiniz.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 border-r border-white/10 pr-6">
          <button className="flex flex-col items-center gap-1.5 text-[#8B949E] transition hover:text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/5">
              <QrCode className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-medium">QR Kod</span>
          </button>

          <button className="flex flex-col items-center gap-1.5 text-[#8B949E] transition hover:text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/5">
              <LinkIcon className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-medium">Davet Linki</span>
          </button>

          <button className="flex flex-col items-center gap-1.5 text-[#00DAF3] transition hover:brightness-125">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-400/20">
              <Send className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-medium">WhatsApp Gönder</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-[#12151C] px-1 text-sm font-medium text-white transition hover:bg-white/5">
            <Filter className="h-1 w-1" />
            Filtrele
          </button>

          <button
            onClick={() => setIsAddDialogOpen(true)}
            className="flex h-10 items-center gap-2 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#9D5CFF] px-1 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <Plus className="h-1 w-1" />
            Mükellef Ekle
          </button>
        </div>
      </div>
      
      {isAddDialogOpen && <AddClientDialog onClose={() => setIsAddDialogOpen(false)} />}
    </div>
  );
}
