/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a21caf",
          "secondary": "#f3f4f6",
          "accent": "#e04edd",
          "neutral": "#1D252A",
          "base-100": "#F4F0F4",
          "info": "#1A93EA",
          "success": "#14945D",
          "warning": "#F6D76A",
          "error": "#F15069",
        },
      },
    ],
  },
  theme: {
    screens: {
      'xs': "480px",

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
