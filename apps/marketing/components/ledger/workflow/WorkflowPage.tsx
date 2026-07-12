'use client';
import React from 'react';

export default function WorkflowPage() {
  return (
    <div className="flex h-[calc(100vh-64px)] w-full overflow-hidden text-on-surface -m-6 w-[calc(100%+48px)]">
      {/* Left Main Content */}
      <div className="flex-1 flex flex-col min-w-0 p-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-2xl">monitoring</span>
              İş Akışı
            </h1>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Evrakların işlem sürecini takip edin</p>
          </div>
          
          <div className="flex gap-4">
            <div className="glass-panel p-4 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 rounded-lg bg-secondary-container/10 border border-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-container text-lg">description</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold mb-0.5">Toplam Evrak</span>
                <span className="text-xl font-bold text-white leading-none">203</span>
              </div>
            </div>
            
            <div className="glass-panel p-4 flex items-center gap-4 min-w-[220px]">
              <div className="w-10 h-10 rounded-lg bg-tertiary-container/10 border border-tertiary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary-container text-lg">payments</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold mb-0.5">Toplam Tutar</span>
                <span className="text-xl font-bold text-white leading-none">₺2.458.750,<span className="text-sm text-on-surface-variant">00</span></span>
              </div>
            </div>
            
            <div className="glass-panel p-4 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 rounded-lg bg-[#00daf3]/10 border border-[#00daf3]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#00daf3] text-lg glow-text">check_circle</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold mb-0.5">Bugün İşlenen</span>
                <span className="text-xl font-bold text-white leading-none">47</span>
              </div>
            </div>
            
            <div className="glass-panel p-4 flex items-center gap-4 min-w-[220px]">
              <div className="w-10 h-10 rounded-lg bg-error/10 border border-error/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-error text-lg">schedule</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold mb-0.5">Ortalama İşlem Süresi</span>
                <span className="text-xl font-bold text-white leading-none">2sa 14dk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
              <input 
                className="bg-surface-container/50 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-[11px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary-container w-48 transition-all" 
                placeholder="Evrak ara..." 
                type="text"
              />
            </div>
            <select className="bg-surface-container/50 border border-white/10 rounded-lg px-3 py-1.5 text-[11px] font-medium text-on-surface-variant focus:outline-none appearance-none cursor-pointer pr-8 bg-no-repeat bg-[url('data:image/svg+xml;utf8,<svg fill=\"%238B949E\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')] bg-[position:right_4px_center] bg-[length:16px]">
              <option>Tüm Mükellefler</option>
            </select>
            <select className="bg-surface-container/50 border border-white/10 rounded-lg px-3 py-1.5 text-[11px] font-medium text-on-surface-variant focus:outline-none appearance-none cursor-pointer pr-8 bg-no-repeat bg-[url('data:image/svg+xml;utf8,<svg fill=\"%238B949E\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')] bg-[position:right_4px_center] bg-[length:16px]">
              <option>Tüm Kaynaklar</option>
            </select>
            <select className="bg-surface-container/50 border border-white/10 rounded-lg px-3 py-1.5 text-[11px] font-medium text-on-surface-variant focus:outline-none appearance-none cursor-pointer pr-8 bg-no-repeat bg-[url('data:image/svg+xml;utf8,<svg fill=\"%238B949E\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')] bg-[position:right_4px_center] bg-[length:16px]">
              <option>Tüm Türler</option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <button className="flex items-center gap-1 bg-surface-container/50 border border-white/10 rounded-lg px-3 py-1.5 text-[11px] font-medium text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[14px]">swap_vert</span> Tarih (Yeni → Eski) <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
            <div className="flex bg-surface-container/50 border border-white/10 rounded-lg p-0.5">
              <button className="p-1 rounded bg-white/10 text-white"><span className="material-symbols-outlined text-[14px]">view_column</span></button>
              <button className="p-1 rounded text-on-surface-variant hover:text-white"><span className="material-symbols-outlined text-[14px]">view_list</span></button>
            </div>
            <button className="p-1.5 rounded-lg border border-white/10 bg-surface-container/50 text-on-surface-variant hover:text-white">
              <span className="material-symbols-outlined text-[14px]">filter_list</span>
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          
          {/* Col 1: Yeni Geldi */}
          <div className="flex flex-col min-w-[280px] w-[280px]">
            <div className="flex items-center justify-between mb-3 pl-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#9D5CFF] text-[16px]">download</span>
                <h2 className="text-[12px] font-semibold text-white">Yeni Geldi</h2>
              </div>
              <span className="bg-[#9D5CFF]/20 text-[#9D5CFF] text-[10px] font-bold px-2 py-0.5 rounded-full">18</span>
            </div>
            <p className="text-[9px] text-on-surface-variant mb-3 pl-2">AI tarafından okunmayı bekliyor</p>
            <div className="flex flex-col gap-3">
              {/* Card 1 */}
              <div className="bg-surface-container-high/40 border border-white/5 rounded-xl p-3 hover:border-white/10 transition-colors cursor-pointer group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-[14px] shrink-0">M</div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Migros Ticaret A.Ş.</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 25.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white mb-3 ml-11">₺18.250,00</div>
                <div className="flex items-center gap-2 ml-11">
                  <span className="text-[9px] font-medium text-[#9D5CFF] bg-[#9D5CFF]/10 px-1.5 py-0.5 rounded border border-[#9D5CFF]/20">e-Arşiv</span>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-center text-[9px] ml-11">
                  <span className="text-[#00daf3] flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">chat</span> WhatsApp</span>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-surface-container-high/40 border border-white/5 rounded-xl p-3 hover:border-white/10 transition-colors cursor-pointer group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold shrink-0">
                     <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png" className="w-5 h-5 object-contain" alt="Shell" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Shell Türkiye</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 25.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white mb-3 ml-11">₺32.450,00</div>
                <div className="flex items-center gap-2 ml-11">
                  <span className="text-[9px] font-medium text-secondary-container bg-secondary-container/10 px-1.5 py-0.5 rounded border border-secondary-container/20">e-Fatura</span>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-center text-[9px] ml-11">
                  <span className="text-secondary-container flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">mail</span> E-posta</span>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-surface-container-high/40 border border-white/5 rounded-xl p-3 hover:border-white/10 transition-colors cursor-pointer group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-[14px] shrink-0">a</div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Amazon Turkey</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 24.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white mb-3 ml-11">₺9.780,00</div>
                <div className="flex items-center gap-2 ml-11">
                  <span className="text-[9px] font-medium text-[#9D5CFF] bg-[#9D5CFF]/10 px-1.5 py-0.5 rounded border border-[#9D5CFF]/20">e-Arşiv</span>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-center text-[9px] ml-11">
                  <span className="text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">public</span> Portal</span>
                </div>
              </div>
              
              <button className="w-full py-2.5 border border-dashed border-white/10 rounded-xl text-[10px] font-semibold text-on-surface-variant hover:text-white hover:border-white/20 transition-colors flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">add</span> Dosya ekle veya sürükle
              </button>
            </div>
          </div>

          {/* Col 2: AI İşliyor */}
          <div className="flex flex-col min-w-[280px] w-[280px]">
            <div className="flex items-center justify-between mb-3 pl-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-[16px] animate-pulse">robot_2</span>
                <h2 className="text-[12px] font-semibold text-white">AI İşliyor</h2>
              </div>
              <span className="bg-secondary-container/20 text-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full">6</span>
            </div>
            <p className="text-[9px] text-on-surface-variant mb-3 pl-2">AI okuma ve analiz yapıyor</p>
            <div className="flex flex-col gap-3">
              <div className="bg-surface-container-high/40 border border-secondary-container/30 rounded-xl p-3 shadow-[0_0_15px_rgba(79,142,255,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary-container/20">
                  <div className="h-full bg-secondary-container w-[72%] shadow-[0_0_10px_rgba(79,142,255,0.8)]"></div>
                </div>
                <div className="flex items-center gap-3 mb-2 pt-1">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-secondary-container" strokeDasharray="72, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute text-[8px] font-bold text-white">%72</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Shell Türkiye</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 25.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white/50 mb-3 ml-11">₺27.890,00</div>
                <div className="mt-2 flex justify-center items-center text-[9px] text-secondary-container font-medium gap-1 animate-pulse">
                  Okunuyor... <span className="material-symbols-outlined text-[12px] animate-spin">progress_activity</span>
                </div>
              </div>
              
              <div className="bg-surface-container-high/40 border border-secondary-container/30 rounded-xl p-3 shadow-[0_0_15px_rgba(79,142,255,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary-container/20">
                  <div className="h-full bg-secondary-container w-[48%] shadow-[0_0_10px_rgba(79,142,255,0.8)]"></div>
                </div>
                <div className="flex items-center gap-3 mb-2 pt-1">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-secondary-container" strokeDasharray="48, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute text-[8px] font-bold text-white">%48</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">A101 Yeni Mağazacılık</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 25.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white/50 mb-3 ml-11">₺7.450,00</div>
                <div className="mt-2 flex justify-center items-center text-[9px] text-secondary-container font-medium gap-1 animate-pulse">
                  Analiz ediliyor... <span className="material-symbols-outlined text-[12px] animate-spin">progress_activity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Kontrol Bekliyor */}
          <div className="flex flex-col min-w-[280px] w-[280px]">
            <div className="flex items-center justify-between mb-3 pl-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container text-[16px]">error</span>
                <h2 className="text-[12px] font-semibold text-white">Kontrol Bekliyor</h2>
              </div>
              <span className="bg-tertiary-container/20 text-tertiary-container text-[10px] font-bold px-2 py-0.5 rounded-full">9</span>
            </div>
            <p className="text-[9px] text-on-surface-variant mb-3 pl-2">Muhasebeci kontrolü gerekli</p>
            <div className="flex flex-col gap-3">
              <div className="bg-surface-container-high/40 border border-tertiary-container/30 rounded-xl p-3 hover:border-tertiary-container/50 transition-colors cursor-pointer group shadow-[0_0_10px_rgba(254,201,49,0.05)]">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-[14px] shrink-0">M</div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Migros Ticaret A.Ş.</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 25.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white mb-2 ml-11">₺18.250,00</div>
                <div className="flex items-center gap-2 ml-11 mb-2">
                  <span className="text-[9px] font-bold text-tertiary-container bg-tertiary-container/10 px-1.5 py-0.5 rounded border border-tertiary-container/30">770</span>
                  <span className="text-[9px] text-on-surface-variant">Market Alışverişi</span>
                </div>
                <div className="ml-11 text-[9px] text-on-surface-variant mb-3">KDV %20</div>
                <div className="mt-2 pt-2 border-t border-white/5 flex justify-end">
                  <div className="w-5 h-5 rounded-full bg-surface-bright flex items-center justify-center text-[8px] font-bold border border-white/10">VK</div>
                </div>
              </div>
              
              <div className="bg-surface-container-high/40 border border-tertiary-container/30 rounded-xl p-3 hover:border-tertiary-container/50 transition-colors cursor-pointer group shadow-[0_0_10px_rgba(254,201,49,0.05)]">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-[14px] shrink-0">a</div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Amazon Turkey</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 24.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white mb-2 ml-11">₺9.780,00</div>
                <div className="flex items-center gap-2 ml-11 mb-2">
                  <span className="text-[9px] font-bold text-tertiary-container bg-tertiary-container/10 px-1.5 py-0.5 rounded border border-tertiary-container/30">770</span>
                  <span className="text-[9px] text-on-surface-variant">E-Ticaret Gideri</span>
                </div>
                <div className="ml-11 text-[9px] text-on-surface-variant mb-3">KDV %20</div>
                <div className="mt-2 pt-2 border-t border-white/5 flex justify-end">
                  <img src="https://i.pravatar.cc/150?u=a" className="w-5 h-5 rounded-full border border-white/10" alt="Avatar" />
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Düzenleniyor */}
          <div className="flex flex-col min-w-[280px] w-[280px]">
            <div className="flex items-center justify-between mb-3 pl-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#9D5CFF] text-[16px]">edit</span>
                <h2 className="text-[12px] font-semibold text-white">Düzenleniyor</h2>
              </div>
              <span className="bg-[#9D5CFF]/20 text-[#9D5CFF] text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
            </div>
            <p className="text-[9px] text-on-surface-variant mb-3 pl-2">Aktif olarak düzenleniyor</p>
            <div className="flex flex-col gap-3">
              <div className="bg-surface-container-high/40 border border-[#9D5CFF]/30 rounded-xl p-3 hover:border-[#9D5CFF]/50 transition-colors cursor-pointer group shadow-[0_0_10px_rgba(157,92,255,0.05)]">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold text-[14px] shrink-0">
                    <span className="material-symbols-outlined text-lg">water_drop</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Türk Telekom</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 24.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white mb-2 ml-11">₺12.350,00</div>
                <div className="flex items-center gap-2 ml-11 mb-2">
                  <span className="text-[9px] font-bold text-[#9D5CFF] bg-[#9D5CFF]/10 px-1.5 py-0.5 rounded border border-[#9D5CFF]/30">770</span>
                  <span className="text-[9px] text-on-surface-variant">Haberleşme Gideri</span>
                </div>
                <div className="ml-11 text-[9px] text-on-surface-variant mb-3">KDV %20</div>
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center gap-2">
                  <img src="https://i.pravatar.cc/150?u=b" className="w-4 h-4 rounded-full border border-white/10" alt="Avatar" />
                  <span className="text-[9px] text-on-surface-variant">Elif A. düzenliyor <span className="inline-block w-1 h-1 rounded-full bg-primary-container animate-pulse ml-1"></span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 5: Onaylandı */}
          <div className="flex flex-col min-w-[280px] w-[280px]">
            <div className="flex items-center justify-between mb-3 pl-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-[16px] glow-text">check_circle</span>
                <h2 className="text-[12px] font-semibold text-white">Onaylandı</h2>
              </div>
              <span className="bg-primary-container/20 text-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full">41</span>
            </div>
            <p className="text-[9px] text-on-surface-variant mb-3 pl-2">Onaylandı, entegrasyona hazır</p>
            <div className="flex flex-col gap-3">
              <div className="bg-surface-container-high/40 border border-primary-container/20 rounded-xl p-3 hover:border-primary-container/40 transition-colors cursor-pointer group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-lg">account_balance</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Garanti BBVA</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 24.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white mb-2 ml-11">₺45.600,00</div>
                <div className="flex items-center gap-2 ml-11 mb-2">
                  <span className="text-[9px] font-bold text-primary-container bg-primary-container/10 px-1.5 py-0.5 rounded border border-primary-container/30">102</span>
                  <span className="text-[9px] text-on-surface-variant">Banka Gideri</span>
                </div>
                <div className="ml-11 text-[9px] text-on-surface-variant">KDV %10</div>
              </div>
            </div>
          </div>

          {/* Col 6: Muhasebeleşti */}
          <div className="flex flex-col min-w-[280px] w-[280px]">
            <div className="flex items-center justify-between mb-3 pl-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00daf3] text-[16px]">cloud_done</span>
                <h2 className="text-[12px] font-semibold text-white">Muhasebeleşti</h2>
              </div>
              <span className="bg-[#00daf3]/20 text-[#00daf3] text-[10px] font-bold px-2 py-0.5 rounded-full">37</span>
            </div>
            <p className="text-[9px] text-on-surface-variant mb-3 pl-2">Muhasebeleştirildi</p>
            <div className="flex flex-col gap-3">
              <div className="bg-surface-container-high/40 border border-[#00daf3]/20 rounded-xl p-3 hover:border-[#00daf3]/40 transition-colors cursor-pointer group opacity-70">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-500 flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-lg">account_balance</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold text-white leading-tight">Ziraat Bankası</h3>
                    <p className="text-[9px] text-on-surface-variant mt-0.5">Fatura • 24.05.2025</p>
                  </div>
                </div>
                <div className="text-[14px] font-bold text-white mb-2 ml-11">₺12.500,00</div>
                <div className="flex items-center gap-2 ml-11 mb-2">
                  <span className="text-[9px] font-bold text-[#00daf3] bg-[#00daf3]/10 px-1.5 py-0.5 rounded border border-[#00daf3]/30">102</span>
                  <span className="text-[9px] text-on-surface-variant">Banka Gideri</span>
                </div>
                <div className="ml-11 text-[9px] text-on-surface-variant mb-3">KDV %10</div>
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[9px] text-primary-container">
                  <span className="material-symbols-outlined text-[12px]">done_all</span> ERP'ye aktarıldı
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer: Shortcuts */}
        <div className="h-10 mt-2 shrink-0 border-t border-white/5 flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary-container text-[14px]">lightbulb</span>
            <span className="text-tertiary-container text-[10px] font-bold">İpucu:</span>
            <span className="text-on-surface-variant text-[10px]">Kartları sürükleyip bırakarak durumlarını değiştirebilirsiniz. Klavye kısayolları:</span>
            <div className="flex gap-1.5 items-center ml-2">
              <span className="text-[9px] bg-surface-container-high px-1.5 py-0.5 rounded text-white border border-white/10 flex items-center"><span className="material-symbols-outlined text-[12px]">arrow_back</span> <span className="material-symbols-outlined text-[12px]">arrow_forward</span></span>
              <span className="text-on-surface-variant text-[9px]">sütunlar arası geçiş</span>
              <span className="text-[9px] bg-surface-container-high px-1.5 py-0.5 rounded text-white border border-white/10 ml-2">Space</span>
              <span className="text-on-surface-variant text-[9px]">onayla</span>
              <span className="text-[9px] bg-surface-container-high px-1.5 py-0.5 rounded text-white border border-white/10 ml-2">D</span>
              <span className="text-on-surface-variant text-[9px]">detay aç</span>
            </div>
          </div>
          <button className="flex items-center gap-1 bg-surface-container/50 border border-white/10 rounded px-2 py-1 text-[9px] text-on-surface-variant hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[12px]">keyboard</span> Tüm kısayolları gör
          </button>
        </div>
        
      </div>

      {/* Right Sidebar: AI Operations */}
      <div className="w-[320px] flex-shrink-0 border-l border-white/5 bg-surface/30 backdrop-blur-md flex flex-col pt-6 pb-6 px-4">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9D5CFF] to-primary-container p-[1px] relative shadow-[0_0_15px_rgba(157,92,255,0.4)]">
            <div className="w-full h-full bg-surface-container-high rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9D5CFF]/20 to-primary-container/20"></div>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#10B981] rounded-full border-2 border-surface"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-white leading-tight">Ledger AI</span>
            <span className="text-[10px] text-[#10B981] flex items-center gap-1 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span> Çevrimiçi</span>
          </div>
        </div>



        {/* Hızlı İşlemler */}
        <div>
          <h3 className="text-[12px] font-semibold text-white mb-3">Hızlı İşlemler</h3>
          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container/30 border border-white/5 hover:border-white/10 hover:bg-surface-container/50 transition-all text-left group">
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-white transition-colors">add</span>
              <span className="text-[11px] font-medium text-on-surface-variant group-hover:text-white transition-colors">Evrak Yükle</span>
            </button>
            <button className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container/30 border border-white/5 hover:border-white/10 hover:bg-surface-container/50 transition-all text-left group">
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-white transition-colors">check_circle</span>
              <span className="text-[11px] font-medium text-on-surface-variant group-hover:text-white transition-colors">Toplu Onay</span>
            </button>
            <button className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container/30 border border-white/5 hover:border-white/10 hover:bg-surface-container/50 transition-all text-left group">
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-white transition-colors">download</span>
              <span className="text-[11px] font-medium text-on-surface-variant group-hover:text-white transition-colors">Dışa Aktar</span>
            </button>
            <button className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container/30 border border-white/5 hover:border-white/10 hover:bg-surface-container/50 transition-all text-left group">
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-white transition-colors">sync</span>
              <span className="text-[11px] font-medium text-on-surface-variant group-hover:text-white transition-colors">Entegrasyon Gönder</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
