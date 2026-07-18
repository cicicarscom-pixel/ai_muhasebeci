import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className='p-6 w-full max-w-4xl mx-auto'>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-white flex items-center gap-2'>
          <span className="material-symbols-outlined text-primary">settings</span>
          Ayarlar
        </h1>
        <p className='text-text-muted mt-2 text-sm'>
          Hesap ve sistem ayarlarınızı buradan yönetebilirsiniz.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* AI Settings Card */}
        <Link href="/ai-settings" className="block group">
          <div className="bg-surface border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,218,243,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[64px] text-primary">auto_awesome</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">auto_awesome</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Yapay Zeka (Ledger AI)</h2>
                <p className="text-xs text-primary font-medium">Aktif v2 Şeması</p>
              </div>
            </div>
            
            <p className="text-sm text-text-muted relative z-10">
              Fatura okuma kurallarını yönetin, yeni kolonlar ekleyin veya şemanızı canlı olarak test edin.
            </p>

            <div className="mt-6 flex items-center text-primary text-sm font-bold gap-1 group-hover:gap-2 transition-all relative z-10">
              Yapılandır <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
        </Link>
        
        {/* Placeholder for other settings */}
        <div className="bg-surface/50 border border-border/50 rounded-2xl p-6 opacity-70">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-muted">
              <span className="material-symbols-outlined text-[24px]">person</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Profil ve Hesap</h2>
              <p className="text-xs text-text-muted font-medium">Yakında</p>
            </div>
          </div>
          <p className="text-sm text-text-muted">
            Kullanıcı bilgileri, şifre ve yetkilendirme ayarları.
          </p>
        </div>
      </div>
    </div>
  );
}
