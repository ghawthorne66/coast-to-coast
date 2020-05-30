/* eslint-disable jsx-a11y/anchor-has-content */
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import menu from './header/menu'

const FooterStyled = styled.footer`

  background: #292929;
  color: #fff;
  font-weight: 300;
  font-size: 14px;


  & h3{
    font-family: 'Asap';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  & .nav-links a{
    text-transform: lowercase !important;
    text-transform: capitalize !important;
  }

  & .social-icons a{
    color: #666;
    font-size: 24px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Footer = () => (
  <FooterStyled id="site-footer" className="my-5 py-5">
    <Container>
      <Row>
        <Col sm="4">
          <h3>About Coast 2 Coast</h3>
          <p>Based in Chula Vista, CA, and servicing customers all over the San Diego area, Coast 2 Coast Refrigeration has over 37 years of experience within the industry.</p>
          <p>Coast 2 Coast Refrigeration has an impeccable record, and can guarantee you’ll be satisfied with a clean, seamless, attractive and efficient system upon completion of each job.</p>
          <h3>Contact Coast 2 Coast</h3>
          <p><a href="mailto:info@coast2coastrefrigeration.com">info@coast2coastrefrigeration.com</a></p>
          <p><a href="tel:+19197990276">(919) 799-0276</a></p>
        </Col>

        <Col sm="4">
          <h3>Navigation</h3>
          <ul className="nav-links">
            {menu.map(({
              name, url, children, childs,
            }) => (
              <>
                {children
                  ? (
                    <li>
                      <Link to={url}>{name}</Link>
                      <ul>
                        {childs.map((child) => <li><Link to={child.url}>{child.name}</Link></li>)}
                      </ul>
                    </li>
                  )
                  : <li><Link to={url}>{name}</Link></li>}
              </>
            ))}
          </ul>
        </Col>
        <Col sm="4">
          <h3>Coast 2 Coast News</h3>
        </Col>
      </Row>
      <Row className="">
        <Col className="d-md-flex justify-content-md-between border-top border-light p-2">

          <p>
            Copyright © 2020 Coast 2 Coast Refrigeration |
            <Link to="terms-conditions"> Terms & Conditions </Link>
            |
            <Link to="privacy-policy"> Privacy Policy </Link>
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/coast2coastrefrigeration" label="Facebook"><i className="fa fa-facebook" aria-hidden="true" /></a>
            <a href="https://twitter.com/coast2coastinsd" label="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
            <a href="https://www.instagram.com/coast_2_coast_refrigeration" label="Instagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
          </div>
        </Col>
      </Row>
    </Container>
  </FooterStyled>
)

export default Footer
