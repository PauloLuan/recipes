export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: 'Roboto',
    extraLight: 100,
    light: 300,
    normal: 400,
    bold: 600,
    extraBold: 900
  },
  colors: {
    primary: '#075985',
    secondary: '#78716C',
    mainBg: '#F6F9FC',
    white: '#F9FAFB',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    success: '#16A34A',
    danger: '#DC2626',
    alert: '#EAB308',
    info: '#0284C7'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {},
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
