import type { Config } from "tailwindcss";
import { tailwindConfig } from "@workigom/design-system";

const config: Config = {
  ...tailwindConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme?.extend,
      colors: {
        ...tailwindConfig.theme?.extend?.colors,
        'ai-cyan': '#00F0FF',
        'ai-purple': '#8A2BE2',
        'ai-pink': '#FF00FF',
        'ai-blue': '#0055FF',
        'ai-dark': '#0B0C10',
        'ai-surface': '#121418',
        'ai-card': '#161920',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at center, rgba(138, 43, 226, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        'text-gradient': 'linear-gradient(to right, #00F0FF, #8A2BE2)',
        'btn-gradient': 'linear-gradient(to right, #00F0FF, #0055FF)',
        'border-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(138, 43, 226, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    }
  }
};
export default config;
