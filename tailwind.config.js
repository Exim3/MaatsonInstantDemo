/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        primary: "#3747b2",
        "primary-100": "#B8BFE9",
        "primary-200": "#959FDE",
        "primary-300": "#727FD4",
        "primary-400": "#4F5FC9",
        "primary-600": "#2C398F",
        "primary-700": "#232D70",
        "primary-800": "#232D70",
        "primary-900": "#0F1432",

        secondary: "#eeaa1f",
        "secondary-100": "#FCEED2",
        "secondary-200": "#F8DDA5",
        "secondary-300": "#F5CC79",
        "secondary-400": "#F1BB4C",
        "secondary-600": "#D49410",
        "secondary-700": "#AF7A0D",
        "secondary-800": "#895F0A",
        "secondary-900": "#634508",
        accent: "#8e825b",
        "accent-100": "#C9C2AB",
        "accent-200": "#AEA380",
        "accent-300": "#8E825B",
        "accent-400": "#645C40",
        neutral: "#9A9A9A",
        "neutral-100": "#E4E4E4",
        "neutral-200": "#D2D2D2",
        "neutral-300": "#BFBFBF",
        "neutral-400": "#ACACAC",
        "neutral-600": "#878787",
        "neutral-700": "#757575",
        "neutral-800": "#626262",
        "neutral-900": "#4F4F4F",
        "neutral-1000": "#3D3D3D",
        error: "#83160D",
        "error-100": "#F7B0AA",
        "error-200": "#EE6055",
        "error-300": "#E92D1F",
        "error-400": "#B91F13",
        warning: "#8C6800",
        "warning-100": "#FFE9AA",
        "warning-200": "#FFD355",
        "warning-300": "#FFBD00",
        "warning-400": "#C69200",
        success: "#2E6B2B",
        "success-100": "#C3E6C1",
        "success-200": "#86CD82",
        "success-300": "#5BBB56",
        "success-400": "#41973C",
        baseBlack: "#121212",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoSlab: ["Roboto Slab", "sans-serif"],
      },
      fontWeight: {
        semibold: "500", // Customize font weight name if you prefer
      },
      backgroundImage: {
        // Add a custom gradient background
        "primary-to-white":
          "linear-gradient(90deg, rgba(128,140,216,.2) 0%, rgba(0,0,0,0)  100%)",
      },
      boxShadow: {
        "primary-sd": "0 0px 4px 0 rgba(0,0,0,.2)",
        "secondary-sd": "0 0px 6px 0 rgba(0,0,0,.2)",
        "tertiary-sd": "0 0px 8px 0 rgba(0,0,0,.2)",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
