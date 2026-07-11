import React from 'react';
import Script from 'next/script';
import Sidebar from '@/components/ledger/layout/Sidebar';
import Header from '@/components/ledger/layout/Header';

export default function LedgerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-body antialiased bg-background text-on-surface min-h-screen overflow-x-hidden relative">
      <Script src='https://unpkg.com/@phosphor-icons/web' strategy='lazyOnload' />
      <style dangerouslySetInnerHTML={{ __html: `
        body {
            background-color: #0d1516;
            color: #dce4e5;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 2px 2px, rgba(0, 229, 253, 0.05) 1px, transparent 0);
            background-size: 40px 40px;
        }

        .glass-panel {
            background: rgba(25, 33, 34, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
        }

        .glass-panel:hover {
            border-color: rgba(0, 229, 253, 0.3);
            box-shadow: 0 0 20px rgba(0, 229, 253, 0.1);
            transform: translateY(-2px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glow-text {
            text-shadow: 0 0 10px rgba(0, 229, 253, 0.5);
        }

        .star-field {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: -1;
            background-image: 
                radial-gradient(1px 1px at 15% 15%, rgba(255,255,255,0.4) 100%, transparent),
                radial-gradient(1px 1px at 45% 35%, rgba(0,229,253,0.3) 100%, transparent),
                radial-gradient(1.5px 1.5px at 75% 65%, rgba(255,255,255,0.2) 100%, transparent),
                radial-gradient(1px 1px at 25% 85%, rgba(0,229,253,0.4) 100%, transparent);
            background-size: 300px 300px;
            animation: moveStars 180s linear infinite;
        }

        @keyframes moveStars {
            0% { transform: translateY(0); }
            100% { transform: translateY(-300px); }
        }
        
        .thin-divider {
            height: 1px;
            background-color: rgba(255, 255, 255, 0.05);
            width: 100%;
        }

        .neon-border-primary {
            border-left: 3px solid #00e5ff;
            box-shadow: -4px 0 10px rgba(0, 229, 253, 0.1);
        }
      `}} />
      
      <div className="star-field"></div>
      
      <Sidebar />
      <Header />
      
      {/* Main Content Area */}
      <main className="ml-[64px] pt-20 p-6 max-w-[1600px] mx-auto min-h-screen z-10 relative">
        {children}
      </main>
    </div>
  );
}
