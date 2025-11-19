/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-delay-1': 'fade-in 1s ease-out 0.2s both',
        'fade-in-delay-2': 'fade-in 1s ease-out 0.4s both',
        'fade-in-delay-3': 'fade-in 1s ease-out 0.6s both',
        'fade-in-delay-4': 'fade-in 1s ease-out 0.8s both',
        'fade-in-delay-5': 'fade-in 1s ease-out 1s both'
      }
    },
  },
  plugins: [],
}