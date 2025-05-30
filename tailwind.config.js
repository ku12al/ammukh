/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        panBackground: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '100% center' },
        },
      },
      animation: {
        'pan-bg': 'panBackground 60s linear infinite',
      },
    },
  },
  plugins: [],
};
