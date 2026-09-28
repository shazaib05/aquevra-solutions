import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        navy: {
          950: "#050A14",
          900: "#0A0F1E",
          800: "#0D1B2A",
          700: "#111827",
          600: "#1A2540",
          500: "#243055",
        },
        cyan: {
          400: "#22D3EE",
          500: "#00D4FF",
          600: "#00B4D8",
          700: "#0EA5E9",
        },
        // Semantic aliases
        brand: {
          bg: "#0A0F1E",
          card: "#0D1B2A",
          surface: "#111827",
          accent: "#00D4FF",
          accentAlt: "#00B4D8",
          text: "#FFFFFF",
          muted: "#94A3B8",
          border: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.15) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(13,27,42,0.9) 0%, rgba(10,15,30,0.95) 100%)",
        "cyan-glow":
          "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)",
          },
        },
      },
      boxShadow: {
        "cyan-sm": "0 0 15px rgba(0, 212, 255, 0.2)",
        "cyan-md": "0 0 30px rgba(0, 212, 255, 0.3)",
        "cyan-lg": "0 0 60px rgba(0, 212, 255, 0.4)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)",
        "card-hover":
          "0 8px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
