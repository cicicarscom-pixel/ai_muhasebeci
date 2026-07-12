"use client";

import { ClientConnectionStatus } from "@/data/mock/clients";
import { Check, Clock, X } from "lucide-react";

interface InviteStatusTimelineProps {
  status: ClientConnectionStatus;
}

const steps = [
  { id: "created", label: "Profil oluşturuldu" },
  { id: "invited", label: "WhatsApp daveti gönderildi" },
  { id: "delivered", label: "Mesaj teslim edildi" },
  { id: "opened", label: "Bağlantı açıldı" },
  { id: "password", label: "Şifre oluşturuldu" },
  { id: "active", label: "Flow hesabı etkinleştirildi" },
];

export function InviteStatusTimeline({ status }: InviteStatusTimelineProps) {
  // Determine current step index based on status
  let currentStepIndex = 0;
  let isFailed = false;

  switch (status) {
    case "connected":
      currentStepIndex = 6;
      break;
    case "activation_pending":
      currentStepIndex = 4;
      break;
    case "waiting_reply":
    case "invited":
      currentStepIndex = 2;
      break;
    case "invite_failed":
      currentStepIndex = 1;
      isFailed = true;
      break;
    case "inactive":
      currentStepIndex = 0;
      break;
  }

  return (
    <div className="relative">
      <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-white/5" />
      
      <div className="space-y-6">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const showFailed = isCurrent && isFailed;

          return (
            <div key={step.id} className="relative flex items-center gap-4">
              <div
                className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                  isCompleted
                    ? "border-green-500/30 bg-green-500/20 text-green-400"
                    : showFailed
                    ? "border-red-500/30 bg-red-500/20 text-red-400"
                    : isCurrent
                    ? "border-cyan-400/30 bg-cyan-400/20 text-cyan-400 shadow-[0_0_10px_rgba(0,218,243,0.2)]"
                    : "border-white/10 bg-[#161B22] text-[#8B949E]"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-3.5 w-3.5" />
                ) : showFailed ? (
                  <X className="h-3.5 w-3.5" />
                ) : isCurrent ? (
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                ) : (
                  <div className="h-1.5 w-1.5 rounded-full bg-[#8B949E]" />
                )}
              </div>
              
              <div className="flex flex-col">
                <span
                  className={`text-sm ${
                    isCompleted || isCurrent ? "font-medium text-white" : "text-[#8B949E]"
                  } ${showFailed ? "text-red-400" : ""}`}
                >
                  {step.label}
                </span>
                {isCurrent && !isFailed && (
                  <span className="mt-0.5 text-[11px] text-[#8B949E]">
                    Bekliyor...
                  </span>
                )}
                {showFailed && (
                  <span className="mt-0.5 text-[11px] text-red-400/70">
                    Başarısız oldu.
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
