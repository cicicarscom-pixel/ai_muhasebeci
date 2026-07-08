import React from 'react';
import { cn } from '../../utils/cn';
import { motion, HTMLMotionProps } from 'framer-motion';

export const GlassCard = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(({ className, children, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl',
        'shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        'hover:border-white/10 hover:bg-white/[0.04] transition-colors duration-500',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
});
GlassCard.displayName = 'GlassCard';
