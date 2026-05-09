import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f5f1",
          100: "#d5e8da",
          200: "#aacfb5",
          300: "#7aad8d",
          400: "#508b6a",
          500: "#316a4d",
          600: "#1F3A2E",
          700: "#182d23",
          800: "#111f19",
          900: "#0a120e",
          950: "#060c09",
        },
        moss: {
          DEFAULT: "#2E4A3D",
          light: "#3a5c4d",
          dark: "#1e3028",
        },
        walnut: {
          DEFAULT: "#5C4033",
          light: "#7a5546",
          dark: "#3E2A22",
        },
        sage: {
          DEFAULT: "#7A9B76",
          light: "#9ab896",
          dark: "#5a7a56",
        },
        beige: {
          DEFAULT: "#D8CBB5",
          light: "#ede5d6",
          dark: "#b8a890",
          muted: "#a89880",
        },
        bark: "#3E2A22",
        pine: "#0d1a12",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(rgba(122,155,118,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(122,155,118,0.04) 1px, transparent 1px)",
        "noise-overlay": "url('/noise.svg')",
        "forest-gradient":
          "linear-gradient(135deg, #060c09 0%, #0a1410 30%, #0d1a12 60%, #060c09 100%)",
        "glass-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glass: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glass-lg": "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        "forest-glow": "0 0 40px rgba(31,58,46,0.4)",
        "sage-glow": "0 0 20px rgba(122,155,118,0.15)",
        "inner-glow": "inset 0 0 20px rgba(122,155,118,0.05)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "12px",
        heavy: "24px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        breathe: "breathe 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;
