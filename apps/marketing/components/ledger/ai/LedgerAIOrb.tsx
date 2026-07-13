"use client";

import { motion } from "framer-motion";

interface LedgerAIOrbProps {
  onClick: () => void;
}

export function LedgerAIOrb({ onClick }: LedgerAIOrbProps) {
  return (
    <motion.button
      key="orb"
      type="button"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative flex h-[52px] min-w-[138px] cursor-pointer items-center justify-center rounded-full bg-[#080B10]/95 px-6 outline-none backdrop-blur-xl shadow-2xl"
      aria-label="Ledger AI sohbetini aç"
    >
      {/* Spinning RGB Aura Glow (Traces the pill shape perfectly) */}
      <div 
        className="absolute -inset-[2px] rounded-full pointer-events-none flex items-center justify-center"
        style={{
          padding: '4px', // Track thickness
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          filter: 'blur(6px)', // Blurs the masked track
          zIndex: -1
        }}
      >
        <div 
          className="h-[300px] w-[300px] opacity-100 shrink-0"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, transparent 75%, #00f3ff 80%, #9D00FF 90%, #FF0055 100%)',
            animation: 'spin 4s linear infinite',
            borderRadius: '50%'
          }}
        />
      </div>

      {/* Static Cyan Line & Glow */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none border-[2.5px] border-[#00a2ff] shadow-[0_0_20px_rgba(0,162,255,0.4)]"
      />

      {/* Inner subtle blue glow */}
      <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-[#00DAF3]/30 to-transparent opacity-50 blur-md pointer-events-none" />

      <span className="relative z-10 text-[15px] font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        Ledger Ai
      </span>
    </motion.button>
  );
}
