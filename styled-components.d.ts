import theme from 'styles/theme'

//inferência de tipos
type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
