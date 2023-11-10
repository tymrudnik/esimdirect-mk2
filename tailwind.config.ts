/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react"

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      backgroundImage: {
        herobg: 'url("/assets/heroimg.svg")',
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1060px" },
      lgx: { min: "1060px" },
      md: { max: "767px" },
      mdx: { min: "768px" },
      phone: { max: "639px" },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.8rem",
      base: "1.15rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
    },
    fontFamily: {
      title: ["Montserrat", "sans-serif"],
    },
    colors: {
      // primary: {
      //   100: "#dcdcdc",
      //   200: "#bababa",
      //   300: "#979797",
      //   400: "#757575",
      //   500: "#525252",
      //   600: "#424242",
      //   700: "#313131",
      //   800: "#212121",
      //   900: "#101010",
      // },
      // secondary: {
      //   100: "#edead2",
      //   200: "#dbd5a6",
      //   300: "#cabf79",
      //   400: "#b8aa4d",
      //   500: "#a69520",
      //   600: "#85771a",
      //   700: "#645913",
      //   800: "#423c0d",
      //   900: "#211e06",
      // },
      // white: {
      //   100: "#FFF4F4",
      // },
      // dark: {
      //   100: "#191D24",
      // },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: { colors: {} },
        dark: {
          colors: {
            primary: {
              100: "#dcdcdc",
              200: "#bababa",
              300: "#979797",
              400: "#757575",
              500: "#525252",
              600: "#424242",
              700: "#313131",
              800: "#212121",
              900: "#101010",
            },
            secondary: {
              100: "#edead2",
              200: "#dbd5a6",
              300: "#cabf79",
              400: "#b8aa4d",
              500: "#a69520",
              600: "#85771a",
              700: "#645913",
              800: "#423c0d",
              900: "#211e06",
            },
            content1: {
              100: "#FFF4F4",
            },
            default: {
              100: "#191D24",
            },
          },
        },
      },
    }),
  ],
}
