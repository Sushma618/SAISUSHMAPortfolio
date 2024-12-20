/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        boxShadow: "boxShadow 0.5s ease-in-out",
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 15s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        boxShadow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0, 0, 0, 0)" },
          "50%": { boxShadow: "0 10px 20px rgba(128, 90, 213, 0.5)" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'purple-glow': '0 0 15px rgba(147, 51, 234, 0.5)',
      },
    },
  },
  plugins: [],
};
