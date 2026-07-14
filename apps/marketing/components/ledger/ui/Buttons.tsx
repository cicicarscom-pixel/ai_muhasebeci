import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      className={`px-6 py-2 rounded-button bg-text-gradient text-text font-bold shadow-glow-primary hover:shadow-glow-success hover:scale-[1.02] active:scale-[0.98] transition-all duration-medium ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      className={`px-6 py-2 rounded-button bg-card border border-border text-text font-medium hover:bg-card/80 hover:border-primary transition-all duration-medium ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      className={`px-4 py-2 rounded-button bg-transparent text-text-muted font-medium hover:text-text hover:bg-white/5 transition-all duration-fast ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function DangerButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      className={`px-6 py-2 rounded-button bg-danger/10 border border-danger/20 text-danger font-medium hover:bg-danger hover:text-white transition-all duration-medium ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function FloatingAction({ children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      className={`fixed bottom-8 right-32 w-[64px] h-[64px] rounded-full bg-text-gradient shadow-glow-primary hover:scale-110 active:scale-95 transition-all duration-medium ease-in-out flex items-center justify-center text-white z-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
