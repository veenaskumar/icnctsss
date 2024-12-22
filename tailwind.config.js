/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      },
      fontSize: {
        navItem: "14px",
        bodyText: "16px",
        subHeadingText: "24px",
        headingText: "32px",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".25em",
      },
      colors: {
        primary: "#3182ce", // Your primary color
      },
      backgroundImage: {
        conferenceHome:
          'url( "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Jz10N_W1SOv6hpHJMlJUtQHaED%26pid%3DApi&f=1&ipt=876eb177006364e2de9f754450b53c1ef2589140f86a8558ed388c2dac14e658&ipo=images" )',
      },
    },
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [daisyui],
};
