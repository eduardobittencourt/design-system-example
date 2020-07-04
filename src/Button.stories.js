import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { Button } from './'

export default {
  title: 'Button'
}

const theme = {
  colors: {
    primary: '#03a87c'
  }
}

export const Base = () => (
  <ThemeProvider theme={theme}>
    <Button />
  </ThemeProvider>
)
