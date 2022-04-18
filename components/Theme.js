import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

// 2. Extend the theme to include custom colors, fonts, etc
const shadows = {
  outline: 'none'
}
const fonts = {
  heading: 'Montserrat',
  body: 'Montserrat'
}
// const breakpoints = createBreakpoints({
//   sm: "320px",
//   md: "768px",
//   lg: "960px",
//   xl: "1200px",
//   "2xl": "1536px",
// })
const colors = {
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#33353b",
    900: "#191a1E",
  },
}
const letterSpacings = {
  tighter: "-0.2em",
  tight: "-0.2em",
  normal: "-0.2em",
  wide: "-0.1em",
  wider: "0em",
  widest: "0.1em",
}

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'gray.100')(props),
      bg: mode('white', 'gray.900')(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  // initialColorMode: localStorage.getItem('theme'),
  useSystemColorMode: false,
}

const components = {
  AlertDialog: {
    defaultProps: {
      colorScheme: 'gray.900'
    }
  }
}

const theme = extendTheme({
  config,
  fonts,
  styles,
  letterSpacings,
  shadows,
  colors,
  components
});


export default theme;