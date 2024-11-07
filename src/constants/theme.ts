const COLORS = {
  themeBg: '#F5F8FE',
  ///////////// primary///////////
  primary50: '#ffe7ef',
  primary100: '#feb6ce',
  primary200: '#fe92b7',
  primary300: '#fe6196',
  primary400: '#fd4281',
  primary500: '#fd1362',
  primary600: '#e61159',
  primary700: '#b40d46',
  primary800: '#8b0a36',
  primary900: '#6a0829',
  /////////// black///////////
  black50: '#e9e9e9',
  black100: '#bcbcbc',
  black200: '#9b9b9b',
  black300: '#6e6e6e',
  black400: '#515151',
  black500: '#262626',
  black600: '#232323',
  black700: '#1b1b1b',
  black800: '#151515',
  black900: '#101010',
////////////////Error ////////////
  error50: '#f9e6e6',
  error100: '#ecb0b0',
  error200: '#e38a8a',
  error300: '#d75454',
  error400: '#cf3333',
  error500: '#c30000',
  error600: '#b10000',
  error700: '#8a0000',
  error800: '#6b0000',
  error900: '#520000',
///////////  Warning ////////////
  warning50: '#fff8e6',
  warning100: '#ffe9b0',
  warning200: '#ffde8a',
  warning300: '#ffcf54',
  warning400: '#ffc633',
  warning500: '#ffb800',
  warning600: '#e8a700',
  warning700: '#b58300',
  warning800: '#8c6500',
  warning900: '#6b4d00',
///////////// Success ////////////
  success50: '#e6f9ed',
  success100: '#b0ecc6',
  success200: '#8ae3ab',
  success300: '#54d684',
  success400: '#33ce6d',
  success500: '#00c248',
  success600: '#00b142',
  success700: '#008a33',
  success800: '#006b28',
  success900: '#00511e',
///////// Brand Colors ////////////
  primary: '#26BDDC',
  black: '#262626',
  offWhite: '#F5F8FE',
  white: '#FFFFFF',
  error: '#C30000',
  warning: '#FFB800',
  success: '#00C248',
////////// App Colors ///////////
  backgroundPrimary: '#F5F8FE',
  backgroundSecondary: '#FFFFFF',
  textPrimary: '#1B1B1B',
  textSecondary: '#515151',
  textTertiary: '#6E6E6E',
  primaryBtnBg: '#26BDDC',
  primaryBtnPressed: '#1E99B0',
  primaryBtnText: '#FFFFFF',
  secondaryBtnBg: '#FFFFFF',
  disableBtn: '#BCBCBC',
  secondaryBtnText: '#1B1B1B',
  primaryBtnIcon: '#FFFFFF',
  secondaryBtnIcon2: '#1B1B1B',
  btnPressedStroke: '#FE92B7',
  iconPrimary: '#515151',
  iconSecondary: '#6E6E6E',
  iconActive: '#FD1362',
  strokeNormal: '#E9E9E9',
  strokeActive: '#FEB6CE',
  activeElements: '#FD1362',
  disabledColor: '#8D8D8D',
};

const FONT_SIZES = {
  h1: 48,
  h2: 40,
  h3: 32,
  h4: 24,
  bodyLarge: 20,
  body: 16,
  bodySmall: 14,
  tag: 12,
  tiny: 10,
};

const FONT_WEIGHT = {
  normal: '400',
  semibold: '600',
  bold: '700',
}
const BORDER_RADIUS = {
  full: 100,
  large: 35,
  medium: 20,
  modal: 16,
  small: 10,
  smaller: 6,
}

const HEIGHT = {
  medium: 56,
  small: 40,
}

/*********************************************************************************************** */
const CalendarBorder = '#625798';

const minOffset = 0.8; // 48/60 =0.8

const FontStyle = {
  bold: '!font-bold',
  medium: '!font-medium',
  thin: '!text-normal',
  default: '',
};

const FontSize = {
  large: {
    title: '!text-4xl',
    subtitle: '!text-3xl',
    caption: '!text-2xl',
    content: '!text-lg',
    normal: '!text-base',
    small: '!text-sm',
  },
  small: {
    title: '!text-2xl',
    subtitle: '!text-xl',
    caption: '!text-lg',
    content: '!text-sm',
    normal: '!text-xs',
    small: '!text-[10px]',
  },
  medium: {
    title: '',
    subtitle: '',
    caption: '',
    content: '',
    normal: '',
    small: '',
  },
};
/*********************************************************************************************** */

export default {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHT,
  BORDER_RADIUS,
  HEIGHT,

  CalendarBorder,
  minOffset,
  FontStyle,
  FontSize,
};
