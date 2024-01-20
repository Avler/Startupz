/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gray: "#939393",
        customGray: "#3C4F5C",
        Orange: "#FB8958",
        OrangeSectionBg: "#FFC351",
        Blue: "#46B8C8",
        LightBlue: "#8BB5C9",
        Cyan: "#00A0B6",
        Green: "#A9BC87",
        Purple: "#8B60D3",
        Stone: "#FAFAF9",
        Zinc: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
