'use client';
import React, { useState } from 'react';
import { inviteTaxpayerAction } from '../application/invite-taxpayer.action';

export default function InviteTaxpayerDialog({ children }: { children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await inviteTaxpayerAction(formData);
    
    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'Davet gönderildi.' });
      setTimeout(() => setIsOpen(false), 2000);
    } else {
      setMessage({ type: 'error', text: result.error || 'Bir hata oluştu.' });
    }
    
    setIsLoading(false);
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {children || (
          <button className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300">
            <span className="material-symbols-outlined text-[16px]">person_add</span>
            Mükellef Davet Et
          </button>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-surface border border-border w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-card/50">
              <h2 className="text-lg font-semibold text-text flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">contact_phone</span>
                WhatsApp Daveti Gönder
              </h2>
              <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-text transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              {message && (
                <div className={`p-3 rounded-lg text-sm ${message.type === 'success' ? 'bg-success/10 text-success border border-success/20' : 'bg-error/10 text-error border border-error/20'}`}>
                  {message.text}
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="company_name" className="text-sm font-medium text-text">Firma Adı</label>
                <input 
                  type="text" 
                  id="company_name"
                  name="company_name" 
                  required 
                  placeholder="Örn: Acme A.Ş."
                  className="w-full bg-surface-variant border border-border rounded-lg px-4 py-2.5 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone_number" className="text-sm font-medium text-text">WhatsApp Numarası</label>
                <input 
                  type="tel" 
                  id="phone_number"
                  name="phone_number" 
                  required 
                  placeholder="+905551234567"
                  pattern="^\+[1-9]\d{1,14}$"
                  title="Numara + ile başlamalı ve ülke kodu içermelidir. (Örn: +905551234567)"
                  className="w-full bg-surface-variant border border-border rounded-lg px-4 py-2.5 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <p className="text-xs text-text-muted mt-1">Sadece geçerli E.164 formatı (+90 ile) kabul edilir.</p>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-text hover:bg-surface-variant transition-colors"
                >
                  İptal
                </button>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="flex items-center gap-2 bg-primary text-primary-on hover:bg-primary/90 px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
                  ) : (
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  )}
                  {isLoading ? 'Gönderiliyor...' : 'Davet Gönder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
