import React from 'react';
import { cn } from '../../utils/cn';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-all duration-300',
          'hover:scale-[1.02] active:scale-[0.98]',
          variant === 'primary' 
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,216,255,0.4)] hover:shadow-[0_0_30px_rgba(0,216,255,0.6)]'
            : 'bg-white/5 border border-white/10 text-white hover:bg-white/10',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
GlowButton.displayName = 'GlowButton';
