"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// A mock Supabase client for frontend if needed, but usually we use a utility. 
// Assuming the user has a setup for this.

export default function LedgerOnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // State for AI Settings
  const [countryCode, setCountryCode] = useState("TR");
  const [schema, setSchema] = useState([
    { key: "vendor_name", type: "string", label: "Tedarikçi Adı" },
    { key: "total_amount", type: "number", label: "Toplam Tutar" },
    { key: "tax_amount", type: "number", label: "KDV Tutarı" }
  ]);

  const handleNextStep = () => {
    setStep(s => s + 1);
  };

  const handleSaveAndLock = async () => {
    setLoading(true);
    // In a real app, this would be an API call or Supabase call
    // to insert into ledger_ai_settings and set is_locked = true
    setTimeout(() => {
      setLoading(false);
      router.push("/ledger/dashboard");
    }, 1500);
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">Merhaba! Ben Ledger AI.</h2>
            <p className="text-text-muted">
              Bugünden itibaren ofisinizdeki yeni dijital asistanınız benim. Gelen tüm evrakları sizin belirlediğiniz kurallara göre okuyup, muhasebeye hazır hale getireceğim.
            </p>
            <div className="bg-background-dark p-6 rounded-xl border border-white/5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Çalışma Ülkesi & Dil</label>
                <select 
                  className="w-full bg-[#1A1D24] border border-white/10 rounded-lg p-3 text-white focus:border-brand-primary outline-none transition-colors"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="TR">Türkiye (TRY)</option>
                  <option value="US">United States (USD)</option>
                  <option value="EU">European Union (EUR)</option>
                  <option value="UK">United Kingdom (GBP)</option>
                </select>
              </div>
            </div>
            <button 
              onClick={handleNextStep}
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-[#090B10] font-bold py-3 px-4 rounded-lg transition-all"
            >
              Tanışmaya Başla
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">Bana bir örnek gösterin</h2>
            <p className="text-text-muted">
              Nasıl çalıştığımı test etmek için lütfen en sık karşılaştığınız bir alış veya satış faturasını yükleyin. Ben okuyup ne anladığımı size göstereceğim.
            </p>
            
            <div className="border-2 border-dashed border-white/20 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-brand-primary/50 transition-colors bg-[#1A1D24]/50">
              <span className="material-symbols-outlined text-4xl text-brand-primary mb-4">upload_file</span>
              <p className="text-white font-medium mb-1">Fatura Yükle (PDF, JPG, PNG)</p>
              <p className="text-text-muted text-sm">veya sürükleyip bırakın</p>
            </div>

            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setStep(1)}
                className="flex-1 bg-[#1A1D24] hover:bg-[#2A2D34] text-white font-medium py-3 px-4 rounded-lg transition-all"
              >
                Geri
              </button>
              <button 
                onClick={handleNextStep}
                className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-[#090B10] font-bold py-3 px-4 rounded-lg transition-all"
              >
                Yükle ve Analiz Et
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">Çıkarılacak Kolonları Belirleyelim</h2>
            <p className="text-text-muted">
              Yüklediğiniz faturadan şu alanları başarıyla okudum. Dışa aktarırken (Excel, XML vb.) bu verilerin ve bu kolon sıralamasının kullanılmasını ister misiniz? Düzenleyebilirsiniz.
            </p>
            
            <div className="space-y-3 mt-4">
              {schema.map((col, idx) => (
                <div key={idx} className="flex gap-3 items-center bg-[#1A1D24] p-3 rounded-lg border border-white/5">
                  <span className="material-symbols-outlined text-text-muted cursor-move">drag_indicator</span>
                  <input 
                    type="text" 
                    value={col.label} 
                    className="flex-1 bg-transparent border-none text-white outline-none"
                    readOnly
                  />
                  <span className="text-xs px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-md">{col.type}</span>
                  <button className="text-red-500 hover:text-red-400 p-1">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
              ))}
              
              <button className="w-full py-3 border border-dashed border-white/20 text-text-muted rounded-lg hover:text-white hover:border-white/40 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Yeni Kolon Ekle
              </button>
            </div>

            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setStep(2)}
                className="flex-1 bg-[#1A1D24] hover:bg-[#2A2D34] text-white font-medium py-3 px-4 rounded-lg transition-all"
              >
                Geri
              </button>
              <button 
                onClick={handleSaveAndLock}
                disabled={loading}
                className="flex-1 flex justify-center items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-[#090B10] font-bold py-3 px-4 rounded-lg transition-all"
              >
                {loading ? (
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                ) : (
                  <>
                    <span className="material-symbols-outlined">lock</span>
                    Şemayı Kilitle & Tamamla
                  </>
                )}
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background-base flex flex-col items-center justify-center p-6 zoom-[0.90]">
      {/* Dynamic Backgrounds matching Ledger styles */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[50%] bg-[#00ff7f]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-xl relative z-10">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= s ? 'bg-brand-primary text-[#090B10] shadow-[0_0_15px_rgba(0,229,255,0.3)]' : 'bg-[#1A1D24] text-text-muted border border-white/10'}`}>
                {step > s ? <span className="material-symbols-outlined text-[20px]">check</span> : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-[2px] mx-4 transition-all duration-300 ${step > s ? 'bg-brand-primary/50' : 'bg-white/5'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-background-dark/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
}
