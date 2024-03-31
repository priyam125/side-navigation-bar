/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        custom: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
      },
    },
  },
  plugins: [],
};
