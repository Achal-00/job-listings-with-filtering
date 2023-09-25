/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontFamily: {
        "custom-font-family": ["League Spartan", "sans-serif"],
      },
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "background-greyish-cyan": "hsl(180, 52%, 96%)",
        "filter-tablets-greyish-cyan": "hsl(180, 31%, 95%)",
        "dark-greyish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-greyish-cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
