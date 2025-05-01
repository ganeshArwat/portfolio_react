/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Make sure JSX files are included
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#732354',
          50: '#fdf2f7',
          100: '#fce6f0',
          200: '#f7bfd8',
          300: '#ee91b7',
          400: '#dc6293',
          500: '#c63c72',
          600: '#a32d5c',
          700: '#822348', // slightly lighter than base
          800: '#63193a',
          900: '#4d122e',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#4d4d4d',
          600: '#333333',
          700: '#262626',
          800: '#1a1a1a',
          900: '#0d0d0d',
        },
        light: '#f9f9f9',
        accent: '#e64c88', // vibrant pink accent
        muted: '#999',
      },
      fontFamily: {
        electrolize: ['"Electrolize"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
