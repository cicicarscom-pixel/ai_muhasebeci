import React from 'react';

export function EmptyState({ title, description, action }: { title: string, description: string, action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center p-16 text-center border border-border border-dashed rounded-card bg-card/30">
      <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-text-muted text-[24px]">inbox</span>
      </div>
      <h3 className="text-section-title text-text mb-2">{title}</h3>
      <p className="text-body text-text-muted mb-6 max-w-sm">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
}

export function LoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-border rounded-input ${className}`}></div>
  );
}
