/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C69B6D",

          secondary: "#ff00ff",

          accent: "#00ffff",

          neutral: "#ff00ff",

          "base-100": "#ff00ff",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",

          clean: "#FFFFFF",
        },
      },
    ],
  },
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("preline/plugin")],
};
