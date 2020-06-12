import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from 'gatsby'
import moment from 'moment'
import NewsCard from '../common/news-card'
import Sidebar from '../common/sidebar'

const Content = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
      query{
          allMarkdownRemark{
              edges{
                  node{
                      frontmatter{
                          title
                          date
                          description
                      }
                      fields{
                          slug
                      }
                  }
              }
          }
      }
  `)

  return (
    <Container>
      <Row className="mt-5">
        <Col lg="7">

          {
       edges.map(({ node: { frontmatter: { title, description, date }, fields: { slug } } }) => (
         <Link to={`/news/${slug}`}>
           <NewsCard
             title={title}
             date={moment(date).format('DD-MM-YYYY')}
             description={description}
             image="bright-clouds.jpg"
           />
         </Link>
       ))
     }
        </Col>
        <Col lg="5">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  )
}
export default Content

