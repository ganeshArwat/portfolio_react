/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Make sure JSX files are included
  ],
  theme: {
    extend: {
      colors: {
        primary: '#732354', // Example: Your brand pink
        dark: '#1a1a1a',
      },
      fontFamily: {
        electrolize: ['"Electrolize"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
