/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Revamped Indigo
        secondary: "#a855f7", // Revamped Purple
        dark: "#0f172a",
        accent: "#EEF2FF",
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #6366f1, #a855f7)',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}