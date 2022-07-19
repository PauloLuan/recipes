import { CustomThemeType } from './theme'

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
