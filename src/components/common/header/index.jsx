import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Row, Col, Container, Navbar, Nav, NavDropdown,
} from 'react-bootstrap'
import styled from 'styled-components'
import Image from '../image'
import menu from './menu'

const LogoCont = styled.div`
  width: 300px;

`
const Cta = styled.div`
  & a {
    background: linear-gradient(90deg, rgb(1, 129, 199) 0%, rgb(110, 204, 255) 100%);
    border-radius: 50px;
    padding: 10px 2px;
    color: #fff;
  }
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
              <Cta>
                <a href="tel:3213513869">Make Appointment</a>
              </Cta>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                  {menu.map(({
                    name, url, children, childs,
                  }) => (
                    <>
                      {children
                        ? (
                          <NavDropdown title={name}>
                            {childs.map((child) => <NavDropdown.Item href={child.url}>{child.name}</NavDropdown.Item>)}
                          </NavDropdown>
                        )
                        : <Nav.Link href={url}>{name}</Nav.Link>}
                    </>
                  ))}

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
