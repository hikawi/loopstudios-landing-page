export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss", "prettier-plugin-svelte"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
