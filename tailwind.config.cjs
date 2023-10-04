/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#251F1C",
        secondary: "#524B47",
        accent: "#FFE8D2",
        color: "#00C9AA",
      },
    },
  },
  plugins: [],
};
