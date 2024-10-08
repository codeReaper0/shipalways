import type {Config} from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#0A3867",
        secondary: "#4E9EEF",
        danger: "#FF6363",
        pink: {light: "#F8ECFF", normal: "#C56AFA"},
        success: "#3DB241",
        "1b": "#1B1B1BB",
        d8: "#d8d8d8",
        ef: "#efefef",
        e1: "#e1e1e1",
        e2: "#e2e2e2",
        e3: "#e3e3e3",
        e6: "#e6e6e6",
        f1: "#f1f4f9",
        fa: "#fafafa",
        fe: "#fef7ff",
        f8f8f9: "#f8f8f9",
      },
    },
  },
  plugins: [],
};

export default withMT(config);
