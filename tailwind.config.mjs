/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      Eco: {
        10: "#050107",
        20: "#1F0F2D",
        30: "#341453",
        40: "#451673",
        50: "#542187",
        60: "#613190",
        70: "#6E4198",
        80: "#7B50A1",
        90: "#8860AA",
        100: "#946FB3",
        110: "#A17FBC",
        120: "#AD8FC5",
        130: "#B99FCD",
        140: "#C6B0D6",
        150: "#D2C1DF",
        160: "#DED2E8",
      },

      "Eco-Shadow": {
        10: "rgba(5, 1, 7, 0.37)",
        20: "rgba(31, 15, 45, 0.37)",
        30: "rgba(52, 20, 83, 0.37)",
        40: "rgba(69, 22, 115, 0.37)",
        50: "rgba(84, 33, 135, 0.37)",
        60: "rgba(97, 49, 144, 0.37)",
        70: "rgba(110, 65, 152, 0.37)",
        80: "rgba(123, 80, 161, 0.37)",
        90: "rgba(136, 96, 170, 0.37)",
        100: "rgba(148, 111, 179, 0.37)",
        110: "rgba(161, 127, 188, 0.37)",
        120: "rgba(173, 143, 197, 0.37)",
        130: "rgba(185, 159, 205, 0.37)",
        140: "rgba(198, 176, 214, 0.37)",
        150: "rgba(210, 193, 223, 0.37)",
        160: "rgba(222, 210, 232, 0.37)",
      },
    },

    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },

    fontWeight: {
      "lato-100": 100,
      "lato-300": 300,
      "lato-400": 400,
      "lato-700": 700,
      "lato-900": 900,
    },

    screens: {
      clear: "0px",
      // => @media (min-width: 640px) { ... }

      phone: "640px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
