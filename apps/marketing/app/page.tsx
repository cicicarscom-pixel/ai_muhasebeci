export default function MarketingPage() {
  return (
    <>
      <nav className="bg-background/80 backdrop-blur-md font-body-md text-body-md docked full-width top-0 sticky z-50 border-b border-outline-subtle flex justify-between items-center w-full px-container-padding py-stack-sm max-w-7xl mx-auto">
        <div className="flex items-center gap-stack-lg">
          <span className="font-headline-md text-headline-md font-bold text-on-surface">Workigom AI</span>
          <div className="hidden md:flex gap-gutter items-center">
            <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Özellikler</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Yapay Zeka</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Otomasyon</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Güvenlik</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Fiyatlandırma</a>
          </div>
        </div>
        <div className="flex items-center gap-gutter">
          <a className="text-on-surface hover:bg-surface-container-low transition-all duration-200 px-3 py-1.5 rounded" href="#">Giriş Yap</a>
          <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 rounded font-bold hover:bg-surface-tint transition-colors active:scale-95 duration-150 ease-in-out">Demo Randevusu Al</button>
        </div>
      </nav>

      <main className="w-full flex flex-col gap-0 pb-stack-lg">
        <section className="w-full bg-[#0B0C0D] pt-20 pb-20 relative overflow-hidden circuit-lines">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
          <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
          <div className="absolute right-1/4 bottom-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-container-padding flex flex-col items-center relative z-10">
            <div className="text-center mb-20 max-w-3xl">
              <h2 className="font-display-lg text-display-lg text-on-surface mb-4">İşletmeler ve Mali Müşavirler Arasındaki İlk Akıllı Köprü</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Karmaşık iletişim kanallarını ve manuel veri girişini tek bir akıllı iş akışında birleştiriyoruz.</p>
            </div>

            <div className="w-full flex justify-center items-center py-8">
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                
                {/* 1. Left Side: Mobile Frame (Business Owner) */}
                <div className="flex flex-col items-center gap-6 relative">
                  <h3 className="font-headline-md text-xl text-primary text-center mb-2"><span className="text-white">Workigom</span> Flow</h3>
                  <div className="w-[280px] h-[580px] bg-surface-container rounded-[40px] border-[8px] border-surface-container-high relative overflow-hidden shadow-2xl phone-shadow flex flex-col">
                    <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                      <div className="w-32 h-6 bg-surface-container-high rounded-b-xl"></div>
                    </div>
                    <div className="h-12 w-full flex justify-between items-end px-6 pb-2 text-[10px] text-on-surface-variant z-10">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <span className="material-symbols-outlined text-[12px]">signal_cellular_alt</span>
                        <span className="material-symbols-outlined text-[12px]">wifi</span>
                        <span className="material-symbols-outlined text-[12px]">battery_full</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface text-[18px]">menu</span>
                      </div>
                      <span className="font-label-md text-on-surface">AI Accounting</span>
                      <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center relative">
                        <span className="material-symbols-outlined text-on-surface text-[18px]">notifications</span>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 px-4 py-2 relative flex justify-center">
                      <div className="w-[180px] h-full bg-white rounded-lg shadow-inner overflow-hidden flex flex-col items-center pt-8 border border-outline-subtle opacity-80">
                        <div className="text-black font-bold text-sm mb-4">Aome Corp</div>
                        <div className="w-3/4 h-px bg-gray-300 mb-2"></div>
                        <div className="w-2/3 h-1 bg-gray-200 mb-1"></div>
                        <div className="w-1/2 h-1 bg-gray-200 mb-4"></div>
                        <div className="w-full px-4 flex flex-col gap-2">
                          <div className="flex justify-between w-full"><div className="w-1/2 h-1 bg-gray-200"></div><div className="w-1/4 h-1 bg-gray-200"></div></div>
                          <div className="flex justify-between w-full"><div className="w-2/3 h-1 bg-gray-200"></div><div className="w-1/4 h-1 bg-gray-200"></div></div>
                          <div className="flex justify-between w-full"><div className="w-1/3 h-1 bg-gray-200"></div><div className="w-1/4 h-1 bg-gray-200"></div></div>
                        </div>
                      </div>
                      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[260px] bg-surface-container-high/90 backdrop-blur border border-outline-subtle rounded-xl p-3 flex items-center gap-3 shadow-lg z-30 transform translate-x-10">
                        <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary/30">
                          <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                        </div>
                        <span className="font-label-md text-on-surface text-sm">Invoice Uploaded &amp; Shared</span>
                      </div>
                      <div className="absolute left-0 top-16 bottom-20 w-[140px] bg-surface-container-high/95 backdrop-blur border-r border-outline-subtle rounded-r-2xl z-20 flex flex-col py-4 gap-1 shadow-lg transform -translate-x-4">
                        <div className="px-4 py-2 flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">home</span><span className="text-xs">Home</span></div>
                        <div className="px-4 py-2 flex items-center gap-2 bg-primary/20 text-primary border-l-2 border-primary"><span className="material-symbols-outlined text-[18px]">dashboard</span><span className="text-xs">Workspace</span></div>
                        <div className="px-4 py-2 flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">document_scanner</span><span className="text-xs">Scan Invoice</span></div>
                        <div className="px-4 py-2 flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">automation</span><span className="text-xs">Automation</span></div>
                        <div className="px-4 py-2 flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">settings</span><span className="text-xs">Settings</span></div>
                        <div className="mt-auto px-4 py-2 flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">settings</span><span className="text-xs">Settings</span></div>
                      </div>
                    </div>
                    <div className="h-20 bg-[#16181D] rounded-b-[32px] border-t border-outline-subtle flex justify-around items-center px-4 z-20 relative shadow-[0_20px_50px_rgba(0,216,255,0.4)]">
                      <div className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-[22px]">memory</span>
                        <span className="text-[10px] font-bold">AI Assistant</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-on-surface-variant opacity-70">
                        <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
                        <span className="text-[10px] font-medium">AI Accounting</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-primary relative">
                        <div className="absolute -top-10 w-16 h-16 rounded-full flex items-center justify-center p-[2px] bg-gradient-to-tr from-primary via-purple-500 to-fuchsia-500 shadow-[0_0_20px_rgba(0,216,255,0.4)]">
                          <div className="w-full h-full bg-[#16181D] rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-[28px]" data-weight="fill">home</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold mt-7 drop-shadow-[0_0_5px_rgba(0,216,255,0.8)]">Home</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-on-surface-variant opacity-70">
                        <span className="material-symbols-outlined text-[22px]">share</span>
                        <span className="text-[10px] font-medium">Social Media</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-on-surface-variant opacity-70">
                        <span className="material-symbols-outlined text-[22px]">bar_chart</span>
                        <span className="text-[10px] font-medium">Analytics</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="bg-surface-container border border-outline-subtle rounded-full px-4 py-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">smartphone</span>
                      <span className="font-label-md text-primary text-sm">1. Business Owner</span>
                    </div>
                    <p className="text-xs text-on-surface-variant text-center mt-2">Take Photo -&gt; Upload Invoice -&gt; Workigom Cloud</p>
                  </div>
                </div>

                {/* 2. Center: AI Processing Engine */}
                <div className="flex flex-col items-center justify-center relative w-[240px] h-[400px]">
                  <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-[120px] h-32 flex flex-col justify-between opacity-50 z-0">
                    <div className="h-[2px] w-full path-line rounded"></div>
                    <div className="h-[2px] w-full path-line rounded animation-delay-300"></div>
                    <div className="h-[2px] w-full path-line rounded animation-delay-600"></div>
                    <div className="h-[2px] w-full path-line rounded animation-delay-900"></div>
                    <div className="h-[2px] w-full path-line rounded animation-delay-1200"></div>
                  </div>
                  <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[120px] h-32 flex flex-col justify-between opacity-50 z-0">
                    <div className="h-[2px] w-full path-line rounded"></div>
                    <div className="h-[2px] w-full path-line rounded animation-delay-200"></div>
                    <div className="h-[2px] w-full path-line rounded animation-delay-500"></div>
                    <div className="h-[2px] w-full path-line rounded animation-delay-800"></div>
                    <div className="h-[2px] w-full path-line rounded animation-delay-1100"></div>
                  </div>
                  <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-32 h-[100px] flex justify-between opacity-50 z-0">
                    <div className="w-[2px] h-full path-line rounded" style={{background: "linear-gradient(180deg, transparent, rgba(0, 216, 255, 0.2), rgba(0, 216, 255, 0.8), rgba(0, 216, 255, 0.2), transparent)", backgroundSize: "100% 200%", animation: "move-gradient-v 3s linear infinite"}}></div>
                    <div className="w-[2px] h-full path-line rounded animation-delay-400" style={{background: "linear-gradient(180deg, transparent, rgba(0, 216, 255, 0.2), rgba(0, 216, 255, 0.8), rgba(0, 216, 255, 0.2), transparent)", backgroundSize: "100% 200%", animation: "move-gradient-v 3s linear infinite"}}></div>
                    <div className="w-[2px] h-full path-line rounded animation-delay-800" style={{background: "linear-gradient(180deg, transparent, rgba(0, 216, 255, 0.2), rgba(0, 216, 255, 0.8), rgba(0, 216, 255, 0.2), transparent)", backgroundSize: "100% 200%", animation: "move-gradient-v 3s linear infinite"}}></div>
                  </div>
                  <div className="w-40 h-40 bg-surface-container-lowest border border-outline-subtle rounded-2xl flex flex-col items-center justify-center relative z-10 glow-cyan-strong shadow-2xl">
                    <div className="absolute inset-3 border-2 border-primary rounded-xl opacity-80 animate-pulse glow-cyan"></div>
                    <div className="absolute inset-4 border border-primary/50 rounded-lg"></div>
                    <span className="material-symbols-outlined text-primary text-[40px] mb-2 drop-shadow-[0_0_8px_rgba(0,216,255,0.8)]">memory</span>
                    <span className="font-label-md text-on-surface text-sm font-bold">Workigom AI</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-8 w-max text-center">
                    <div className="bg-surface-container border border-outline-subtle rounded-full px-4 py-2 flex items-center gap-2">
                      <span className="font-label-md text-primary text-sm">2. AI Processing Engine</span>
                    </div>
                    <div className="text-sm text-on-surface-variant flex flex-col gap-1 mt-2 text-center">
                      <p>• Cognitive GCR - VAT Extraction</p>
                      <p>• Expense Classification -&gt; Duplicate Control</p>
                      <p>• Accounting Recommendations</p>
                    </div>
                  </div>
                </div>

                {/* 3. Right Side: Desktop Frame (Accountant) */}
                <div className="flex flex-col items-center gap-6 relative">
                  <h3 className="font-headline-md text-xl text-primary text-center mb-2"><span className="text-white">Workigom</span> Ledger</h3>
                  <div className="relative w-[480px] flex flex-col items-center">
                    <div className="w-full h-[300px] bg-surface-container-lowest rounded-t-xl rounded-b-sm border-t border-l border-r border-outline-subtle p-2 shadow-2xl overflow-hidden relative flex flex-col">
                      <div className="flex-1 bg-surface-dim rounded border border-outline-subtle flex flex-col overflow-hidden">
                        <div className="h-12 bg-surface-container-low border-b border-outline-subtle flex items-center px-4 gap-4">
                          <span className="material-symbols-outlined text-primary text-[20px]">account_tree</span>
                          <span className="font-headline-md text-on-surface text-xl">AI Workspace</span>
                        </div>
                        <div className="flex-1 flex bg-surface">
                          <div className="w-14 border-r border-outline-subtle bg-surface-container-lowest flex flex-col items-center py-4 gap-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary border border-primary/30"><span className="material-symbols-outlined text-[20px]">dashboard</span></div>
                            <div className="w-10 h-10 rounded flex items-center justify-center text-on-surface-variant"><span className="material-symbols-outlined text-[20px]">people</span></div>
                            <div className="w-10 h-10 rounded flex items-center justify-center text-on-surface-variant"><span className="material-symbols-outlined text-[20px]">info</span></div>
                            <div className="w-10 h-10 rounded flex items-center justify-center text-on-surface-variant"><span className="material-symbols-outlined text-[20px]">picture_in_picture</span></div>
                          </div>
                          <div className="flex-1 p-6">
                            <h4 className="font-label-md text-on-surface mb-4 text-base">Pending Approvals</h4>
                            <div className="w-full border border-outline-subtle rounded-lg bg-surface-container-low overflow-hidden">
                              <div className="grid grid-cols-[1fr_80px_80px_80px_60px] gap-2 p-3 border-b border-outline-subtle bg-surface-container-lowest text-xs text-on-surface-variant font-label-md">
                                <div>Vendor</div>
                                <div>Amount</div>
                                <div>Account</div>
                                <div>Status</div>
                                <div>Actions</div>
                              </div>
                              <div className="grid grid-cols-[1fr_80px_80px_80px_60px] gap-2 p-3 items-center text-sm text-on-surface border-b border-outline-subtle/50 bg-surface-container-low">
                                <div className="truncate">Aome Corp</div>
                                <div className="font-mono-sm">$4,370.00</div>
                                <div className="text-xs text-on-surface-variant truncate">Pending</div>
                                <div>
                                  <span className="px-2 py-0.5 rounded text-[10px] bg-warning/20 text-warning border border-warning/30">Pending</span>
                                </div>
                                <div className="flex gap-2">
                                  <button className="w-6 h-6 rounded bg-primary-container/20 text-primary flex items-center justify-center hover:bg-primary-container/40 transition-colors"><span className="material-symbols-outlined text-[14px]">check</span></button>
                                  <button className="w-6 h-6 rounded bg-surface-container-high text-on-surface-variant flex items-center justify-center"><span className="material-symbols-outlined text-[14px]">more_horiz</span></button>
                                </div>
                              </div>
                              <div className="grid grid-cols-[1fr_80px_80px_80px_60px] gap-2 p-3 items-center text-xs text-on-surface opacity-50">
                                <div className="w-20 h-4 bg-surface-container-high rounded"></div>
                                <div className="w-16 h-4 bg-surface-container-high rounded"></div>
                                <div className="w-16 h-4 bg-surface-container-high rounded"></div>
                                <div className="w-14 h-5 bg-surface-container-high rounded-full"></div>
                                <div className="w-14 h-5 bg-surface-container-high rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-16 bg-gradient-to-b from-surface-container-high to-surface-container border-x border-outline-subtle relative z-[-1]"></div>
                    <div className="w-48 h-2 bg-surface-container border border-outline-subtle rounded-full shadow-lg relative z-[-1]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="bg-surface-container border border-outline-subtle rounded-full px-4 py-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">fact_check</span>
                      <span className="font-label-md text-primary text-sm">3. Accountant</span>
                    </div>
                    <p className="text-xs text-on-surface-variant text-center mt-2">Approval Queue -&gt; Review -&gt; Software to Transfer</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto w-full px-container-padding py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          <div className="lg:col-span-6 flex flex-col gap-stack-md relative z-10">
            <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded border border-outline-subtle w-fit mb-2 shimmer">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-md text-label-md text-on-surface">Workigom OS 2.0 Yayında</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface">Modern Muhasebe Ofisleri İçin Yapay Zeka Destekli İşletim Sistemi</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Faturaları incelemek için saatlerinizi harcamayı bırakın. Belgeleri bir kez yükleyin; Workigom AI siz daha açmadan her şeyi okur, kategorize eder ve doğrular.
            </p>
            <div className="flex flex-wrap items-center gap-gutter pt-4">
              <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 rounded font-bold hover:bg-surface-tint transition-colors">Ücretsiz Deneyin</button>
              <button className="bg-transparent text-on-surface border border-outline-subtle font-label-md text-label-md px-6 py-3 rounded font-bold hover:bg-surface-container-low transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined" style={{fontSize: "18px"}}>play_arrow</span> Demoyu İzle
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 relative w-full h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
            <div className="w-full h-full bg-surface-dim border border-outline-subtle rounded-xl shadow-2xl relative overflow-hidden flex flex-col">
              <div className="h-10 bg-surface border-b border-outline-subtle flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-bright"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-bright"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-bright"></div>
                </div>
                <div className="font-mono-sm text-mono-sm text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{fontSize: "14px"}}>lock</span> app.workigom.com
                </div>
                <div className="w-8"></div>
              </div>
              <div className="flex-1 flex overflow-hidden">
                <div className="w-[60px] border-r border-outline-subtle bg-surface-container-lowest flex flex-col items-center py-4 gap-4">
                  <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary-container border border-primary/30">
                    <span className="material-symbols-outlined" data-weight="fill" style={{fontSize: "20px"}}>robot_2</span>
                  </div>
                  <div className="w-8 h-8 rounded text-on-surface-variant flex items-center justify-center mt-4">
                    <span className="material-symbols-outlined" style={{fontSize: "20px"}}>inbox</span>
                  </div>
                  <div className="w-8 h-8 rounded text-on-surface-variant flex items-center justify-center">
                    <span className="material-symbols-outlined" style={{fontSize: "20px"}}>receipt_long</span>
                  </div>
                </div>
                <div className="w-[180px] border-r border-outline-subtle bg-surface flex flex-col">
                  <div className="p-3 border-b border-outline-subtle font-label-md text-label-md text-on-surface">
                    AI Gelen Kutusu
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-unit">
                    <div className="bg-surface-container-low p-2 rounded border border-primary/30 relative">
                      <div className="font-mono-sm text-mono-sm text-on-surface truncate mb-1">INV-2023-441.pdf</div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[9px] text-primary-container">İşlendi</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-[#1c2128] p-4 flex flex-col">
                  <div className="flex-1 bg-white shadow-lg rounded-[2px] p-4 relative overflow-hidden">
                    <div className="w-full h-4 bg-gray-200 mb-2 w-1/3"></div>
                    <div className="w-full h-8 bg-gray-100 mb-6"></div>
                    <div className="w-full h-2 bg-gray-100 mb-1 w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-high border border-outline-subtle rounded-lg shadow-xl p-4 w-[240px] z-20 glow-cyan">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined" data-weight="fill" style={{fontSize: "18px"}}>smart_toy</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface">Canlı İzleme</div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                Yapay zeka bugün 482 belge işledi.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#0B0C0D] py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-container-padding flex flex-col items-center">
            <div className="w-full max-w-5xl flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-dim border border-outline-subtle rounded-xl p-6 flex flex-col gap-4">
                  <h4 className="font-headline-md text-headline-md text-on-surface text-lg border-b border-outline-subtle pb-2">Geleneksel Süreç</h4>
                  <div className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-2">
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[16px]">close</span> WhatsApp ve E-posta karmaşası</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[16px]">close</span> Saatler süren manuel veri girişi</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[16px]">close</span> Yüksek insan hatası riski</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[16px]">close</span> Eksik belge takibi stresi</div>
                  </div>
                </div>
                <div className="bg-surface-container border border-primary/30 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full"></div>
                  <h4 className="font-headline-md text-headline-md text-primary-container text-lg border-b border-primary/20 pb-2 relative z-10">Workigom Süreci</h4>
                  <div className="font-body-sm text-body-sm text-on-surface flex flex-col gap-2 relative z-10">
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-[16px]">check</span> Tek merkezden kolay belge yükleme</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-[16px]">check</span> Saniyeler içinde AI ile veri çıkarımı</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-[16px]">check</span> Otomatik kural motorları ile sıfır hata</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-[16px]">check</span> Tek tıkla muhasebe programına aktarım</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-surface-container-lowest border border-outline-subtle rounded-lg p-5">
                  <div className="font-label-md text-label-md text-[#20D5F9] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{fontSize: "16px"}}>smartphone</span> İşletme Sahibi
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Muhasebe bilmesine gerek yok. Sadece faturanın fotoğrafını çeker veya sisteme yükler. Geri kalan her şey otomatik işlenir.</p>
                </div>
                <div className="bg-surface-container-lowest border border-outline-subtle rounded-lg p-5">
                  <div className="font-label-md text-label-md text-[#20D5F9] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{fontSize: "16px"}}>hub</span> Workigom AI
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Verileri anında okur, hesap kodlarını tahmin eder, KDV'yi ayırır ve mükerrer girişleri tespit ederek bir paket halinde hazırlar.</p>
                </div>
                <div className="bg-surface-container-lowest border border-outline-subtle rounded-lg p-5">
                  <div className="font-label-md text-label-md text-[#20D5F9] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{fontSize: "16px"}}>fact_check</span> Mali Müşavir
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Manuel veri girmek yerine, yapay zekanın hazırladığı kayıtları saniyeler içinde kontrol eder, onaylar ve doğrudan ERP'ye aktarır.</p>
                </div>
              </div>
            </div>
            <div className="mt-24 text-center max-w-4xl mx-auto pb-12">
              <h3 className="font-display-lg text-display-lg text-on-surface text-[24px] md:text-[32px] leading-tight">
                İşletme sahiplerinin muhasebe bilgisine, mali müşavirlerin ise manuel veri girişi ihtiyacı yok. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Workigom AI her iki tarafı tek bir akıllı işletim sisteminde birleştirir.</span>
              </h3>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto w-full px-container-padding py-16">
          <div className="mb-12">
            <h2 className="font-display-lg text-display-lg text-on-surface text-[32px] md:text-[40px] leading-tight">Hassasiyet İçin Tasarlandı</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Dağınık muhasebe araçlarının yerini deterministik yapay zeka ve katı kural motorlarıyla alan birleşik bir işletim sistemi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-unit auto-rows-[240px]">
            <div className="md:col-span-2 bg-surface-dim border border-outline-subtle rounded-xl p-6 relative overflow-hidden flex flex-col group">
              <div className="relative z-10 w-1/2">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-outline-subtle mb-4 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary-container">document_scanner</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Bilişsel OCR</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Yapılandırılmamış faturalar, fişler ve banka ekstrelerinden satır bazında verileri %99,7 doğrulukla çıkarın.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end p-4 opacity-80 pointer-events-none">
                <div className="w-full h-3/4 bg-surface-container rounded-t-lg border-t border-l border-r border-outline-subtle relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-2 bg-outline-subtle rounded-full"></div>
                  <div className="absolute top-8 left-4 w-1/2 h-2 bg-outline-subtle rounded-full"></div>
                  <div className="absolute bottom-4 right-4 bg-primary/20 border border-primary/50 text-primary-container text-[10px] px-2 py-1 rounded font-mono-sm flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{fontSize:"12px"}}>memory</span> JSON Ayrıştırılıyor
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-dim border border-outline-subtle rounded-xl p-6 relative overflow-hidden group">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-outline-subtle mb-4 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary-container">account_tree</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl">Akıllı Kurallar</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Belgeleri satıcı veya tutara göre otomatik olarak yönlendirmek için görsel EĞER/O ZAMAN mantık oluşturucu.</p>
            </div>
            <div className="bg-surface-dim border border-outline-subtle rounded-xl p-6 relative overflow-hidden group">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-outline-subtle mb-4 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary-container">cloud_sync</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl">Müşteri Köprüsü</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Müşterilerin dosyaları doğrudan iş akışınıza bırakması için güvenli, şifreli portallar.</p>
            </div>
            <div className="md:col-span-2 bg-surface-dim border border-outline-subtle rounded-xl p-6 relative overflow-hidden flex flex-col md:flex-row group gap-4">
              <div className="relative z-10 w-full md:w-1/2">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-outline-subtle mb-4 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary-container">insights</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">AI Muhasebeci ve Otomatik KDV</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Sürekli denetim. Sistem eksik fişleri, olağandışı KDV oranlarını ve mükerrer faturaları işaretler.</p>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-unit">
                <div className="bg-surface-container border border-warning/30 rounded p-3 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-warning rounded-l"></div>
                  <span className="font-label-md text-label-md text-on-surface text-[10px]">KDV Uyuşmazlığı</span>
                  <div className="font-mono-sm text-mono-sm text-on-surface-variant text-[11px] mt-1">Olağandışı oran tespit edildi.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-surface-dim font-label-md text-label-md full-width border-t border-outline-subtle flex flex-col md:flex-row justify-between items-center w-full px-container-padding py-stack-lg max-w-7xl mx-auto gap-stack-md mt-16">
          <span className="font-headline-md text-headline-md font-bold text-on-surface text-lg">Workigom AI</span>
          <div className="flex gap-gutter items-center">
            <a className="text-on-tertiary-fixed-variant hover:text-primary-fixed-dim transition-colors" href="#">Gizlilik Politikası</a>
            <a className="text-on-tertiary-fixed-variant hover:text-primary-fixed-dim transition-colors" href="#">Kullanım Koşulları</a>
            <a className="text-on-tertiary-fixed-variant hover:text-primary-fixed-dim transition-colors" href="#">Güvenlik</a>
          </div>
          <div className="text-on-tertiary-fixed-variant text-center md:text-right">
            © 2024 Workigom AI. Muhasebeciler İçin Akıllı İşletim Sistemi.
          </div>
        </footer>
      </main>
    </>
  );
}
