import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F33", deep: "#071522", brand: "#2E8B57", fresh: "#4CAF70",
        offwhite: "#F7F9F7", ink: "#52606D", line: "#E5EAE7",
      },
      fontFamily: { sans: ["var(--font-jakarta)", "system-ui", "sans-serif"] },
      boxShadow: { card: "0 18px 36px -18px rgba(11,31,51,.25)" },
    },
  },
  plugins: [],
};
export default config;
