"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-full bg-[#0E1117] outline-none shadow-2xl"
      aria-label="Ledger AI sohbetini aç"
    >
      {/* Static Blue Border */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          padding: '3px',
          background: 'rgba(0, 218, 243, 0.4)', // Mavi taban
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Rotating RGB Segment Border */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          padding: '3px',
          // Şeffaf başlayıp sadece belli bir dilimde RGB renklere dönen degrade
          background: 'conic-gradient(from 0deg, transparent 0%, transparent 65%, #ff0000 75%, #ff00ff 85%, #0000ff 95%, rgba(0, 218, 243, 1) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'spin 3s linear infinite'
        }}
      />

      {/* Inner subtle blue glow (like in the screenshot) */}
      <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-[#00DAF3]/30 to-transparent opacity-80 blur-md pointer-events-none" />

      {/* Icon */}
      <Bot className="relative z-10 h-7 w-7 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-transform duration-300 group-hover:scale-110" />
    </motion.button>
  );
}
