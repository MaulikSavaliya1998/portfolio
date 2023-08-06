/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bigShoulders: ["Big Shoulders Text", "sans-serif"],
      },
      colors: {
        type: "light",
        primary: "#3fc337",
        primary400: "#57d750",
        primary600: "#29c51f",
        primary80: "#3fc337cc",
        primary50: "#3fc33780",
        primary30: "#3fc3374d",
        secondary: "#EAEAEA",
        secondary70: "#EAEAEAb3",
        secondary50: "#EAEAEA80",
        tertiary: "#212121",
        tertiary80: "#212121cc",
        tertiary70: "#212121b3",
        tertiary50: "#21212180",
        // aboutimg1: greenThemeboy,
        // aboutimg2: greenThemegirl,
        // eduimg: eduGreen,
        // expimg: expGreen,
        // contactsimg: contactsGreen
      },
    },
    screens: {
      xsm: "490px",
      sm: "640px",
      md: "768px",
      tab: "990px",
      lg: "1024px",
      laptop: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
