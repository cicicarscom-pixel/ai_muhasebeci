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
      className="group relative flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-full outline-none shadow-2xl"
      aria-label="Ledger AI sohbetini aç"
    >
      {/* Outer Glow (RGB Aura) */}
      <div 
        className="absolute inset-[-15px] -z-10 rounded-full blur-[20px] opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff00ff, #ff0000)',
          animation: 'spin 4s linear infinite'
        }}
      />
      
      {/* Inner Background */}
      <div className="absolute inset-0 -z-0 rounded-full bg-[#0E1117] backdrop-blur-xl" />

      {/* Rotating RGB Border */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          padding: '3px',
          background: 'conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff00ff, #ff0000)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'spin 4s linear infinite'
        }}
      />

      {/* Inner subtle top blue glow (like in the screenshot) */}
      <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-[#00DAF3]/30 to-transparent opacity-80 blur-md pointer-events-none transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <Bot className="relative z-10 h-7 w-7 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-transform duration-300 group-hover:scale-110" />
    </motion.button>
  );
}
