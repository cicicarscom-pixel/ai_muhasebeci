'use client';

import { useEffect } from 'react';

export default function FlowInteractive() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        const items = document.querySelectorAll('.bento-item');
        items.forEach((item) => {
            const glow = item.querySelector('.ambient-glow') as HTMLElement;
            if (glow) {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                glow.style.left = `${x}px`;
                glow.style.top = `${y}px`;
            }
        });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Top Nav blur effect on scroll (from the HTML script)
    const handleScroll = () => {
        const nav = document.getElementById('global-nav');
        if (nav) {
            if (window.scrollY > 20) {
                nav.style.backgroundColor = 'rgba(11, 15, 20, 0.8)';
                nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
            } else {
                nav.style.backgroundColor = 'transparent';
                nav.style.borderBottomColor = 'transparent';
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
