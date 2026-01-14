/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        cinema: {
          DEFAULT: "#8B5CF6",
          dark: "#6D28D9",
        },
        videogame: {
          DEFAULT: "#EC4899",
          dark: "#BE185D",
        },
        beats: {
          DEFAULT: "#06B6D4",
          dark: "#0891B2",
        },
      },
    },
  },
  plugins: [],
}
