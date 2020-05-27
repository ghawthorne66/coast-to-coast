import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import Image from '../image'
import Menu from './menu'

const LogoCont = styled.div`
  width: 300px;

`

const Header = () => (
  <header id="site-header">
    <Container className="my-3">
      <Row>
        <Col lg="4" className="">
          <LogoCont className="logo-cont">
            <Link to="/">
              <Image imgName="logo.png" />
            </Link>
          </LogoCont>

        </Col>
        <Col lg="8">
          <div className="py-3 d-flex flex-column align-items-center align-items-lg-end">
            <a href="tel:3213513869">(321) 351-3869</a>
            <Menu />
          </div>
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
