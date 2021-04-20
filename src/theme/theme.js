export const calcRem = size => `${size / 16}rem`;

export const calcInterval = intervalLists =>
  intervalLists.reduce((interval, intervalItem, idx) => {
    interval += calcRem(intervalItem);
    if (intervalLists.length - 1 !== idx) interval += ' ';
    return interval;
  }, '');

export const colors = {
  black: '#2D2D2D',
  white: '#FFFFFF',
  gray: '#949494',
  pink: '#E71A90',
  Gold: '#BE9B2A',
  Silver: '#A0ACB2',
  Bronze: '#A68648',
  Platinum: '#797686',

  gray2: '#F4F4F4',
  gray3: '#e9ecef',

  lightGray: '#C9C9C9',
  green: '#00B056',
  redMain: '#EB1527',
  red_01: '#FFC9C9',
  red_02: '#FF9898',
  red_03: '#FF6E6E',
  red_04: '#FF4C4C',
  red_05: '#B01421',
  red_06: '#7D2E2E'
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

export const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tablet: '768px',
  tabletL: '1024px',
  desktop: '1920px'
};

export const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
  desktop: `only screen and (max-width: ${deviceSizes.desktop})`
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
