import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

import { ThemeProvider } from 'styled-components'
import React from 'react'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
