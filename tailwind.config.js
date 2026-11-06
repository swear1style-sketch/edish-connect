/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050c17',
          900: '#081426',
          850: '#0b1c33',
          800: '#0f223d',
          700: '#183358',
          600: '#224370',
        },
        gold: {
          600: '#a87e27',
          500: '#c89b3c',
          400: '#dfb15b',
          300: '#f2cc83',
          200: '#fae8c3',
        },
        border: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        serif: ['Fraunces', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        precision: ['Space Grotesk', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
