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
      <div className='bg-brand-bg text-brand-text font-sans h-screen w-screen overflow-hidden flex flex-col p-8 selection:bg-brand-primary selection:text-white'>
      {/* Main Content */}
      <div className='flex-1 flex flex-col min-w-0 relative z-10 h-full'>
        <div className='mb-6'>
          <h1 className='text-xl font-semibold text-white tracking-tight'>İş Akışı</h1>
          <p className='text-sm text-brand-text mt-0.5'>Evrakların işlem sürecini takip edin</p>
        </div>

        <div className='flex-1 overflow-x-auto overflow-y-hidden flex flex-col gap-6 pb-12'>
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
        </div>


      </div>
      </div>
    </>
  );
}
