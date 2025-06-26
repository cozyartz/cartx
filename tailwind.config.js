/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka One', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 12s ease infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'pulse-button': 'pulseButton 2s infinite',
        'shine': 'shine 3s infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        neonPulse: {
          'from': { 
            'text-shadow': '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)' 
          },
          'to': { 
            'text-shadow': '0 0 20px rgba(255, 215, 0, 1), 0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseButton: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.2)' },
        },
      },
      backgroundImage: {
        'gradient-fire': 'linear-gradient(135deg, #FF6B35 0%, #F7931E 20%, #FFD23F 40%, #FF8C42 60%, #E63946 80%, #FF6B35 100%)',
        'hero-glow': 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
      },
      backdropFilter: {
        'glass': 'blur(20px)',
      },
      colors: {
        'neon-gold': '#FFD700',
      },
    },
  },
  plugins: [],
}