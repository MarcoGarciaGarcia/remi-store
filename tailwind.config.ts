import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(100px, 280px))",
      },
      animation: {
        "grow-to-the-right": "grow-to-the-right 0.5s ease-in forwards",
      },
      keyframes: {
        "grow-to-the-right": {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F5F5F5",
            foreground: "#000000",
            primary: {
              "100": "#FEEBDB",
              "200": "#FDD3B7",
              "300": "#F9B492",
              "400": "#F39576",
              "500": "#EB664A",
              "600": "#CA4436",
              "700": "#A92825",
              "800": "#88171D",
              "900": "#700E1B",
              DEFAULT: "#EB664A",
              foreground: "#000000",
            },
            secondary: {
              "100": "#FFFDFB",
              "200": "#FFFBF8",
              "300": "#FFF9F4",
              "400": "#FFF7F2",
              "500": "#FFF4EE",
              "600": "#DBBBAD",
              "700": "#B78677",
              "800": "#93574B",
              "900": "#7A352D",
              DEFAULT: "#FFF4EE",
              foreground: "#000000",
            },
            default: {
              "100": "#F2F2F2",
              "200": "#B2B2B2",
              "300": "#666666",
              "400": "#000000",
              "500": "#000000",
              "600": "#000000",
              "700": "#000000",
              "800": "#000000",
              "900": "#000000",
              DEFAULT: "#000000",
              foreground: "#000000",
            },
            success: {
              "100": "#F4FCCF",
              "200": "#E7F9A0",
              "300": "#D0EF6F",
              "400": "#B7E04A",
              "500": "#95CC16",
              "600": "#7AAF10",
              "700": "#61920B",
              "800": "#4A7607",
              "900": "#396104",
              DEFAULT: "#95CC16",
              foreground: "#000000",
            },
            danger: {
              "100": "#FFE8D8",
              "200": "#FFCBB1",
              "300": "#FFA88A",
              "400": "#FF876D",
              "500": "#FF503D",
              "600": "#DB2F2C",
              "700": "#B71E28",
              "800": "#931326",
              "900": "#7A0B24",
              DEFAULT: "#FF503D",
              foreground: "#000000",
            },
            warning: {
              "100": "#FDF3CF",
              "200": "#FCE49F",
              "300": "#F8CF6E",
              "400": "#F1B94A",
              "500": "#E89912",
              "600": "#C77B0D",
              "700": "#A76009",
              "800": "#864805",
              "900": "#6F3703",
              DEFAULT: "#E89912",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
export default config;
