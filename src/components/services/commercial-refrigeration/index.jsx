import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageHaeder from '../../common/page-header'
import CardContent from './card-content'
import ContactForm from '../../common/contact-form'

const CommericialServices = () => (
  <>
    <PageHaeder title="San Diego Commercial Refrigeration" />
    <CardContent />
    <Container>
      <Row className="mt-5">
        <Col lg={{ span: 8, offset: 2 }}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </>
)
export default CommericialServices
