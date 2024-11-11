const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        w95: {
          primary: "var(--w95-primary)",
          secondary: "var(--w95-secondary)",
          tertiary: "var(--w95-tertiary)",
          text: "var(--w95-text)",
          border: {
            light: "var(--w95-border-light)",
            dark: "var(--w95-border-dark)",
            darker: "var(--w95-border-darker)",
          },
        },
      },
      fontFamily: {
        w95: ["Windows 95", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "w95-sm": ["0.53rem", "1rem"],
        "w95-base": ["0.6rem", "1.2rem"],
        "w95-lg": ["0.75rem", "1.4rem"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
