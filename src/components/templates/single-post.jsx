import React from 'react'
import PropTypes from 'prop-types'
import _get from 'lodash/get'
import { Link } from 'gatsby'

import Content from '../common/content'
import Layout from '../common/layout'

import { getPath } from '../../utils/helpers'
import SEO from '../common/seo'

const SinglePostTemplate = ({ data }) => {
  const { post, allPosts } = data

  const {
    frontmatter, categories, id: postId, html,
  } = post

  const {
    meta, title, date, featuredImage, author,
  } = frontmatter

  const thisEdge = allPosts.edges.find((edge) => edge.node.id === postId)

  const nextSlug = _get(thisEdge, 'next.fields.slug')
  const nextDate = _get(thisEdge, 'next.frontmatter.date')

  const prevSlug = _get(thisEdge, 'previous.fields.slug')
  const prevDate = _get(thisEdge, 'previous.frontmatter.date')

  const nextPostURL = getPath(nextDate, nextSlug)
  // const previousPath = generateSlug('/blog', _get(thisEdge, 'next.frontmatter.date'), _get(thisEdge, 'next.fields.slug'))
  // console.log('PRVIOUS PATH: ', previousPath)

  const prevPostURL = getPath(prevDate, prevSlug)

  return (
    <Layout
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <SEO title={title} />
      {/* <BlogHeader title={title} date={date} image={featuredImage} author={author} /> */}

      <main>
        <article
          className="SinglePost section light"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <div className="container skinny">

            <div className="SinglePost--Content relative">
              <div className="SinglePost--Meta">

                {categories && (
                <>
                  <span>|</span>
                  {categories.map((cat, index) => (
                    <span
                      key={cat.category}
                      className="SinglePost--Meta--Category"
                    >
                      {cat.category}
                      {/* Add a comma on all but last category */}
                      {index !== categories.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </>
                )}
              </div>

              {title && (
              <h1 className="SinglePost--Title" itemProp="title">
                {title}
              </h1>
              )}

              <div className="SinglePost--InnerContent">
                <Content source={html} />
              </div>

              <div className="SinglePost--Pagination">
                {prevPostURL && (
                <Link
                  className="SinglePost--Pagination--Link prev"
                  to={prevPostURL}
                >
                  Previous Post
                </Link>
                )}
                {nextPostURL && (
                <Link
                  className="SinglePost--Pagination--Link next"
                  to={nextPostURL}
                >
                  Next Post
                </Link>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}

SinglePostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default SinglePostTemplate
