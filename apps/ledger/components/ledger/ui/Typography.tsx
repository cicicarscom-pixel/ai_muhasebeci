import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
  children: React.ReactNode;
}

export function PageTitle({ children, className = '', ...props }: TypographyProps) {
  return (
    <h1 className={`text-page-title text-text tracking-tight ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function SectionHeader({ children, className = '', ...props }: TypographyProps) {
  return (
    <h2 className={`text-section-title text-text tracking-tight ${className}`} {...props}>
      {children}
    </h2>
  );
}
