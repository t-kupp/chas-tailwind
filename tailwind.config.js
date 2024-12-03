/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background-dark": "url('/img/background-dark.jpg')",
        "hero-background-light": "url('/img/background-light.png')",
      },
      fontFamily: {
        sans: "Inter var", // sans replaces the standard font in Tailwind
      },
    },
  },
  plugins: [],
};
