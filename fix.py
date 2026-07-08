import json

graphic_code = '''
        {/* Right Column (AI Core Graphic) */}
        <div className="flex-[1.2] relative h-[700px] w-full hidden lg:flex items-center justify-end xl:justify-center z-10 mt-10">
          <div className="relative w-[900px] h-[700px] scale-[0.6] lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-100 origin-right xl:origin-center flex items-center justify-center flex-shrink-0">
          
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[400px] h-[400px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
          </div>

          {/* SVG Connecting lines (Pixel Perfect) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <svg className="absolute inset-0 w-full h-full" style={{overflow: 'visible'}}>
              <defs>
                <linearGradient id="line-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,150,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(200,50,255,0.4)" />
                </linearGradient>
                <linearGradient id="line-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(200,50,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(0,150,255,0.8)" />
                </linearGradient>
                <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Left Lines (from Left Box to AI Globe) */}
              {/* Left Box Right edge X=240, Center Globe Edge X=370 */}
              {/* Y coordinates of left box items: roughly 175, 230, 285, 340, 395, 450 */}
              <path d="M 240,175 C 300,175 320,310 370,310" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,230 C 300,230 320,330 370,330" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,285 C 310,285 330,350 370,350" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,340 C 310,340 330,370 370,370" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,395 C 300,395 320,390 370,390" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 240,450 C 300,450 320,410 370,410" fill="none" stroke="url(#line-grad-left)" strokeWidth="2" filter="url(#glow-line)" />

              {/* Left Dots */}
              <circle cx="240" cy="175" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="230" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="285" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="340" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="395" r="3" fill="#00f0ff" filter="url(#glow-line)" />
              <circle cx="240" cy="450" r="3" fill="#00f0ff" filter="url(#glow-line)" />

              {/* Right Lines (from AI Globe to Right Boxes) */}
              {/* Globe Right Edge X=530, Right Box Left edge X=650 */}
              {/* Y coordinates of right boxes: 180, 290, 400, 510 */}
              <path d="M 530,310 C 580,310 600,180 650,180" fill="none" stroke="url(#line-grad-right)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 530,330 C 580,330 600,290 650,290" fill="none" stroke="url(#line-grad-right)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 530,370 C 580,370 600,400 650,400" fill="none" stroke="url(#line-grad-right)" strokeWidth="2" filter="url(#glow-line)" />
              <path d="M 530,390 C 580,390 600,510 650,510" fill="none" stroke="url(#line-grad-right)" strokeWidth="2" filter="url(#glow-line)" />

              {/* Right Dots */}
              <circle cx="650" cy="180" r="3" fill="#FF00AA" filter="url(#glow-line)" />
              <circle cx="650" cy="290" r="3" fill="#FF00AA" filter="url(#glow-line)" />
              <circle cx="650" cy="400" r="3" fill="#FF00AA" filter="url(#glow-line)" />
              <circle cx="650" cy="510" r="3" fill="#FF00AA" filter="url(#glow-line)" />
            </svg>
          </div>

          {/* Left Box: TÜM KANALLAR TEK YERDE */}
          <div className="absolute left-[0px] top-[130px] w-[240px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-5 shadow-2xl z-20">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">TÜM KANALLAR TEK YERDE</div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">Instagram</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#E1306C] text-white rounded-full text-[10px] font-bold">23</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-[#25D366] flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.127.553 4.195 1.603 6.012L.484 22.1l4.172-1.096A11.97 11.97 0 0012.03 24c6.635 0 12.03-5.395 12.03-12.03S18.666 0 12.031 0zm6.81 17.15c-.29.816-1.636 1.545-2.27 1.62-.577.068-1.32-.016-3.665-.986-2.825-1.168-4.636-4.047-4.773-4.23-.137-.183-1.14-1.517-1.14-2.89 0-1.373.714-2.046.97-2.316.255-.27.555-.337.74-.337.185 0 .37.001.528.008.163.007.382-.061.597.458.223.538.74 1.808.807 1.944.067.136.111.295.019.477-.091.182-.138.295-.274.455-.136.16-.29.351-.413.483-.136.143-.28.297-.123.568.156.27.694 1.148 1.492 1.859.992.884 1.85 1.157 2.124 1.294.274.137.433.114.596-.068.163-.182.7-.818.89-1.101.19-.283.376-.237.625-.148.249.09 1.571.741 1.84 8.877.27.136.449.204.514.318.065.114.065.666-.225 1.48z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">WhatsApp</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#25D366] text-white rounded-full text-[10px] font-bold">15</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-[#1877F2] flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">Facebook</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#1877F2] text-white rounded-full text-[10px] font-bold">12</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-white flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.825-.075-1.62-.21-2.385H12.24v4.515h6.45c-.285 1.455-1.095 2.685-2.325 3.51v2.925h3.765c2.205-2.025 3.615-5.01 3.615-8.565z"/><path fill="#34A853" d="M12.24 24c3.24 0 5.955-1.08 7.935-2.91l-3.765-2.925c-1.08.72-2.46 1.14-4.17 1.14-3.21 0-5.925-2.16-6.9-5.07H1.455v3.015C3.42 21.18 7.5 24 12.24 24z"/><path fill="#FBBC05" d="M5.34 15.135c-.24-.72-.375-1.5-.375-2.31s.135-1.59.375-2.31V7.5H1.455C.705 8.985.285 10.68.285 12.42c0 1.74.42 3.435 1.17 4.92l3.885-2.205z"/><path fill="#EA4335" d="M12.24 4.86c1.77 0 3.36.6 4.605 1.785l3.45-3.45C18.195 1.215 15.48 0 12.24 0 7.5 0 3.42 2.82 1.455 6.75l3.885 3.015c.975-2.91 3.69-5.07 6.9-5.07z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">Google Yorumlar</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-gray-700 text-white rounded-full text-[10px] font-bold">8</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-[#00B2FF] flex items-center justify-center shadow-lg">
                    <svg className="w-[16px] h-[16px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.14 2 11.25c0 2.912 1.488 5.49 3.791 7.159V22l3.463-1.895A10.74 10.74 0 0012 20.5c5.523 0 10-4.14 10-9.25S17.523 2 12 2zm1.096 12.21l-2.73-2.905-5.32 2.905 5.867-6.22 2.763 2.906 5.286-2.906-5.866 6.22z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">Messenger</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#00B2FF] text-white rounded-full text-[10px] font-bold">7</div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-[28px] h-[28px] rounded-[8px] bg-[#0A66C2] flex items-center justify-center shadow-lg">
                    <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <span className="text-[13px] font-medium text-white transition-colors">LinkedIn</span>
                </div>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#0A66C2] text-white rounded-full text-[10px] font-bold">4</div>
              </div>
            </div>
          </div>

          {/* AI Assistant Tooltip */}
          <div className="absolute left-[260px] top-[90px] bg-[#0F141F] border border-[#1E293B] rounded-2xl p-4 shadow-2xl z-30 w-[190px]">
            <div className="absolute -left-2 top-5 w-4 h-4 bg-[#0F141F] border-l border-b border-[#1E293B] rotate-45"></div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">AI ASİSTAN</span>
            </div>
            <p className="text-[12px] text-gray-200 leading-tight">Merhaba! Size nasıl yardımcı olabilirim?</p>
            <div className="absolute right-[-15px] top-[40px] w-8 h-8 rounded-full bg-[#1A1F2B] border border-[#2A3142] flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] text-blue-400">graphic_eq</span>
            </div>
          </div>

          {/* Center Node (AI Globe) */}
          <div className="absolute left-[370px] top-[210px] flex flex-col items-center justify-center z-30">
            <div className="w-[160px] h-[160px] rounded-full relative flex items-center justify-center">
              {/* Intense backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF00AA]/40 via-[#8A2BE2]/40 to-[#00F0FF]/40 blur-[40px] rounded-full"></div>
              
              {/* Wireframe grids */}
              <div className="absolute w-full h-full rounded-full border border-blue-500/30 shadow-[inset_0_0_30px_rgba(0,100,255,0.4)]"></div>
              <div className="absolute w-full h-full rounded-full border border-blue-400/20 rotate-[45deg] scale-x-50"></div>
              <div className="absolute w-full h-full rounded-full border border-blue-400/20 rotate-[-45deg] scale-x-50"></div>
              <div className="absolute w-full h-full rounded-full border border-blue-400/20 rotate-[90deg] scale-y-50"></div>
              
              {/* Inner dark core */}
              <div className="w-[100px] h-[100px] bg-[#05070A] rounded-full shadow-[0_0_30px_rgba(138,43,226,0.6)] flex items-center justify-center z-10 border border-purple-500/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent"></div>
                <span className="text-[48px] font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] z-10 tracking-tighter">AI</span>
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div className="absolute bottom-[-60px] bg-[#0A0D14]/90 border border-[#1E293B] rounded-full px-4 py-2.5 shadow-xl flex items-center gap-2 z-40">
              <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div>
              <span className="text-[11px] font-bold text-gray-300 tracking-widest uppercase">7/24 OTONOM ÇALIŞIYOR</span>
            </div>
            {/* Connection line for status pill */}
            <div className="absolute bottom-[-22px] w-[2px] h-[30px] bg-gradient-to-b from-purple-500/50 to-[#1E293B]"></div>
          </div>

          {/* Right Boxes Container */}
          <div className="absolute left-[650px] top-[140px] flex flex-col gap-4 z-20">
            
            {/* Box 1: İÇERİK ÜRETİYOR */}
            <div className="w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl relative">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">İÇERİK ÜRETİYOR</div>
              <div className="flex gap-3">
                 <div className="w-[60px] h-[60px] rounded-xl bg-[url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=150&auto=format&fit=crop')] bg-cover bg-center flex-shrink-0 border border-purple-500/30"></div>
                 <div className="flex flex-col justify-between">
                   <div className="text-[12px] leading-snug text-white font-medium">Yeni koleksiyon paylaşımı hazır! ✨</div>
                   <div className="flex gap-1.5 mt-2">
                     <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center"><svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></div>
                     <div className="w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center"><svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></div>
                     <div className="w-4 h-4 rounded-full bg-[#0A66C2] flex items-center justify-center"><svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></div>
                     <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center"><svg className="w-2.5 h-2.5" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.825-.075-1.62-.21-2.385H12.24v4.515h6.45c-.285 1.455-1.095 2.685-2.325 3.51v2.925h3.765c2.205-2.025 3.615-5.01 3.615-8.565z"/><path fill="#34A853" d="M12.24 24c3.24 0 5.955-1.08 7.935-2.91l-3.765-2.925c-1.08.72-2.46 1.14-4.17 1.14-3.21 0-5.925-2.16-6.9-5.07H1.455v3.015C3.42 21.18 7.5 24 12.24 24z"/><path fill="#FBBC05" d="M5.34 15.135c-.24-.72-.375-1.5-.375-2.31s.135-1.59.375-2.31V7.5H1.455C.705 8.985.285 10.68.285 12.42c0 1.74.42 3.435 1.17 4.92l3.885-2.205z"/><path fill="#EA4335" d="M12.24 4.86c1.77 0 3.36.6 4.605 1.785l3.45-3.45C18.195 1.215 15.48 0 12.24 0 7.5 0 3.42 2.82 1.455 6.75l3.885 3.015c.975-2.91 3.69-5.07 6.9-5.07z"/></svg></div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Box 2: MÜŞTERİLERE YANIT VERİYOR */}
            <div className="w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl relative">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">MÜŞTERİLERE YANIT VERİYOR</div>
              <div className="bg-[#141A27] rounded-xl p-3 border border-[#232D42] flex items-start gap-2.5">
                 <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.127.553 4.195 1.603 6.012L.484 22.1l4.172-1.096A11.97 11.97 0 0012.03 24c6.635 0 12.03-5.395 12.03-12.03S18.666 0 12.031 0zm6.81 17.15c-.29.816-1.636 1.545-2.27 1.62-.577.068-1.32-.016-3.665-.986-2.825-1.168-4.636-4.047-4.773-4.23-.137-.183-1.14-1.517-1.14-2.89 0-1.373.714-2.046.97-2.316.255-.27.555-.337.74-.337.185 0 .37.001.528.008.163.007.382-.061.597.458.223.538.74 1.808.807 1.944.067.136.111.295.019.477-.091.182-.138.295-.274.455-.136.16-.29.351-.413.483-.136.143-.28.297-.123.568.156.27.694 1.148 1.492 1.859.992.884 1.85 1.157 2.124 1.294.274.137.433.114.596-.068.163-.182.7-.818.89-1.101.19-.283.376-.237.625-.148.249.09 1.571.741 1.84 8.877.27.136.449.204.514.318.065.114.065.666-.225 1.48z"/></svg></div>
                 <div className="text-[12px] leading-[1.4] text-gray-200">Siparişiniz yola çıktı!<br/>Teşekkürler. 🧡</div>
              </div>
            </div>

            {/* Box 3: MUHASEBEYE İŞLENİYOR */}
            <div className="w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl relative">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">MUHASEBEYE İŞLENİYOR</div>
              <div className="flex items-start gap-3">
                 <div className="w-9 h-9 rounded-xl bg-[#0F172A] flex items-center justify-center flex-shrink-0 border border-[#1E293B]">
                   <span className="material-symbols-outlined text-[18px] text-[#00F0FF]">description</span>
                 </div>
                 <div className="flex flex-col flex-1">
                   <div className="text-[12px] font-bold text-white mb-0.5">Fatura okundu</div>
                   <div className="text-[11px] text-gray-400 mb-0.5">KDV: %20</div>
                   <div className="text-[12px] text-white">Tutar: <span className="font-bold">₺2.450</span></div>
                 </div>
              </div>
            </div>

            {/* Box 4: MUHASEBECİNİZLE PAYLAŞIYOR */}
            <div className="w-[260px] bg-[#0A0D14]/90 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl relative">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">MUHASEBECİNİZLE PAYLAŞIYOR</div>
              <div className="flex items-center gap-3">
                 <div className="w-9 h-9 rounded-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop')] bg-cover bg-center border-2 border-[#1E293B]"></div>
                 <div className="flex flex-col">
                   <div className="text-[12px] font-bold text-white mb-0.5">Yeni belge geldi</div>
                   <div className="text-[11px] text-[#F5B400] font-medium">Onay bekliyor</div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
'''

