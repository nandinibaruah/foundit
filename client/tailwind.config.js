/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 0px 11px 6px rgba(54, 54, 54, 0.07);",
      },
    },
  },
  plugins: [],
};
