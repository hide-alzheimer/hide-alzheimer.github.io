/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Protest-Guerrilla': ['"Protest Guerrilla"', "sans-serif"],
        'Afacad-Flux': ['"Afacad Flux"',"sans-serif"]
      },
    },
  },
  plugins: [],
};
