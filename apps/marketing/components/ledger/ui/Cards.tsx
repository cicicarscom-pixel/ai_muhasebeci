import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function AppCard({ children, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`bg-card border border-border rounded-card hover:border-primary transition-all duration-medium ease-in-out shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassCard({ children, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`bg-card/50 backdrop-blur-xl border border-border rounded-card hover:border-primary transition-all duration-medium ease-in-out shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface MetricCardProps extends CardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    direction: 'up' | 'down';
    label: string;
  };
}

export function MetricCard({ title, value, icon, trend, className = '', ...props }: MetricCardProps) {
  return (
    <AppCard className={`p-16 flex flex-col justify-between min-h-[100px] group ${className}`} {...props}>
      <div className="flex items-center gap-8 mb-8 relative z-10">
        {icon && <div className="text-text-muted group-hover:text-primary transition-colors duration-fast">{icon}</div>}
        <span className="text-muted text-text-muted uppercase tracking-widest group-hover:text-text transition-colors duration-fast">
          {title}
        </span>
      </div>
      <div className="flex items-baseline justify-between relative z-10">
        <span className="text-[32px] font-bold text-text tracking-tight">{value}</span>
        {trend && (
          <div className={`flex items-center gap-4 text-muted px-8 py-4 rounded-badge border ${
            trend.direction === 'up' 
              ? 'text-success bg-success/10 border-success/20' 
              : 'text-danger bg-danger/10 border-danger/20'
          }`}>
            <span className="material-symbols-outlined text-[14px]">
              {trend.direction === 'up' ? 'trending_up' : 'trending_down'}
            </span>
            <span>{trend.value} {trend.label}</span>
          </div>
        )}
      </div>
    </AppCard>
  );
}

export function ActivityCard({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`flex items-start gap-12 p-8 border-l-[2px] bg-card/30 ${className}`} {...props}>
      {children}
    </div>
  );
}
