/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontSize: {
        "15px": "15px",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        "josefin-sans": ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
