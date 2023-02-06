/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'B51': "url('/img/previews/B51.jpg')",
        'B55': "url('/img/previews/B55.jpg')",
        'VR': "url('/img/previews/VR.jpg')"
      },
      colors: {
        'birkabo': '#96D1FF',
        'link': '#93c5fd',
        'link-darker': '#1d4ed8',
      },
    },
  },
  plugins: [],
  important: true,
}
