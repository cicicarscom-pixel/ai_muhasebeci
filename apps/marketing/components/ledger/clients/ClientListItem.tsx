"use client";

import { Client, ClientConnectionStatus } from "@/modules/clients/application/get-clients.action";
import { User, Phone, CheckCircle2, Clock, Mail, AlertTriangle, AlertCircle, Send } from "lucide-react";

interface ClientListItemProps {
  client: Client;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const getStatusBadge = (status: ClientConnectionStatus) => {
  switch (status) {
    case "connected":
      return (
        <div className="flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[10px] text-green-400">
          <CheckCircle2 className="h-3 w-3" />
          Aktif
        </div>
      );
    case "invited":
      return (
        <div className="flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-400">
          <Send className="h-3 w-3" />
          Davet Gönderildi
        </div>
      );
    case "activation_pending":
      return (
        <div className="flex items-center gap-1 rounded-full border border-orange-500/20 bg-orange-500/10 px-2 py-0.5 text-[10px] text-orange-400">
          <Clock className="h-3 w-3" />
          Aktivasyon Bekliyor
        </div>
      );
    case "waiting_reply":
      return (
        <div className="flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 py-0.5 text-[10px] text-yellow-400">
          <AlertCircle className="h-3 w-3" />
          Yanıt Bekleniyor
        </div>
      );
    case "inactive":
      return (
        <div className="flex items-center gap-1 rounded-full border border-gray-500/20 bg-gray-500/10 px-2 py-0.5 text-[10px] text-gray-400">
          <Clock className="h-3 w-3" />
          Pasif
        </div>
      );
    case "invite_failed":
      return (
        <div className="flex items-center gap-1 rounded-full border border-red-500/20 bg-red-500/10 px-2 py-0.5 text-[10px] text-red-400">
          <AlertTriangle className="h-3 w-3" />
          Davet Başarısız
        </div>
      );
  }
};

export function ClientListItem({ client, isSelected, onSelect }: ClientListItemProps) {
  return (
    <div
      onClick={() => onSelect(client.id)}
      className={`group cursor-pointer rounded-xl border p-1 transition-all duration-200 ${
        isSelected
          ? "border-cyan-500/35 bg-white/[0.04] shadow-[inset_0_0_20px_rgba(0,218,243,0.05)]"
          : "border-white/5 bg-[#161B22] hover:border-white/10 hover:bg-white/[0.02]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-sm font-bold text-indigo-300 border border-indigo-500/20">
            {client.initials}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{client.companyName}</h3>
            <p className="text-[11px] text-[#8B949E]">VKN: {client.taxNumber}</p>
          </div>
        </div>
        {getStatusBadge(client.connectionStatus)}
      </div>

      <div className="mt-1 grid grid-cols-2 gap-y-2 text-[11px] text-[#8B949E]">
        <div className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5" />
          <span className="truncate">{client.contactName}</span>
        </div>
        <div className="flex items-center gap-1.5 justify-end">
          <Phone className="h-3.5 w-3.5" />
          <span>{client.phone}</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3 text-[11px]">
        <span className="text-[#8B949E]">
          {client.connectionStatus === "connected" ? "Son giriş:" : "Son iletişim:"}{" "}
          <span className="text-gray-300">
            {client.connectionStatus === "connected" ? client.lastLogin : client.lastContact}
          </span>
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[#8B949E]">Sorumlu:</span>
          <span className="text-gray-300">{client.assignedAccountant}</span>
        </div>
      </div>
    </div>
  );
}
