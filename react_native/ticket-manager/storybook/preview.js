import theme from '../global/styles/theme'
import { ThemeProvider } from 'styled-components'

export const parameters = {
  // backgrounds: {
  //   default: 'light',
  //   values: [
  //     {
  //       name: 'light',
  //       value: theme.colors.body.bg
  //     },
  //     {
  //       name: 'dark',
  //       value: theme.colors.dark
  //     }
  //   ]
  // }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
]
