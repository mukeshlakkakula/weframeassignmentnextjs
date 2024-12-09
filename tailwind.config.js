/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pinkGradientStart: "#EE4197",
        whiteGradientEnd: "#FFFFFF",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, var(--tw-gradient-stops))",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
