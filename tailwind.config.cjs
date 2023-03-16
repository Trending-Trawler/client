/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './App.tsx',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
      },
      colors: {
        'btn-orange': '#FF8447',
        'logo-purple': '#582d90',
        'logo-lightblue': '#61beea',
        'logo-darkblue': '#0f3675',
        'logo-orange': '#ff5700',
      },
    },
  },
  plugins: [],
}
