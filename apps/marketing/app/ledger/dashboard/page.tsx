"use client";

import React from "react";

export default function LedgerDashboard() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(139, 92, 246, 0.2); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(139, 92, 246, 0.4); }
        .icon-fill { font-variation-settings: 'FILL' 1; }
        .ai-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
      `}} />
      <div className="bg-[#0B0C10] text-gray-200 font-sans min-h-screen flex overflow-hidden">
        
        {/* Sol Menü (Sidebar Component) */}
        <nav className="w-[220px] h-screen fixed left-0 top-0 bg-[#0B0C10]/80 backdrop-blur-md border-r border-white/5 flex flex-col py-4 px-3 z-50">
          <div className="mb-8 flex items-center gap-3 px-2">
            <span className="material-symbols-outlined text-[#8B5CF6] text-2xl">psychology</span>
            <div>
              <h1 className="text-sm font-bold text-white m-0 leading-tight tracking-wide">Workigom v2</h1>
              <p className="text-[10px] text-gray-400 m-0">Yapay Zeka İşletim Sistemi</p>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <ul className="space-y-1 text-xs">
              <li>
                {/* Aktif Durum */}
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#8B5CF6]/10 text-[#D0BCFF] font-semibold border border-[#8B5CF6]/20 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px] icon-fill">dashboard</span> Panel
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">account_tree</span> İş Akışları
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">fact_check</span> Belge Onay
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">group</span> Mükellefler
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">analytics</span> Analitik
                </a>
              </li>
            </ul>
          </div>
          
          <div className="pt-4 border-t border-white/5 mt-auto">
            <ul className="space-y-1 text-xs mb-4">
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">settings</span> Ayarlar
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 px-3 p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center border border-[#8B5CF6]/30">
                <span className="material-symbols-outlined text-[#D0BCFF] text-sm icon-fill">person</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white font-medium truncate">Mali Müşavir Profili</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Üst Bar (Header Component) */}
        <header className="fixed top-0 right-0 w-[calc(100%-220px)] h-14 bg-[#0B0C10]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 ml-[220px] z-40">
          <div className="flex items-center w-1/3">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[18px]">search</span>
              <input 
                className="w-full bg-[#13151A] border border-white/5 text-white text-xs rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all placeholder-gray-500" 
                placeholder="Evrak, mükellef veya tedarikçi ara..." 
                type="text" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              <span className="material-symbols-outlined text-[#D0BCFF] text-[16px] icon-fill">memory</span>
              <span className="text-[11px] text-[#D0BCFF] font-medium tracking-wide">AI: 42 Evrak İşlendi</span>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
            </button>
          </div>
        </header>

        {/* Ana Panel Düzeni (Main Content Layout) */}
        <main className="ml-[220px] mt-14 flex-1 flex flex-col h-[calc(100vh-56px)] w-[calc(100%-220px)] relative p-2 gap-2">
          
          {/* Üst Kısım: Sütunlar */}
          <div className="flex-1 flex overflow-hidden gap-2">
            
            {/* 1. GELEN EVRAK (Inbox Panel) */}
            <div className="w-[260px] flex-shrink-0 flex flex-col bg-[#13151A] border border-white/5 rounded-xl overflow-hidden shadow-lg">
              <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-[#171A21]">
                <h2 className="text-[11px] text-white font-bold tracking-wider">GELEN EVRAK <span className="text-gray-500 font-normal ml-1">(12)</span></h2>
                <div className="flex gap-1">
                  <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-gray-400"><span className="material-symbols-outlined text-[16px]">filter_list</span></button>
                  <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-gray-400"><span className="material-symbols-outlined text-[16px]">sort</span></button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                {/* Aktif/Seçili Kart */}
                <div className="p-3 rounded-lg bg-[#1D1B26] border border-[#8B5CF6]/30 cursor-pointer relative shadow-[0_0_15px_rgba(139,92,246,0.05)]">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8B5CF6] rounded-l-lg shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[12px] font-semibold text-white">Shell Energy Ltd</span>
                    <span className="text-[10px] text-gray-400 font-mono">Bugün, 09:41</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[11px] text-gray-400 block mb-1">INV-2023-8991</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] ai-pulse shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
                        <span className="text-[9px] text-[#10B981] font-bold tracking-wider">HAZIR (%99)</span>
                      </div>
                    </div>
                    <span className="text-[12px] font-mono font-bold text-white">£450.20</span>
                  </div>
                </div>

                {/* İnceleme Kartı */}
                <div className="p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[12px] font-medium text-gray-200">AWS EMEA SARL</span>
                    <span className="text-[10px] text-gray-500 font-mono">Dün</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[11px] text-gray-500 block mb-1">12489992</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_5px_rgba(245,158,11,0.8)]"></div>
                        <span className="text-[9px] text-[#F59E0B] font-bold tracking-wider">İNCELEME (%64)</span>
                      </div>
                    </div>
                    <span className="text-[12px] font-mono font-medium text-gray-300">£1,240.00</span>
                  </div>
                </div>

                {/* Hazır Kart */}
                <div className="p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[12px] font-medium text-gray-200">Adobe Systems</span>
                    <span className="text-[10px] text-gray-500 font-mono">12 Ekim</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[11px] text-gray-500 block mb-1">ADB-441-A</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-[9px] text-[#10B981] font-bold tracking-wider">HAZIR (%98)</span>
                      </div>
                    </div>
                    <span className="text-[12px] font-mono font-medium text-gray-300">£54.99</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. DOKÜMAN ÖNİZLEME (PDF Viewer) */}
            <div className="flex-1 min-w-[300px] flex flex-col bg-[#13151A] border border-white/5 rounded-xl overflow-hidden shadow-lg">
              <div className="px-3 py-2.5 border-b border-white/5 flex justify-between items-center bg-[#171A21]">
                <div className="flex items-center gap-3">
                  <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 text-gray-400 transition-colors"><span className="material-symbols-outlined text-[16px]">view_sidebar</span></button>
                  <div className="h-4 w-px bg-white/10"></div>
                  <span className="text-[11px] font-mono text-gray-300">INV-2023-8991.pdf</span>
                </div>
                <div className="flex items-center bg-[#0B0C10] rounded-lg p-0.5 border border-white/5">
                  <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 text-gray-400 transition-colors"><span className="material-symbols-outlined text-[16px]">zoom_out</span></button>
                  <span className="text-[10px] font-mono text-white px-2">%100</span>
                  <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 text-gray-400 transition-colors"><span className="material-symbols-outlined text-[16px]">zoom_in</span></button>
                  <div className="w-px h-4 bg-white/10 mx-1"></div>
                  <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 text-gray-400 transition-colors"><span className="material-symbols-outlined text-[16px]">rotate_right</span></button>
                </div>
              </div>
              
              <div className="flex-1 flex overflow-hidden bg-[#090A0D] relative p-6 items-center justify-center">
                {/* Fake Document Wrapper */}
                <div className="w-full max-w-[360px] aspect-[1/1.4] bg-gray-200 rounded-sm shadow-2xl relative overflow-hidden border border-white/10">
                  <div className="bg-cover bg-center w-full h-full opacity-90 mix-blend-multiply bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkDQVfvyqRW-rDkXjmdVFTEHxeVi5IN48C3MFTjNGepYvzkUd56nJqI57ssgrvn_dXO2oBkkcLeGeiTw3vOKDD6FiJYWzRZ57ToX2RjpfPT6iYVI7fXXl9niCal96ghcjJ4iSrmeZAoyecu6fJ_AXd8g0uYN5xRFh7YNT_rzhlG2_P9EgGiLC0hpUTU2fCfBnf7vK-hGbI3iyCbyVJ84zs3a8TTBBujiSBoqt4agRZAbR4T6SyGxw9bX5t1OvSYRDhqgtPfcMMH18')]"></div>
                  
                  {/* Highlight bounding boxes (Yapay zeka tarama kutucukları) */}
                  <div className="absolute top-[14%] right-[8%] w-[28%] h-[3.5%] border-[1.5px] border-[#10B981] bg-[#10B981]/10 rounded-sm shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                  <div className="absolute top-[26%] left-[9%] w-[38%] h-[7%] border-[1.5px] border-[#00F0FF] bg-[#00F0FF]/10 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
                  <div className="absolute bottom-[22%] right-[8%] w-[22%] h-[2.5%] border-[1.5px] border-[#F59E0B] bg-[#F59E0B]/10 rounded-sm shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
                </div>
              </div>
            </div>

            {/* 3. AYRIŞTIRILAN VERİLER VE AI ANALİZİ (Sağ Sütun) */}
            <div className="flex flex-shrink-0 gap-2 w-[540px]">
              
              {/* Sol Bölme (Ayrıştırılan Veriler) */}
              <div className="flex-1 flex flex-col bg-[#13151A] border border-white/5 rounded-xl overflow-hidden shadow-lg">
                <div className="px-4 py-3 border-b border-white/5 bg-[#171A21]">
                  <h2 className="text-[11px] text-white font-bold tracking-wider">AYRIŞTIRILAN VERİLER</h2>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
                  <div>
                    <label className="text-[10px] text-gray-400 mb-1.5 block font-medium">Tedarikçi Adı</label>
                    <div className="relative group">
                      <input className="w-full bg-[#0B0C10] border border-white/10 text-white text-[12px] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#8B5CF6] transition-colors" type="text" defaultValue="Shell Energy Ltd" />
                      <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[#8B5CF6] text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">auto_awesome</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-[10px] text-gray-400 mb-1.5 block font-medium">Fatura Numarası</label>
                    <input className="w-full bg-[#0B0C10] border border-white/10 text-white text-[12px] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#8B5CF6] transition-colors" type="text" defaultValue="INV-2023-8991" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-gray-400 mb-1.5 block font-medium">Düzenleme Tarihi</label>
                      <input className="w-full bg-[#0B0C10] border border-white/10 text-white text-[12px] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#8B5CF6] transition-colors" type="text" defaultValue="24 Eki 2023" />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 mb-1.5 block font-medium">Vade Tarihi</label>
                      <input className="w-full bg-[#0B0C10] border border-white/10 text-white text-[12px] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#8B5CF6] transition-colors" type="text" defaultValue="24 Kas 2023" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-[10px] text-gray-400 mb-1.5 block font-medium">Kategori</label>
                    <div className="relative">
                      <select className="w-full bg-[#0B0C10] border border-white/10 text-white text-[12px] rounded-lg pl-3 pr-8 py-2.5 appearance-none focus:outline-none focus:border-[#8B5CF6] transition-colors">
                        <option>Kamu Hizmetleri - Enerji</option>
                        <option>Ofis Giderleri</option>
                        <option>Yazılım Abonelikleri</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-[18px] pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-[10px] text-gray-400 font-medium">Vergi No / VKN</label>
                      <span className="text-[9px] text-[#F59E0B] font-bold bg-[#F59E0B]/10 px-1.5 py-0.5 rounded border border-[#F59E0B]/20">Düşük Güven Oranı</span>
                    </div>
                    <input className="w-full bg-[#0B0C10] border border-[#F59E0B]/50 shadow-[0_0_10px_rgba(245,158,11,0.1)] text-white text-[12px] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#F59E0B] transition-colors" type="text" defaultValue="GB82381283" />
                  </div>
                </div>
              </div>

              {/* Sağ Bölme (AI Analizi) */}
              <div className="flex-1 flex flex-col bg-[#13151A] border border-white/5 rounded-xl overflow-hidden shadow-lg relative">
                {/* Subtle Lilac Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="px-4 py-3 border-b border-white/5 bg-[#171A21] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#8B5CF6] text-[16px] icon-fill">memory</span>
                  <h2 className="text-[11px] text-[#D0BCFF] font-bold tracking-wider">AI ANALİZİ</h2>
                </div>
                
                <div className="p-4 space-y-5 flex-1 overflow-y-auto custom-scrollbar relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 border border-[#10B981]/20">
                      <span className="material-symbols-outlined text-[#10B981] text-[14px] icon-fill">check_circle</span>
                    </div>
                    <div>
                      <p className="text-[12px] text-white font-semibold">Tedarikçi Tanımlandı</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">Eşleşen Cari ID: V-8891 (%99.6)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 border border-[#10B981]/20">
                      <span className="material-symbols-outlined text-[#10B981] text-[14px] icon-fill">label</span>
                    </div>
                    <div>
                      <p className="text-[12px] text-white font-semibold">Kategori Önerildi</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">Geçmiş verilere dayalı Enerji ataması.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 border border-[#10B981]/20">
                      <span className="material-symbols-outlined text-[#10B981] text-[14px] icon-fill">account_balance</span>
                    </div>
                    <div>
                      <p className="text-[12px] text-white font-semibold">Hesap Kodu: 760</p>
                      <p className="text-[10px] text-[#8B5CF6] font-mono mt-0.5">Kural tetiklendi: "Shell Varsayılan"</p>
                    </div>
                  </div>
                </div>
                
                {/* Aksiyon Butonları */}
                <div className="p-4 bg-[#171A21] border-t border-white/5 flex flex-col gap-2 relative z-10">
                  <button className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-[12px] font-bold py-3 px-4 rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex justify-center items-center gap-2 group">
                    <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform icon-fill">done_all</span> Onayla ve İşle
                  </button>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#0B0C10] text-gray-300 text-[11px] font-medium py-2.5 px-3 rounded-lg border border-white/10 hover:bg-white/5 hover:text-white transition-colors text-center">
                      Taslağı Düzenle
                    </button>
                    <button className="flex-1 bg-[#0B0C10] text-[#EF4444] text-[11px] font-medium py-2.5 px-3 rounded-lg border border-[#EF4444]/30 hover:bg-[#EF4444]/10 transition-colors text-center">
                      Reddet
                    </button>
                  </div>
                  <button className="w-full bg-transparent text-[#D0BCFF] text-[11px] font-medium py-2 px-3 rounded-lg border border-dashed border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10 transition-colors text-center flex justify-center items-center gap-1.5 mt-1">
                    <span className="material-symbols-outlined text-[14px]">school</span> Yapay Zekayı Eğit
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          {/* Alt Tablo (Fatura Satırları / Line Items) */}
          <div className="h-[180px] flex-shrink-0 bg-[#13151A] border border-white/5 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <div className="px-4 py-2.5 border-b border-white/5 bg-[#171A21] flex justify-between items-center">
              <h2 className="text-[11px] text-white font-bold tracking-wider">FATURA SATIRLARI</h2>
              <div className="flex items-center gap-5">
                <span className="text-[11px] font-mono text-gray-400">Matrah: £375.17</span>
                <span className="text-[11px] font-mono text-gray-400">KDV: £75.03</span>
                <span className="text-[12px] font-mono font-bold text-[#D0BCFF]">Genel Toplam: £450.20</span>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#0B0C10] sticky top-0 z-10 border-b border-white/5">
                  <tr>
                    <th className="px-4 py-2.5 text-[10px] text-gray-500 font-semibold w-10">#</th>
                    <th className="px-4 py-2.5 text-[10px] text-gray-500 font-semibold">Açıklama</th>
                    <th className="px-4 py-2.5 text-[10px] text-gray-500 font-semibold w-24">Hesap Kodu</th>
                    <th className="px-4 py-2.5 text-[10px] text-gray-500 font-semibold text-right w-20">Adet</th>
                    <th className="px-4 py-2.5 text-[10px] text-gray-500 font-semibold text-right w-24">Birim Fiyat</th>
                    <th className="px-4 py-2.5 text-[10px] text-gray-500 font-semibold w-28">KDV Oranı</th>
                    <th className="px-4 py-2.5 text-[10px] text-gray-500 font-semibold text-right w-28">Toplam</th>
                    <th className="px-4 py-2.5 w-12"></th>
                  </tr>
                </thead>
                <tbody className="text-[12px] text-gray-200">
                  <tr className="hover:bg-white/5 border-b border-white/5 group transition-colors">
                    <td className="px-4 py-2.5 text-gray-500 font-mono">1</td>
                    <td className="px-4 py-2.5 text-white">Electricity Supply - Oct 23</td>
                    <td className="px-4 py-2.5 font-mono text-[#00F0FF] font-medium">760</td>
                    <td className="px-4 py-2.5 text-right font-mono">1.00</td>
                    <td className="px-4 py-2.5 text-right font-mono">£375.17</td>
                    <td className="px-4 py-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">20% (S)</span>
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono font-bold text-white">£450.20</td>
                    <td className="px-4 py-2.5 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-gray-500 hover:text-[#EF4444] transition-colors flex items-center justify-center w-full">
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                    <td className="px-4 py-2.5 text-gray-600 font-mono group-hover:text-gray-400">+</td>
                    <td className="px-4 py-2.5 text-gray-500 italic text-[11px] group-hover:text-gray-400">Yeni satır ekle...</td>
                    <td colSpan={6}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </main>
      </div>
    </>
  );
}
