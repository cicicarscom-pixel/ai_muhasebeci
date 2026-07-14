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
        className={`w-full bg-card/50 border border-border rounded-input py-8 ${icon ? 'pl-48' : 'pl-16'} pr-16 text-body text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:shadow-glow-primary transition-all duration-medium ease-in-out`}
        {...props}
      />
    </div>
  );
}

export function FilterBar({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex items-center gap-8 p-4 bg-card border border-border rounded-input ${className}`} {...props}>
      {children}
    </div>
  );
}
