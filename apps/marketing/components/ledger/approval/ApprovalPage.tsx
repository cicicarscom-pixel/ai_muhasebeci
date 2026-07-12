'use client';
import React from 'react';
import Link from 'next/link';

export default function ApprovalPage() {
  return (
    <div className="bg-[#080f11] text-[#dce4e5] font-body-md h-screen overflow-hidden flex flex-col antialiased selection:bg-primary/30 selection:text-primary">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center w-full px-6 z-50 bg-[#080f11]/80 backdrop-blur-md top-0 sticky h-16 border-b border-white/5">
        <div className="flex items-center gap-4">
          <Link href="/ledger/workflow" className="flex items-center gap-2 text-[#bac9cc] hover:text-[#00daf3] transition-colors duration-200">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-medium text-xs">Geri</span>
          </Link>
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          <h1 className="text-base font-semibold text-[#dce4e5] flex items-center gap-2">
            Shell Türkiye A.Ş. 
            <span className="text-[#bac9cc] text-xs font-normal">• 25.05.2025</span>
          </h1>
          <span className="inline-flex items-center rounded-full bg-[#242b2d] px-2 py-1 text-[10px] font-semibold text-[#00daf3] ring-1 ring-inset ring-[#00daf3]/20 gap-1 ml-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00daf3]"></span>
            %98 AI Güven
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-[#ffb4ab]/50 text-[#ffb4ab] text-xs font-medium hover:bg-[#ffb4ab]/10 transition-colors bg-[#ffb4ab]/5">Reddet</button>
          <button className="px-4 py-2 rounded-lg text-[#bac9cc] text-xs font-medium hover:bg-[#333a3c]/10 transition-colors">Taslak</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Document Queue */}
        <aside className="w-[320px] flex-shrink-0 bg-[#0d1516] flex flex-col border-r border-white/5 z-10 h-full">
          {/* Header */}
          <div className="px-5 py-5 flex items-center justify-between">
            <h2 className="text-[#dce4e5] font-semibold text-[18px]">Evrak Kuyruğu</h2>
            <div className="flex items-center gap-3">
              <span className="text-[#bac9cc] text-xs font-medium">203</span>
              <button className="text-[#bac9cc] hover:text-[#dce4e5] transition-colors">
                <span className="material-symbols-outlined text-[20px]">filter_alt</span>
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex px-5 pt-1 gap-5 border-b border-white/5">
            <button className="pb-3 text-[#00daf3] text-xs border-b-2 border-[#00daf3] font-medium">Tümü</button>
            <button className="pb-3 text-[#bac9cc] text-xs hover:text-[#dce4e5] font-medium transition-colors">Kontrol Bekleyen</button>
            <button className="pb-3 text-[#bac9cc] text-xs hover:text-[#dce4e5] font-medium transition-colors">Eksik Bilgi</button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
            {/* Active Item */}
            <div className="p-3 rounded-lg border border-[#00daf3]/50 bg-[#00daf3]/5 shadow-[0_0_15px_rgba(0,218,243,0.15)] cursor-pointer flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-white flex items-center justify-center p-1.5 shadow-sm">
                  <div className="w-full h-full rounded-full bg-yellow-400 border-2 border-red-500"></div>
                </div>
                <span className="text-[#dce4e5] font-semibold text-[13px]">Shell Türkiye A.Ş.</span>
              </div>
              <div className="flex items-end justify-between pl-9">
                <div className="flex flex-col gap-1">
                  <span className="text-[#dce4e5] font-mono text-[12px]">₺24.500,00</span>
                  <div className="flex items-center text-[#bac9cc] text-[10px] gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span>
                    25.05.2025
                  </div>
                </div>
                <span className="text-[#00daf3] text-xs font-bold">%98</span>
              </div>
            </div>

            {/* Migros */}
            <div className="p-3 rounded-lg border border-white/5 hover:bg-[#151d1e] cursor-pointer transition-colors flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-[#FF7900] flex items-center justify-center text-white font-bold text-[12px]">M</div>
                <span className="text-[#dce4e5] font-semibold text-[13px]">Migros Ticaret A.Ş.</span>
              </div>
              <div className="flex items-end justify-between pl-9">
                <div className="flex flex-col gap-1">
                  <span className="text-[#dce4e5] font-mono text-[12px]">₺7.890,00</span>
                  <div className="flex items-center text-[#bac9cc] text-[10px] gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span>
                    25.05.2025
                  </div>
                </div>
                <span className="text-[#fb923c] text-xs font-bold">%92</span>
              </div>
            </div>
            
            {/* Opet */}
            <div className="p-3 rounded-lg border border-white/5 hover:bg-[#151d1e] cursor-pointer transition-colors flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-[12px]">O</div>
                <span className="text-[#dce4e5] font-semibold text-[13px]">Opet Petrolcülük A.Ş.</span>
              </div>
              <div className="flex items-end justify-between pl-9">
                <div className="flex flex-col gap-1">
                  <span className="text-[#dce4e5] font-mono text-[12px]">₺12.350,00</span>
                  <div className="flex items-center text-[#bac9cc] text-[10px] gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span>
                    25.05.2025
                  </div>
                </div>
                <span className="text-[#00daf3] text-xs font-bold">%97</span>
              </div>
            </div>

            {/* Türk Telekom */}
            <div className="p-3 rounded-lg border border-white/5 hover:bg-[#151d1e] cursor-pointer transition-colors flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white font-bold text-[12px]">T</div>
                <span className="text-[#dce4e5] font-semibold text-[13px]">Türk Telekom A.Ş.</span>
              </div>
              <div className="flex items-end justify-between pl-9">
                <div className="flex flex-col gap-1">
                  <span className="text-[#dce4e5] font-mono text-[12px]">₺3.250,00</span>
                  <div className="flex items-center text-[#bac9cc] text-[10px] gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span>
                    24.05.2025
                  </div>
                </div>
                <span className="text-[#00daf3] text-xs font-bold">%95</span>
              </div>
            </div>

            {/* Amazon */}
            <div className="p-3 rounded-lg border border-white/5 hover:bg-[#151d1e] cursor-pointer transition-colors flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-[12px]">a</div>
                <span className="text-[#dce4e5] font-semibold text-[13px]">Amazon Turkey Perakende</span>
              </div>
              <div className="flex items-end justify-between pl-9">
                <div className="flex flex-col gap-1">
                  <span className="text-[#dce4e5] font-mono text-[12px]">₺9.780,00</span>
                  <div className="flex items-center text-[#bac9cc] text-[10px] gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span>
                    24.05.2025
                  </div>
                </div>
                <span className="text-[#ffb4ab] text-xs font-bold">%65</span>
              </div>
            </div>
            
            {/* Garanti */}
            <div className="p-3 rounded-lg border border-white/5 hover:bg-[#151d1e] cursor-pointer transition-colors flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center text-white font-bold text-[12px]">G</div>
                <span className="text-[#dce4e5] font-semibold text-[13px]">Garanti BBVA</span>
              </div>
              <div className="flex items-end justify-between pl-9">
                <div className="flex flex-col gap-1">
                  <span className="text-[#dce4e5] font-mono text-[12px]">₺4.560,00</span>
                  <div className="flex items-center text-[#bac9cc] text-[10px] gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span>
                    24.05.2025
                  </div>
                </div>
                <span className="text-[#4fdbc8] text-xs font-bold">%100</span>
              </div>
            </div>
          </div>

          {/* Footer / Pagination */}
          <div className="p-5 border-t border-white/5 flex items-center justify-between text-[#bac9cc] text-xs">
            <span>Toplam 203 evrak</span>
            <div className="flex items-center gap-4">
              <button className="hover:text-[#dce4e5] disabled:opacity-50 transition-colors" disabled>
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <span className="font-mono">1 / 7</span>
              <button className="hover:text-[#dce4e5] transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Workspace Wrapper */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Column: PDF Canvas */}
          <section className="w-1/2 h-full bg-[#080f11] relative flex items-center justify-center p-8 overflow-hidden group">
            {/* Floating Toolbar */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#192122]/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 flex items-center gap-1 z-10 opacity-80 hover:opacity-100 transition-opacity">
              <button className="p-2 rounded-full text-[#bac9cc] hover:text-[#00daf3] hover:bg-white/5 transition-colors" title="Search">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </button>
              <div className="w-px h-4 bg-white/10 mx-1"></div>
              <button className="p-2 rounded-full text-[#bac9cc] hover:text-[#00daf3] hover:bg-white/5 transition-colors" title="Zoom Out">
                <span className="material-symbols-outlined text-[20px]">zoom_out</span>
              </button>
              <span className="text-xs font-medium text-[#dce4e5] px-2 w-16 text-center">%100</span>
              <button className="p-2 rounded-full text-[#bac9cc] hover:text-[#00daf3] hover:bg-white/5 transition-colors" title="Zoom In">
                <span className="material-symbols-outlined text-[20px]">zoom_in</span>
              </button>
              <div className="w-px h-4 bg-white/10 mx-1"></div>
              <button className="p-2 rounded-full text-[#bac9cc] hover:text-[#00daf3] hover:bg-white/5 transition-colors" title="Rotate">
                <span className="material-symbols-outlined text-[20px]">rotate_right</span>
              </button>
            </div>

            {/* PDF Container Mockup */}
            <div className="w-full max-w-[600px] aspect-[1/1.414] bg-[#dce4e5] rounded-sm shadow-2xl relative overflow-hidden transition-transform duration-300 ease-out flex flex-col p-8 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10">
              {/* Skeleton PDF Content */}
              <div className="flex justify-between items-start mb-12">
                <div className="w-24 h-24 bg-[#2e3638] rounded-full opacity-20"></div>
                <div className="text-right">
                  <div className="w-48 h-8 bg-[#2e3638] rounded opacity-20 mb-4"></div>
                  <div className="w-32 h-4 bg-[#2e3638] rounded opacity-20 mb-2 ml-auto"></div>
                  <div className="w-40 h-4 bg-[#2e3638] rounded opacity-20 ml-auto"></div>
                </div>
              </div>
              <div className="space-y-4 mb-12">
                <div className="w-full h-4 bg-[#2e3638] rounded opacity-20"></div>
                <div className="w-3/4 h-4 bg-[#2e3638] rounded opacity-20"></div>
                <div className="w-5/6 h-4 bg-[#2e3638] rounded opacity-20"></div>
              </div>
              <div className="mt-auto border-t border-[#2e3638]/30 pt-6">
                <div className="flex justify-between mb-4">
                  <div className="w-32 h-4 bg-[#2e3638] rounded opacity-20"></div>
                  <div className="w-24 h-4 bg-[#2e3638] rounded opacity-20"></div>
                </div>
                <div className="flex justify-between">
                  <div className="w-40 h-6 bg-[#2e3638] rounded opacity-30"></div>
                  <div className="w-32 h-6 bg-[#2e3638] rounded opacity-30"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Operation Panel */}
          <section className="w-1/2 h-full bg-[#192122] flex flex-col border-l border-white/5">
            {/* Form Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pt-4 pb-6">
              <div className="max-w-xl mx-auto space-y-2">
                <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                  {/* Fatura Tarihi */}
                  <div className="col-span-2 sm:col-span-1 space-y-1">
                    <label className="text-[10px] font-medium text-[#bac9cc] tracking-wider uppercase">Fatura Tarihi</label>
                    <input className="w-full h-9 bg-[#080f11] border border-white/10 rounded-lg text-[13px] text-[#dce4e5] px-3 focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3]/50 transition-all [color-scheme:dark]" type="date" defaultValue="2025-05-25" />
                  </div>
                  {/* Fatura Numarası */}
                  <div className="col-span-2 sm:col-span-1 space-y-1">
                    <label className="text-[10px] font-medium text-[#bac9cc] tracking-wider uppercase">Fatura Numarası</label>
                    <input className="w-full h-9 bg-[#080f11] border border-white/10 rounded-lg text-[#dce4e5] px-3 focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3]/50 transition-all font-mono text-[13px]" type="text" defaultValue="SHE202500123" />
                  </div>
                  {/* Fatura Türü */}
                  <div className="col-span-2 sm:col-span-1 space-y-1">
                    <label className="text-[10px] font-medium text-[#bac9cc] tracking-wider uppercase">Fatura Türü</label>
                    <select className="w-full h-9 bg-[#080f11] border border-white/10 rounded-lg text-[13px] text-[#dce4e5] px-3 appearance-none focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3]/50 transition-all">
                      <option>Alış Faturası</option>
                      <option>Satış Faturası</option>
                    </select>
                  </div>
                  {/* VKN/TCKN */}
                  <div className="col-span-2 sm:col-span-1 space-y-1">
                    <label className="text-[10px] font-medium text-[#bac9cc] tracking-wider uppercase">VKN/TCKN</label>
                    <input className="w-full h-9 bg-[#080f11] border border-white/10 rounded-lg text-[#dce4e5] px-3 focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3]/50 transition-all font-mono text-[13px]" type="text" defaultValue="1234567890" />
                  </div>
                  {/* Açıklama */}
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] font-medium text-[#bac9cc] tracking-wider uppercase">Açıklama</label>
                    <input className="w-full h-9 bg-[#080f11] border border-white/10 rounded-lg text-[13px] text-[#dce4e5] px-3 focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3]/50 transition-all" type="text" defaultValue="Akaryakıt Alımı" />
                  </div>
                  {/* Tevkifat Oranı */}
                  <div className="col-span-2 sm:col-span-1 space-y-1">
                    <label className="text-[10px] font-medium text-[#bac9cc] tracking-wider uppercase">Tevkifat Oranı</label>
                    <select className="w-full h-9 bg-[#080f11] border border-white/10 rounded-lg text-[13px] text-[#dce4e5] px-3 appearance-none focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3]/50 transition-all">
                      <option>Yok</option>
                      <option>2/10</option>
                      <option>5/10</option>
                    </select>
                  </div>
                  {/* Özel Matrah */}
                  <div className="col-span-2 sm:col-span-1 space-y-1">
                    <label className="text-[10px] font-medium text-[#bac9cc] tracking-wider uppercase">Özel Matrah</label>
                    <input className="w-full h-9 bg-[#080f11] border border-white/10 rounded-lg text-[#dce4e5] px-3 text-right focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3]/50 transition-all font-mono text-[13px]" type="text" defaultValue="0.00" />
                  </div>
                  
                  {/* KDV Fields */}
                  <div className="col-span-2 grid grid-cols-5 gap-1.5">
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%1 KDV</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="0.00" /></div>
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%8 KDV</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="0.00" /></div>
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%10 KDV</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="0.00" /></div>
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%18 KDV</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="0.00" /></div>
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%20 KDV</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="200.00" /></div>
                  </div>
                  
                  {/* Matrah Fields */}
                  <div className="col-span-2 grid grid-cols-5 gap-1.5">
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%1 Matrah</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="0.00" /></div>
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%8 Matrah</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="0.00" /></div>
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%10 Matrah</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="0.00" /></div>
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%18 Matrah</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="0.00" /></div>
                    <div className="space-y-1"><label className="text-[9px] text-[#bac9cc] uppercase">%20 Matrah</label><input className="w-full h-8 bg-[#080f11] border border-white/10 rounded text-[12px] text-[#dce4e5] px-2 text-right" defaultValue="1,000.00" /></div>
                  </div>
                  
                  {/* Toplam */}
                  <div className="col-span-2 space-y-1 mt-2 bg-[#242b2d] p-4 rounded-lg border border-white/10">
                    <label className="text-[10px] font-medium text-[#bac9cc] tracking-wider uppercase">Toplam</label>
                    <div className="text-[#dce4e5] text-xl font-semibold font-mono">₺1,200.00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-white/5 bg-[#192122] flex justify-end mt-auto">
              <button className="px-5 py-2 rounded-lg bg-[#00daf3] text-[#004f58] text-[13px] hover:bg-[#00daf3]/90 transition-all shadow-[0_0_15px_rgba(0,218,243,0.2)] flex items-center gap-2 font-bold">
                Onayla ve Sonraki
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
