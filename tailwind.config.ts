import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        "infinity-animation-rotate":
          "conic-gradient(#06B4DB 10deg, transparent 120deg)",
      },
      colors: {
        primary: {
          50: "#ecfdff",
          100: "#cff8fe",
          200: "#a5f0fc",
          300: "#67e3f9",
          400: "#22cbee",
          500: "#06b4db",
          600: "#088bb2",
          700: "#0e6f90",
          800: "#155a75",
          900: "#212529",
          950: "#083144",
          DEFAULT: "#06B4DB",
        },
        secondary: {
          50: "#f1f8fe",
          100: "#e1f1fd",
          200: "#bde2fa",
          300: "#82ccf7",
          400: "#40b2f0",
          500: "#1798e0",
          600: "#0a73b5",
          700: "#0a609a",
          800: "#0c5280",
          900: "#10456a",
          950: "#0b2b46",
        },
      },
      width: {
        "banner-cookies": "calc(100% - 40px)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "rotate-left": "rotate-left 4s linear infinite",
        "rotate-right": "rotate-right 4s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "rotate-left": {
          "0%": {
            transform: "rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "rotate(-360deg)",
            opacity: "1",
          },
        },
        "rotate-right": {
          "0%": {
            transform: "rotate(-180deg)",
            opacity: "1",
          },
          "100%": {
            transform: "rotate(-540deg)",
            opacity: "1",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#ecfdff",
              100: "#cff8fe",
              200: "#a5f0fc",
              300: "#67e3f9",
              400: "#22cbee",
              500: "#06b4db",
              600: "#088bb2",
              700: "#0e6f90",
              800: "#155a75",
              900: "#164b63",
              DEFAULT: "#06B4DB",
              foreground: "#FFFF",
            },
            secondary: {
              50: "#f1f8fe",
              100: "#e1f1fd",
              200: "#bde2fa",
              300: "#82ccf7",
              400: "#40b2f0",
              500: "#1798e0",
              600: "#0a73b5",
              700: "#0a609a",
              800: "#0c5280",
              900: "#10456a",
              DEFAULT: "#0A73B5",
              foreground: "#FFFF",
            },
            success: {
              100: "#E7FBD6",
              200: "#CAF8AF",
              300: "#A1EC83",
              400: "#7AD960",
              500: "#45C132",
              600: "#2BA524",
              700: "#198A1C",
              800: "#0F6F19",
              900: "#095C18",
              DEFAULT: "#45C132",
              foreground: "#FFFF",
            },
            warning: {
              100: "#FEF7CC",
              200: "#FEEC9A",
              300: "#FCDE67",
              400: "#FAD041",
              500: "#F7BA04",
              600: "#D49A02",
              700: "#B17C02",
              800: "#8F6001",
              900: "#764C00",
              DEFAULT: "#F7BA04",
              foreground: "#000",
            },
            danger: {
              100: "#FFE8D6",
              200: "#FFCBAD",
              300: "#FFA883",
              400: "#FF8665",
              500: "#FF4E32",
              600: "#DB2F24",
              700: "#B7191C",
              800: "#930F1D",
              900: "#7A091D",
              DEFAULT: "#FF4E32",
              foreground: "#FFFF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
