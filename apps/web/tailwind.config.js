/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Added components directory
  ],
  theme: {
    extend: {
      colors: {
        unc: {
          DEFAULT: '#4B9CD3', // Carolina Blue
          dark: '#13294B',    // Navy Blue often paired
          light: '#E6F3FF',   // Light blue background
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Use Inter if available, else system font
      },
    },
  },
  plugins: [],
};
