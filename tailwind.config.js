/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#323131",
      bgSeccondary: "#F4F2F2",
      bgLightest: "#D3FFE8",
      bgDark: "#0FA958",
      bgDarkest: "#4F9D74",
      textLight: "#FFFFFF",
      textDark: "#4F4F4F",
      error: "#F32828",
      success: "#1DB510",
      borderLight: "#D9D9D9",
    },
    extend: {
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
