/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#141413",
        paper: "#FBFAF7",
        gold: "#D4AF37",
        golddeep: "#9A7A16",
        graphite: "#56554E",
        line: "#E8E5DC",
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: { wrap: "76rem" },
    },
  },
  plugins: [],
};
