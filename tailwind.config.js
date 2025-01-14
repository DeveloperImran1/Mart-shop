/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, 
      padding: {
        DEFAULT: '1rem', // default padding
        sm: '2rem', // small screen padding
        lg: '3rem', // large screen padding
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        primary: "#FCB800",
        secondary: "#FFF7E3",
      },
    },
  },
  plugins: [],
}



