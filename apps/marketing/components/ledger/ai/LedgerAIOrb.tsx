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
      {/* Spinning RGB Aura Glow segment behind the button */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
        style={{ zIndex: -1 }}
      >
        <div 
          className="h-[180px] w-[180px] opacity-80 blur-[12px] rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, transparent 60%, #00f3ff 70%, #9D00FF 85%, #FF0055 100%)',
            animation: 'spin 3s linear infinite'
          }}
        />
      </div>

      {/* Static Cyan Line & Glow */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none border-[1.5px] border-[#00a2ff] shadow-[0_0_20px_rgba(0,162,255,0.4)]"
      />

      {/* Inner subtle blue glow */}
      <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-[#00DAF3]/30 to-transparent opacity-50 blur-md pointer-events-none" />

      <span className="relative z-10 text-[15px] font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        Ledger Ai
      </span>
    </motion.button>
  );
}
