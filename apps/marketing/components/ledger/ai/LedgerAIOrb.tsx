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
      {/* Masked Border Container */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
        style={{
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      >
        {/* Static Blue Base */}
        <div className="absolute inset-[-50px] bg-[rgba(0,218,243,0.4)]" />

        {/* Spinning RGB Segment */}
        <div 
          className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, transparent 65%, #ff0000 75%, #ff00ff 85%, #0000ff 95%, rgba(0, 218, 243, 1) 100%)',
            animation: 'spin 3s linear infinite'
          }}
        />
      </div>

      {/* Inner subtle blue glow */}
      <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-[#00DAF3]/30 to-transparent opacity-50 blur-md pointer-events-none" />

      <span className="relative z-10 text-[15px] font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        Ledger Ai
      </span>
    </motion.button>
  );
}
