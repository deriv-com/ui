/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "600px",
      md: "601px",
      lg: "1280px",
    },
    extend: {
      colors: {
        brand: {
          teal: "#00A79E",
          orange: "#ff6444",
          yellow: "#ffad3a",
          green: "#17eabd",
          blue: "#0796e0",
          coral: {
            DEFAULT: "#ff444f",
            50: "#FF444F29",
            100: "#FF444F3D",
          },
        },
        primary: {
          base: "#FFFFFF",
          active: "#D6DADB",
          secondary: "#F2F3F4",
          hover: "#E6E9E9",
          dark: {
            base: "#0E0E0E",
            active: "#323738",
            secondary: "#151717",
            hover: "#242828",
          },
        },
        text: {
          general: "#666666",
          prominent: "#333333",
          "less-prominent": "#999999",
          disabled: "#D6D6D6",
          dark: {
            "less-prominent": "#6E6E6E",
            disabled: "#3E3E3E",
            general: "#CCCCCC",
            prominent: "#FFFFFF",
          },
        },
        status: {
          danger: "#ec3f3f",
          information: "#377cfc",
          success: "#4bb4b3",
          warning: "#ffad3a",
          dark: {
            danger: "#cc2e3d",
            general: "#ffffff",
            information: "#377cfc",
            success: "#00a79e",
            warning: "#ffad3a",
          },
        },
      },
    },
  },
};
