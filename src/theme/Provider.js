import React from 'react'
import { ThemeProvider as StyledProvider } from '@xstyled/styled-components'

import { Theme } from './Theme'

const ThemeProvider = ({ children, theme }) => {
  return <StyledProvider theme={theme || Theme}>{children}</StyledProvider>
}

export { ThemeProvider }
