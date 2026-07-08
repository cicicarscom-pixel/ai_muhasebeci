/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "../../apps/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#4d525a",
        "surface": "#111415",
        "secondary": "#c3c6cf",
        "surface-container-low": "#1a1c1d",
        "error-container": "#93000a",
        "tertiary-fixed": "#dee2ec",
        "on-error-container": "#ffdad6",
        "surface-bright": "#37393b",
        "on-secondary-fixed": "#181c22",
        "primary-fixed": "#afecff",
        "error": "#ffb4ab",
        "outline-variant": "#3c494d",
        "surface-container": "#111415",
        "secondary-container": "#43474e",
        "primary-fixed-dim": "#14d8ff",
        "primary-container": "#00d8ff",
        "inverse-primary": "#00687b",
        "surface-tint": "#14d8ff",
        "warning": "#f97316",
        "outline": "#859398",
        "surface-dim": "#111415",
        "on-surface": "#e2e2e4",
        "on-secondary": "#2d3137",
        "inverse-surface": "#e2e2e4",
        "on-surface-variant": "#bbc9ce",
        "secondary-fixed": "#dfe2eb",
        "surface-variant": "#333537",
        "outline-subtle": "rgba(255, 255, 255, 0.08)",
        "surface-container-lowest": "#0c0e10",
        "primary": "#aeecff",
        "surface-container-highest": "#333537",
        "background": "#0d1014",
        "secondary-fixed-dim": "#c3c6cf",
        "on-background": "#e2e2e4",
        "on-secondary-container": "#b2b5bd",
        "on-primary-fixed-variant": "#004e5d",
        "surface-container-high": "#282a2c",
        "on-primary-fixed": "#001f27",
        "tertiary": "#dee2ec",
        "on-tertiary-fixed": "#171c23",
        "inverse-on-surface": "#2f3132",
        "on-secondary-fixed-variant": "#43474e",
        "on-primary": "#003641",
        "tertiary-fixed-dim": "#c2c7d0",
        "tertiary-container": "#c2c6d0",
        "on-primary-container": "#005a6c",
        "on-tertiary-fixed-variant": "#42474f",
        "on-tertiary": "#2c3138",
        "on-error": "#690005"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "unit": "4px",
        "stack-lg": "32px",
        "gutter": "16px",
        "stack-sm": "8px",
        "container-padding": "24px",
        "stack-md": "16px"
      },
      fontFamily: {
        "body-sm": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "mono-sm": ["Geist", "monospace"],
        "label-md": ["Geist", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "body-sm": ["13px", { lineHeight: "18px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "mono-sm": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }]
      }
    }
  },
  plugins: []
};

module.exports = config;
