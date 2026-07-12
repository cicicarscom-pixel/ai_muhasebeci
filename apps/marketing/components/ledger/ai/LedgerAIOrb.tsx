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
      {/* Glow Effects behind the capsule */}
      <div className="absolute -left-3 top-1/2 h-[38px] w-[58px] -translate-y-1/2 bg-[#9D5CFF] opacity-45 blur-[22px] transition-all duration-700 ease-in-out group-hover:h-[46px] group-hover:w-[68px] group-hover:opacity-60 group-hover:blur-[26px]" />
      <div className="absolute -right-3 top-1/2 h-[38px] w-[58px] -translate-y-1/2 bg-[#00DAF3] opacity-40 blur-[22px] transition-all duration-700 ease-in-out group-hover:h-[46px] group-hover:w-[68px] group-hover:opacity-55 group-hover:blur-[26px]" />
      
      {/* Inner breathing glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9D5CFF]/10 to-[#00DAF3]/10 opacity-0 blur-md transition-opacity duration-1000 group-hover:opacity-100 animate-pulse" />

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
