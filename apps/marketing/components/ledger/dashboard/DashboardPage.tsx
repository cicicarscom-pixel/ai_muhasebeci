'use client';
import React from 'react';

export default function DashboardPage() {
  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="font-h1 text-h1 text-on-surface mb-1 flex items-center gap-2">Günaydın, Ahmet Bey <span className="text-2xl animate-pulse">👋</span></h1>
        <p className="font-body text-body text-on-surface-variant">AI Asistanınız size harika bir gün geçirmeniz için hazır.</p>
      </div>
      
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {/* Stat Card 1 */}
        <div className="glass-panel p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-secondary-container/10 rounded-full blur-2xl group-hover:bg-secondary-container/20 transition-all"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-secondary-container/10 border border-secondary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-container text-xl">description</span>
            </div>
            <span className="font-h3 text-h3 text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">HAZIR EVRAK</span>
          </div>
          <div className="text-4xl font-h1 text-on-surface mb-2 tracking-tight">131</div>
          <div className="flex items-center gap-1 text-primary-container text-xs font-medium">
            <span className="material-symbols-outlined text-xs">trending_up</span>
            <span>22 bugün</span>
          </div>
        </div>
        {/* Stat Card 2 */}
        <div className="glass-panel p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-tertiary-container/10 rounded-full blur-2xl group-hover:bg-tertiary-container/20 transition-all"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-tertiary-container/10 border border-tertiary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary-container text-xl">error</span>
            </div>
            <span className="font-h3 text-h3 text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">KONTROL BEKLEYEN</span>
          </div>
          <div className="text-4xl font-h1 text-on-surface mb-2 tracking-tight text-tertiary-container">12</div>
          <div className="flex items-center gap-1 text-tertiary-container text-xs font-medium">
            <span className="material-symbols-outlined text-xs">trending_up</span>
            <span>4 bugün</span>
          </div>
        </div>
        {/* Stat Card 3 */}
        <div className="glass-panel p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-tertiary-fixed-dim/10 rounded-full blur-2xl group-hover:bg-tertiary-fixed-dim/20 transition-all"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-tertiary-fixed-dim/10 border border-tertiary-fixed-dim/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl">help</span>
            </div>
            <span className="font-h3 text-h3 text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">EKSİK BİLGİ</span>
          </div>
          <div className="text-4xl font-h1 text-on-surface mb-2 tracking-tight">4</div>
          <div className="flex items-center gap-1 text-on-surface-variant text-xs font-medium">
            <span className="material-symbols-outlined text-xs">trending_down</span>
            <span>1 bugün</span>
          </div>
        </div>
        {/* Stat Card 4 */}
        <div className="glass-panel p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-error/10 rounded-full blur-2xl group-hover:bg-error/20 transition-all"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-error/10 border border-error/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-error text-xl">cancel</span>
            </div>
            <span className="font-h3 text-h3 text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">TEKRAR İSTENECEK</span>
          </div>
          <div className="text-4xl font-h1 text-on-surface mb-2 tracking-tight text-error">2</div>
          <div className="flex items-center gap-1 text-error text-xs font-medium">
            <span className="material-symbols-outlined text-xs">trending_up</span>
            <span>2 bugün</span>
          </div>
        </div>
        {/* Stat Card 5 */}
        <div className="glass-panel p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary-container/10 rounded-full blur-2xl group-hover:bg-primary-container/20 transition-all"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary-container/10 border border-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-container text-xl glow-text">check_circle</span>
            </div>
            <span className="font-h3 text-h3 text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">BUGÜN ONAYLANAN</span>
          </div>
          <div className="text-4xl font-h1 text-on-surface mb-2 tracking-tight glow-text">47</div>
          <div className="flex items-center gap-1 text-primary-container text-xs font-medium">
            <span className="material-symbols-outlined text-xs">trending_up</span>
            <span>15 bugün</span>
          </div>
        </div>
      </div>
      
      {/* Middle Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* İş Akışı (Workflow Pipeline) */}
        <div className="glass-panel p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-h2 text-h2 text-on-surface tracking-tight">İş Akışı</h2>
            <a className="text-primary-container hover:underline transition-colors text-xs font-semibold" href="#">Tümünü Gör</a>
          </div>
          <div className="flex-1 flex flex-col justify-center relative py-4">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-white/5 -translate-y-1/2 z-0"></div>
            <div className="flex justify-between items-center relative z-10 px-2">
              <div className="flex flex-col items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-surface border-2 border-secondary-container/50 flex items-center justify-center shadow-[0_0_20px_rgba(79,142,255,0.2)]">
                  <span className="material-symbols-outlined text-secondary-container text-xl">inventory_2</span>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center font-medium">Yeni Gelen</span>
                <span className="font-h1 text-xl text-on-surface">24</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-surface border-2 border-[#9D5CFF] flex items-center justify-center shadow-[0_0_20px_rgba(157,92,255,0.2)]">
                  <span className="material-symbols-outlined text-[#9D5CFF] text-xl">bolt</span>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center font-medium">AI İşliyor</span>
                <span className="font-h1 text-xl text-on-surface">47</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-surface border-2 border-error/50 flex items-center justify-center shadow-[0_0_20px_rgba(255,180,171,0.2)]">
                  <span className="material-symbols-outlined text-error text-xl">engineering</span>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center font-medium">Kontrol</span>
                <span className="font-h1 text-xl text-on-surface">19</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-surface border-2 border-tertiary-container/50 flex items-center justify-center shadow-[0_0_20px_rgba(254,201,49,0.2)]">
                  <span className="material-symbols-outlined text-tertiary-container text-xl">verified_user</span>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center font-medium">Onay</span>
                <span className="font-h1 text-xl text-on-surface">28</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-surface border-2 border-primary-container/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,253,0.3)]">
                  <span className="material-symbols-outlined text-primary-container text-xl glow-text">check_circle</span>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center font-medium">Biten</span>
                <span className="font-h1 text-xl text-on-surface">156</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Son Gelen Evraklar (Recent Documents) */}
        <div className="glass-panel p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-h2 text-h2 text-on-surface tracking-tight">Son Gelen Evraklar</h2>
            <a className="text-primary-container hover:underline transition-colors text-xs font-semibold" href="#">Tümünü Gör</a>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.03] rounded-xl transition-all border border-transparent hover:border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container border border-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary-container text-xl">local_gas_station</span>
                </div>
                <div>
                  <h3 className="font-h3 text-on-surface text-sm font-semibold">Shell Türkiye</h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Fatura • 25.05.2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-2.5 py-0.5 rounded-md bg-primary-container/10 border border-primary-container/20 text-primary-container text-[10px] font-bold">HAZIR</span>
                <button className="text-on-surface-variant/40 hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-xl">more_vert</span>
                </button>
              </div>
            </div>
            <div className="thin-divider mx-3"></div>
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.03] rounded-xl transition-all border border-transparent hover:border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container border border-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-container text-xl">store</span>
                </div>
                <div>
                  <h3 className="font-h3 text-on-surface text-sm font-semibold">Migros Ticaret A.Ş.</h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Fatura • 25.05.2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-2.5 py-0.5 rounded-md bg-tertiary-container/10 border border-tertiary-container/20 text-tertiary-container text-[10px] font-bold">KONTROL</span>
                <button className="text-on-surface-variant/40 hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-xl">more_vert</span>
                </button>
              </div>
            </div>
            <div className="thin-divider mx-3"></div>
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.03] rounded-xl transition-all border border-transparent hover:border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container border border-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-container text-xl">local_shipping</span>
                </div>
                <div>
                  <h3 className="font-h3 text-on-surface text-sm font-semibold">Opet Petrolcülük</h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Fatura • 25.05.2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-2.5 py-0.5 rounded-md bg-tertiary-fixed-dim/10 border border-tertiary-fixed-dim/20 text-tertiary-fixed-dim text-[10px] font-bold uppercase">Eksik Bilgi</span>
                <button className="text-on-surface-variant/40 hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-xl">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Yaklaşan Önemli Tarihler */}
        <div className="glass-panel p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-h2 text-h2 text-on-surface tracking-tight">Önemli Tarihler</h2>
            <a className="text-primary-container hover:underline transition-colors text-xs font-semibold" href="#">Tümünü Gör</a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-surface-container-high border border-white/5">
                <span className="text-lg font-bold text-on-surface">26</span>
                <span className="text-[8px] text-on-surface-variant uppercase font-bold tracking-tighter">MAYIS</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-semibold text-on-surface">KDV Beyannamesi</h3>
                <p className="text-[10px] text-primary-container font-medium">4 gün kaldı</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-surface-container-high border border-white/5">
                <span className="text-lg font-bold text-on-surface">31</span>
                <span className="text-[8px] text-on-surface-variant uppercase font-bold tracking-tighter">MAYIS</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-semibold text-on-surface">Muhtasar Beyanname</h3>
                <p className="text-[10px] text-primary-container font-medium">9 gün kaldı</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-surface-container-high border border-white/5">
                <span className="text-lg font-bold text-on-surface">10</span>
                <span className="text-[8px] text-on-surface-variant uppercase font-bold tracking-tighter">HAZİRAN</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-semibold text-on-surface">SGK Bildirimi</h3>
                <p className="text-[10px] text-primary-container font-medium">19 gün kaldı</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Önerileri */}
        <div className="glass-panel p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2 tracking-tight">
              <span className="material-symbols-outlined text-[#9D5CFF] text-xl">auto_awesome</span>
              AI Önerileri
            </h2>
            <a className="text-primary-container hover:underline transition-colors text-xs font-semibold" href="#">Tümünü Gör</a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary-container/5 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container"></div>
              <div className="w-8 h-8 rounded-lg bg-secondary-container/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-container text-lg">psychology</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xs font-semibold text-on-surface">Shell Türkiye</h3>
                  <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">Bu tedarikçi için otomatik kural oluşturabilirsiniz.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-tertiary-container/5 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-tertiary-container"></div>
              <div className="w-8 h-8 rounded-lg bg-tertiary-container/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary-container text-lg">notifications_active</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xs font-semibold text-on-surface">12 Müşteri</h3>
                  <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">Halen evrak göndermedi, hatırlatıcı gönderilsin mi?</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-primary-container/5 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
              <div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container text-lg glow-text">join_inner</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-semibold text-on-surface mb-1">3 Yeni Fatura</h3>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">Benzer işlemlerle eşleşti. Otomatik eşleşme kuralı öneriliyor.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* İş Yükü (Chart) */}
        <div className="glass-panel p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-h2 text-h2 text-on-surface tracking-tight">İş Yükü</h2>
            <select className="bg-surface-container/80 border border-white/10 rounded-lg px-2 py-1 text-[10px] font-bold text-on-surface-variant focus:outline-none focus:border-primary-container appearance-none cursor-pointer">
              <option>BU HAFTA</option>
              <option>GEÇEN HAFTA</option>
            </select>
          </div>
          <div className="flex-1 relative mt-4 min-h-[160px]">
            {/* Mock Chart Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none opacity-20">
              <div className="thin-divider"></div>
              <div className="thin-divider"></div>
              <div className="thin-divider"></div>
            </div>
            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[8px] font-bold text-on-surface-variant/40 z-10 pointer-events-none">
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            {/* SVG Chart Path */}
            <svg className="absolute inset-0 w-full h-[calc(100%-24px)] z-10 pl-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#00daf3" stopOpacity="0.25"></stop>
                  <stop offset="100%" stopColor="#00daf3" stopOpacity="0"></stop>
                </linearGradient>
                <filter height="140%" id="glow-svg" width="140%" x="-20%" y="-20%">
                  <feGaussianBlur result="blur" stdDeviation="1.5"></feGaussianBlur>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                </filter>
              </defs>
              <path d="M0,80 Q15,50 25,65 T45,35 T65,55 T85,25 T100,45 L100,100 L0,100 Z" fill="url(#chartGradient)"></path>
              <path d="M0,80 Q15,50 25,65 T45,35 T65,55 T85,25 T100,45" fill="none" filter="url(#glow-svg)" stroke="#00daf3" strokeWidth="2.5"></path>
              <circle cx="25" cy="65" fill="#fff" filter="url(#glow-svg)" r="2.5" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="45" cy="35" fill="#fff" filter="url(#glow-svg)" r="2.5" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="65" cy="55" fill="#fff" filter="url(#glow-svg)" r="2.5" stroke="#00daf3" strokeWidth="1.5"></circle>
              <circle cx="85" cy="25" fill="#fff" filter="url(#glow-svg)" r="2.5" stroke="#00daf3" strokeWidth="1.5"></circle>
            </svg>
            {/* Tooltip */}
            <div className="absolute top-[20%] right-[12%] bg-surface-bright/90 border border-primary-container/30 rounded-lg px-2 py-1 text-[9px] font-bold text-on-surface z-20 shadow-xl backdrop-blur-md">
              143 EVRAK
            </div>
            {/* X Axis Labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[9px] font-bold text-on-surface-variant/40 z-10 uppercase tracking-tighter">
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
    </>
  );
}
