'use client';
import React from 'react';
import Link from 'next/link';
import { PrimaryButton, SecondaryButton, GhostButton } from '../ui/Buttons';

export default function ApprovalPage() {
  return (
    <div className="bg-surface text-text h-full w-full flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center w-full px-24 z-50 bg-card/80 backdrop-blur-md top-0 sticky h-[64px] border-b border-border">
        <div className="flex items-center gap-16">
          <Link href="/ledger/workflow" className="flex items-center gap-8 text-text-muted hover:text-text transition-colors duration-fast">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-semibold text-body">Geri</span>
          </Link>
          <div className="h-24 w-[1px] bg-border mx-8"></div>
          <h1 className="text-body font-bold text-text flex items-center gap-8">
            Shell Türkiye A.Ş. 
            <span className="text-text-muted text-label font-medium">• 25.05.2025</span>
          </h1>
          <span className="inline-flex items-center rounded-badge bg-primary/10 px-8 py-4 text-[10px] font-bold text-primary border border-primary/20 gap-4 ml-16">
            <span className="w-4 h-4 rounded-full bg-primary"></span>
            %98 AI Güven
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Document Queue */}
        <aside className="w-[320px] flex-shrink-0 bg-surface flex flex-col border-r border-border z-10 h-full">
          {/* Header */}
          <div className="px-24 py-24 flex items-center justify-between">
            <h2 className="text-text font-bold text-card-title">Evrak Kuyruğu</h2>
            <div className="flex items-center gap-16">
              <span className="text-text-muted text-label font-bold">203</span>
              <button className="text-text-muted hover:text-text transition-colors duration-fast">
                <span className="material-symbols-outlined text-[20px]">filter_alt</span>
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex px-24 pt-4 gap-16 border-b border-border">
            <button className="pb-16 text-primary text-label border-b-2 border-primary font-bold">Tümü</button>
            <button className="pb-16 text-text-muted text-label hover:text-text font-bold transition-colors">Kontrol Bekleyen</button>
            <button className="pb-16 text-text-muted text-label hover:text-text font-bold transition-colors">Eksik Bilgi</button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-16 space-y-8">
            {/* Active Item */}
            <div className="p-16 rounded-card border border-primary/50 bg-primary/5 shadow-glow-primary cursor-pointer flex flex-col gap-8 transition-all">
              <div className="flex items-center gap-16">
                <div className="w-[24px] h-[24px] rounded-[4px] bg-white flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-full bg-yellow-400 border-2 border-red-500"></div>
                </div>
                <span className="text-text font-bold text-body">Shell Türkiye A.Ş.</span>
              </div>
              <div className="flex items-end justify-between pl-[40px]">
                <div className="flex flex-col gap-4">
                  <span className="text-text font-mono text-body font-bold">₺24.500,00</span>
                  <div className="flex items-center text-text-muted text-label gap-4 font-medium">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    25.05.2025
                  </div>
                </div>
                <span className="text-primary text-label font-bold">%98</span>
              </div>
            </div>

            {/* Migros */}
            <div className="p-16 rounded-card border border-border hover:bg-card/50 cursor-pointer transition-colors flex flex-col gap-8">
              <div className="flex items-center gap-16">
                <div className="w-[24px] h-[24px] rounded-[4px] bg-[#FF7900] flex items-center justify-center text-white font-bold text-[12px]">M</div>
                <span className="text-text font-bold text-body">Migros Ticaret A.Ş.</span>
              </div>
              <div className="flex items-end justify-between pl-[40px]">
                <div className="flex flex-col gap-4">
                  <span className="text-text font-mono text-body font-bold">₺7.890,00</span>
                  <div className="flex items-center text-text-muted text-label gap-4 font-medium">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    25.05.2025
                  </div>
                </div>
                <span className="text-warning text-label font-bold">%92</span>
              </div>
            </div>
            
            {/* Opet */}
            <div className="p-16 rounded-card border border-border hover:bg-card/50 cursor-pointer transition-colors flex flex-col gap-8">
              <div className="flex items-center gap-16">
                <div className="w-[24px] h-[24px] rounded-[4px] bg-blue-600 flex items-center justify-center text-white font-bold text-[12px]">O</div>
                <span className="text-text font-bold text-body">Opet Petrolcülük A.Ş.</span>
              </div>
              <div className="flex items-end justify-between pl-[40px]">
                <div className="flex flex-col gap-4">
                  <span className="text-text font-mono text-body font-bold">₺12.350,00</span>
                  <div className="flex items-center text-text-muted text-label gap-4 font-medium">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    25.05.2025
                  </div>
                </div>
                <span className="text-primary text-label font-bold">%97</span>
              </div>
            </div>

          </div>

          {/* Footer / Pagination */}
          <div className="p-24 border-t border-border flex items-center justify-between text-text-muted text-label font-medium">
            <span>Toplam 203 evrak</span>
            <div className="flex items-center gap-16">
              <button className="hover:text-text disabled:opacity-50 transition-colors" disabled>
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <span className="font-mono">1 / 7</span>
              <button className="hover:text-text transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Workspace Wrapper */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Column: PDF Canvas */}
          <section className="w-1/2 h-full bg-card relative flex items-center justify-center p-32 overflow-hidden group">
            {/* Floating Toolbar */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-md border border-border rounded-full px-8 py-4 flex items-center gap-4 z-10 opacity-80 hover:opacity-100 transition-opacity duration-fast shadow-glow-primary">
              <button className="p-8 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Search">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </button>
              <div className="w-[1px] h-16 bg-border mx-4"></div>
              <button className="p-8 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Zoom Out">
                <span className="material-symbols-outlined text-[20px]">zoom_out</span>
              </button>
              <span className="text-label font-bold text-text px-8 w-[64px] text-center">%100</span>
              <button className="p-8 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Zoom In">
                <span className="material-symbols-outlined text-[20px]">zoom_in</span>
              </button>
              <div className="w-[1px] h-16 bg-border mx-4"></div>
              <button className="p-8 rounded-full text-text-muted hover:text-primary hover:bg-white/5 transition-colors" title="Rotate">
                <span className="material-symbols-outlined text-[20px]">rotate_right</span>
              </button>
            </div>

            {/* PDF Container Mockup */}
            <div className="w-full max-w-[600px] aspect-[1/1.414] bg-white rounded-card shadow-2xl relative overflow-hidden transition-transform duration-medium ease-out flex flex-col p-32 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-border">
              
              {/* OCR Highlights (Simulated) */}
              <div className="absolute top-[8%] left-[70%] w-[20%] h-[4%] bg-primary/20 border border-primary/60 rounded-sm animate-pulse z-10"></div>
              <div className="absolute top-[12%] left-[70%] w-[15%] h-[3%] bg-primary/20 border border-primary/60 rounded-sm animate-pulse z-10" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-[80%] left-[65%] w-[25%] h-[6%] bg-primary/20 border border-primary/60 rounded-sm animate-pulse z-10" style={{ animationDelay: '1s' }}></div>

              {/* Skeleton PDF Content */}
              <div className="flex justify-between items-start mb-48">
                <div className="w-[96px] h-[96px] bg-gray-200 rounded-full opacity-50"></div>
                <div className="text-right">
                  <div className="w-[192px] h-[24px] bg-gray-200 rounded opacity-50 mb-16"></div>
                  <div className="w-[128px] h-[16px] bg-gray-200 rounded opacity-50 mb-8 ml-auto"></div>
                  <div className="w-[160px] h-[16px] bg-gray-200 rounded opacity-50 ml-auto"></div>
                </div>
              </div>
              <div className="space-y-16 mb-48">
                <div className="w-full h-[16px] bg-gray-200 rounded opacity-50"></div>
                <div className="w-3/4 h-[16px] bg-gray-200 rounded opacity-50"></div>
                <div className="w-5/6 h-[16px] bg-gray-200 rounded opacity-50"></div>
              </div>
              <div className="mt-auto border-t border-gray-300 pt-24">
                <div className="flex justify-between mb-16">
                  <div className="w-[128px] h-[16px] bg-gray-200 rounded opacity-50"></div>
                  <div className="w-[96px] h-[16px] bg-gray-200 rounded opacity-50"></div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[160px] h-[24px] bg-gray-200 rounded opacity-60"></div>
                  <div className="w-[128px] h-[24px] bg-gray-200 rounded opacity-60"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Operation Panel */}
          <section className="w-1/2 h-full bg-card flex flex-col border-l border-border relative overflow-y-auto custom-scrollbar">
            <div className="flex-1 flex flex-col justify-center min-h-max py-24">
              {/* Form Area */}
              <div className="px-32 pb-24">
                <div className="max-w-xl mx-auto space-y-16">
                  
                  {/* Belge Section */}
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Tarihi</label>
                        <input className="w-full h-9 bg-white/5 backdrop-blur border border-border rounded-lg text-[13px] text-text px-3 focus:outline-none focus:border-primary focus:bg-white/[0.06] transition-all [color-scheme:dark]" type="date" defaultValue="2025-05-25" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Numarası</label>
                        <input className="w-full h-9 bg-white/5 backdrop-blur border border-border rounded-lg text-text px-3 focus:outline-none focus:border-primary focus:bg-white/[0.06] transition-all font-mono text-[13px]" type="text" defaultValue="SHE202500123" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Fatura Türü</label>
                        <select className="w-full h-9 bg-white/5 backdrop-blur border border-border rounded-lg text-[13px] text-text px-3 appearance-none focus:outline-none focus:border-primary focus:bg-white/[0.06] transition-all">
                          <option>Alış Faturası</option>
                          <option>Satış Faturası</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">VKN/TCKN</label>
                        <input className="w-full h-9 bg-white/5 backdrop-blur border border-border rounded-lg text-text px-3 focus:outline-none focus:border-primary focus:bg-white/[0.06] transition-all font-mono text-[13px]" type="text" defaultValue="1234567890" />
                      </div>
                      <div className="col-span-2 space-y-4">
                        <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Açıklama</label>
                        <input className="w-full h-9 bg-white/5 backdrop-blur border border-border rounded-lg text-[13px] text-text px-3 focus:outline-none focus:border-primary focus:bg-white/[0.06] transition-all" type="text" defaultValue="Akaryakıt Alımı" />
                      </div>
                    </div>
                  </div>

                  {/* Vergiler Section */}
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Tevkifat Oranı</label>
                        <select className="w-full h-9 bg-white/5 backdrop-blur border border-border rounded-lg text-[13px] text-text px-3 appearance-none focus:outline-none focus:border-primary focus:bg-white/[0.06] transition-all">
                          <option>Yok</option>
                          <option>2/10</option>
                          <option>5/10</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-medium text-text-muted tracking-wider uppercase">Özel Matrah</label>
                        <input className="w-full h-9 bg-white/5 backdrop-blur border border-border rounded-lg text-text px-3 text-right focus:outline-none focus:border-primary focus:bg-white/[0.06] transition-all font-mono text-[13px]" type="text" defaultValue="0.00" />
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-card p-12 overflow-x-auto custom-scrollbar">
                      <div className="min-w-[420px]">
                        {/* KDV Fields */}
                        <div className="grid grid-cols-5 gap-8 mb-12">
                          <div className="space-y-4"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%1 KDV</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="0.00" /></div>
                          <div className="space-y-4"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%8 KDV</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="0.00" /></div>
                          <div className="space-y-4"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%10 KDV</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="0.00" /></div>
                          <div className="space-y-4"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%18 KDV</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="0.00" /></div>
                          <div className="space-y-4"><label className="text-label font-bold text-primary uppercase px-2 whitespace-nowrap">%20 KDV</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="200.00" /></div>
                        </div>
                        {/* Matrah Fields */}
                        <div className="grid grid-cols-5 gap-8">
                          <div className="space-y-4"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%1 Matrah</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="0.00" /></div>
                          <div className="space-y-4"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%8 Matrah</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="0.00" /></div>
                          <div className="space-y-4"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%10 Matrah</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="0.00" /></div>
                          <div className="space-y-4"><label className="text-label font-bold text-text-muted uppercase px-2 whitespace-nowrap">%18 Matrah</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="0.00" /></div>
                          <div className="space-y-4"><label className="text-label font-bold text-primary uppercase px-2 whitespace-nowrap">%20 Matrah</label><input className="w-full h-[32px] bg-transparent border-b border-white/10 hover:border-border focus:border-primary outline-none text-body font-mono font-bold text-text px-2 text-right transition-colors rounded-none" defaultValue="1,000.00" /></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Area */}
              <div className="px-32 py-24 max-w-xl mx-auto w-full flex items-center justify-between mt-8 border-t border-border">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-muted tracking-wider uppercase mb-4">Genel Toplam</span>
                  <span className="text-text text-[24px] font-bold font-mono">₺1,200.00</span>
                </div>
                <div className="flex items-center gap-12">
                  <SecondaryButton>Taslak</SecondaryButton>
                  <PrimaryButton className="flex items-center gap-8 group">
                    Onayla
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
