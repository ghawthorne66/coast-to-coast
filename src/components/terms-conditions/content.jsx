import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledTermsConditionsContent = styled.section`
  & h1 {
    font-family: "Asap";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bolder;
    font-size: 48px;
    line-height: 48px;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  & h2 {
    font-family: "Asap";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bolder;
    font-size: 35px;
    line-height: 35px;
    text-decoration: underline;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`
const Content = () => (
  <Container>
    <StyledTermsConditionsContent>
      <Row className="mt-5">
        <Col xs="12">
          <h1>Terms</h1>
          <p>
            The following Terms and Conditions apply to the use of this Web
            site.
          </p>
        </Col>
        <Col xs="12">
          <h2 className="pb-2">Copyright</h2>
          <p>
            All content appearing on this Web site is the property of Coast 2
            Coast Refrigeration Copyright © 2020. All rights reserved. As a
            user, you are authorized only to view, copy, print, and distribute
            documents on this Web site so long as (1) the document is used for
            informational purposes only, and (2) any copy of the document (or
            portion thereof) includes the following copyright notice: Copyright
            © 2020 Coast 2 Coast Refrigeration. All rights reserved.
          </p>
        </Col>
        <Col xs="12">
          <h2 className="pb-2">Trademarks</h2>
          <p>
            All brand, product, service, and process names appearing on this Web
            site are trademarks of their respective holders. Reference to or use
            of a product, service, or process does not imply recommendation,
            approval, affiliation, or sponsorship of that product, service, or
            process by Coast 2 Coast Refrigeration. Nothing contained herein
            shall be construed as conferring by implication, estoppel, or
            otherwise any license or right under any patent, copyright,
            trademark, or other intellectual property right of Coast 2 Coast
            Refrigeration or any third party, except as expressly granted
            herein.
          </p>
        </Col>
        <Col xs="12">
          <h2 className="pb-2">Use Of Site</h2>
          <p>
            This site may contain other proprietary notices and copyright
            information, the terms of which must be observed and followed.
            Information on this site may contain technical inaccuracies or
            typographical errors. Information, including product pricing and
            availability, may be changed or updated without notice. Coast 2
            Coast Refrigeration and its subsidiaries reserve the right to refuse
            service, terminate accounts, and/or cancel orders in its discretion,
            including, without limitation, if Coast 2 Coast Refrigeration
            believes that customer conduct violates applicable law or is harmful
            to the interests of Coast 2 Coast Refrigeration and its
            subsidiaries.
          </p>
        </Col>
        <Col xs="12">
          <h2 className="pb-2">Privacy Policy</h2>
          <p>
            Coast 2 Coast Refrigeration use of personal information that you may
            submit to Coast 2 Coast Refrigeration through this Web site is
            governed by the
            <Link className="px-1" to="/privacy-policy">
              Coast 2 Coast Refrigeration
            </Link>
            .
          </p>
        </Col>
        <Col xs="12">
          <h2 className="pb-2">Shop Hours</h2>
          <p>
            Customer service is available as defined on the
            <Link className="px-1" to="/contact">
              Contact
            </Link>
            page of this Web site.
          </p>
        </Col>
        <Col>
          <h2 className="pb-2">Miscellaneous</h2>
          <p>
            VOID WHERE PROHIBITED: Although the information on this Web site is
            accessible worldwide, not all products or services discussed in this
            Web site are available to all persons or in all geographic locations
            or jurisdictions. Coast 2 Coast Refrigeration and the advertisers
            each reserve the right to limit the provision of their products or
            services to any person, geographic area, or jurisdiction they so
            desire and to limit the quantities of any products or services that
            they provide. Any offer for any product or service made in the
            materials on this Web site is void where prohibited. GOVERNING LAW:
            In the event of litigation both parties agree that the Law of
            California shall apply and both parties consent to the jurisdiction
            of the state courts of San Diego, CA, or in the event of diversity
            of citizenship, the United States District Court for the (District).
            Both parties expressly waive a trial by jury. MISCELLANEOUS: The
            Terms and Conditions constitute the entire agreement between you and
            Coast 2 Coast Refrigeration with respect to this Web site. The Terms
            and Conditions supercede all prior or contemporaneous communications
            and proposals, whether electronic, oral or written between you and
            Coast 2 Coast Refrigeration with respect to this Web site. No
            modification of the Terms and Conditions shall be effective unless
            it is authorized by Coast 2 Coast Refrigeration. If any provision of
            the Terms and Conditions is found to be contrary to law, then such
            provision(s) shall be constructed in a manner to closely reflect, as
            much as possible, the intentions of the parties, with the other
            provisions remaining in full force and effect.

            <br />
            <br />
            For any other email
            <a className="px-1" href="mailto:info@coast2coastrefrigeration.com">
              info@coast2coastrefrigeration.com
            </a>
          </p>
        </Col>
      </Row>
    </StyledTermsConditionsContent>
  </Container>
)
export default Content
