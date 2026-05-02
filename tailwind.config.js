/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#05060C",
        panel: "#0A0E18",
        edge: "#25304A",
        neonBlue: "#3A8DFF",
        neonPurple: "#A23AFF",
        neonRed: "#FF3B6E"
      },
      boxShadow: {
        neon: "0 0 45px rgba(58, 141, 255, 0.35), 0 0 85px rgba(162, 58, 255, 0.22)"
      },
      fontFamily: {
        display: ["Space Grotesk", "Noto Sans SC", "sans-serif"],
        body: ["Noto Sans SC", "sans-serif"]
      }
    }
  },
  plugins: []
};
