import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Overpass from '../../../fonts/Overpass-Regular.ttf'
import Asap from '../../../fonts/Asap-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Overpass';
    src: url(${Overpass}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Asap';
    src: url(${Asap}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  body {
    font-family: 'Overpass'
  }

`

const theme = {
  colors: {
    primary: '#2ea3f2',
    dark: '#000000',
    light: '#ffffff',
    lightGray: '#f6f6f6',
    gray: '#666666',
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
