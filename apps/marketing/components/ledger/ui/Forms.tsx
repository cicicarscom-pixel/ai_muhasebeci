import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function SearchBar({ icon, className = '', ...props }: InputProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {icon && (
        <span className="absolute left-16 text-text-muted">
          {icon}
        </span>
      )}
      <input 
        type="text"
        className={`w-full bg-card/50 border border-border rounded-input py-2 ${icon ? 'pl-12' : 'pl-4'} pr-4 text-body text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:shadow-glow-primary transition-all duration-medium ease-in-out`}
        {...props}
      />
    </div>
  );
}

export function FilterBar({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex items-center gap-2 p-1 bg-card border border-border rounded-input ${className}`} {...props}>
      {children}
    </div>
  );
}
