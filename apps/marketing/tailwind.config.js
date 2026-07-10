const { tailwindConfig } = require("@workigom/design-system");

/** @type {import('tailwindcss').Config} */
const config = {
  ...tailwindConfig,
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...(tailwindConfig.theme && tailwindConfig.theme.extend ? tailwindConfig.theme.extend : {}),
      colors: {
        ...(tailwindConfig.theme && tailwindConfig.theme.extend && tailwindConfig.theme.extend.colors ? tailwindConfig.theme.extend.colors : {}),
        'ai-cyan': '#00F0FF',
        'ai-purple': '#8A2BE2',
        'ai-pink': '#FF00FF',
        'ai-blue': '#0055FF',
        'ai-dark': '#0B0C10',
        'ai-surface': '#121418',
        'ai-card': '#161920',
        "outline": "#859398",
        "on-secondary-fixed-variant": "#43474e",
        "error": "#ffb4ab",
        "surface-dim": "#111415",
        "secondary-fixed": "#dfe2eb",
        "primary": "#aeecff",
        "tertiary": "#e0e2e8",
        "on-primary-fixed": "#001f27",
        "on-primary-fixed-variant": "#004e5d",
        "background": "#111415",
        "inverse-surface": "#e2e2e4",
        "surface-tint": "#14d8ff",
        "primary-container": "#00d8ff",
        "on-error": "#690005",
        "secondary-container": "#43474e",
        "surface-container-high": "#282a2c",
        "on-primary": "#003641",
        "surface-bright": "#37393b",
        "surface-variant": "#333537",
        "on-surface": "#e2e2e4",
        "on-primary-container": "#005a6c",
        "surface-container": "#1e2021",
        "on-secondary": "#2d3137",
        "primary-fixed-dim": "#14d8ff",
        "on-secondary-container": "#b2b5bd",
        "surface-container-lowest": "#0c0e10",
        "tertiary-container": "#c4c6cc",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "on-surface-variant": "#bbc9ce",
        "on-tertiary-container": "#505257",
        "on-tertiary-fixed": "#191c20",
        "secondary-fixed-dim": "#c3c6cf",
        "secondary": "#c3c6cf",
        "primary-fixed": "#afecff",
        "on-tertiary-fixed-variant": "#44474c",
        "tertiary-fixed": "#e1e2e8",
        "on-background": "#e2e2e4",
        "surface-container-highest": "#333537",
        "inverse-on-surface": "#2f3132",
        "on-tertiary": "#2e3135",
        "tertiary-fixed-dim": "#c5c6cc",
        "outline-variant": "#3c494d",
        "on-secondary-fixed": "#181c22",
        "surface-container-low": "#1a1c1d",
        "surface": "#111415",
        "inverse-primary": "#00687b"
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
