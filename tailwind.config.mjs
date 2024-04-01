/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
      },

      boxShadow: {
        "clear-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        "eco-shadow": "0px 30px 15px -15px rgba(31, 15, 45, 0.5)",
        "social-btn": "3px 3px 0px 0px rgba(31, 15, 45, 1)",
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

      fontFamily: {
        satoshi: ["satoshi", "sans"],
      },
      fontWeight: {
        normal: 300,
        semibold: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
