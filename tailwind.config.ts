/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
import daisyui from 'daisyui';
import svgToDataUri from 'mini-svg-data-uri';
import type { Config } from 'tailwindcss';

// const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00A3E0',
          'primary-content': '#000a12',
          secondary: '#00629b',
          'secondary-content': '#d0dfec',
          accent: '#FFD100',
          'accent-content': '#161000',
          neutral: '#00843d',
          'neutral-content': '#d3e6d7',
          // "base-100": "#002855",
          'base-100': '#000000',
          'base-200': '#002149',
          'base-300': '#001b3d',
          'base-content': '#c8d1dc',
          info: '#009CA6',
          'info-content': '#00090a',
          success: '#78be21',
          'success-content': '#050d00',
          warning: '#ffa400',
          'warning-content': '#160a00',
          error: '#BA0C2F',
          'error-content': '#f8d4d3',
        },
      },
    ],
  },
  plugins: [
    daisyui,
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      );
    },
  ],
} satisfies Config;
