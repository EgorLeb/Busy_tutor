/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header_bg: "#F8FDFF",
        header_border: "#CFE6EF",
        slot_free: "#D5EFFB",
        no_slot_hover: "#F2FBFF",
        booked_clicked: "#2151AE",
        booked_normal: "#88DBFF",
        text_dark: "#221E1E",
      },
    },
  },
  plugins: [],
};