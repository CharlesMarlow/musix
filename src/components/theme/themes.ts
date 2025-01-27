import colors from 'tailwindcss/colors';

export const sharedStyles = {
  borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)',
  },
  brandScarlet: '#9E1B32',
  brandGold: '#EBA111',
};

export const darkTheme = {
  ...sharedStyles,
  headerBg: colors.zinc[800],
  sectionBg: colors.zinc[900],
};

export const lightTheme = {
  ...sharedStyles,
  white: colors.white,
  headerBg: colors.neutral[200],
  sectionBg: colors.neutral[100],
};
