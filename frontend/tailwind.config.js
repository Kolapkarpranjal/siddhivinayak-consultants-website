/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-delayed': 'fade-in 1s ease-out 0.3s both',
      },
    },
  },
  plugins: [],
}

