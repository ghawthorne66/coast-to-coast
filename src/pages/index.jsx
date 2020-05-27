import React from 'react'
import BlankTemplate from '../components/common/layout/blank-temp'
import Home from '../components/home'
import SEO from '../components/common/seo'

const IndexPage = () => (
  <BlankTemplate>
    <SEO title="San Diego Refrigeration &amp; A/C Repair" />
    <Home />
  </BlankTemplate>
)

export default IndexPage
