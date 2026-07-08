        {/* Right Column (AI Core Graphic) */}
        <div className="flex-1 relative h-[700px] w-full hidden lg:flex items-center justify-end xl:justify-center z-10 mt-10">
          {/* Responsive Scaling Wrapper */}
          <div className="relative w-[900px] h-[700px] scale-[0.6] lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-100 origin-right xl:origin-center flex-shrink-0">
          
            {/* Background Ambient Glow */}
            <div className="absolute left-[300px] top-[200px] pointer-events-none z-0">
              <div className="w-[300px] h-[300px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] rounded-full mix-blend-screen"></div>
            </div>

            {/* SVG Connecting lines */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <svg className="absolute inset-0 w-full h-full" style={{overflow: 'visible'}}>
                <defs>
                  <linearGradient id="neon-blue-pink" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0,150,255,0.8)" />
                    <stop offset="50%" stopColor="rgba(200,50,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(255,0,150,0.8)" />
                  </linearGradient>
                  <linearGradient id="neon-pink-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,0,150,0.8)" />
                    <stop offset="50%" stopColor="rgba(200,50,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(0,150,255,0.8)" />
                  </linearGradient>
                  <filter id="glow-strong" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Left side lines connecting to center globe (Globe center X=450, Y=350) */}
                {/* Left box right edge X=260 */}
                <path d="M 260,200 C 350,200 370,330 400,340" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,260 C 350,260 360,340 400,350" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,320 C 320,320 340,350 400,360" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,380 C 320,380 340,370 400,370" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,440 C 350,440 360,390 400,380" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 260,500 C 350,500 370,420 400,390" fill="none" stroke="url(#neon-blue-pink)" strokeWidth="2.5" filter="url(#glow-strong)" />

                {/* Right side lines connecting from center globe to Right Nodes (Right Box Left Edge X=620) */}
                <path d="M 500,310 C 560,290 570,180 620,180" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 520,330 C 570,330 580,280 620,280" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 520,370 C 570,370 580,380 620,380" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" />
                <path d="M 500,390 C 560,410 570,520 620,520" fill="none" stroke="url(#neon-pink-blue)" strokeWidth="2.5" filter="url(#glow-strong)" />
              </svg>
            </div>

            {/* Left Box: TÜM KANALLAR TEK YERDE */}
            <div className="absolute left-[0px] top-[140px] w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-5 shadow-2xl z-20">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">TÜM KANALLAR TEK YERDE</div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">photo_camera</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#f09433] transition-colors">Instagram</span>
                  </div>
                  <div className="bg-[#FF00AA]/20 text-[#FF00AA] px-2 py-0.5 rounded-full text-[11px] font-bold">23</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#25D366] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">chat</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                  </div>
                  <div className="bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded-full text-[11px] font-bold">15</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#1877F2] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">thumb_up</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#1877F2] transition-colors">Facebook</span>
                  </div>
                  <div className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full text-[11px] font-bold">12</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#F5B400] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">star</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#F5B400] transition-colors">Google Yorumlar</span>
                  </div>
                  <div className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full text-[11px] font-bold">8</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-gradient-to-tr from-[#00B2FF] to-[#006AFF] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">forum</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#00B2FF] transition-colors">Messenger</span>
                  </div>
                  <div className="bg-blue-400/20 text-blue-400 px-2 py-0.5 rounded-full text-[11px] font-bold">7</div>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#0A66C2] flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[18px]">work</span></div>
                    <span className="text-[14px] font-bold text-white group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
                  </div>
                  <div className="bg-blue-600/20 text-blue-500 px-2 py-0.5 rounded-full text-[11px] font-bold">4</div>
                </div>
              </div>
            </div>

            {/* AI Assistant Tooltip */}
            <div className="absolute left-[200px] top-[100px] bg-[#1E293B] border border-[#334155] rounded-xl p-3 shadow-2xl z-30 w-[180px]">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-[#1E293B] border-l border-b border-[#334155] rotate-45"></div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">AI Asistan</span>
              </div>
              <p className="text-[12px] text-gray-200 leading-tight">Merhaba! Size nasl yardmc olabilirim?</p>
            </div>

            {/* Center Node (AI Globe) */}
            <div className="absolute left-[360px] top-[260px] flex flex-col items-center justify-center z-30">
              <div className="w-[180px] h-[180px] rounded-full relative flex items-center justify-center">
                {/* Intense backdrop glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF00AA]/60 via-[#8A2BE2]/60 to-[#00F0FF]/60 blur-[30px] rounded-full"></div>
                
                {/* Wireframe grids */}
                <div className="absolute w-full h-full rounded-full border border-blue-400/40 shadow-[inset_0_0_50px_rgba(0,100,255,0.8)]"></div>
                <div className="absolute w-full h-full rounded-full border border-blue-400/40 rotate-[45deg] scale-x-50"></div>
                <div className="absolute w-full h-full rounded-full border border-blue-400/40 rotate-[-45deg] scale-x-50"></div>
                <div className="absolute w-full h-full rounded-full border border-blue-400/40 rotate-[90deg] scale-y-50"></div>
                
                {/* Inner dark core */}
                <div className="w-[120px] h-[120px] bg-[#05070A] rounded-full shadow-[0_0_40px_rgba(138,43,226,0.8)] flex items-center justify-center z-10 border border-purple-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent"></div>
                  <span className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] z-10">AI</span>
                </div>

                {/* Connecting light dots on edge */}
                <div className="absolute left-[-5px] top-[40px] w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                <div className="absolute left-[-10px] top-[90px] w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                <div className="absolute left-[5px] top-[140px] w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>

                <div className="absolute right-[5px] top-[40px] w-2 h-2 rounded-full bg-[#FF00AA] shadow-[0_0_10px_#FF00AA]"></div>
                <div className="absolute right-[-10px] top-[90px] w-2 h-2 rounded-full bg-[#FF00AA] shadow-[0_0_10px_#FF00AA]"></div>
                <div className="absolute right-[5px] top-[140px] w-2 h-2 rounded-full bg-[#FF00AA] shadow-[0_0_10px_#FF00AA]"></div>
              </div>

              {/* Bottom Status Pill */}
              <div className="absolute bottom-[-50px] bg-[#0A0D14]/90 border border-[#1E293B] rounded-full px-4 py-2 shadow-xl flex items-center gap-2 z-40">
                <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div>
                <span className="text-[11px] font-bold text-gray-300 tracking-widest">7/24 OTONOM ÇALIŞIYOR</span>
              </div>
            </div>

            {/* Right Boxes Container */}
            <div className="absolute left-[620px] top-[120px] flex flex-col gap-4 z-20">
              
              {/* Box 1: İÇERİK ÜRETİYOR */}
              <div className="w-[280px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-4 shadow-2xl relative">
                <div className="absolute left-[-20px] top-[40%] w-2 h-2 rounded-full bg-[#FF00AA] shadow-[0_0_10px_#FF00AA]"></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">İÇERİK ÜRETİYOR</div>
                <div className="flex gap-3">
                   <div className="w-16 h-16 rounded-xl bg-[url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=150&auto=format&fit=crop')] bg-cover bg-center flex-shrink-0 border border-purple-500/30"></div>
                   <div className="flex flex-col justify-between">
                     <div className="text-[13px] leading-tight text-white font-medium">Yeni koleksiyon paylaşımı hazır! ✨</div>
                     <div className="flex gap-1.5 mt-2">
                       <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-white">photo_camera</span></div>
                       <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-white">thumb_up</span></div>
                       <div className="w-5 h-5 rounded-full bg-[#0A66C2] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-white">work</span></div>
                       <div className="w-5 h-5 rounded-full bg-[#EA4335] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-white">g_translate</span></div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Box 2: MÜŞTERİLERE YANIT VERİYOR */}
              <div className="w-[280px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-4 shadow-2xl relative">
                <div className="absolute left-[-20px] top-[40%] w-2 h-2 rounded-full bg-[#9D4EDD] shadow-[0_0_10px_#9D4EDD]"></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">MÜŞTERİLERE YANIT VERİYOR</div>
                <div className="bg-[#141A27] rounded-xl p-3 border border-[#232D42] flex items-start gap-3">
                   <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5"><span className="material-symbols-outlined text-[12px] text-white">chat</span></div>
                   <div className="text-[13px] leading-[1.4] text-gray-200">Siparişiniz yola çıktı!<br/>Teşekkürler. 🧡</div>
                </div>
              </div>

              {/* Box 3: MUHASEBEYE İŞLENİYOR */}
              <div className="w-[280px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-4 shadow-2xl relative">
                <div className="absolute left-[-20px] top-[40%] w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">MUHASEBEYE İŞLENİYOR</div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center flex-shrink-0 border border-[#1E293B]">
                     <span className="material-symbols-outlined text-[20px] text-blue-400">description</span>
                   </div>
                   <div className="flex flex-col flex-1">
                     <div className="text-[13px] font-bold text-white mb-1">Fatura okundu</div>
                     <div className="text-[12px] text-gray-400 mb-0.5">KDV: %20</div>
                     <div className="text-[13px] text-white mt-0.5">Tutar: <span className="font-bold">₺2.450</span></div>
                   </div>
                </div>
              </div>

              {/* Box 4: MUHASEBECİNİZLE PAYLAŞIYOR */}
              <div className="w-[280px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B]/80 rounded-2xl p-4 shadow-2xl relative">
                <div className="absolute left-[-20px] top-[40%] w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_blue]"></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">MUHASEBECİNİZLE PAYLAŞIYOR</div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop')] bg-cover bg-center border-2 border-[#1E293B]"></div>
                   <div className="flex flex-col">
                     <div className="text-[13px] font-bold text-white mb-0.5">Yeni belge geldi</div>
                     <div className="text-[12px] text-[#F5B400] font-medium">Onay bekliyor</div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
