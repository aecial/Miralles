/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C69B6D",

          secondary: "#ff00ff",

          accent: "#FFDCB6",

          neutral: "#D8DECC",

          "base-100": "#ff00ff",

          info: "#0000ff",

          success: "#4D563A",

          warning: "#00ff00",

          error: "#ff0000",
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
