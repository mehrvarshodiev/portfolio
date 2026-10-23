import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#08080C",
        surface: "#111118",
        elevated: "#171720",
        accent: "#C7FF6B",
        muted: "#92929D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { site: "1280px" },
      letterSpacing: { editorial: "-0.075em" },
    },
  },
  plugins: [],
};

export default config;
