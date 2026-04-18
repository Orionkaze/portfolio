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
        black: "#0A0A0A",
        dark: "#111111",
        panel: "#161616",
        gold: "#C9A84C",
        "gold-bright": "#F0C040",
        "gold-dim": "#7A6128",
        text: "#E8E0CC",
        muted: "#6B6355",
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        accent: ["var(--font-playfair)", "serif"],
        nav: ["var(--font-space)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        "marquee-reverse": "marquee-reverse 18s linear infinite",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        "fade-up": "fade-up 0.9s ease forwards",
        "bounce-down": "bounce-down 1s ease-in-out infinite",
        "speed-line": "speed-line 0.8s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "speed-line": {
          "0%": { width: "0%", opacity: "0" },
          "100%": { width: "100%", opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
