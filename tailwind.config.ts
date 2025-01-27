/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { createThemes } from 'tw-colors';
const { lightTheme, darkTheme } = require('./src/components/theme/themes');

const baseColors = [
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
  'zinc',
];

const shadeMapping = {
  '50': '900',
  '100': '800',
  '200': '700',
  '300': '600',
  '400': '500',
  '500': '400',
  '600': '300',
  '700': '200',
  '800': '100',
  '900': '50',
};

const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
};

const colorLightTheme = generateThemeObject(colors, shadeMapping);
const colorDarkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
  light: {
    ...colorLightTheme,
    ...lightTheme,
  },
  dark: {
    ...colorDarkTheme,
    ...darkTheme,
  },
};

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/components/theme/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [createThemes(themes)],
} satisfies Config;
