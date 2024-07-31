import {
  nextui
} from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#e679c0",

            "primary-focus": "#e04dac",

            "primary-content": "#201047",

            secondary: "#54c5f2",

            "secondary-focus": "#88d7f7",

            "secondary-content": "#201047",

            accent: "#f3cc30",

            "accent-focus": "#f6d860",

            "accent-content": "#201047",

            neutral: "#20134e",

            "neutral-focus": "#140a2e",

            "neutral-content": "#f9f7fd",

            "base-100": "#2c1a65",

            "base-200": "#20134e",

            "base-300": "#140a2e",

            "base-content": "#f9f7fd",

            info: "#4fbff3",
            background: "#2c1a65",

            success: "#71ead2",

            warning: "#f3cc30",

            error: "#e13d53",
          },
        },
        dark: {
          colors: {
            primary: "#e679c0",

            "primary-focus": "#e04dac",

            "primary-content": "#201047",

            secondary: "#54c5f2",

            "secondary-focus": "#88d7f7",

            "secondary-content": "#201047",

            accent: "#f3cc30",

            "accent-focus": "#f6d860",

            "accent-content": "#201047",

            neutral: "#20134e",

            "neutral-focus": "#140a2e",

            "neutral-content": "#f9f7fd",

            "base-100": "#2c1a65",
            background: "#2c1a65",
            "base-200": "#20134e",

            "base-300": "#140a2e",

            "base-content": "#f9f7fd",

            info: "#4fbff3",

            success: "#71ead2",

            warning: "#f3cc30",

            error: "#e13d53",
          },
        },
      },
    }),
  ],
};