const plugin = require("tailwindcss/plugin");
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "440px",
        s: "550px",
        sm: "660px",
        md: "768px",
        l: "989px",
        lg: "1150px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        white: "#FFFFFF",
        zinc: "#18181B",
        yellow: "#FEC902",
      },
      backgroundImage: {
        "yellow-gradient":
          "linear-gradient(92deg, #FFE998 1.46%, #FEC902 106.16%)",
        "dark-to-yellow-grad":
          "linear-gradient(106deg, #18181B 24.77%, #FEC902 188.46%)",
        "dark-to-yellow-2":
          "linear-gradient(106deg, #18181B 36.67%, #FEC902 188.66%)",
        "yellow-to-dark":
          "linear-gradient(285deg, #18181B 67.49%, #FEC902 236.19%)",
        "footer-mob-bg":
          "linear-gradient(322deg, rgba(24, 24, 27, 0.42) 55.33%, rgba(254, 201, 2, 0.42) 120.09%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        michelin: ["Michelin", "sans-serif"],
      },
      fontSize: {
        xxs: ["clamp(10px, 2.14vw, 24px)", { fontWeight: "700" }],
        xs: [
          "clamp(11px, 1.79vw, 20px)",
          { lineHeight: "0.99", fontWeight: "500" },
        ],
        s: [
          "clamp(12px, 1.25vw, 14px)",
          { lineHeight: "1.22", fontWeight: "700" },
        ],
        sm: [
          "clamp(12px, 1.4vw, 16px)",
          { lineHeight: "1.22", fontWeight: "500" },
        ],
        m: ["14px"],
        "m-resp": ["clamp(14px, 1.4vw, 16px)", { lineHeight: "1.17" }],
        ml: ["clamp(14px, 1.6vw, 18px)", { lineHeight: "1.17" }],
        mlg: ["clamp(14px, 1.79vw, 20px)"],
        base: [
          "clamp(16px, 1.6vw, 18px)",
          { lineHeight: "1.22", fontWeight: "700" },
        ],
        "base-m": ["clamp(16px, 1.79vw, 20px)"],
        "base-l": ["clamp(16px, 2.14vw, 24px)"],
        l: ["18px"],
        "l-resp": [
          "clamp(18px, 2.77vw, 31px)",
          { lineHeight: "1.17", fontWeight: "800" },
        ],
        lg: [
          "clamp(20px, 2.14vw, 24px)",
          { lineHeight: "1.22", fontWeight: "700" },
        ],
        xl: ["clamp(20px, 2.85vw, 32px)", { fontWeight: "700" }],
        "2xl": ["clamp(24px, 3.2vw, 36px)", { fontWeight: "700" }],
        "3xl": [
          "clamp(24px, 3.57vw, 40px)",
          { lineHeight: "1.22", fontWeight: "700" },
        ],
        "4xl": ["clamp(24px, 4.29vw, 48px)", { lineHeight: "1.22" }],
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".dark-txt-gradient": {
          background:
            "linear-gradient(106deg, #18181B 36.67%, #FEC902 188.66%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        ".yellow-txt-gradient": {
          background: "linear-gradient(92deg, #FFE998 1.46%, #FEC902 106.16%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },

        ".border-gradient-rounded": {
          border: "1.5px solid transparent",
          borderRadius: "6px",
          background:
            "linear-gradient(106deg, #18181B 24.77%, #FEC902 188.46%),linear-gradient(90deg, #FEC902 0%, #18181B 100%)",
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "padding-box, border-box",
        },
        ".transition-default": {
          transition: "all 300ms ease-in-out",
        },
      });
    }),
  ],
};
