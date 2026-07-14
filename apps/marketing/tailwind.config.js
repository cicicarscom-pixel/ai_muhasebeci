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
    // Override breakpoints completely
    screens: {
      'mobile': '768px',
      'tablet': '1024px',
      'laptop': '1280px',
      'desktop': '1440px',
    },
    extend: {
      colors: {
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
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      borderRadius: {
        'input': '14px',
        'button': '14px',
        'card': '20px',
        'modal': '24px',
        'badge': '999px',
        'full': '9999px',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'glow-primary': 'var(--glow-primary)',
        'glow-success': 'var(--glow-success)',
      },
      transitionDuration: {
        'fast': '120ms',
        'medium': '180ms',
        'slow': '280ms',
      },
      fontFamily: {
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
        "page-title": ["32px", { fontWeight: "700" }],
        "section-title": ["20px", { fontWeight: "600" }],
        "card-title": ["15px", { fontWeight: "600" }],
        "body": ["14px", { fontWeight: "400" }],
        "label": ["12px", { fontWeight: "500" }],
        "muted": ["11px", { fontWeight: "400" }],
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #00C8FF, #2B7FFF, #7B61FF)',
      }
    }
  }
};
module.exports = config;
