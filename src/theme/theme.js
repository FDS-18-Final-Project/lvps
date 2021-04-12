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
  lightGray: '#C9C9C9',
  redMain: '#EB1527',
  red_01: '#FFC9C9',
  red_02: '#FF9898',
  red_03: '#FF6E6E',
  red_04: '#FF4C4C',
  red_05: '#B01421',
  red_06: '#7D2E2E'
};

export const fontSizes = {
  small: calcRem(20),
  base: calcRem(24),
  lg: calcRem(36),
  titleBase: calcRem(64),
  titleLarge: calcRem(70)
};

const paddings = {
  small: calcRem(5),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18)
};

const margins = {
  small: calcRem(5),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18)
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200)
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
