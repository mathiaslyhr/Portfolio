/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0a0a0a",
          100: "#0f0f10",
          200: "#151517",
          300: "#1b1b1f"
        }
      },
      fontFamily: {
        sans: ['SF Pro Display','SF Pro Text','-apple-system','BlinkMacSystemFont','Inter','Segoe UI','Roboto','Helvetica','Arial','sans-serif']
      },
      boxShadow: {
        soft: "0 10px 40px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)"
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  plugins: []
}
