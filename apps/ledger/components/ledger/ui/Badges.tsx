import React from 'react';

type BadgeStatus = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: BadgeStatus;
  children: React.ReactNode;
}

export function StatusBadge({ status, children, className = '', ...props }: StatusBadgeProps) {
  const getStatusClasses = (status: BadgeStatus) => {
    switch (status) {
      case 'success': return 'bg-success/10 border-success/20 text-success';
      case 'warning': return 'bg-warning/10 border-warning/20 text-warning';
      case 'danger': return 'bg-danger/10 border-danger/20 text-danger';
      case 'info': return 'bg-primary/10 border-primary/20 text-primary';
      case 'neutral': return 'bg-surface border-border text-text-muted';
      default: return 'bg-surface border-border text-text-muted';
    }
  };

  return (
    <div 
      className={`px-2 py-1 rounded-badge border text-muted uppercase tracking-wider font-semibold inline-flex items-center gap-1 ${getStatusClasses(status)} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
