/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      screens: {
        xs: '300px',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-25deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },

      animation: {
        wiggle: 'wiggle 4s linear infinite',
        spinSlow: 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
