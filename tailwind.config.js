/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        ss: "0.5rem",
        sm: "0.75rem",
        s: "1rem",
        ms: "1.25rem",
        mm: "1.5rem",
        m: "1.75rem",
        ls: "2rem",
      },
      fontFamily: {
        poem: ["'Shadows Into Light'", "Arial", "sans-serif"],
        cursive: ["'Great Vibes'", "Arial", "sans-serif"],
        alkatra: ["Alkatra", "cursive"],
      },
    },
  },
  plugins: [],
};
