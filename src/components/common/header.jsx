import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import Image from './image'

const LogoCont = styled.div`
  width: 300px;

`
const CtaCont = styled.div`
 & a{
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px; 
  font-weight: bold;

 }

`

const Header = () => (
  <header id="site-header">
    <Container className="my-5 py-3 px-5">
      <Row className="px-5">
        <Col className="px-5 d-flex justify-content-between">
          <LogoCont className="logo-cont">
            <Link to="/">
              <Image imgName="logo.png" />
            </Link>

          </LogoCont>
          <CtaCont className="py-3">
            <a href="tel:3213513869">(321) 351-3869</a>
          </CtaCont>
        </Col>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
