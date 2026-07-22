'use client';

import React, { useEffect, useState } from 'react';
import { getInvitationDetailsAction } from '../../modules/invitations/application/get-invitation.action';
import { sendOtpAction } from '../../modules/invitations/application/send-otp.action';
import { verifyOtpAndAcceptAction } from '../../modules/invitations/application/verify-otp.action';

export function InviteFlowClient({ token }: { token: string }) {
  const [step, setStep] = useState<'loading' | 'error' | 'welcome' | 'phone' | 'otp' | 'success'>('loading');
  const [errorMsg, setErrorMsg] = useState('');
  
  const [inviteData, setInviteData] = useState<{ companyName: string, accountantName: string, phoneE164: string } | null>(null);
  
  const [phoneInput, setPhoneInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadInvite() {
      const result = await getInvitationDetailsAction(token);
      if (result.success && result.data) {
        setInviteData(result.data);
        setStep('welcome');
      } else {
        setErrorMsg(result.error || 'Davet yüklenemedi.');
        setStep('error');
      }
    }
    loadInvite();
  }, [token]);

  const handleStart = () => {
    setStep('phone');
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    // Basit formatlama
    let formattedPhone = phoneInput.trim();
    if (!formattedPhone.startsWith('+')) {
      if (formattedPhone.startsWith('0')) formattedPhone = '+90' + formattedPhone.slice(1);
      else formattedPhone = '+90' + formattedPhone;
    }

    if (inviteData && formattedPhone !== inviteData.phoneE164) {
      setErrorMsg('Girdiğiniz numara, davet gönderilen numara ile eşleşmiyor.');
      return;
    }

    setIsLoading(true);
    const result = await sendOtpAction(formattedPhone);
    setIsLoading(false);

    if (result.success) {
      setPhoneInput(formattedPhone);
      setStep('otp');
    } else {
      setErrorMsg(result.error || 'SMS gönderilemedi.');
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    const result = await verifyOtpAndAcceptAction(token, phoneInput, otpInput);
    setIsLoading(false);

    if (result.success) {
      setStep('success');
    } else {
      setErrorMsg(result.error || 'Doğrulama başarısız.');
    }
  };

  if (step === 'loading') {
    return (
      <div className="bg-surface/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl text-center shadow-2xl flex flex-col items-center justify-center min-h-[300px]">
        <span className="material-symbols-outlined animate-spin text-primary text-[32px] mb-4">sync</span>
        <p className="text-text-muted text-sm">Davet bilgileriniz yükleniyor...</p>
      </div>
    );
  }

  if (step === 'error') {
    return (
      <div className="bg-surface/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl text-center shadow-2xl">
        <span className="material-symbols-outlined text-[48px] text-error mb-4">error</span>
        <h2 className="text-xl font-bold text-white mb-2">Hata Oluştu</h2>
        <p className="text-text-muted text-sm">{errorMsg}</p>
      </div>
    );
  }

  if (step === 'welcome') {
    return (
      <div className="bg-surface/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
            <span className="material-symbols-outlined text-[32px] text-primary">handshake</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white text-center mb-2 tracking-tight">Bağlantı İsteği</h2>
        <p className="text-text-muted text-center text-sm mb-6 leading-relaxed">
          <span className="font-semibold text-white">{inviteData?.accountantName}</span> sizi mali müşaviriniz olarak Workigom Flow ağına davet ediyor.
        </p>

        <div className="bg-black/30 border border-white/5 rounded-xl p-4 mb-8 flex items-center gap-4">
          <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-text-muted">store</span>
          </div>
          <div>
            <p className="text-xs text-text-muted">Firma Adınız</p>
            <p className="text-sm font-semibold text-white">{inviteData?.companyName}</p>
          </div>
        </div>

        <button 
          onClick={handleStart}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-on hover:bg-primary/90 px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-glow-primary active:scale-[0.98]"
        >
          Daveti Kabul Et
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    );
  }

  if (step === 'phone') {
    return (
      <div className="bg-surface/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
        <button onClick={() => setStep('welcome')} className="text-text-muted hover:text-white mb-6 flex items-center gap-1 text-sm transition-colors">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span> Geri
        </button>
        
        <h2 className="text-xl font-bold text-white mb-2">Numaranızı Doğrulayın</h2>
        <p className="text-text-muted text-sm mb-6">Güvenliğiniz için lütfen size gönderilen WhatsApp numarasıyla giriş yapın.</p>

        <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-4">
          {errorMsg && (
            <div className="p-3 bg-error/10 border border-error/20 rounded-lg text-error text-xs">
              {errorMsg}
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-text-muted">Cep Telefonu Numarası</label>
            <input 
              type="tel" 
              value={phoneInput}
              onChange={e => setPhoneInput(e.target.value)}
              placeholder="0555 123 45 67"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading || !phoneInput}
            className="w-full mt-2 flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 px-6 py-3.5 rounded-xl text-sm font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <span className="material-symbols-outlined animate-spin text-[18px]">sync</span> : 'SMS Gönder'}
          </button>
        </form>
      </div>
    );
  }

  if (step === 'otp') {
    return (
      <div className="bg-surface/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
        <button onClick={() => setStep('phone')} className="text-text-muted hover:text-white mb-6 flex items-center gap-1 text-sm transition-colors">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span> Numarayı Değiştir
        </button>
        
        <h2 className="text-xl font-bold text-white mb-2">Doğrulama Kodu</h2>
        <p className="text-text-muted text-sm mb-6"><span className="font-medium text-white">{phoneInput}</span> numarasına gönderilen 6 haneli kodu girin.</p>

        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
          {errorMsg && (
            <div className="p-3 bg-error/10 border border-error/20 rounded-lg text-error text-xs">
              {errorMsg}
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <input 
              type="text" 
              value={otpInput}
              onChange={e => setOtpInput(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="123456"
              maxLength={6}
              className="w-full text-center tracking-[0.5em] font-mono text-2xl bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading || otpInput.length !== 6}
            className="w-full mt-2 flex items-center justify-center gap-2 bg-primary text-primary-on hover:bg-primary/90 px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <span className="material-symbols-outlined animate-spin text-[18px]">sync</span> : 'Onayla ve Bağlan'}
          </button>
        </form>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="bg-surface/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center border border-success/20">
            <span className="material-symbols-outlined text-[40px] text-success">check_circle</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Tebrikler! 🎉</h2>
        <p className="text-text-muted text-sm mb-8 leading-relaxed">
          Mali müşavirinizle bağlantınız başarıyla kuruldu. Artık tüm finansal verilerinizi ve faturalarınızı tek platformdan yönetebilirsiniz.
        </p>

        <a 
          href="/flow/dashboard"
          className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 px-6 py-3.5 rounded-xl text-sm font-bold transition-all"
        >
          Flow Paneline Git
          <span className="material-symbols-outlined text-[18px]">dashboard</span>
        </a>
      </div>
    );
  }

  return null;
}
