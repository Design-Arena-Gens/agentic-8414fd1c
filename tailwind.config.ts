import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "ui-sans-serif", "system-ui"]
      },
      colors: {
        midnight: "#0f172a",
        pearl: "#f8fafc",
        blush: "#f5d0c5",
        dusk: "#1e293b",
        mint: "#bbf7d0"
      },
      boxShadow: {
        glow: "0 0 40px rgba(16, 185, 129, 0.35)"
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.25), transparent 45%), radial-gradient(circle at 80% 30%, rgba(8, 145, 178, 0.25), transparent 55%), radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.25), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
