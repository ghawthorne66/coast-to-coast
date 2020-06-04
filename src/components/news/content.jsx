import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewsCard from '../common/news-card'
import Sidebar from '../common/sidebar'

const Content = () => (
  <Container>
    <Row className="mt-5">
      <Col lg="7">
        <Col>
          <NewsCard
            title="Optimize your AC before summer starts"
            date="May 27, 2020"
            description="The first day of summer this year is June 20th.
            Whether you're at home, at your workplace, or even at sea,
            a working air conditioning system is going to get you through
            the brutal heat we've come to expect in San Diego. To a lot of
            people, that sounds alarm bells over..."
            image="bright-clouds.jpg"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="Commercial Refrigeration Repair Frequently Asked Questions"
            date="Apr 17, 2020"
            description="Refrigeration Repair Frequently Asked Questions"
            image="mother-daughter.jpg"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="Excited to work with another Jack In The Box restaurant in San Diego"
            date="Apr 9, 2020"
            description="Continued partnership with Jack In The Box"
            image="news-3.png"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="How can AC maintenance save you money"
            date="Apr 9, 2020"
            description="How can AC maintenance save you money"
            image="air-conditioner.jpg"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="Coast 2 Coast Refrigeration is Open"
            date="Mar 26, 2020"
            description="We are open during this stay-in-place order to provide
            emergency refrigeration repair and maintenance. The stress the pandemic
            is putting on essential businesses like the grocery stores, supermarkets,
             and restaurants means that their refrigeration must be well taken..."
            image="covid-bg.jpg"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="Small Business Saturday with Coast 2 Coast Refrigeration"
            date="Nov 29, 2019"
            description="In January 2019, Raymond Barnes established Coast
            2 Coast Refrigeration with a view to being able to service San Diego
            Bay area customer base, from the simplest refrigeration or
            A/C system, and to include not only business but the boating world as
            well. Coast 2..."
            image="uncle.png"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="Why you might need 24/7 emergency refrigeration repair"
            date="Nov 21, 2019"
            description="Residential or commercial refrigeration systems break down
            when least expected. To be prepared for such moments, when all your stored
            food will be at risk to go bad, contract a 24/7 emergency
            refrigeration repair service. It saves you time and money! Repairs are done..."
            image="news-kitchen.jpg"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="How to properly maintain your restaurant’s refrigerator"
            date="Nov 14, 2019"
            description="At Coast 2 Coast, we really care about your restaurant and
            your refrigerator. We prefer to teach you how to properly maintain your
             refrigerator than to receive an emergency repair call from you. A sudden
             breakdown of your freezer could shut down your kitchen for a..."
            image="chef-preparing.jpg"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="Why clients consider Coast 2 Coast customer services amazing"
            date="Oct 18, 2019"
            description="At Coast 2 Coast Refrigeration, our philosophy is to
             provide you with the refrigeration or A/C solution that is tailored
              to your needs. We come with the best solution for you because solving
               your problem is our first and only priority. We take the time and
                effort to..."
            image="girl.jpg"
          />
        </Col>
        <Col className="mt-4 mt-sm-5">
          <NewsCard
            title="New Website Launched"
            date="Oct 1, 2019"
            description="Based in Chula Vista,CA, and servicing customers all
            over San Diego Bay area, Coast 2 Coast Refrigeration has over 37 years
             of experience within the industry. Coast 2 Coast Refrigeration has an
              impeccable record, and can guarantee you’ll be satisfied with a clean,..."
            image="new-site-launch.png"
          />
        </Col>
      </Col>
      <Col lg="5">
        <Sidebar />
      </Col>
    </Row>
  </Container>
)

export default Content
