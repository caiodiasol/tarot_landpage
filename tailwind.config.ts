import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // ativa modo escuro via classe .dark
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}", // se usar fora de src
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED", // roxo principal
          foreground: "#F5F3FF", // texto em cima do roxo
        },
        secondary: {
          DEFAULT: "#A855F7",
          foreground: "#1F0A3A",
        },
        background: {
          light: "#F8F5FF",
          dark: "#0F0A1A",
        },
      },
    },
  },
  plugins: [],
}

export default config
