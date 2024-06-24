/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        th: '0.0625rem',
        sm: '.125rem',
        md: '.375rem',
        lg: '.5rem',
        xl: '.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
};
