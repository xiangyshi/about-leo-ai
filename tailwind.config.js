/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#4facfe',
        'neon-purple': '#667eea',
        'neon-pink': '#f093fb',
        'neon-green': '#00ff88',
      },
      animation: {
        'background-shift': 'backgroundShift 20s ease-in-out infinite',
        'floating': 'floating 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        backgroundShift: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 4px 20px rgba(79, 172, 254, 0.2)',
          },
          '50%': { 
            boxShadow: '0 4px 30px rgba(79, 172, 254, 0.4), 0 0 0 1px rgba(79, 172, 254, 0.2)',
          },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#667eea' },
        },
      },
    },
  },
  plugins: [],
}
