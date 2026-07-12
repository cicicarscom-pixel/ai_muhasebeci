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
          <div className="flex flex-col justify-between bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#3B82F6] p-4 relative overflow-hidden group min-h-[100px] hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#3B82F6]/10 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#3B82F6] text-[18px] glow-text">description</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">HAZIR EVRAK</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">131</span>
              <div className="flex items-center gap-1 text-[#3B82F6] text-[11px] font-medium bg-[#3B82F6]/10 px-2 py-0.5 rounded-full border border-[#3B82F6]/20">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>22 bugün</span>
              </div>
            </div>
          </div>
          
          {/* Card 2: Kontrol Bekleyen */}
          <div className="flex flex-col justify-between bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#F59E0B] p-4 relative overflow-hidden group min-h-[100px] hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#F59E0B]/10 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#F59E0B] text-[18px] glow-text">error</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">KONTROL BEKLEYEN</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">12</span>
              <div className="flex items-center gap-1 text-[#F59E0B] text-[11px] font-medium bg-[#F59E0B]/10 px-2 py-0.5 rounded-full border border-[#F59E0B]/20">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>4 bugün</span>
              </div>
            </div>
          </div>
          
          {/* Card 3: Eksik Bilgi */}
          <div className="flex flex-col justify-between bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#9D5CFF] p-4 relative overflow-hidden group min-h-[100px] hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(157,92,255,0.15)]">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#9D5CFF]/10 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#9D5CFF] text-[18px] glow-text">help</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">EKSİK BİLGİ</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(157,92,255,0.5)]">4</span>
              <div className="flex items-center gap-1 text-[#9D5CFF] text-[11px] font-medium bg-[#9D5CFF]/10 px-2 py-0.5 rounded-full border border-[#9D5CFF]/20">
                <span className="material-symbols-outlined text-[14px]">trending_down</span>
                <span>1 bugün</span>
              </div>
            </div>
          </div>
          
          {/* Card 4: Tekrar İstenecek */}
          <div className="flex flex-col justify-between bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#EF4444] p-4 relative overflow-hidden group min-h-[100px] hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#EF4444]/10 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#EF4444] text-[18px] glow-text">cancel</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">TEKRAR İSTENECEK</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">2</span>
              <div className="flex items-center gap-1 text-[#EF4444] text-[11px] font-medium bg-[#EF4444]/10 px-2 py-0.5 rounded-full border border-[#EF4444]/20">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>2 bugün</span>
              </div>
            </div>
          </div>
          
          {/* Card 5: Bugün Onaylanan */}
          <div className="flex flex-col justify-between bg-[#12151C] border border-white/5 rounded-2xl border-t-[3px] border-t-[#3FB950] p-4 relative overflow-hidden group min-h-[100px] hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(63,185,80,0.15)]">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#3FB950]/10 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <span className="material-symbols-outlined text-[#3FB950] text-[18px] glow-text">check_circle</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">BUGÜN ONAYLANAN</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-3xl font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(63,185,80,0.5)] glow-text">47</span>
              <div className="flex items-center gap-1 text-[#3FB950] text-[11px] font-medium bg-[#3FB950]/10 px-2 py-0.5 rounded-full border border-[#3FB950]/20">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>15 bugün</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        {/* Upcoming Deadlines (3 cols) */}
        <div className="col-span-3 glass-panel p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-on-surface tracking-tight">Önemli Tarihler</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-white/5 flex flex-col items-center justify-center shrink-0">
                <span className="text-[13px] font-bold text-on-surface leading-none">26</span>
                <span className="text-[7px] text-on-surface-variant uppercase font-bold tracking-tighter mt-0.5">MAY</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-on-surface leading-tight">KDV Beyannamesi</span>
                <span className="text-[9px] text-primary-container font-medium mt-0.5">4 gün kaldı</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-white/5 flex flex-col items-center justify-center shrink-0">
                <span className="text-[13px] font-bold text-on-surface leading-none">31</span>
                <span className="text-[7px] text-on-surface-variant uppercase font-bold tracking-tighter mt-0.5">MAY</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-on-surface leading-tight">Muhtasar</span>
                <span className="text-[9px] text-primary-container font-medium mt-0.5">9 gün kaldı</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-white/5 flex flex-col items-center justify-center shrink-0">
                <span className="text-[13px] font-bold text-on-surface leading-none">10</span>
                <span className="text-[7px] text-on-surface-variant uppercase font-bold tracking-tighter mt-0.5">HAZ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-on-surface leading-tight">Kurumlar Vergisi</span>
                <span className="text-[9px] text-on-surface-variant font-medium mt-0.5">19 gün kaldı</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations (4 cols) */}
        <div className="col-span-4 glass-panel p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-on-surface flex items-center gap-2 tracking-tight">
              <span className="material-symbols-outlined text-[#9D5CFF] text-[16px]">auto_awesome</span>
              AI Önerileri
            </h2>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-secondary-container/5 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-secondary-container"></div>
              <div className="w-7 h-7 rounded-lg bg-secondary-container/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-container text-[14px]">psychology</span>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-semibold text-on-surface block mb-0.5">Shell Türkiye Kuralı</span>
                <p className="text-[9px] text-on-surface-variant leading-tight mb-1.5">Bu tedarikçi için otomatik eşleşme kuralı oluşturulabilir.</p>
                <button className="text-[9px] font-bold text-secondary-container hover:underline">Kural Oluştur →</button>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-tertiary-container/5 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-tertiary-container"></div>
              <div className="w-7 h-7 rounded-lg bg-tertiary-container/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-container text-[14px]">notifications_active</span>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-semibold text-on-surface block mb-0.5">Eksik Evraklar (12)</span>
                <p className="text-[9px] text-on-surface-variant leading-tight mb-1.5">12 mükellef halen evrak göndermedi.</p>
                <button className="text-[9px] font-bold text-tertiary-container hover:underline">Toplu Hatırlat →</button>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-primary-container/5 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-primary-container"></div>
              <div className="w-7 h-7 rounded-lg bg-primary-container/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container text-[14px] glow-text">join_inner</span>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-semibold text-on-surface block mb-0.5">3 Yeni Eşleşme</span>
                <p className="text-[9px] text-on-surface-variant leading-tight mb-1.5">Geçmiş verilere dayanarak otomatik eşleşme bulundu.</p>
                <button className="text-[9px] font-bold text-primary-container hover:underline glow-text">Otomatik Onayla →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Documents (5 cols) */}
        <div className="col-span-5 glass-panel p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-on-surface tracking-tight">Son Gelenler</h2>
            <a className="text-primary-container hover:underline transition-colors text-[10px] font-semibold" href="#">Tümü</a>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { name: 'Shell Türkiye', type: 'Fatura', date: 'Bugün', status: 'HAZIR', color: 'primary-container', icon: 'local_gas_station' },
              { name: 'Migros A.Ş.', type: 'Fiş', date: 'Bugün', status: 'KONTROL', color: 'tertiary-container', icon: 'store' },
              { name: 'Opet Petrolcülük', type: 'Fatura', date: 'Dün', status: 'EKSİK BİLGİ', color: 'tertiary-fixed-dim', icon: 'local_shipping' },
              { name: 'Turkcell', type: 'Fatura', date: 'Dün', status: 'HAZIR', color: 'primary-container', icon: 'cell_tower' },
              { name: 'Yemeksepeti', type: 'Fiş', date: '2 GÜN ÖNCE', status: 'KONTROL', color: 'tertiary-container', icon: 'restaurant' },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-white/[0.03] rounded-lg transition-all border border-transparent hover:border-white/5 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-surface-container border border-white/5 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-surface-variant text-[14px]">{doc.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-on-surface font-semibold leading-tight">{doc.name}</span>
                    <span className="text-[9px] text-on-surface-variant uppercase tracking-wider leading-tight">{doc.type} • {doc.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded border text-[9px] font-bold bg-${doc.color}/10 border-${doc.color}/20 text-${doc.color}`}>
                    {doc.status}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant/40 hover:text-on-surface transition-colors">more_vert</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3 */}
        {/* Workflow Summary (7 cols) */}
        <div className="col-span-7 glass-panel p-5 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-semibold text-on-surface tracking-tight">İş Akışı</h2>
            <a className="text-primary-container hover:underline transition-colors text-[10px] font-semibold" href="#">Detay</a>
          </div>
          <div className="flex-1 flex flex-col justify-center relative">
            <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
            <div className="flex justify-between items-center relative z-10 px-4">
              
              <div className="flex items-center gap-3 bg-surface/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-container text-[14px]">inventory_2</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-on-surface-variant uppercase font-bold">Yeni</span>
                  <span className="text-sm font-bold text-on-surface">24</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-white/20 text-sm">arrow_forward</span>

              <div className="flex items-center gap-3 bg-surface/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-[#9D5CFF]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#9D5CFF] text-[14px]">bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-on-surface-variant uppercase font-bold">AI İşliyor</span>
                  <span className="text-sm font-bold text-on-surface">47</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-white/20 text-sm">arrow_forward</span>

              <div className="flex items-center gap-3 bg-surface/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-error/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-error text-[14px]">engineering</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-on-surface-variant uppercase font-bold">Kontrol</span>
                  <span className="text-sm font-bold text-on-surface">19</span>
                </div>
              </div>

              <span className="material-symbols-outlined text-white/20 text-sm">arrow_forward</span>

              <div className="flex items-center gap-3 bg-surface/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-[14px] glow-text">check_circle</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-on-surface-variant uppercase font-bold">Biten</span>
                  <span className="text-sm font-bold text-on-surface">156</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Workload Chart (5 cols) */}
        <div className="col-span-5 glass-panel p-5 flex flex-col min-h-[220px] max-h-[260px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-on-surface tracking-tight">İş Yükü Trendi</h2>
            <select className="bg-surface-container/80 border border-white/10 rounded px-1.5 py-0.5 text-[9px] font-bold text-on-surface-variant focus:outline-none focus:border-primary-container appearance-none cursor-pointer">
              <option>BU HAFTA</option>
              <option>GEÇEN HAFTA</option>
            </select>
          </div>
          <div className="flex-1 relative mt-2">
            <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none opacity-10">
              <div className="thin-divider"></div>
              <div className="thin-divider"></div>
              <div className="thin-divider"></div>
            </div>
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[8px] font-bold text-on-surface-variant/30 z-10 pointer-events-none">
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            <svg className="absolute inset-0 w-full h-[calc(100%-20px)] z-10 pl-6 pr-2 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#00daf3" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#00daf3" stopOpacity="0"></stop>
                </linearGradient>
                <filter height="140%" id="glow-svg" width="140%" x="-20%" y="-20%">
                  <feGaussianBlur result="blur" stdDeviation="1.5"></feGaussianBlur>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                </filter>
              </defs>
              <path d="M0,85 Q15,60 25,75 T45,40 T65,60 T85,30 T100,50 L100,100 L0,100 Z" fill="url(#chartGradient)"></path>
              <path d="M0,85 Q15,60 25,75 T45,40 T65,60 T85,30 T100,50" fill="none" filter="url(#glow-svg)" stroke="#00daf3" strokeWidth="2"></path>
              <circle cx="25" cy="75" fill="#fff" filter="url(#glow-svg)" r="2" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="45" cy="40" fill="#fff" filter="url(#glow-svg)" r="2" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="65" cy="60" fill="#fff" filter="url(#glow-svg)" r="2" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="85" cy="30" fill="#fff" filter="url(#glow-svg)" r="2" stroke="#00daf3" strokeWidth="1.5"></circle>
            </svg>
            <div className="absolute bottom-0 left-6 right-2 flex justify-between text-[8px] font-bold text-on-surface-variant/40 z-10 uppercase tracking-tighter">
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
