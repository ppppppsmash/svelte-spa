/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{html,js,svelte,ts}',
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    colors: {
      'primary': '#0A338A',
      'f-primary': '#333333',
      'white': '#FFF',
      'good': '#E5445F',
    },
    extend: {
      animation: {
        'logo-zoom-out': 'logo-zoom-out 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-out': 'slide-out-fwd-center 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both',
        'preface-logo': 'logo-zoom-out 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, slide-out-fwd-center 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.8s both',
        'mainvisual-zoom-out': 'mainvisual-zoom-out 8s linear 0s 1 normal both'
      },
      keyframes: {
        'logo-zoom-out': {
            '0%': {
                transform: 'scale(.7)',
                opacity: '1'
            },
            to: {
                transform: 'scale(1)',
                opacity: '1'
            }
        },
        'mainvisual-zoom-out': {
          '0%': {
              transform: 'scale(1.2)',
          },
          to: {
              transform: 'scale(1)'
          }
        },
        'slide-out-fwd-center': {
          '0%': {
              transform: 'translateZ(1)',
              opacity: '1'
          },
          to: {
              transform: 'translateZ(600px)',
              opacity: '0'
          }
        },

      }
    },
  },
  plugins: [],
}
