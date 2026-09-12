import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        accent: "#D9653B",
        code: "#1a1a2e",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "marquee": "marquee 45s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
