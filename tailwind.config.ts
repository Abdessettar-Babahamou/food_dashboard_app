import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#EA7C69",
        greenColor: "#00bc91",
        lightBgColor: "#f2f5f8",
        lightTitleColor: "#3F425A",
        lightCardColor: "#ffffff",
        lightInput:'#ffffff',

        lightDescriptionColor: "#707070",
        borderLightColor: "#e8e8e8",
        borderDarkColor: "#333333",
        darkBgColor: "#252836",
        darkTitleColor: "#3F425A",
        darkCardColor: "#1F1D2B",
        darkDescriptionColor: "#f0f2f5b3",
        lightBlack: "#576076",
        secendCardDarkColor: "#0e1018",
        darkInput:'#2D303E',
        darkBorderColor:'#393C49',

        pinkColor:'#9288E0',
        accentGreen:'#50D1AA',
        accentRed:'#FF7CA3',
        accentOrange:'#FFB572',
        accentBlue:'#65B0F6',
        accentPurple:'#9290FE',
        blackBase:'#252836',

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
         secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'side-bar-item-dark': '5px 8px 0 0px #252836',
        'side-bar-item': '5px 8px 0 0px #f2f5f8',
        'side-bar-item-bottom': '5px -8px 0 0px #f2f5f8',
        'side-bar-item-bottom-dark': '5px -8px 0 0px #252836',
        'button-shadow': '0px 8px 10px 0px #EA7C69',
      }

    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
