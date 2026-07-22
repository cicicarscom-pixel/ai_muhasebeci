const { tailwindConfig } = require("@workigom/design-system");

/** @type {import('tailwindcss').Config} */
const config = {
  ...tailwindConfig,
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      ...(tailwindConfig.theme && tailwindConfig.theme.extend ? tailwindConfig.theme.extend : {}),
      screens: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.screens ? tailwindConfig.theme.extend.screens : {}),
        'mobile': '768px',
        'tablet': '1024px',
        'laptop': '1280px',
        'desktop': '1440px',
      },
      colors: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.colors ? tailwindConfig.theme.extend.colors : {}),
        brand: {
          bg: '#13141B',
          sidebar: '#1A1C24',
          card: '#1C1F2A',
          border: '#2C303E',
          text: '#8B949E',
          textDark: '#E5E7EB',
          primary: '#8A5CFF',
          accent1: '#8A5CFF',
          accent2: '#418BFF',
          accent3: '#FACC15',
          accent4: '#10B981',
          accent5: '#06B6D4'
        },
        'ai-cyan': '#00F0FF',
        'ai-purple': '#8A2BE2',
        'ai-pink': '#FF00FF',
        'ai-blue': '#0055FF',
        'ai-dark': '#0B0C10',
        'ai-surface': '#121418',
        'ai-card': '#161920',
        
        // Ledger New Colors
        primary: 'var(--color-primary)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        card: 'var(--color-card)',
      },
      borderRadius: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.borderRadius ? tailwindConfig.theme.extend.borderRadius : {}),
        'input': '14px',
        'button': '14px',
        'card': '20px',
        'modal': '24px',
        'badge': '999px',
        'full': '9999px',
      },
      boxShadow: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.boxShadow ? tailwindConfig.theme.extend.boxShadow : {}),
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(138, 43, 226, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'glow-primary': 'var(--glow-primary)',
        'glow-success': 'var(--glow-success)',
      },
      transitionDuration: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.transitionDuration ? tailwindConfig.theme.extend.transitionDuration : {}),
        'fast': '120ms',
        'medium': '180ms',
        'slow': '280ms',
      },
      fontFamily: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.fontFamily ? tailwindConfig.theme.extend.fontFamily : {}),
        "display-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "label-md": ["Geist", "monospace"],
        "mono-sm": ["Geist", "monospace"]
      },
      fontSize: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.fontSize ? tailwindConfig.theme.extend.fontSize : {}),
        "display-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "body-md": ["12px", { "lineHeight": "18px", "letterSpacing": "0", "fontWeight": "400" }],
        "headline-lg": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "body-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0", "fontWeight": "400" }],
        "body-sm": ["11px", { "lineHeight": "16px", "letterSpacing": "0", "fontWeight": "400" }],
        "headline-md": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "label-md": ["10px", { "lineHeight": "14px", "letterSpacing": "0.02em", "fontWeight": "500" }],
        "mono-sm": ["11px", { "lineHeight": "14px", "fontWeight": "400" }],
        
        // Ledger typography
        "page-title": ["32px", { fontWeight: "700" }],
        "section-title": ["20px", { fontWeight: "600" }],
        "card-title": ["15px", { fontWeight: "600" }],
        "body": ["14px", { fontWeight: "400" }],
        "label": ["12px", { fontWeight: "500" }],
        "muted": ["11px", { fontWeight: "400" }],
      },
      backgroundImage: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.backgroundImage ? tailwindConfig.theme.extend.backgroundImage : {}),
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at center, rgba(138, 43, 226, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        'text-gradient': 'linear-gradient(to right, #00C8FF, #2B7FFF, #7B61FF)', // Keep our updated gradient
        'btn-gradient': 'linear-gradient(to right, #00F0FF, #0055FF)',
        'border-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
      },
      animation: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.animation ? tailwindConfig.theme.extend.animation : {}),
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.keyframes ? tailwindConfig.theme.extend.keyframes : {}),
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
module.exports = config;
