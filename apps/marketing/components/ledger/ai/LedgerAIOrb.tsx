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
      className="group relative flex h-[52px] min-w-[138px] cursor-pointer items-center justify-center rounded-full bg-[#080B10]/95 px-6 outline-none backdrop-blur-xl"
      aria-label="Ledger AI sohbetini aç"
    >
      {/* Rotating RGB Aura */}
      <div 
        className="absolute inset-[-15px] -z-10 rounded-full blur-[24px] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff00ff, #ff0000)',
          animation: 'spin 4s linear infinite'
        }}
      />
      
      {/* Inner background to block aura from showing through center */}
      <div className="absolute inset-0 -z-0 rounded-full bg-[#080B10]/95 backdrop-blur-xl" />

      {/* Border with gradient to match image (mor to cyan) */}
      <div 
        className="absolute inset-0 rounded-full transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: '1.5px',
          background: 'linear-gradient(135deg, rgba(157,92,255,0.7) 0%, rgba(0,218,243,0.7) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <span className="relative z-10 text-[15px] font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        Ledger Ai
      </span>
    </motion.button>
  );
}
