import { extendTheme } from 'native-base'

export const theme = extendTheme({
  config: {
    colors: {
      gray: {
        600: '#007AB8'
      }
    },
    initialColorMode: 'dark'
  }
})

export type CustomThemeType = typeof theme
