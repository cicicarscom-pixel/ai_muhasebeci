'use client';
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">

      
      {/* Grid Container: 12 Columns */}
      <div className="grid grid-cols-12 gap-4">
        
        {/* ROW 1: 5 KPI Cards */}
        <div className="col-span-12 grid grid-cols-5 gap-4">
          {/* Card 1: Hazır Evrak */}
          <div className="flex flex-col justify-between bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-4 relative overflow-hidden group min-h-[100px] hover:bg-[#00C8FF]/[0.02] hover:border-[#00C8FF]/30 transition-all">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#00C8FF]/50 to-transparent transition-all"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#bac9cc] group-hover:text-[#00C8FF] transition-colors text-[18px]">description</span>
              <span className="text-[10px] font-medium text-[#bac9cc] uppercase tracking-widest group-hover:text-white transition-colors">HAZIR EVRAK</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-semibold text-white tracking-tight">131</span>
              <div className="flex items-center gap-1 text-[#00C8FF] text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/20">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>22 bugün</span>
              </div>
            </div>
          </div>
          
          {/* Card 2: Kontrol Bekleyen */}
          <div className="flex flex-col justify-between bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-4 relative overflow-hidden group min-h-[100px] hover:bg-[#00C8FF]/[0.02] hover:border-[#00C8FF]/30 transition-all">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#00C8FF]/50 to-transparent transition-all"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#bac9cc] group-hover:text-[#00C8FF] transition-colors text-[18px]">error</span>
              <span className="text-[10px] font-medium text-[#bac9cc] uppercase tracking-widest group-hover:text-white transition-colors">KONTROL BEKLEYEN</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-semibold text-white tracking-tight">12</span>
              <div className="flex items-center gap-1 text-[#F59E0B] text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>4 bugün</span>
              </div>
            </div>
          </div>
          
          {/* Card 3: Eksik Bilgi */}
          <div className="flex flex-col justify-between bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-4 relative overflow-hidden group min-h-[100px] hover:bg-[#00C8FF]/[0.02] hover:border-[#00C8FF]/30 transition-all">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#00C8FF]/50 to-transparent transition-all"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#bac9cc] group-hover:text-[#00C8FF] transition-colors text-[18px]">help</span>
              <span className="text-[10px] font-medium text-[#bac9cc] uppercase tracking-widest group-hover:text-white transition-colors">EKSİK BİLGİ</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-semibold text-white tracking-tight">4</span>
              <div className="flex items-center gap-1 text-[#22C55E] text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                <span className="material-symbols-outlined text-[14px]">trending_down</span>
                <span>1 bugün</span>
              </div>
            </div>
          </div>
          
          {/* Card 4: Tekrar İstenecek */}
          <div className="flex flex-col justify-between bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-4 relative overflow-hidden group min-h-[100px] hover:bg-[#00C8FF]/[0.02] hover:border-[#00C8FF]/30 transition-all">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#00C8FF]/50 to-transparent transition-all"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#bac9cc] group-hover:text-[#00C8FF] transition-colors text-[18px]">cancel</span>
              <span className="text-[10px] font-medium text-[#bac9cc] uppercase tracking-widest group-hover:text-white transition-colors">TEKRAR İSTENECEK</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-semibold text-white tracking-tight">2</span>
              <div className="flex items-center gap-1 text-[#EF4444] text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>2 bugün</span>
              </div>
            </div>
          </div>
          
          {/* Card 5: Bugün Onaylanan */}
          <div className="flex flex-col justify-between bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-4 relative overflow-hidden group min-h-[100px] hover:bg-[#00C8FF]/[0.02] hover:border-[#00C8FF]/30 transition-all">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#00C8FF]/50 to-transparent transition-all"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#bac9cc] group-hover:text-[#00C8FF] transition-colors text-[18px]">check_circle</span>
              <span className="text-[10px] font-medium text-[#bac9cc] uppercase tracking-widest group-hover:text-white transition-colors">BUGÜN ONAYLANAN</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-semibold text-white tracking-tight">47</span>
              <div className="flex items-center gap-1 text-[#22C55E] text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>15 bugün</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        {/* Upcoming Deadlines (3 cols) */}
        <div className="col-span-3 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-on-surface tracking-tight">Önemli Tarihler</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:bg-white/[0.02] hover:border-white/5 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center shrink-0">
                <span className="text-[13px] font-semibold text-on-surface leading-none">26</span>
                <span className="text-[7px] text-[#bac9cc] uppercase font-semibold tracking-tighter mt-0.5">MAY</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-on-surface leading-tight">KDV Beyannamesi</span>
                <span className="text-[9px] text-[#00daf3] mt-0.5">4 gün kaldı</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:bg-white/[0.02] hover:border-white/5 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center shrink-0">
                <span className="text-[13px] font-semibold text-on-surface leading-none">31</span>
                <span className="text-[7px] text-[#bac9cc] uppercase font-semibold tracking-tighter mt-0.5">MAY</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-on-surface leading-tight">Muhtasar</span>
                <span className="text-[9px] text-[#00daf3] mt-0.5">9 gün kaldı</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:bg-white/[0.02] hover:border-white/5 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center shrink-0">
                <span className="text-[13px] font-semibold text-on-surface leading-none">10</span>
                <span className="text-[7px] text-[#bac9cc] uppercase font-semibold tracking-tighter mt-0.5">HAZ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-on-surface leading-tight">Kurumlar Vergisi</span>
                <span className="text-[9px] text-[#bac9cc] mt-0.5">19 gün kaldı</span>
              </div>
            </div>
          </div>
        </div>

        {/* Operations Feed (4 cols) */}
        <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9D5CFF]/30 to-transparent"></div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-on-surface flex items-center gap-2 tracking-tight">
              <span className="material-symbols-outlined text-[#9D5CFF] text-[16px]">stream</span>
              Operasyon Akışı
            </h2>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-3 p-2 border-l-2 border-[#10B981] bg-white/[0.01]">
              <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[#10B981] text-[12px]">rule</span>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-medium text-white block">3 yeni otomatik kural</span>
                <p className="text-[10px] text-[#bac9cc] mt-0.5">Opet, Shell ve Amazon faturaları için oluşturuldu.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-2 border-l-2 border-[#3B82F6] bg-white/[0.01]">
              <div className="w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[#3B82F6] text-[12px]">description</span>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-medium text-white block">18 belge işlendi</span>
                <p className="text-[10px] text-[#bac9cc] mt-0.5">Son 1 saat içinde sisteme düşen evraklar kontrol bekliyor.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2 border-l-2 border-[#F59E0B] bg-white/[0.01]">
              <div className="w-6 h-6 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[#F59E0B] text-[12px]">forum</span>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-medium text-white block">5 müşteri cevapladı</span>
                <p className="text-[10px] text-[#bac9cc] mt-0.5">WhatsApp üzerinden gönderilen eksik evrak taleplerine yanıt geldi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Documents (5 cols) */}
        <div className="col-span-5 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-on-surface tracking-tight">Son Gelenler</h2>
            <a className="text-[#00daf3] hover:underline transition-colors text-[10px] font-medium" href="#">Tümü</a>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { name: 'Shell Türkiye', type: 'Fatura', date: 'Bugün', status: 'HAZIR', color: '#00daf3', icon: 'local_gas_station' },
              { name: 'Migros A.Ş.', type: 'Fiş', date: 'Bugün', status: 'KONTROL', color: '#F59E0B', icon: 'store' },
              { name: 'Opet Petrolcülük', type: 'Fatura', date: 'Dün', status: 'EKSİK BİLGİ', color: '#9D5CFF', icon: 'local_shipping' },
              { name: 'Turkcell', type: 'Fatura', date: 'Dün', status: 'HAZIR', color: '#00daf3', icon: 'cell_tower' },
              { name: 'Yemeksepeti', type: 'Fiş', date: '2 GÜN ÖNCE', status: 'KONTROL', color: '#F59E0B', icon: 'restaurant' },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-white/[0.02] rounded-lg transition-all border border-transparent hover:border-white/5 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#bac9cc] text-[14px]">{doc.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-white font-medium leading-tight">{doc.name}</span>
                    <span className="text-[9px] text-[#bac9cc] uppercase tracking-wider leading-tight mt-0.5">{doc.type} • {doc.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded border text-[9px] font-medium bg-white/5" style={{ color: doc.color, borderColor: `${doc.color}33` }}>
                    {doc.status}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#bac9cc]/40 hover:text-white transition-colors">more_vert</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3 */}
        {/* Workflow Summary (7 cols) */}
        <div className="col-span-7 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-5 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-semibold text-on-surface tracking-tight">İş Akışı</h2>
            <a className="text-[#00daf3] hover:underline transition-colors text-[10px] font-medium" href="#">Detay</a>
          </div>
          <div className="flex-1 flex flex-col justify-center relative">
            <div className="absolute top-1/2 left-8 right-8 h-px bg-white/5 -translate-y-1/2 z-0"></div>
            <div className="flex justify-between items-center relative z-10 px-4">
              
              <div className="flex items-center gap-3 bg-[#12151C] px-3 py-2 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#bac9cc] text-[14px]">inventory_2</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#bac9cc] uppercase font-medium">Yeni</span>
                  <span className="text-sm font-semibold text-white">24</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-white/10 text-sm">arrow_forward</span>

              <div className="flex items-center gap-3 bg-[#12151C] px-3 py-2 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#9D5CFF]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#9D5CFF] text-[14px]">bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#bac9cc] uppercase font-medium">AI İşliyor</span>
                  <span className="text-sm font-semibold text-white">47</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-white/10 text-sm">arrow_forward</span>

              <div className="flex items-center gap-3 bg-[#12151C] px-3 py-2 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#F59E0B] text-[14px]">engineering</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#bac9cc] uppercase font-medium">Kontrol</span>
                  <span className="text-sm font-semibold text-white">19</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-white/10 text-sm">arrow_forward</span>

              <div className="flex items-center gap-3 bg-[#12151C] px-3 py-2 rounded-xl border border-[#10B981]/20 hover:border-[#10B981]/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#10B981] text-[14px]">check_circle</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#bac9cc] uppercase font-medium">Biten</span>
                  <span className="text-sm font-semibold text-white">156</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Workload Chart (5 cols) */}
        <div className="col-span-5 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-5 flex flex-col min-h-[220px] max-h-[260px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-on-surface tracking-tight">İş Yükü Trendi</h2>
            <select className="bg-white/5 border border-white/10 rounded px-1.5 py-0.5 text-[9px] font-medium text-[#bac9cc] focus:outline-none focus:border-[#00daf3] appearance-none cursor-pointer">
              <option>BU HAFTA</option>
              <option>GEÇEN HAFTA</option>
            </select>
          </div>
          <div className="flex-1 relative mt-2">
            <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none opacity-5">
              <div className="thin-divider"></div>
              <div className="thin-divider"></div>
              <div className="thin-divider"></div>
            </div>
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[8px] font-medium text-[#bac9cc]/50 z-10 pointer-events-none">
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            <svg className="absolute inset-0 w-full h-[calc(100%-20px)] z-10 pl-6 pr-2 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#00daf3" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="#00daf3" stopOpacity="0"></stop>
                </linearGradient>
                {/* Glow removed/reduced */}
                <filter height="120%" id="glow-svg" width="120%" x="-10%" y="-10%">
                  <feGaussianBlur result="blur" stdDeviation="0.5"></feGaussianBlur>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                </filter>
              </defs>
              <path d="M0,85 Q15,60 25,75 T45,40 T65,60 T85,30 T100,50 L100,100 L0,100 Z" fill="url(#chartGradient)"></path>
              <path d="M0,85 Q15,60 25,75 T45,40 T65,60 T85,30 T100,50" fill="none" filter="url(#glow-svg)" stroke="#00daf3" strokeWidth="1.5"></path>
              <circle cx="25" cy="75" fill="#12151C" r="1.5" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="45" cy="40" fill="#12151C" r="1.5" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="65" cy="60" fill="#12151C" r="1.5" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="85" cy="30" fill="#12151C" r="1.5" stroke="#00daf3" strokeWidth="1.5"></circle>
            </svg>
            <div className="absolute bottom-0 left-6 right-2 flex justify-between text-[8px] font-medium text-[#bac9cc]/50 z-10 uppercase tracking-tighter">
              <span>Pzt</span>
              <span>Sal</span>
              <span>Çar</span>
              <span>Per</span>
              <span>Cum</span>
              <span>Cmt</span>
              <span>Paz</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
