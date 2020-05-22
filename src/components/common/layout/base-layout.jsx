import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat'
  }
`

const theme = {
  colors: {
    primary: '#188bf6',
    dark: '#000000',
    light: '#ffffff',
    lightGray: '#f6f6f6',
  },
}

const BaseLayout = ({ children }) => (
  <>
    <GlobalStyle theme="yellow" />
    <ThemeProvider theme={theme}>
      <main className="site-cont">{children}</main>
    </ThemeProvider>
  </>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
