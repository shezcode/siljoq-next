import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#41cffa",
      secondary: "#ffce38",
      "sec-blue": "#058ab3",
      "sec-yellow": "#ffdb70",
      dark: "#121212",
      "lighter-dark": "#282828",
      "main-text": "#f9f9f9",
      "sec-text": "#edebe9",
    },
    extend: {
      fontFamily: {
        display: "Inter, sans-serif",
        body: "Open\\ Sans, sans-serif",
      },
      backgroundImage: {
        gradientBg: "url('../public/assets/nav2.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
