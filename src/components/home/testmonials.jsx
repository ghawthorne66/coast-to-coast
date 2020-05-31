import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  Col, Row, Container, Button,
} from 'react-bootstrap'
import Image from '../common/image'

const StyledTestimonials = styled.section`
 
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
  & .otro-blockquote{  
    font-size: 1.4em;
    margin:10px auto;
    font-family:Open Sans;
    font-style:italic;
    color: #555555;
    padding:1.2em 30px 1.2em 75px;
    border-left: 8px solid ${({ theme }) => theme.colors.primary};
    line-height:1.6;
    position: relative;
    background:#EDEDED;
  }

  & .otro-blockquote::before {
    font-family:Arial;
    content: '\u201C';
    color: ${({ theme }) => theme.colors.primary};
    font-size:4em;
    position: absolute;
    left: 10px;
    top:-10px;
  }

  & .otro-blockquote::after{
    content: '';
  }

  & .otro-blockquote span{
    display:block;
    color: ${({ theme }) => theme.colors.primary};;
    font-style: normal;
    font-weight: bold;
    margin-top:1em;
  }

`

const Partners = () => (
  <StyledTestimonials>
    <Container className="my-5">
      <Row>
        <Col>
          <blockquote className="otro-blockquote">
            Ray provided me an assessment, advice and repair to my air conditioning unit and associated ducting. I couldn’t be more happier and appreciate the honest feedback from Ray. He was able to increase my AC unit efficiency. I intend on continuing business with Ray and highly recommend him for anyone interested in getting their AC inspected.

            <span>X O., San Diego</span>
          </blockquote>
        </Col>

      </Row>
    </Container>
  </StyledTestimonials>
)

export default Partners
