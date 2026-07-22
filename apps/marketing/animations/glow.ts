import { Variants } from 'framer-motion';

export const pulseGlow: Variants = {
  initial: { boxShadow: '0 0 0px rgba(0,216,255,0)' },
  animate: { 
    boxShadow: ['0 0 0px rgba(0,216,255,0)', '0 0 40px rgba(0,216,255,0.6)', '0 0 0px rgba(0,216,255,0)'],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  }
};
