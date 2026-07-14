import React from 'react';

export function Timeline({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative pl-16 border-l border-border ${className}`}>
      {children}
    </div>
  );
}

export function TimelineItem({ title, description, time, status = 'neutral' }: { title: string, description?: string, time: string, status?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' }) {
  const getDotColor = () => {
    switch(status) {
      case 'success': return 'bg-success';
      case 'warning': return 'bg-warning';
      case 'danger': return 'bg-danger';
      case 'info': return 'bg-primary';
      default: return 'bg-border';
    }
  };

  return (
    <div className="mb-24 last:mb-0 relative">
      <div className={`absolute -left-[21px] top-4 w-10 h-10 rounded-full border-2 border-surface ${getDotColor()}`}></div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-16 mb-4">
          <span className="text-card-title text-text">{title}</span>
          <span className="text-muted text-text-muted">{time}</span>
        </div>
        {description && <p className="text-body text-text-muted">{description}</p>}
      </div>
    </div>
  );
}
