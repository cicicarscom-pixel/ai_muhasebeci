import React from 'react';
import { GlowButton } from '../ui/GlowButton';
import { Bot } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">AI Esnaf</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Özellikler</a>
        <a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a>
        <a href="#" className="hover:text-white transition-colors">Çözümler</a>
        <a href="#" className="hover:text-white transition-colors">Kaynaklar</a>
        <a href="#" className="hover:text-white transition-colors">Entegrasyonlar</a>
        <a href="#" className="hover:text-white transition-colors">Blog</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors hidden md:block">Giriş Yap</a>
        <GlowButton variant="primary" className="py-2 px-6 text-sm">Ücretsiz Dene</GlowButton>
      </div>
    </nav>
  );
};
