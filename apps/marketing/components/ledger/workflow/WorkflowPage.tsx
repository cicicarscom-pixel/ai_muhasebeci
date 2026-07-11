"use client";
import React from 'react';
import Script from 'next/script';

export default function WorkflowPage() {
  return (
    <>
      <Script src='https://unpkg.com/@phosphor-icons/web' strategy='lazyOnload' />
      <style dangerouslySetInnerHTML={{ __html: `
        .kanban-col::-webkit-scrollbar { width: 4px; }
        .kanban-col::-webkit-scrollbar-track { background: transparent; }
        .kanban-col::-webkit-scrollbar-thumb { background: #2C303E; border-radius: 4px; }
        .kanban-col:hover::-webkit-scrollbar-thumb { background: #4B5563; }
      `}} />
      <div className='bg-brand-bg text-brand-text font-sans h-screen w-screen overflow-hidden flex selection:bg-brand-primary selection:text-white'>
        {/* Sidebar */}
        <aside className='w-20 hover:w-64 transition-all duration-300 ease-in-out flex-shrink-0 bg-brand-sidebar border-r border-brand-border flex flex-col justify-between h-full relative z-40 group md:relative'>
          <div>
            <div className='h-20 flex items-center px-5 border-b border-brand-border relative overflow-hidden whitespace-nowrap'>
              <div className='w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20'>
                <i className='ph ph-lightning text-xl'></i>
              </div>
              <button className='absolute right-4 text-brand-text hover:text-white transition-colors opacity-0 group-hover:opacity-100'>
                <i className='ph ph-caret-double-left'></i>
              </button>
            </div>
            <nav className='p-4 space-y-2 overflow-hidden whitespace-nowrap'>
              <a className='flex items-center gap-4 px-2 py-2.5 rounded-lg text-brand-text hover:bg-white/5 hover:text-white transition-colors item-group' href='#'>
                <i className='ph ph-house text-xl flex-shrink-0 item-group-hover:text-brand-primary transition-colors ml-1'></i>
                <span className='font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Kontrol Merkezi</span>
              </a>
              <a className='flex items-center gap-4 px-2 py-2.5 rounded-lg bg-white/5 text-white shadow-sm item-group' href='#'>
                <i className='ph ph-chart-line-up text-xl text-brand-primary flex-shrink-0 ml-1'></i>
                <span className='font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>İş Akışı</span>
              </a>
              <a className='flex items-center gap-4 px-2 py-2.5 rounded-lg text-brand-text hover:bg-white/5 hover:text-white transition-colors item-group' href='#'>
                <i className='ph ph-files text-xl flex-shrink-0 item-group-hover:text-brand-primary transition-colors ml-1'></i>
                <span className='font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Evrak Merkezi</span>
              </a>
              <a className='flex items-center gap-4 px-2 py-2.5 rounded-lg text-brand-text hover:bg-white/5 hover:text-white transition-colors item-group' href='#'>
                <i className='ph ph-users text-xl flex-shrink-0 item-group-hover:text-brand-primary transition-colors ml-1'></i>
                <span className='font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Mükellefler</span>
              </a>
              <a className='flex items-center gap-4 px-2 py-2.5 rounded-lg text-brand-text hover:bg-white/5 hover:text-white transition-colors item-group' href='#'>
                <i className='ph ph-chart-bar text-xl flex-shrink-0 item-group-hover:text-brand-primary transition-colors ml-1'></i>
                <span className='font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Analitik</span>
              </a>
            </nav>
          </div>
          <div className='p-4 overflow-hidden whitespace-nowrap'>
            <a className='flex items-center gap-4 px-2 py-2.5 rounded-lg text-brand-text hover:bg-white/5 hover:text-white transition-colors item-group mb-4' href='#'>
              <i className='ph ph-gear text-xl flex-shrink-0 item-group-hover:text-brand-primary transition-colors ml-1'></i>
              <span className='font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Ayarlar</span>
            </a>
            <div className='flex items-center justify-between px-3 py-2 rounded-lg bg-brand-card border border-brand-border text-brand-text opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <i className='ph ph-moon text-lg'></i>
              <button className='hover:text-white transition-colors'><i className='ph ph-caret-right text-sm'></i></button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className='flex-1 flex flex-col min-w-0 overflow-hidden relative z-10'>
          <header className='h-20 flex-shrink-0 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border flex items-center justify-between px-8 z-30'>
            <div>
              <h1 className='text-xl font-semibold text-white tracking-tight'>İş Akışı</h1>
              <p className='text-sm text-brand-text mt-0.5'>Evrakların işlem sürecini takip edin</p>
            </div>
            <div className='flex-1 max-w-xl mx-8'>
              <div className='relative group'>
                <i className='ph ph-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-text group-focus-within:text-brand-primary transition-colors'></i>
                <input className='w-full bg-brand-card border border-brand-border rounded-lg pl-10 pr-12 py-2 text-sm text-white placeholder-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-shadow' placeholder='Evrak, mükellef, tedarikçi ara...' type='text' />
                <div className='absolute right-3 top-1/2 -translate-y-1/2 flex gap-1'>
                  <kbd className='hidden sm:inline-block border border-brand-border rounded px-1.5 py-0.5 text-[10px] font-sans text-brand-text bg-white/5'>⌘K</kbd>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <button className='relative text-brand-text hover:text-white transition-colors'>
                <i className='ph ph-bell text-xl'></i>
                <span className='absolute -top-1 -right-1 w-4 h-4 bg-brand-primary rounded-full text-[10px] text-white flex items-center justify-center border-2 border-brand-bg'>3</span>
              </button>
              <div className='h-8 w-px bg-brand-border'></div>
              <button className='flex items-center gap-3 hover:bg-white/5 p-1.5 -ml-1.5 rounded-lg transition-colors'>
                <img alt='Ahmet Yılmaz' className='w-9 h-9 rounded-full object-cover ring-2 ring-brand-border' src='https://lh3.googleusercontent.com/aida-public/AB6AXuD1hpt1fVLtxqdKnXc_NBr_T3xg9V5SNpPo6ToD8OWeU6xsSRXy7OBdF-7FHh4GFgO8XX0kKTOgh7ayNpadhEaK8xD_qtaR0rksZpOl7RD_wuZggZ-nw4mRady2lmZ59_ZrqaymWGtnR0vxeKRvh9526Xbtus8Duer8yj_mrDzwolIy2ua16rEqv897CTIBgROFWYKbKxMP95DWQ1X4Uzf058-hg5gMT6HEVQy0-JcvFvZu6PedxCEzcLHniRIxkAomEa7Fu_FKjUQ' />
                <div className='text-left hidden sm:block'>
                  <div className='text-sm font-medium text-white'>Ahmet Yılmaz</div>
                  <div className='text-[11px] text-brand-text'>Mali Müşavir</div>
                </div>
                <i className='ph ph-caret-down text-brand-text hidden sm:block'></i>
              </button>
            </div>
          </header>

          <main className='flex-1 overflow-x-auto overflow-y-hidden flex flex-col p-8 gap-6'>
            <div className='flex gap-4 min-w-max'>
              <div className='bg-brand-card border border-brand-border rounded-xl p-4 flex-1 min-w-[240px] flex items-center gap-4 relative overflow-hidden group'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-brand-accent2/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-brand-accent2/10 transition-colors'></div>
                <div className='w-12 h-12 rounded-lg bg-brand-accent2/10 flex items-center justify-center text-brand-accent2'>
                  <i className='ph ph-file-text text-2xl'></i>
                </div>
                <div>
                  <div className='text-xs font-medium text-brand-text mb-1'>Toplam Evrak</div>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-2xl font-semibold text-white'>203</span>
                    <span className='text-xs font-medium text-brand-accent4 flex items-center gap-0.5 bg-brand-accent4/10 px-1.5 py-0.5 rounded'><i className='ph ph-trend-up'></i> %12</span>
                  </div>
                </div>
              </div>
              <div className='bg-brand-card border border-brand-border rounded-xl p-4 flex-1 min-w-[240px] flex items-center gap-4 relative overflow-hidden group'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-brand-accent3/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-brand-accent3/10 transition-colors'></div>
                <div className='w-12 h-12 rounded-lg bg-brand-accent3/10 flex items-center justify-center text-brand-accent3'>
                  <i className='ph ph-coins text-2xl'></i>
                </div>
                <div>
                  <div className='text-xs font-medium text-brand-text mb-1'>Toplam Tutar</div>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-2xl font-semibold text-white'>₺2.458.750,<span className='text-sm text-brand-text'>00</span></span>
                    <span className='text-xs font-medium text-brand-accent4 flex items-center gap-0.5 bg-brand-accent4/10 px-1.5 py-0.5 rounded'><i className='ph ph-trend-up'></i> %8</span>
                  </div>
                </div>
              </div>
              <div className='bg-brand-card border border-brand-border rounded-xl p-4 flex-1 min-w-[240px] flex items-center gap-4 relative overflow-hidden group'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-brand-accent5/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-brand-accent5/10 transition-colors'></div>
                <div className='w-12 h-12 rounded-lg bg-brand-accent5/10 flex items-center justify-center text-brand-accent5'>
                  <i className='ph ph-check-circle text-2xl'></i>
                </div>
                <div>
                  <div className='text-xs font-medium text-brand-text mb-1'>Bugün İşlenen</div>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-2xl font-semibold text-white'>47</span>
                    <span className='text-xs font-medium text-brand-accent4 flex items-center gap-0.5 bg-brand-accent4/10 px-1.5 py-0.5 rounded'><i className='ph ph-trend-up'></i> %25</span>
                  </div>
                </div>
              </div>
              <div className='bg-brand-card border border-brand-border rounded-xl p-4 flex-1 min-w-[240px] flex items-center gap-4 relative overflow-hidden group'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-red-500/10 transition-colors'></div>
                <div className='w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400'>
                  <i className='ph ph-clock text-2xl'></i>
                </div>
                <div>
                  <div className='text-xs font-medium text-brand-text mb-1'>Ortalama İşlem Süresi</div>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-2xl font-semibold text-white'>2sa 14dk</span>
                    <span className='text-xs font-medium text-red-400 flex items-center gap-0.5 bg-red-400/10 px-1.5 py-0.5 rounded'><i className='ph ph-trend-down'></i> %5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between min-w-max'>
              <div className='flex gap-3'>
                <button className='px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-sm text-brand-text hover:text-white hover:border-gray-600 flex items-center gap-2 transition-colors'>
                  Tüm Mükellefler <i className='ph ph-caret-down'></i>
                </button>
                <button className='px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-sm text-brand-text hover:text-white hover:border-gray-600 flex items-center gap-2 transition-colors'>
                  Tüm Kaynaklar <i className='ph ph-caret-down'></i>
                </button>
                <button className='px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-sm text-brand-text hover:text-white hover:border-gray-600 flex items-center gap-2 transition-colors'>
                  Tüm Türler <i className='ph ph-caret-down'></i>
                </button>
                <button className='px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-sm text-brand-text hover:text-white hover:border-gray-600 flex items-center gap-2 transition-colors'>
                  Tüm Sorumlular <i className='ph ph-caret-down'></i>
                </button>
              </div>
              <div className='flex gap-3 items-center'>
                <button className='px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-sm text-brand-text hover:text-white hover:border-gray-600 flex items-center gap-2 transition-colors'>
                  <i className='ph ph-arrows-down-up'></i> Tarih (Yeni → Eski) <i className='ph ph-caret-down'></i>
                </button>
                <div className='flex bg-brand-card border border-brand-border rounded-lg p-1'>
                  <button className='p-1.5 rounded bg-white/10 text-white shadow-sm'><i className='ph ph-kanban text-lg'></i></button>
                  <button className='p-1.5 rounded text-brand-text hover:text-white transition-colors'><i className='ph ph-list text-lg'></i></button>
                  <button className='p-1.5 rounded text-brand-text hover:text-white transition-colors'><i className='ph ph-squares-four text-lg'></i></button>
                </div>
                <button className='px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-sm font-medium text-white flex items-center gap-2 hover:bg-white/5 transition-colors'>
                  <i className='ph ph-faders'></i> Filtreler <span className='text-brand-text'>+</span>
                </button>
              </div>
            </div>

            <div className='flex-1 flex gap-4 min-w-max pb-2'>
              <div className='w-72 flex flex-col kanban-col overflow-y-auto pr-1'>
                <div className='flex items-center justify-between mb-4 sticky top-0 bg-brand-bg pb-2 z-10 border-t-2 border-brand-primary pt-2 rounded-t-sm'>
                  <div className='flex items-center gap-2'>
                    <i className='ph ph-download-simple text-brand-primary text-lg'></i>
                    <h2 className='font-medium text-white'>Yeni Geldi</h2>
                  </div>
                  <span className='bg-brand-card border border-brand-border text-brand-text text-xs px-2 py-0.5 rounded-full'>18</span>
                </div>
                <p className='text-xs text-brand-text mb-4'>AI okumayı bekliyor</p>
                <div className='space-y-3'>
                  <div className='bg-brand-card border border-brand-border rounded-xl p-4 hover:border-gray-600 transition-colors cursor-grab active:cursor-grabbing'>
                    <div className='flex justify-between items-start mb-3'>
                      <span className='text-[10px] font-medium text-brand-accent2 bg-brand-accent2/10 px-2 py-0.5 rounded'>ABC Yazılım Ltd.</span>
                      <i className='ph ph-file-text text-brand-text'></i>
                    </div>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='w-6 h-6 rounded bg-white/5 flex items-center justify-center text-brand-text'><i className='ph ph-buildings'></i></div>
                      <div className='font-medium text-white text-sm'>Türk Telekom</div>
                    </div>
                    <div className='space-y-2 text-xs text-brand-text'>
                      <div className='flex items-center gap-2'><i className='ph ph-calendar-blank'></i> 26.05.2025</div>
                      <div className='flex items-center gap-2'><i className='ph ph-coins'></i> <span className='text-white'>₺12.350,00</span></div>
                    </div>
                    <div className='mt-4 pt-3 border-t border-brand-border flex justify-between items-center text-xs'>
                      <div className='flex items-center gap-1.5 text-brand-text'><i className='ph ph-envelope-simple'></i> E-Posta</div>
                    </div>
                  </div>
                  <div className='bg-brand-card border border-brand-border rounded-xl p-4 hover:border-gray-600 transition-colors cursor-grab active:cursor-grabbing'>
                    <div className='flex justify-between items-start mb-3'>
                      <span className='text-[10px] font-medium text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded'>XYZ Gıda San. Ltd.</span>
                      <i className='ph ph-file-text text-brand-text'></i>
                    </div>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='w-6 h-6 rounded bg-white/5 flex items-center justify-center text-brand-text'><i className='ph ph-buildings'></i></div>
                      <div className='font-medium text-white text-sm'>Shell Türkiye</div>
                    </div>
                    <div className='space-y-2 text-xs text-brand-text'>
                      <div className='flex items-center gap-2'><i className='ph ph-calendar-blank'></i> 26.05.2025</div>
                      <div className='flex items-center gap-2'><i className='ph ph-coins'></i> <span className='text-white'>₺18.250,00</span></div>
                    </div>
                    <div className='mt-4 pt-3 border-t border-brand-border flex justify-between items-center text-xs'>
                      <div className='flex items-center gap-1.5 text-brand-accent4'><i className='ph ph-whatsapp-logo'></i> WhatsApp</div>
                    </div>
                  </div>
                  <button className='w-full py-3 border border-dashed border-brand-border rounded-xl text-sm text-brand-text hover:text-white hover:border-gray-500 transition-colors flex items-center justify-center gap-2 bg-brand-card/50'>
                    <i className='ph ph-plus'></i> Dosya ekle veya sürükle
                  </button>
                </div>
              </div>

              {/* AI İşliyor */}
              <div className='w-72 flex flex-col kanban-col overflow-y-auto pr-1'>
                <div className='flex items-center justify-between mb-4 sticky top-0 bg-brand-bg pb-2 z-10 border-t-2 border-brand-accent2 pt-2 rounded-t-sm'>
                  <div className='flex items-center gap-2'>
                    <i className='ph ph-robot text-brand-accent2 text-lg animate-pulse'></i>
                    <h2 className='font-medium text-white'>AI İşliyor</h2>
                  </div>
                  <span className='bg-brand-card border border-brand-border text-brand-text text-xs px-2 py-0.5 rounded-full'>6</span>
                </div>
                <p className='text-xs text-brand-text mb-4'>Okuma ve analiz yapılıyor</p>
                <div className='space-y-3'>
                  <div className='bg-brand-card border border-brand-border rounded-xl p-4 opacity-75 relative'>
                    <div className='absolute inset-0 bg-brand-accent2/5 rounded-xl animate-pulse'></div>
                    <div className='flex justify-between items-start mb-3 relative z-10'>
                      <span className='text-[10px] font-medium text-brand-accent2 bg-brand-accent2/10 px-2 py-0.5 rounded'>ABC Yazılım Ltd.</span>
                      <i className='ph ph-file-text text-brand-accent2'></i>
                    </div>
                    <div className='flex items-center gap-2 mb-3 relative z-10'>
                      <div className='w-6 h-6 rounded bg-white/5 flex items-center justify-center text-brand-text'><i className='ph ph-buildings'></i></div>
                      <div className='font-medium text-white text-sm'>Turkcell</div>
                    </div>
                    <div className='space-y-2 text-xs text-brand-text relative z-10'>
                      <div className='flex items-center gap-2'><i className='ph ph-calendar-blank'></i> 26.05.2025</div>
                      <div className='flex items-center gap-2'><i className='ph ph-coins'></i> <span className='text-white'>₺7.890,00</span></div>
                    </div>
                    <div className='mt-4 pt-3 border-t border-brand-border flex justify-between items-center text-xs relative z-10'>
                      <div className='flex items-center gap-1.5 text-brand-text'><i className='ph ph-cloud-arrow-down'></i> Flow Sync</div>
                      <i className='ph ph-spinner-gap animate-spin text-brand-accent2 text-lg'></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontrol Bekliyor */}
              <div className='w-72 flex flex-col kanban-col overflow-y-auto pr-1 bg-brand-card/30 rounded-t-xl'>
                <div className='flex items-center justify-between mb-4 sticky top-0 bg-brand-bg pb-2 z-10 border-t-2 border-brand-accent3 pt-2 rounded-t-sm px-2'>
                  <div className='flex items-center gap-2'>
                    <i className='ph ph-warning-circle text-brand-accent3 text-lg'></i>
                    <h2 className='font-medium text-white'>Kontrol Bekliyor</h2>
                  </div>
                </div>
                <p className='text-xs text-brand-text mb-4 px-2'>Müşavir kontrolü gerekli</p>
                <div className='space-y-3 px-2'>
                  <div className='bg-brand-bg border-2 border-brand-accent3 rounded-xl p-4 shadow-lg shadow-brand-accent3/10 cursor-grab active:cursor-grabbing'>
                    <div className='flex justify-between items-start mb-3'>
                      <span className='text-[10px] font-medium text-brand-accent2 bg-brand-accent2/10 px-2 py-0.5 rounded'>ABC Yazılım Ltd.</span>
                      <div className='flex items-center gap-2 text-xs font-medium text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded'>
                        <i className='ph ph-hourglass-high'></i> 3 gün
                      </div>
                    </div>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='w-6 h-6 rounded bg-white/5 flex items-center justify-center text-brand-text'><i className='ph ph-gas-pump'></i></div>
                      <div className='font-medium text-white text-sm'>Shell Türkiye</div>
                    </div>
                    <div className='space-y-2 text-xs text-brand-text mb-3'>
                      <div className='flex items-center gap-2'><i className='ph ph-calendar-blank'></i> 26.05.2025</div>
                      <div className='flex items-center gap-2'><i className='ph ph-coins'></i> <span className='text-white'>₺18.250,00</span></div>
                      <div className='flex items-center gap-2'><span className='text-brand-accent4 font-medium'>760</span> Akaryakıt Gideri</div>
                    </div>
                    <div className='mt-4 pt-3 border-t border-brand-border flex justify-between items-center text-xs'>
                      <div className='flex items-center gap-1.5 text-brand-accent4'><i className='ph ph-whatsapp-logo'></i> WhatsApp</div>
                      <div className='flex items-center gap-2'>
                        <span className='text-[10px] bg-brand-primary/20 text-brand-primary px-1.5 py-0.5 rounded font-medium flex items-center gap-1'><i className='ph ph-sparkle'></i> AI</span>
                        <img alt='User' className='w-6 h-6 rounded-full border-2 border-brand-bg' src='https://lh3.googleusercontent.com/aida-public/AB6AXuAb6aq187eX82esMkPTx1FJBgB5DfUDdZn5z6zXAe43zUKYuBeQjSOhX4PvNzhgFyWw3U13tL4Q8NQjoubhk5G_FFgUdRFu2sJwrgJ71Wp3wl3oVH8zKFTnKJclUypNuJHr9ZM51Rcrhoxun99A67VbA5OU6ynufjq7LujE4QFgKBcbmNPtxMC8Qu9aXBJgC1owhTu3yZUUIMOkf8Sq2BTIDetMKGXboXNLhTqXtPkU0WJBwF1CIGi_LLRY5ecdUm3adrkoOyP8uXM' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </main>

          <footer className='h-12 flex-shrink-0 bg-brand-bg border-t border-brand-border flex items-center px-8 justify-between text-xs text-brand-text z-20'>
            <div className='flex items-center gap-2'>
              <i className='ph ph-sparkle text-brand-accent3'></i>
              <span className='text-brand-accent3 font-medium'>İpucu:</span>
              <span>Kartları sürükleyip bırakarak durumlarını değiştirebilirsiniz.</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
