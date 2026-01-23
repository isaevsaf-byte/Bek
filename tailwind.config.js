/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        neon: {
          cyan: '#00f3ff',
          magenta: '#ff00ff',
        },
        retro: {
           orange: '#ff4d00',
           yellow: '#ffcc00',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'metallic': 'linear-gradient(180deg, #d1d5db 0%, #374151 100%)',
        'bek-gradient': 'linear-gradient(to right, #ff4500, #ffd700)',
      }
    },
  },
  plugins: [],
}
