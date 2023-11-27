/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' : ['"Montserrat"', 'sans-serif']
    },
    extend: {


      backgroundImage: {
        'hero-pattern': "url('https://www.pexels.com/photo/silver-apple-keyboard-and-magic-mouse-on-a-pink-surface-399161/')",
      }
    },
  },
// tailwind.config.js
plugins: [
  require("daisyui"),
  require("@tailwindcss/forms")({
    strategy: 'base', // only generate global styles
    strategy: 'class', // only generate classes
  }),
],
}

