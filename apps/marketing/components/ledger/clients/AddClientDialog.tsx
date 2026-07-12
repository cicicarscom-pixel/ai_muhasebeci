"use client";

import { useState, useEffect } from "react";
import { X, Check, Loader2, Send } from "lucide-react";

interface AddClientDialogProps {
  onClose: () => void;
}

export function AddClientDialog({ onClose }: AddClientDialogProps) {
  const [step, setStep] = useState<"form" | "flow">("form");
  const [flowStep, setFlowStep] = useState(0);

  const flowSteps = [
    "Mükellef kaydı oluşturuluyor",
    "Flow firma profili hazırlanıyor",
    "Yetkili kullanıcı oluşturuluyor",
    "Güvenli aktivasyon bağlantısı üretiliyor",
    "WhatsApp daveti gönderiliyor",
  ];

  useEffect(() => {
    if (step === "flow" && flowStep < flowSteps.length) {
      const timer = setTimeout(() => {
        setFlowStep((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [step, flowStep]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-[500px] overflow-hidden rounded-2xl border border-white/10 bg-[#12151C] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <h2 className="text-lg font-semibold text-white">Yeni Mükellef Ekle</h2>
          <button 
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#8B949E] transition hover:bg-white/5 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "form" ? (
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#8B949E]">Firma Unvanı</label>
                <input type="text" className="h-10 w-full rounded-xl border border-white/10 bg-[#161B22] px-3 text-sm text-white focus:border-cyan-400/30 focus:outline-none" placeholder="Örn: ABC Yazılım A.Ş." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#8B949E]">VKN / TCKN</label>
                  <input type="text" className="h-10 w-full rounded-xl border border-white/10 bg-[#161B22] px-3 text-sm text-white focus:border-cyan-400/30 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#8B949E]">Vergi Dairesi</label>
                  <input type="text" className="h-10 w-full rounded-xl border border-white/10 bg-[#161B22] px-3 text-sm text-white focus:border-cyan-400/30 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#8B949E]">Yetkili Adı Soyadı</label>
                <input type="text" className="h-10 w-full rounded-xl border border-white/10 bg-[#161B22] px-3 text-sm text-white focus:border-cyan-400/30 focus:outline-none" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#8B949E]">Cep Telefonu (WhatsApp için gerekli)</label>
                <input type="tel" className="h-10 w-full rounded-xl border border-white/10 bg-[#161B22] px-3 text-sm text-white focus:border-cyan-400/30 focus:outline-none" placeholder="+90 5XX XXX XX XX" />
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-2">
                <button 
                  onClick={onClose}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-[#8B949E] transition hover:text-white"
                >
                  İptal
                </button>
                <button 
                  onClick={() => setStep("flow")}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#9D5CFF] px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Kaydet ve Davet Gönder
                </button>
              </div>
            </div>
          ) : (
            <div className="py-6 px-4">
              <div className="mb-8 flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 shadow-[0_0_30px_rgba(0,218,243,0.15)]">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-white">Davet Süreci Başlatıldı</h3>
                <p className="mt-1 text-sm text-[#8B949E]">Lütfen işlemin tamamlanmasını bekleyin.</p>
              </div>

              <div className="space-y-4 max-w-sm mx-auto">
                {flowSteps.map((s, idx) => {
                  const isDone = flowStep > idx;
                  const isCurrent = flowStep === idx;
                  
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        isDone ? "border-green-500 bg-green-500/20 text-green-400" :
                        isCurrent ? "border-cyan-400 bg-cyan-400/10 text-cyan-400" :
                        "border-white/10 bg-transparent"
                      }`}>
                        {isDone ? <Check className="h-3 w-3" /> : isCurrent ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
                      </div>
                      <span className={`text-sm ${
                        isDone ? "text-white" :
                        isCurrent ? "text-cyan-400 font-medium" :
                        "text-[#8B949E]"
                      }`}>
                        {s}
                      </span>
                    </div>
                  );
                })}
                {flowStep >= flowSteps.length && (
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-orange-500 bg-orange-500/20 text-orange-400">
                      <Clock className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-orange-400 font-medium">
                      Aktivasyon bekleniyor
                    </span>
                  </div>
                )}
              </div>

              {flowStep >= flowSteps.length && (
                <div className="mt-10 flex justify-center">
                  <button 
                    onClick={onClose}
                    className="rounded-xl border border-white/10 bg-white/5 px-8 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Kapat
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
