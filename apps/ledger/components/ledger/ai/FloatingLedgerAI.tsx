"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { usePathname } from "next/navigation";
import { LedgerAIOrb } from "./LedgerAIOrb";
import { LedgerAIChatPanel } from "./LedgerAIChatPanel";

interface Position {
  x: number;
  y: number;
}

const POSITION_KEY = "workigom-ledger-ai-position";
const OPEN_KEY = "workigom-ledger-ai-open";

export function FloatingLedgerAI() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Initialize and handle SSR safely
  useEffect(() => {
    setIsMounted(true);
    
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);

    const savedPosition = window.localStorage.getItem(POSITION_KEY);
    const savedOpenState = window.localStorage.getItem(OPEN_KEY);

    if (savedPosition) {
      try {
        const pos = JSON.parse(savedPosition) as Position;
        // Check if the position is way off screen
        if (pos.x < -window.innerWidth + 50 || pos.x > 50 || pos.y < -window.innerHeight + 50 || pos.y > 50) {
          window.localStorage.removeItem(POSITION_KEY);
          setPosition({ x: 0, y: 0 });
        } else {
          setPosition(pos);
        }
      } catch {
        window.localStorage.removeItem(POSITION_KEY);
      }
    }
    setIsOpen(savedOpenState === "true");

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const updateOpenState = (open: boolean) => {
    setIsOpen(open);
    window.localStorage.setItem(OPEN_KEY, String(open));
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const nextPosition = {
      x: position.x + info.offset.x,
      y: position.y + info.offset.y,
    };
    setPosition(nextPosition);
    window.localStorage.setItem(POSITION_KEY, JSON.stringify(nextPosition));
  };

  // Resolve Context Label Locally
  let contextLabel = "Kontrol Merkezi";
  if (pathname?.includes("/clients")) {
    contextLabel = "Mükellefler";
  } else if (pathname?.includes("/workflow")) {
    contextLabel = "İş Akışı";
  } else if (pathname?.includes("/approval")) {
    contextLabel = "Evrak Onay";
  } else if (pathname?.includes("/dashboard")) {
    contextLabel = "Dashboard";
  }

  // Prevent SSR hydration mismatch
  if (!isMounted) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{
        left: -viewport.width + 100,
        right: 0,
        top: -viewport.height + 120,
        bottom: 0,
      }}
      dragListener={true}
      onDragEnd={handleDragEnd}
      animate={{ x: position.x, y: position.y }}
      className="fixed bottom-5 right-5 z-[99999] cursor-grab active:cursor-grabbing"
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <LedgerAIOrb key="orb" onClick={() => updateOpenState(true)} />
        ) : (
          <LedgerAIChatPanel key="panel" contextLabel={contextLabel} onClose={() => updateOpenState(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
