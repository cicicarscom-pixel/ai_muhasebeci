'use client';
import React from 'react';
import Script from 'next/script';
import Sidebar from '@/components/ledger/layout/Sidebar';
import Header from '@/components/ledger/layout/Header';
import AiOperationsCenter from '@/components/ledger/layout/AiOperationsCenter';
import { usePathname } from 'next/navigation';

export default function LedgerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isWorkflow = pathname?.includes('/workflow');
  const isApproval = pathname?.includes('/approval');
  
  // Decide margins based on layout
  let mainMargins = 'ml-[56px] mr-[360px] pt-16';
  if (isApproval) {
    mainMargins = 'ml-0 mr-0 pt-0'; // Full screen for approval
  } else if (isWorkflow) {
    mainMargins = 'ml-[56px] mr-0 pt-16'; // No right sidebar for workflow
  }

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
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .glass-panel:hover {
            border-color: rgba(0, 229, 253, 0.2);
            box-shadow: 0 8px 30px rgba(0, 229, 253, 0.08);
            transform: translateY(-1px) scale(1.005);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
            z-index: -2;
            background-image: 
                radial-gradient(1px 1px at 15% 15%, rgba(255,255,255,0.4) 100%, transparent),
                radial-gradient(1px 1px at 45% 35%, rgba(0,229,253,0.3) 100%, transparent),
                radial-gradient(1.5px 1.5px at 75% 65%, rgba(255,255,255,0.2) 100%, transparent),
                radial-gradient(1px 1px at 25% 85%, rgba(0,229,253,0.4) 100%, transparent);
            background-size: 300px 300px;
            animation: moveStars 180s linear infinite;
        }

        .aurora-bg {
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            pointer-events: none;
            z-index: -1;
            background: 
                radial-gradient(ellipse at 50% 50%, rgba(138, 43, 226, 0.05) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(0, 229, 253, 0.05) 0%, transparent 40%);
            animation: rotateAurora 60s linear infinite;
            mix-blend-mode: screen;
        }

        @keyframes moveStars {
            0% { transform: translateY(0); }
            100% { transform: translateY(-300px); }
        }
        
        @keyframes rotateAurora {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .thin-divider {
            height: 1px;
            background-color: rgba(255, 255, 255, 0.03);
            width: 100%;
        }
      `}} />
      
      <div className="star-field"></div>
      <div className="aurora-bg"></div>
      
      {!isApproval && <Sidebar />}
      {!isApproval && <Header />}
      {!isApproval && !isWorkflow && <AiOperationsCenter />}
      
      {/* Main Content Area */}
      <main className={`${mainMargins} ${isApproval ? 'h-screen p-0 max-w-full' : 'p-6 max-w-[1400px] min-h-screen'} mx-auto z-10 relative`}>
        {children}
      </main>
    </div>
  );
}
