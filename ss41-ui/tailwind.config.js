/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        50: "200px",
        "500px": "500px",
      },
    },
  },
  plugins: [],
};
