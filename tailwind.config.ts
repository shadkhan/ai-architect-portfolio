import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111417",
        graphite: "#1b2025",
        steel: "#6f7a83",
        porcelain: "#f4f1ea",
        signal: "#0f8f8c",
        ember: "#c98b42",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(17, 20, 23, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
