/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./content/**/*.{md,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
