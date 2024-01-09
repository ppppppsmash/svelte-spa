/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    './src/*.{html,js,svelte,ts}',
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    fontFamily: {
      body: [
        'YuGothic',
        'Yu Gothic',
        'Hiragino Sans',
        'Noto Sans JP',
        'sans-serif'
      ],
      unica: ['Neue Haas Unica']
    },
    colors: {
      'primary': '#0A338A',
      'secondary': '#208CE5',
      'tertiary': '#7A818F',
      'arrow': '#FFF33F',
      'white': '#FFF',
      'black': '#333',
      'gray': '#BBBBBC',
      'sitemap': '#666666',
      'nice': '#E5445F',
      'transparent': 'transparent',
      'line': '#B2B2B2'
    },
    extend: {
      animation: {
        'logo-zoom-out': 'logo-zoom-out 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-out': 'slide-out-fwd-center 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both',
        'preface-logo': 'logo-zoom-out 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, slide-out-fwd-center 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.8s both',
        'mainvisual-zoom-out': 'mainvisual-zoom-out 8s linear 0s 1 normal both',
        'scroll-active': 'scroll-active 1.4s ease-in-out infinite',
        'nice-active': 'nice-active 0.8s ease   both',
        'fade-up': 'fade-up 0.5s ease-out   both',
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
        'scroll-active': {
          '0%': {
            height: '0',
            top: '0',
            opacity: '0'
          },
          '30%': {
            height: '30px',
            opacity: '1'
          },
          '100%': {
            height: '0',
            top: '72px',
            opacity: '0'
          }
        },
        'nice-active': {
          '0%,to': {
            transform: 'scale3d(.9, .9, .9)'
          },
          '75%': {
            transform: 'scale3d(1, 1, 1)'
          }
        },
        'fade-up': {
          '0%': {
            top: '74px',
            opacity: '0',
          },
          to: {
            top: '-74px',
            opacity: '1',
          },
        },
      }
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke'),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
}
