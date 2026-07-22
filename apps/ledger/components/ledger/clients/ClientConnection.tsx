"use client";

import { Client } from "@/modules/clients/application/get-clients.action";
import { InviteStatusTimeline } from "./InviteStatusTimeline";
import { Link2, Smartphone, KeyRound, CheckCircle2, AlertCircle } from "lucide-react";
import { cancelInvitationAction } from "@/modules/accountant-bridge/application/cancel-invitation.action";
import { disconnectTaxpayerAction } from "@/modules/accountant-bridge/application/disconnect-taxpayer.action";
import { acceptConnectionAction } from "@/modules/clients/application/accept-connection.action";
import { rejectConnectionAction } from "@/modules/clients/application/reject-connection.action";
import { deleteConnectionAction } from "@/modules/clients/application/delete-connection.action";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ClientConnectionProps {
  client: Client;
}

export function ClientConnection({ client }: ClientConnectionProps) {
  const isConnected = client.connectionStatus === "connected";
  const isActivationPending = client.connectionStatus === "activation_pending";
  const isOutgoingPending = ["invited", "waiting_reply"].includes(client.connectionStatus);
  const isInactive = client.connectionStatus === "inactive";
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCancelInvite = async () => {
    if (confirm("Bu daveti iptal etmek istediğinize emin misiniz?")) {
      setLoading(true);
      const res = await cancelInvitationAction(client.id);
      if (!res.success) alert(res.error);
      else router.refresh();
      setLoading(false);
    }
  };

  const handleDisconnect = async () => {
    if (confirm(`${client.companyName} ile bağlantıyı kaldırmak üzeresiniz.\nBu işlemden sonra yeni belgeler ofisinize aktarılmaz. Geçmiş kayıtlar korunur.`)) {
      setLoading(true);
      const res = await disconnectTaxpayerAction(client.id, "Müşavirin talebi");
      if (!res.success) alert(res.error);
      else router.refresh();
      setLoading(false);
    }
  };

  const handleAccept = async () => {
    setLoading(true);
    const res = await acceptConnectionAction(client.id);
    if (!res.success) alert(res.error);
    else router.refresh();
    setLoading(false);
  };

  const handleReject = async () => {
    if (confirm("Bu bağlantı isteğini reddetmek istediğinize emin misiniz?")) {
      setLoading(true);
      const res = await rejectConnectionAction(client.id);
      if (!res.success) alert(res.error);
      else router.refresh();
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (confirm("Bu mükellef kaydını TAMAMEN SİLMEK istediğinize emin misiniz?\nBu işlem geri alınamaz.")) {
      setLoading(true);
      try {
        const res = await deleteConnectionAction(client.id);
        if (!res.success) {
          alert(res.error);
          setLoading(false);
        } else {
          window.location.reload();
        }
      } catch (err: any) {
        console.error("Delete Error:", err);
        alert("Beklenmeyen bir hata oluştu: " + (err.message || "Bilinmiyor"));
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="grid grid-cols-2 gap-1">
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isConnected ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
              {isConnected ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            </div>
            <div>
              <p className="text-sm font-medium text-white">Flow Bağlantısı</p>
              <p className="text-[11px] text-[#8B949E]">{isConnected ? "Aktif" : "Bekliyor"}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Davet Kanalı</p>
              <p className="text-[11px] text-[#8B949E]">WhatsApp</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/5 bg-[#161B22] p-6 shadow-sm">
        <h3 className="mb-6 text-sm font-semibold text-white">Bağlantı ve Davet Süreci</h3>
        <InviteStatusTimeline status={client.connectionStatus} />
        
        {isOutgoingPending && (
          <div className="mt-6 flex gap-3 border-t border-white/5 pt-6">
            <button className="rounded-lg bg-white/5 px-1 py-2 text-[13px] font-medium text-white transition hover:bg-white/10" disabled={loading}>
              Daveti Yeniden Gönder
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-white/10 px-1 py-2 text-[13px] font-medium text-[#8B949E] transition hover:bg-white/5 hover:text-white" disabled={loading}>
              <Link2 className="h-1 w-1" />
              Linki Kopyala
            </button>
            <button 
              onClick={handleCancelInvite}
              disabled={loading}
              className="ml-auto rounded-lg px-1 py-2 text-[13px] font-medium text-red-400 transition hover:bg-red-400/10">
              {loading ? "İşleniyor..." : "İptal Et"}
            </button>
          </div>
        )}

        {isActivationPending && (
          <div className="mt-6 flex gap-3 border-t border-white/5 pt-6 items-center">
            <p className="text-sm text-yellow-400 mr-auto font-medium">Bu mükellef size bağlanmak istiyor.</p>
            <button 
              onClick={handleReject}
              disabled={loading}
              className="rounded-lg border border-white/10 px-4 py-2 text-[13px] font-medium text-red-400 transition hover:bg-white/5">
              {loading ? "İşleniyor..." : "Reddet"}
            </button>
            <button 
              onClick={handleAccept}
              disabled={loading}
              className="rounded-lg bg-[#00daf3] px-4 py-2 text-[13px] font-medium text-black transition hover:bg-[#00b5cc]">
              {loading ? "İşleniyor..." : "Bağlantıyı Onayla"}
            </button>
          </div>
        )}

        {isConnected && (
          <div className="mt-6 flex gap-3 border-t border-white/5 pt-6">
             <button 
              onClick={handleDisconnect}
              disabled={loading}
              className="ml-auto rounded-lg px-1 py-2 text-[13px] font-medium text-red-400 transition hover:bg-red-400/10 border border-red-500/20">
              {loading ? "İşleniyor..." : "Bağlantıyı Kes"}
            </button>
             <button 
              onClick={handleDelete}
              disabled={loading}
              className="rounded-lg px-1 py-2 text-[13px] font-medium text-gray-500 transition hover:bg-red-400/10 border border-white/5 hover:text-red-400">
              {loading ? "..." : "Kaydı Sil"}
            </button>
          </div>
        )}

        {isInactive && (
          <div className="mt-6 flex gap-3 border-t border-white/5 pt-6">
             <button 
              onClick={handleDelete}
              disabled={loading}
              className="ml-auto rounded-lg px-4 py-2 text-[13px] font-medium text-red-400 transition hover:bg-red-400/10 border border-red-500/20">
              {loading ? "İşleniyor..." : "Bu Kaydı Tamamen Sil"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
