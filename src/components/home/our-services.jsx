import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  Col, Row, Container, Button,
} from 'react-bootstrap'
import Image from '../common/image'

const StyledWhoWeAre = styled.section`

  background: ${({ theme }) => theme.colors.primary};

  & h2{
    font-family: 'Asap';
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    text-align: center;
    font-size: 36px;
  }

  & a{
    border-radius: 40px;
    padding: 5px 32px;
    margin-top: 5px;
  }

  & a:hover{
    text-decoration: none;
  }
`

const WhoWeAre = () => (
  <StyledWhoWeAre>
    <Container className="my-2 py-5">
      <Row>
        <Col>
          <h2 className="pb-3 text-center">Our Servcies </h2>
          <Row>
            <Col sm="4">
              <i className="fa fa-home" aria-hidden="true" />
              <h4>Residential Refigeration</h4>
              <p>Adding a refrigeration on your home is not like going to a store, buy one and connect it to a source of power. You need to consider at least the following factors:</p>
              <ul>
                <li>What type of power you have and how much battery the system will need,</li>
                <li>What space you have in your home,</li>
                <li>Where to install the compressor,</li>
                <li>What kind of refrigeration box you need – think of size, colors and finishes, and location.</li>
              </ul>
              <Link to="/services/residential-refrigeration" className="btn btn-outline-primary more-btn mx-2">FIND OUT MORE</Link>
            </Col>
            <Col sm="4">
              <i className="fa fa-building" aria-hidden="true" />
              <h4>Commercial Refigeration</h4>
              <p>If you own a restaurant, grocery store, cafeteria, pub or maybe you manage a pharmacy or run a warehouse, we are here to protect your investment made in all those products you sell. So far, we can honestly declare we installed all types of equipment:</p>
              <ul>
                <li>small-systems,</li>
                <li>multiplex systems,</li>
                <li>reach-in display cases and line ups,</li>
                <li>walk-in coolers and freezers,</li>
                <li>ice machines, etc.</li>
              </ul>
              <Link to="/services/commercial-refrigeration/" className="btn btn-outline-primary more-btn mx-2">FIND OUT MORE</Link>
            </Col>
            <Col sm="4">
              <i className="fa fa-anchor" aria-hidden="true" />
              <h4>Marine Refigeration</h4>
              <p>Adding a refrigeration on your vessel is not like going to a store, buy one and connect it to a source of power. You need to consider at least the following factors:</p>
              <ul>
                <li>What type of power you have and how much battery the system will need,</li>
                <li>What space you have on the boat,</li>
                <li>Where to install the compressor,</li>
                <li>What kind of refrigeration box you need – think of size, colors and finishes, and location.</li>
              </ul>
              <Link to="/services/marine-refrigeration/" className="btn btn-outline-primary more-btn mx-2">FIND OUT MORE</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </StyledWhoWeAre>
)

export default WhoWeAre
