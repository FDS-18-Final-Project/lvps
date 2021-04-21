export const calcRem = size => `${size / 16}rem`;

export const calcInterval = intervalLists => {
  return intervalLists
    .reduce((interval, intervalItem, idx) => {
      interval += calcRem(intervalItem) + ' ';
      return interval;
    }, '')
    .trim();
};

export const colors = {
  black: '#2D2D2D',
  white: '#FFFFFF',
  gray: '#949494',
  lightGray: '#C9C9C9',
  gray_02: '#F4F4F4',
  gray_03: '#e9ecef',

  green: '#00B056',
  pink: '#E71A90',
  redMain: '#EB1527',
  red_01: '#FFC9C9',
  red_02: '#FF9898',
  red_03: '#FF6E6E',
  red_04: '#FF4C4C',
  red_05: '#B01421',
  red_06: '#7D2E2E',

  Gold: '#BE9B2A',
  Silver: '#A0ACB2',
  Bronze: '#A68648',
  Platinum: '#797686'
};

export const fontSizes = {
  small: calcRem(15),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(24),
  xxl: calcRem(28),
  xxxl: calcRem(30),
  titleBase: calcRem(45),
  titleLarge: calcRem(50)
};

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1200px'
};

export const device = {
  mobile: `@media only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `@media only screen and (max-width: ${deviceSizes.tablet})`,
  desktop: `@media only screen and (max-width: ${deviceSizes.desktop})`
};

const theme = {
  colors,
  fontSizes,
  deviceSizes,
  device,
  calcRem,
  calcInterval
};

export default theme;
