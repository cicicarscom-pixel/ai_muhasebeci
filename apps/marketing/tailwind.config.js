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
    ...tailwindConfig.theme,
    extend: {
      ...(tailwindConfig.theme && tailwindConfig.theme.extend ? tailwindConfig.theme.extend : {}),
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
        "outline": "#849396",
        "on-secondary-fixed-variant": "#004396",
        "error": "#ffb4ab",
        "surface-dim": "#0d1516",
        "secondary-fixed": "#d8e2ff",
        "primary": "#c3f5ff",
        "tertiary": "#ffeac0",
        "on-primary-fixed": "#001f24",
        "on-primary-fixed-variant": "#004f58",
        "background": "#0d1516",
        "inverse-surface": "#dce4e5",
        "surface-tint": "#00daf3",
        "primary-container": "#00e5ff",
        "on-error": "#690005",
        "secondary-container": "#4f8eff",
        "surface-container-high": "#242b2d",
        "on-primary": "#00363d",
        "surface-bright": "#333a3c",
        "surface-variant": "#2e3638",
        "on-surface": "#dce4e5",
        "on-primary-container": "#00626e",
        "surface-container": "#192122",
        "on-secondary": "#002e6a",
        "primary-fixed-dim": "#00daf3",
        "on-secondary-container": "#00275e",
        "surface-container-lowest": "#080f11",
        "tertiary-container": "#fec931",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "on-surface-variant": "#bac9cc",
        "on-tertiary-container": "#6f5500",
        "on-tertiary-fixed": "#251a00",
        "secondary-fixed-dim": "#aec6ff",
        "secondary": "#aec6ff",
        "primary-fixed": "#9cf0ff",
        "on-tertiary-fixed-variant": "#594400",
        "tertiary-fixed": "#ffdf96",
        "on-background": "#dce4e5",
        "surface-container-highest": "#2e3638",
        "inverse-on-surface": "#2a3233",
        "on-tertiary": "#3e2e00",
        "tertiary-fixed-dim": "#f3bf26",
        "outline-variant": "#3b494c",
        "on-secondary-fixed": "#001a42",
        "surface-container-low": "#151d1e",
        "surface": "#0d1516",
        "inverse-primary": "#006875"
      },
      borderRadius: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.borderRadius ? tailwindConfig.theme.extend.borderRadius : {}),
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.875rem",
        "full": "9999px"
      },
      spacing: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.spacing ? tailwindConfig.theme.extend.spacing : {}),
        "unit": "4px",
        "container-padding": "24px",
        "gutter": "16px",
        "stack-lg": "32px",
        "stack-sm": "8px",
        "stack-md": "16px"
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
        "mono-sm": ["11px", { "lineHeight": "14px", "fontWeight": "400" }]
      },
      backgroundImage: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.backgroundImage ? tailwindConfig.theme.extend.backgroundImage : {}),
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at center, rgba(138, 43, 226, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        'text-gradient': 'linear-gradient(to right, #00F0FF, #8A2BE2)',
        'btn-gradient': 'linear-gradient(to right, #00F0FF, #0055FF)',
        'border-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
      },
      boxShadow: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.boxShadow ? tailwindConfig.theme.extend.boxShadow : {}),
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(138, 43, 226, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
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
