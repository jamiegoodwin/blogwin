module.exports = {
  purge: {
    enabled: true,
    content: [
      "./_src/**/*.njk",
      "./.eleventy.js"
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
