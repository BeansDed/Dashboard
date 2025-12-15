/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
        },
        deep: {
          900: '#0f172a', // Slate 900
          800: '#1e293b', // Slate 800
          violet: '#2e1065', // Violet 950
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'app-bg': 'linear-gradient(to bottom right, #1e1b4b, #312e81, #4c1d95)', // Deep violet/blue gradient
      }
    },
  },
  plugins: [],
}
