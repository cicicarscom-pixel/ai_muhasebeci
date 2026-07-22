import React from 'react';
import { InviteFlowClient } from './InviteFlowClient';

export default async function InvitePage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const params = await searchParams;
  const token = params.token;

  if (!token) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-surface border border-border p-8 rounded-2xl max-w-md w-full text-center">
          <span className="material-symbols-outlined text-[48px] text-error mb-4">error</span>
          <h1 className="text-xl font-bold text-text mb-2">Geçersiz Davet</h1>
          <p className="text-text-muted text-sm">Davet bağlantınız eksik veya hatalı.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center p-4 selection:bg-primary/30">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Workigom Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[32px]">token</span>
            <span className="text-xl font-bold text-white tracking-tight">Workigom</span>
          </div>
        </div>

        {/* Interactive Client Component for Flow */}
        <InviteFlowClient token={token} />
      </div>
    </div>
  );
}
