import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Row, Col, Container, Navbar, Nav, NavDropdown,
} from 'react-bootstrap'
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
        <Col>
          <Navbar bg="light" expand="md">
            <Navbar.Brand href="#home">
              <LogoCont className="logo-cont">
                <Link to="/">
                  <Image imgName="logo.png" />
                </Link>
              </LogoCont>

            </Navbar.Brand>

            <div className="site-nav-cont w-100 d-md-flex flex-md-column align-items-md-end text-center">
              <div className="cta">
                <a href="tel:3213513869">(321) 351-3869</a>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>

            </div>
          </Navbar>
        </Col>

      </Row>
    </Container>
  </header>
)

export default Header
