import { Link } from 'gatsby'
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

  & {
    background: linear-gradient(90deg, rgb(1, 129, 199) 0%, rgb(110, 204, 255) 100%);
    border-radius: 50px;
    padding: 12px 32px;
    padding-bottom: 10px;
    line-height: 16px;
  }

  & a {
    color: #fff;
    font-size: 16px;
    line-height: 16px;
  }

  & a:hover{
    text-decoration: none;
  }
`

const NavCont = styled.div`
  & .nav-link{
    color: #666 !important;
  }
  
  & .nav-link.active{
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  & {
    font-size: 16px;
    font-weight: 400;
  }
`

const Header = () => (
  <header id="site-header">
    <Container className="my-3">
      <Row>
        <Col>
          <Navbar expand="md">
            <Navbar.Brand href="#home">
              <LogoCont className="logo-cont">
                <Link to="/">
                  <Image imgName="logo.png" />
                </Link>
              </LogoCont>
            </Navbar.Brand>

            <div className="site-nav-cont w-100 d-md-flex  flex-md-column flex-md-grow-1 align-items-md-end justify-content-md-between text-center">
              <Cta>
                <a href="tel:3213513869">MAKE APPOINTMENT</a>
              </Cta>
              <NavCont className="navbar-cont p-3">
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
                          : <Nav.Link as={Link} activeClassName="active" to={url}>{name}</Nav.Link>}
                      </>
                    ))}

                  </Nav>
                </Navbar.Collapse>
              </NavCont>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
