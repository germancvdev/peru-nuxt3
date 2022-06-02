const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        accent: colors.amber,
        secondary: colors.gray,
        success: colors.green,
        warning: colors.orange,
        info: colors.blue,
        error: colors.red,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
