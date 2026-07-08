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
        steel: "#64717d",
        cloud: "#f5f7f8",
        signal: "#0b7f79",
      },
      boxShadow: {
        subtle: "0 18px 50px rgba(17, 20, 23, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
