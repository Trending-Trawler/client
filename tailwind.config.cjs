/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      aspectRatio: {
        "9/16": "9 / 16"
      },
      colors: {
        "btn-orange": "#FF8447",
        "page-bg": "#02122C"
      },
      blur: {
        own: "100px",
        own2: "135px",
        own3: "150px"
      }
    }
  },
  plugins: []
};
