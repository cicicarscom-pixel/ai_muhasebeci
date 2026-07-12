'use client';
import React from 'react';

export default function WorkflowPage() {
  return (
    <div className="flex flex-col h-full w-full bg-[#0E1117] text-white p-6 overflow-hidden">
      
      {/* Top Bar: Stats & Filters Button */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-4">
          {/* Stat Card 1 */}
          <div className="bg-[#161B22] border border-white/5 rounded-xl p-4 flex items-center gap-4 min-w-[200px]">
            <div className="w-10 h-10 rounded-lg bg-[#1F2937] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#00daf3]">description</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#8B949E] font-medium mb-1">Toplam Evrak</span>
              <div className="flex items-end gap-3">
                <span className="text-xl font-bold leading-none">203</span>
                <span className="text-[11px] font-bold text-[#3FB950] flex items-center">
                  <span className="material-symbols-outlined text-[14px]">call_made</span> %12
                </span>
              </div>
            </div>
          </div>
          
          {/* Stat Card 2 */}
          <div className="bg-[#161B22] border border-white/5 rounded-xl p-4 flex items-center gap-4 min-w-[240px]">
            <div className="w-10 h-10 rounded-lg bg-[#4D3A1E] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#E3B341]">payments</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#8B949E] font-medium mb-1">Toplam Tutar</span>
              <div className="flex items-end gap-3">
                <span className="text-xl font-bold leading-none">₺2.458.750,00</span>
                <span className="text-[11px] font-bold text-[#3FB950] flex items-center">
                  <span className="material-symbols-outlined text-[14px]">call_made</span> %8
                </span>
              </div>
            </div>
          </div>
          
          {/* Stat Card 3 */}
          <div className="bg-[#161B22] border border-white/5 rounded-xl p-4 flex items-center gap-4 min-w-[200px]">
            <div className="w-10 h-10 rounded-lg bg-[#1B2A2A] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#3FB950]">check_circle</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#8B949E] font-medium mb-1">Bugün İşlenen</span>
              <div className="flex items-end gap-3">
                <span className="text-xl font-bold leading-none">47</span>
                <span className="text-[11px] font-bold text-[#3FB950] flex items-center">
                  <span className="material-symbols-outlined text-[14px]">call_made</span> %25
                </span>
              </div>
            </div>
          </div>
          
          {/* Stat Card 4 */}
          <div className="bg-[#161B22] border border-white/5 rounded-xl p-4 flex items-center gap-4 min-w-[220px]">
            <div className="w-10 h-10 rounded-lg bg-[#3A1D1D] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#F85149]">schedule</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#8B949E] font-medium mb-1">Ortalama İşlem Süresi</span>
              <div className="flex items-end gap-3">
                <span className="text-xl font-bold leading-none">2sa 14dk</span>
                <span className="text-[11px] font-bold text-[#F85149] flex items-center">
                  <span className="material-symbols-outlined text-[14px]">call_received</span> %5
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filters Button */}
        <button className="flex items-center gap-2 bg-[#161B22] border border-white/10 rounded-lg px-4 py-2.5 text-[12px] font-medium text-[#8B949E] hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[16px]">filter_alt</span>
          Filtreler
          <span className="text-[14px] ml-1">+</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-3">
          <select className="bg-[#161B22] border border-white/5 rounded-lg px-3 py-2 text-[12px] text-[#8B949E] focus:outline-none appearance-none cursor-pointer pr-8 bg-no-repeat bg-[url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22%238B949E%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_8px_center] bg-[length:16px]">
            <option>Tüm Mükellefler</option>
          </select>
          <select className="bg-[#161B22] border border-white/5 rounded-lg px-3 py-2 text-[12px] text-[#8B949E] focus:outline-none appearance-none cursor-pointer pr-8 bg-no-repeat bg-[url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22%238B949E%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_8px_center] bg-[length:16px]">
            <option>Tüm Kaynaklar</option>
          </select>
          <select className="bg-[#161B22] border border-white/5 rounded-lg px-3 py-2 text-[12px] text-[#8B949E] focus:outline-none appearance-none cursor-pointer pr-8 bg-no-repeat bg-[url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22%238B949E%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_8px_center] bg-[length:16px]">
            <option>Tüm Türler</option>
          </select>
          <select className="bg-[#161B22] border border-white/5 rounded-lg px-3 py-2 text-[12px] text-[#8B949E] focus:outline-none appearance-none cursor-pointer pr-8 bg-no-repeat bg-[url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22%238B949E%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_8px_center] bg-[length:16px]">
            <option>Tüm Sorumlular</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <button className="flex items-center gap-1 bg-[#161B22] border border-white/5 rounded-lg px-3 py-2 text-[12px] text-[#8B949E] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[16px]">swap_vert</span> Tarih (Yeni → Eski) <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          <div className="flex bg-[#161B22] border border-white/5 rounded-lg p-1 gap-1">
            <button className="p-1 rounded bg-[#2D333B] text-white"><span className="material-symbols-outlined text-[16px]">grid_view</span></button>
            <button className="p-1 rounded text-[#8B949E] hover:text-white"><span className="material-symbols-outlined text-[16px]">view_column</span></button>
          </div>
          <button className="p-2 rounded-lg border border-white/5 bg-[#161B22] text-[#8B949E] hover:text-white">
            <span className="material-symbols-outlined text-[16px]">featured_play_list</span>
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
        
        {/* Col 1: Yeni Geldi */}
        <div className="flex flex-col min-w-[260px] w-[260px] bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#9D5CFF] p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#9D5CFF]/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#9D5CFF] text-[18px]">download</span>
              <h2 className="text-[14px] font-semibold text-white">Yeni Geldi</h2>
            </div>
            <span className="bg-[#9D5CFF]/10 text-[#9D5CFF] text-[12px] font-bold px-2 py-0.5 rounded-full">18</span>
          </div>
          <p className="text-[11px] text-[#8B949E] mb-4">AI okumayı bekliyor</p>
          
          <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar flex-1 pr-1">
            
            {/* Card 1 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#58A6FF] font-medium">ABC Yazılım Ltd.</span>
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">description</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">domain</span>
                <span className="text-[13px] font-medium text-white">Türk Telekom</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺12.350,00</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#8B949E]">
                <span className="material-symbols-outlined text-[14px]">mail</span> E-Posta
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#9D5CFF] font-medium">XYZ Gıda San. Ltd.</span>
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">description</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">local_gas_station</span>
                <span className="text-[13px] font-medium text-white">Shell Türkiye</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺18.250,00</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3FB950]">
                <span className="material-symbols-outlined text-[14px]">chat</span> WhatsApp
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#9D5CFF] font-medium">Global Danışmanlık A.Ş.</span>
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">description</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">shopping_cart</span>
                <span className="text-[13px] font-medium text-white">Amazon Turkey</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺9.780,00</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#8B949E]">
                <span className="material-symbols-outlined text-[14px]">public</span> Portal
              </div>
            </div>

            <button className="w-full mt-1 py-3 border border-white/5 rounded-xl text-[12px] text-[#8B949E] hover:bg-[#161B22] transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[16px]">add</span> Dosya ekle veya sürükle
            </button>
          </div>
        </div>

        {/* Col 2: AI İşliyor */}
        <div className="flex flex-col min-w-[260px] w-[260px] bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#3B82F6] p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#3B82F6]/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#3B82F6] text-[18px]">neurology</span>
              <h2 className="text-[14px] font-semibold text-white">AI İşliyor</h2>
            </div>
            <span className="bg-[#3B82F6]/10 text-[#3B82F6] text-[12px] font-bold px-2 py-0.5 rounded-full">6</span>
          </div>
          <p className="text-[11px] text-[#8B949E] mb-4">Okuma ve analiz yapılıyor</p>
          
          <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar flex-1 pr-1">
            
            {/* Card 1 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#58A6FF] font-medium">ABC Yazılım Ltd.</span>
                <span className="material-symbols-outlined text-[#3B82F6] text-[14px]">find_replace</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">phone_iphone</span>
                <span className="text-[13px] font-medium text-white">Turkcell</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺7.890,00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#8B949E]">
                  <span className="material-symbols-outlined text-[14px]">cloud_sync</span> Flow Sync
                </div>
                <span className="material-symbols-outlined text-[#3B82F6] text-[16px] animate-spin">progress_activity</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#9D5CFF] font-medium">DEF İnşaat Ltd.</span>
                <span className="material-symbols-outlined text-[#3B82F6] text-[14px]">find_replace</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">local_gas_station</span>
                <span className="text-[13px] font-medium text-white">Opet Akaryakıt</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺15.600,00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#8B949E]">
                  <span className="material-symbols-outlined text-[14px]">document_scanner</span> Mobil Tarama
                </div>
                <span className="material-symbols-outlined text-[#3B82F6] text-[16px] animate-spin">progress_activity</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#58A6FF] font-medium">XYZ Gıda San. Ltd.</span>
                <span className="material-symbols-outlined text-[#3B82F6] text-[14px]">find_replace</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">storefront</span>
                <span className="text-[13px] font-medium text-white">Migros Ticaret A.Ş.</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺32.450,00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#3FB950]">
                  <span className="material-symbols-outlined text-[14px]">chat</span> WhatsApp
                </div>
                <span className="material-symbols-outlined text-[#3B82F6] text-[16px] animate-spin">progress_activity</span>
              </div>
            </div>

            <button className="w-full mt-1 py-3 border border-white/5 rounded-xl text-[12px] text-[#8B949E] hover:bg-[#161B22] transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>
        </div>

        {/* Col 3: Kontrol Bekliyor */}
        <div className="flex flex-col min-w-[260px] w-[260px] bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#F59E0B] p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#F59E0B]/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#F59E0B] text-[18px]">error</span>
              <h2 className="text-[14px] font-semibold text-white">Kontrol Bekliyor</h2>
            </div>
          </div>
          <p className="text-[11px] text-[#8B949E] mb-4">Müşavir kontrolü gerekli</p>
          
          <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar flex-1 pr-1">
            
            {/* Card 1 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#58A6FF] font-medium">ABC Yazılım Ltd.</span>
                <div className="flex items-center gap-2">
                  <div className="bg-[#4D3A1E] text-[#E3B341] text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">hourglass_empty</span> 3 gün
                  </div>
                  <span className="material-symbols-outlined text-[#8B949E] text-[14px]">description</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">skull</span>
                <span className="text-[13px] font-medium text-white">Shell Türkiye</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺18.250,00</span>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-[12px] font-medium text-[#3FB950]">760</span>
                <span className="text-[11px] text-[#8B949E]">Akaryakıt Gideri</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#3FB950]">
                  <span className="material-symbols-outlined text-[14px]">chat</span> WhatsApp
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#2D333B] text-[#9D5CFF] text-[9px] px-1.5 py-0.5 rounded font-bold">✧ AI</span>
                  <img src="https://i.pravatar.cc/150?u=a" className="w-5 h-5 rounded-full border border-white/10" alt="Avatar" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#9D5CFF] font-medium">XYZ Gıda San. Ltd.</span>
                <div className="flex items-center gap-2">
                  <div className="bg-[#4D3A1E] text-[#E3B341] text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">hourglass_empty</span> 2 gün
                  </div>
                  <span className="material-symbols-outlined text-[#8B949E] text-[14px]">description</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">storefront</span>
                <span className="text-[13px] font-medium text-white">Migros Ticaret A.Ş.</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺32.450,00</span>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-[12px] font-medium text-[#3FB950]">770</span>
                <span className="text-[11px] text-[#8B949E]">Market Alışverişi</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#3FB950]">
                  <span className="material-symbols-outlined text-[14px]">chat</span> WhatsApp
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#2D333B] text-[#9D5CFF] text-[9px] px-1.5 py-0.5 rounded font-bold">✧ AI</span>
                  <img src="https://i.pravatar.cc/150?u=c" className="w-5 h-5 rounded-full border border-white/10" alt="Avatar" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#58A6FF] font-medium">DEF İnşaat Ltd.</span>
                <div className="flex items-center gap-2">
                  <div className="bg-[#4D3A1E] text-[#E3B341] text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">hourglass_empty</span> 1 gün
                  </div>
                  <span className="material-symbols-outlined text-[#8B949E] text-[14px]">description</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">account_balance</span>
                <span className="text-[13px] font-medium text-white">Ziraat Bankası</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺12.500,00</span>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-[12px] font-medium text-[#3FB950]">102</span>
                <span className="text-[11px] text-[#8B949E]">Banka Gideri</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#8B949E]">
                  <span className="material-symbols-outlined text-[14px]">mail</span> E-Posta
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#2D333B] text-[#9D5CFF] text-[9px] px-1.5 py-0.5 rounded font-bold">✧ AI</span>
                  <img src="https://i.pravatar.cc/150?u=b" className="w-5 h-5 rounded-full border border-white/10" alt="Avatar" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#58A6FF] font-medium">Global Danışmanlık A.Ş.</span>
                <div className="flex items-center gap-2">
                  <div className="bg-[#1B2A2A] text-[#3FB950] text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">hourglass_empty</span> 4 saat
                  </div>
                  <span className="material-symbols-outlined text-[#8B949E] text-[14px]">description</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">router</span>
                <span className="text-[13px] font-medium text-white">Türk Telekom</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺12.350,00</span>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-[12px] font-medium text-[#3FB950]">770</span>
                <span className="text-[11px] text-[#8B949E]">Haberleşme Gideri</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#8B949E]">
                  <span className="material-symbols-outlined text-[14px]">cloud_sync</span> Flow Sync
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#2D333B] text-[#9D5CFF] text-[9px] px-1.5 py-0.5 rounded font-bold">✧ AI</span>
                  <img src="https://i.pravatar.cc/150?u=d" className="w-5 h-5 rounded-full border border-white/10" alt="Avatar" />
                </div>
              </div>
            </div>

            <button className="w-full mt-1 py-3 border border-white/5 rounded-xl text-[12px] text-[#8B949E] hover:bg-[#161B22] transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>
        </div>

        {/* Col 4: Onaylandı */}
        <div className="flex flex-col min-w-[260px] w-[260px] bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#3FB950] p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#3FB950]/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#3FB950] text-[18px] bg-clip-text">check_circle</span>
              <h2 className="text-[14px] font-semibold text-white">Onaylandı</h2>
            </div>
            <span className="bg-[#3FB950]/10 text-[#3FB950] text-[12px] font-bold px-2 py-0.5 rounded-full">31</span>
          </div>
          <p className="text-[11px] text-[#8B949E] mb-4">Toplu gönderime hazır</p>
          
          <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar flex-1 pr-1">
            
            {/* Card 1 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#9D5CFF] font-medium">ABC Yazılım Ltd.</span>
                <span className="material-symbols-outlined text-[#3FB950] text-[18px]">check_circle</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">local_fire_department</span>
                <span className="text-[13px] font-medium text-white">İGDAŞ</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">25.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺6.250,00</span>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-[12px] font-medium text-[#3FB950]">770</span>
                <span className="text-[11px] text-[#8B949E]">Doğalgaz Gideri</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#8B949E]">
                  <span className="material-symbols-outlined text-[14px]">mail</span> E-Posta
                </div>
                <span className="bg-[#2D333B] text-[#9D5CFF] text-[9px] px-1.5 py-0.5 rounded font-bold">✧ AI</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#58A6FF] font-medium">XYZ Gıda San. Ltd.</span>
                <span className="material-symbols-outlined text-[#3FB950] text-[18px]">check_circle</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">restaurant</span>
                <span className="text-[13px] font-medium text-white">Yemeksepeti A.Ş.</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">26.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺3.250,00</span>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-[12px] font-medium text-[#3FB950]">770</span>
                <span className="text-[11px] text-[#8B949E]">Yemek Gideri</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#3FB950]">
                  <span className="material-symbols-outlined text-[14px]">chat</span> WhatsApp
                </div>
                <span className="bg-[#2D333B] text-[#9D5CFF] text-[9px] px-1.5 py-0.5 rounded font-bold">✧ AI</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#161B22] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-[#58A6FF] font-medium">DEF İnşaat Ltd.</span>
                <span className="material-symbols-outlined text-[#3FB950] text-[18px]">check_circle</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">electric_bolt</span>
                <span className="text-[13px] font-medium text-white">Enerjisa Enerji A.Ş.</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[14px]">calendar_today</span>
                <span className="text-[12px] text-[#8B949E]">25.05.2025</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#8B949E] text-[16px]">payments</span>
                <span className="text-[14px] font-bold text-white">₺8.750,00</span>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-[12px] font-medium text-[#3FB950]">770</span>
                <span className="text-[11px] text-[#8B949E]">Elektrik Gideri</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[11px] text-[#8B949E]">
                  <span className="material-symbols-outlined text-[14px]">public</span> Portal
                </div>
                <span className="bg-[#2D333B] text-[#9D5CFF] text-[9px] px-1.5 py-0.5 rounded font-bold">✧ AI</span>
              </div>
            </div>

            <button className="w-full mt-1 py-3 border border-white/5 rounded-xl text-[12px] text-[#8B949E] hover:bg-[#161B22] transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>
        </div>


        
      </div>

      {/* Footer: Shortcuts */}
      <div className="h-12 mt-4 shrink-0 bg-[#161B22] border border-white/5 rounded-xl flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#E3B341] text-[16px]">temp_preferences_custom</span>
          <span className="text-[#E3B341] text-[12px] font-medium ml-1">İpucu:</span>
          <span className="text-[#8B949E] text-[12px]">Kartları sürükleyip bırakarak durumlarını değiştirebilirsiniz.</span>
          <div className="flex gap-2 items-center ml-4">
            <span className="text-[11px] bg-[#2D333B] px-2 py-1 rounded text-white border border-white/10 flex items-center shadow-sm">Space</span>
            <span className="text-[#8B949E] text-[11px]">Onayla</span>
            
            <span className="text-[11px] bg-[#2D333B] px-2 py-1 rounded text-white border border-white/10 flex items-center shadow-sm ml-2">D</span>
            <span className="text-[#8B949E] text-[11px]">Detay aç</span>
            
            <span className="text-[11px] bg-[#2D333B] px-2 py-1 rounded text-white border border-white/10 flex items-center gap-1 shadow-sm ml-2">
              <span className="material-symbols-outlined text-[12px]">arrow_back</span>
              <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
            </span>
            <span className="text-[#8B949E] text-[11px]">Sütunlar arası geçiş</span>
          </div>
        </div>
        <button className="flex items-center gap-1.5 bg-[#2D333B] border border-white/5 rounded-md px-3 py-1.5 text-[11px] font-medium text-[#8B949E] hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[14px]">apps</span> Tüm kısayolları gör
        </button>
      </div>
      
    </div>
  );
}