feature_code = '''
      {/* --- AI Power Features Grid --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
          <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase">GÜÇLÜ AI ÖZELLİKLERİ</span>
        </div>
        
        <h2 className="text-[28px] md:text-[36px] font-extrabold mb-12 text-center text-white tracking-tight">
          İşletmenizi Büyüten AI Gücü
        </h2>

        {/* CSS Grid for perfect wrapping */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: AI İçerik */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-pink-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-base mb-2 text-white">AI İçerik Üretimi</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">Sadece birkaç kelime ile profesyonel görseller ve metinler oluşturun.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] relative">
              <div className="flex gap-2 mb-3">
                <div className="bg-[#252A33] text-gray-300 text-[10px] px-2 py-1 rounded font-bold">Oluştur</div>
                <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">thumb_up</span></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px]">photo_camera</span></div>
              </div>
              <div className="flex-1 rounded-lg bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden border border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                <span className="font-bold text-white text-[10px] tracking-widest relative z-10 drop-shadow-md">YENİ KOLEKSİYON!</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Muhasebe */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-cyan-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-base mb-2 text-white">AI Muhasebe</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">Faturaları tarayın, AI tüm bilgileri ayıklar ve kaydeder.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] relative">
              <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-cyan-500/10 blur-[30px] rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
              <div className="w-full h-full bg-white rounded-lg p-2.5 shadow-inner relative transform group-hover:scale-105 transition-transform origin-bottom">
                 <div className="w-1/2 h-2 bg-gray-200 rounded mb-2"></div>
                 <div className="w-3/4 h-2 bg-gray-100 rounded mb-1"></div>
                 <div className="w-1/3 h-2 bg-gray-100 rounded mb-3"></div>
                 
                 <div className="border-t border-gray-100 pt-2 flex justify-between items-center">
                   <div className="text-[9px] font-bold text-gray-400">KDV: %20</div>
                   <div className="text-[11px] font-bold text-black">₺ 4.850,00</div>
                 </div>
                 
                 <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                   AI KAYDETTİ <span className="material-symbols-outlined text-[9px] ml-0.5">check_circle</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 3: AI Asistan */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-blue-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-base mb-2 text-white">AI Asistan</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">Siz uyurken bile müşterilerinize anında yanıt verir.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] justify-end relative">
               <div className="absolute top-2 left-2 flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
               </div>
               
               <div className="bg-[#2A2E35] rounded-lg rounded-tl-none p-2 mb-2 max-w-[80%] border border-gray-700">
                 <p className="text-[9px] text-gray-300">Kargo durumu nedir?</p>
               </div>
               <div className="bg-blue-600 rounded-lg rounded-br-none p-2 max-w-[90%] self-end flex items-start gap-1.5 shadow-lg group-hover:-translate-y-1 transition-transform">
                 <span className="material-symbols-outlined text-white text-[10px] mt-0.5">smart_toy</span>
                 <p className="text-[9px] text-white leading-tight">Siparişiniz kargoya verildi. Takip no: 123456</p>
               </div>
            </div>
          </div>

          {/* Card 4: AI Analitik */}
          <div className="w-full bg-[#121418] border border-[#2A2E35] rounded-2xl p-5 flex flex-col hover:border-purple-500/50 transition-colors group relative overflow-hidden">
            <h3 className="font-bold text-base mb-2 text-white">AI Analitik</h3>
            <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">Tüm verilerinizi analiz eder ve büyüme fırsatlarını bulur.</p>
            
            <div className="w-full bg-[#1A1D24] rounded-xl border border-[#2A2E35] flex flex-col p-3 mt-auto h-[160px] relative overflow-hidden">
              <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">AYLIK GELİR</span>
                <span className="text-[9px] text-green-400 font-bold bg-green-400/10 px-1.5 py-0.5 rounded">+15.4%</span>
              </div>
              <div className="text-[16px] font-bold text-white mb-2 relative z-10">₺ 124,500</div>
              
              {/* Chart line */}
              <svg className="absolute bottom-0 left-0 w-full h-[60px]" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 L0,70 Q25,30 50,70 T100,20 L100,100 Z" fill="url(#chart-grad)" opacity="0.4" className="group-hover:opacity-70 transition-opacity" />
                <path d="M0,70 Q25,30 50,70 T100,20" fill="none" stroke="#A855F7" strokeWidth="3" className="group-hover:stroke-pink-500 transition-colors" />
                <defs>
                  <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute right-[10%] top-[40%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#A855F7] group-hover:scale-150 transition-transform"></div>
            </div>
          </div>
          
        </div>
      </section>
'''

with open("fix.json", "w") as f:
    json.dump({
        "graphic": graphic_code,
        "features": feature_code
    }, f)

