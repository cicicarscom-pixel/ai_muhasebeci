'use client';
import React from 'react';

export default function AiOperationsCenter() {
  return (
    <aside className="fixed right-0 top-0 h-full w-[360px] bg-surface/80 backdrop-blur-3xl border-l border-white/5 shadow-[-20px_0_40px_rgba(0,0,0,0.4)] z-40 flex flex-col pt-16">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
        <div className="w-8 h-8 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary-container text-sm glow-text">auto_awesome</span>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-on-surface">Ledger AI</h2>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-[10px] text-on-surface-variant font-medium">Operations Center</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        
        {/* Pinned Tasks */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Pinned Tasks</h3>
          <div className="glass-panel p-3 flex flex-col gap-2 rounded-xl">
            <div className="flex items-start justify-between">
              <span className="text-xs font-semibold text-on-surface">KDV Month-End</span>
              <span className="text-[10px] text-primary-container font-medium">In Progress</span>
            </div>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full w-[70%]"></div>
            </div>
          </div>
        </div>

        {/* Recent AI Actions */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Recent Actions</h3>
          <div className="flex flex-col gap-2 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-px before:bg-white/5">
            <div className="flex gap-3 relative z-10">
              <div className="w-7 h-7 rounded-full bg-surface-container border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-container text-xs">receipt_long</span>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-[11px] text-on-surface font-medium">Auto-matched 43 invoices</span>
                <span className="text-[9px] text-on-surface-variant">2 mins ago</span>
              </div>
            </div>
            <div className="flex gap-3 relative z-10">
              <div className="w-7 h-7 rounded-full bg-surface-container border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-container text-xs">mail</span>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-[11px] text-on-surface font-medium">Sent reminder to Shell</span>
                <span className="text-[9px] text-on-surface-variant">15 mins ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Conversation */}
        <div className="flex flex-col gap-3 mt-4">
          <div className="self-end bg-primary-container/10 border border-primary-container/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-[0_0_15px_rgba(0,229,253,0.1)]">
            <p className="text-[11px] text-on-surface leading-relaxed">Could you summarize today's anomalies?</p>
          </div>
          <div className="self-start bg-surface-container-high/50 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%]">
            <p className="text-[11px] text-on-surface-variant leading-relaxed">I found 2 anomalies requiring attention:</p>
            <div className="mt-2 flex flex-col gap-1.5">
              <div className="bg-surface-container rounded px-2 py-1.5 text-[10px] text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-error text-[12px]">warning</span>
                Duplicate VAT entry: Opet
              </div>
              <div className="bg-surface-container rounded px-2 py-1.5 text-[10px] text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container text-[12px]">info</span>
                Unmatched vendor: 'XYZ Gıda'
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/5 bg-surface/50">
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
          <button className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-colors">Show anomalies</button>
          <button className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-colors">Generate emails</button>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask Ledger AI anything..." 
            className="w-full bg-surface-container-high border border-white/10 rounded-xl pl-4 pr-10 py-3 text-[11px] text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container/50 focus:ring-1 focus:ring-primary-container/50 transition-all shadow-inner"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-md bg-primary-container/10 text-primary-container flex items-center justify-center hover:bg-primary-container/20 transition-colors">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
