import React from 'react'
import PropTypes from 'prop-types'
import BaseLayout from './base-layout'
import Header from '../header'
import Footer from '../footer'

const BlankTemplate = ({ children }) => (
  <>
    <BaseLayout>
      <Header />
      {children}
      <Footer />
    </BaseLayout>
  </>
)

BlankTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlankTemplate
