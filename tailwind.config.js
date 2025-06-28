/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ggf-bg': '#1F1F33',
        'ggf-bg-panel': 'rgba(42, 42, 65, 0.95)',
        'ggf-gold': '#CDAF76',
        'ggf-gold-light': 'rgba(205, 175, 118, 0.2)',
        'ggf-gold-glow': 'rgba(205, 175, 118, 0.4)',
        'ggf-text': '#FFF',
        'ggf-text-muted': '#B0B0CC',
        'ggf-green': '#4CAF50',
        'ggf-red': '#FF4D4D',
        'ggf-blue': '#5C8CFF',
        'ggf-purple': '#BB86FC',
        'ggf-dark-blue': '#2A2A41',
        'ggf-dark-blue-light': '#3A3A5A',
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        display: ['Cinzel', 'serif'],
        fun: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'ggf': '16px',
        'ggf-sm': '10px',
      },
      boxShadow: {
        'ggf-glow': '0 0 15px var(--ggf-gold-glow)',
        'ggf-nav': '0 4px 15px rgba(0, 0, 0, 0.4)',
        'ggf-panel': '0 10px 30px rgba(0,0,0,0.4), inset 0 0 10px var(--ggf-gold-light)',
      },
      keyframes: {
        panelPop: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        professorFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scorePop: {
          'from': { transform: 'scale(0.8)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
        shake: {
            '0%, 100%': { transform: 'translateX(0)' },
            '25%': { transform: 'translateX(-3px)' },
            '75%': { transform: 'translateX(3px)' },
        },
        logoShine: {
          '0%': { backgroundPosition: '150% 0' },
          '100%': { backgroundPosition: '-50% 0' },
        },
      },
      animation: {
        panelPop: 'panelPop 0.5s ease-out forwards',
        professorFloat: 'professorFloat 4s ease-in-out infinite',
        scorePop: 'scorePop 0.8s ease-out forwards',
        spin: 'spin 1s linear infinite',
        shake: 'shake 0.3s',
        logoShine: 'logoShine 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
}