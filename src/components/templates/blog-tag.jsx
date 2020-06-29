import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import { Link } from 'gatsby'
import moment from 'moment'
import Layout from '../common/layout'
import SEO from '../common/seo'
import SideBar from '../common/sidebar'
import PostCard from '../common/post-card'
// import Pagination from '../common/pagination'

const BlogTag = (props) => {
  const { pageContext = {}, data = {} } = props

  const { allMarkdownRemark: { edges } = {} } = data

  const {
    year = {}, category = {}, allCategories: categories, allYears: years, currentPage, numPages,
  } = pageContext

  // const sidebarData = {
  //   year,
  //   category,
  //   categories,
  //   years,
  // }

  return (
    <Layout
      meta="Tag"
      title="Tag"
    >
      <SEO title="Blog" />

      <Container>
        <Row className="mt-5">
          <Col lg="7">
            {
            edges.map(({ node: { frontmatter: { title, description, date }, fields: { slug } } }) => (
              <Link to={`/news/${slug}`}>
                <PostCard
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
            <SideBar />
          </Col>
        </Row>
      </Container>

    </Layout>

  )
}

export default BlogTag
