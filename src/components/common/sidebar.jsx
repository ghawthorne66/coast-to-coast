import React from 'react'
import {
  Row, Col, Button,
} from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNewsCard = styled.section`

  & i{
    color: ${({ theme }) => theme.colors.gray};
  }

  & ul{
      padding: 0;
      list-style: none;
  }

  & a{
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  
    @media (max-width: 768px) {
        font-size: 15px;
      }
  }

  & a:hover{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  & button {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.gray};
    border: none;
  }

  & button: hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }

`
const H1 = styled.h1`
  font-family: "Asap";
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`
const P = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 768px) {
      font-size: 15px;
    }
`

const Sidebar = () => (
  <StyledNewsCard>

    <Col>
      <H1>
        Contact Coast 2 Coast
      </H1>
      <a className="text-decoration-none" href="mailto:info@coast2coastrefrigeration.com">
        <P>
          info@coast2coastrefrigeration.com
        </P>
      </a>
      <a className="text-decoration-none" href="tel:3213513869">
        <P>
          (919) 799-0276
        </P>
      </a>
      <Row>
        <Col>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/coast2coastrefrigeration/">
            <i className="fa fa-facebook fa-2x " />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/coast2coastinsd">
            <i className="fa fa-twitter fa-2x pl-3" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/coast_2_coast_refrigeration/">
            <i className="fa fa-instagram fa-2x pl-3" />
          </a>
        </Col>
      </Row>
      <H1 className="mt-5">
        Recent Posts
      </H1>
      <ul className="mt-3">
        <li>
          <Link to="/">
            Optimize your AC before summer starts
          </Link>
        </li>
        <li>
          <Link to="/">
            Commercial Refrigeration Repair Frequently Asked Questions
          </Link>
        </li>
        <li>
          <Link to="/">
            Excited to work with another Jack In The Box restaurant in San Diego
          </Link>
        </li>
        <li>
          <Link to="/">
            How can AC maintenance save you money
          </Link>
        </li>
        <li>
          <Link to="/">
            Coast 2 Coast Refrigeration is Open
          </Link>
        </li>
      </ul>
      <H1 className="mt-5">
        Tags
      </H1>
      <Row>
        <Col className="pt-2" xs="12">
          <Button className="px-2 py-1">best refrigeration repair</Button>
          <Button className="px-2 py-1 ml-2">boat refrigeration</Button>
        </Col>
        <Col className="pt-2" xs="12">
          <Button className="px-2 py-1">bussiness refrigeration</Button>
          <Button className="px-2 py-1 ml-2">commercial refrigeration</Button>
        </Col>
        <Col className="pt-2" xs="12">
          <Button className="px-2 py-1">emergency refrigeration repair</Button>
          <Button className="px-2 py-1 mt-2">grocery store refrigeration repair</Button>
        </Col>
        <Col className="pt-2" xs="12">
          <Button className="px-2 py-1">refrigeration repair</Button>
          <Button className="px-2 py-1 ml-2">resultant refrigeration</Button>
        </Col>
        <Col className="pt-2" xs="12">
          <Button className="px-2 py-1">restaurant refrigeration</Button>
          <Button className="px-2 py-1 ml-2">san diego refrigeration</Button>
        </Col>
      </Row>
    </Col>
  </StyledNewsCard>
)

export default Sidebar
