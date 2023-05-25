/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      black: "#17252A",
      turquoise: "#3AAFA9",
      "turquoise-alternate": "#2B7A78",
      "off-white": "#DEF2F1",
      white: "#FEFFFF",
      disabled: "#f0f1f4",
      inputBorder: "#e2e4e9",
    },
    extend: {
      boxShadow: {
        cardShadow: "0 1px 6px rgba(0,0,0,.12), 0 1px 4px rgba(0,0,0,.12)",
      },
    },
  },
  plugins: [],
};
