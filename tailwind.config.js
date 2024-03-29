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
        light: '#FFF',
        dark: '#000',
        gray: {
          100: '#F2F2F2',
          200: '#C9C9C9',
          300: '#9C9C9C',
          500: '#5E5E5E',
          600: '#393939',
          700: '#252525',
          800: '#131313',
          900: '#0A0C0D',
        },
        cyan: {
          400: '#6CDFE2',
          500: '#348E91',
          600: '#1C5052',
          700: '#213635',
          800: '#121A19',
        },
        red: {
          500: '#FA1A42',
        },
      },
      boxShadow: {
        'custom-img':
          '0px 45px 36px rgba(0, 0, 0, 0.18), 0px 19px 15px rgba(0, 0, 0, 0.14), 0px 10px 8px rgba(0, 0, 0, 0.12), 0px 6px 5px rgba(0, 0, 0, 0.1), 0px 3px 2px rgba(0, 0, 0, 0.08)',
        'custom-project': '0px 10px 20px rgba(0, 0, 0, 0.25)',
        card: '0px 32px 44px 0px rgba(0, 0, 0, 0.18), 0px 26px 32px 0px rgba(0, 0, 0, 0.14), 0px 18px 24px 0px rgba(0, 0, 0, 0.12), 0px 10px 18px 0px rgba(0, 0, 0, 0.10), 0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
      },
      dropShadow: {
        'custom-text': '0px 1px 2px rgba(0, 0, 0, 0.18)',
      },
      keyframes: {
        menuAppear: {
          '100%': { transform: 'translateX(0)' },
        },
        menuDisappear: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        showUp: {
          '0%': { opacity: 0, visibility: 'invisible' },
          '100%': { opacity: 1, visibility: 'visible' },
        },
        hide: {
          '0%': { opacity: 1, visibility: 'visible' },
          '100%': { opacity: 0, visibility: 'invisible' },
        },
        swipeIn: {
          '0%': { right: '-50%', opacity: 0, visibility: 'invisible' },
          '100%': {
            right: '1.5rem',
            opacity: 1,
            visibility: 'visible',
          },
        },
        swipeOut: {
          '0%': {
            right: '1.5rem',
            opacity: 1,
            visibility: 'visible',
          },
          '100%': { right: '-50%', opacity: 0, visibility: 'invisible' },
        },
        swipeUp: {
          '0%': { bottom: '-50%', opacity: 0, visibility: 'invisible' },
          '100%': {
            bottom: '1rem',
            opacity: 1,
            visibility: 'visible',
          },
        },
        swipeDown: {
          '0%': {
            bottom: '1rem',
            opacity: 1,
            visibility: 'visible',
          },
          '100%': { bottom: '-50%', opacity: 0, visibility: 'invisible' },
        },
        overlayShow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        contentShow: {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'show-divider': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'show-text': {
          '0%': { opacity: '0%', transform: 'translate(-150%)' },
          '60%': { opacity: '30%' },
          '100%': { opacity: '100%', transform: 'translate(0%)' },
        },
      },
      animation: {
        showContent: 'overlayShow 750ms cubic-bezier(0.16, 1, 0.3, 1)',
        'showContent-300': 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'dot-pattern': 'url("../assets/dot-pattern.svg")',
      },
      screens: {
        phones: '460px',
        'tablets-xs': '520px',
        'tablets-sm': '820px',
        tablets: '976px',
        article: '860px',
      },
    },
  },
  plugins: [],
}
