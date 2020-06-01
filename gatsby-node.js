/* eslint-disable */
const path = require('path')
const momentTz = require('moment-timezone')

const kebabCase = require(`lodash.kebabcase`)

const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ actions, graphql, reporter, getNode }) => {
  const { createPage, createRedirect } = actions

  const singlePostTemplate = path.resolve('src/templates/single-post.jsx')

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {fileAbsolutePath: {regex: "/(posts)/.*\\\\.md$/"}}
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              categories{
                category
              }
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  const categoriesArr = []
  const yearsArr = []

  posts.forEach((post, index, arr) => {
    
    const {fields, frontmatter, id} = post.node
    const { categories, date } = frontmatter;
    
    if(categories)
      categories.forEach(cat => categoriesArr.push(cat.category))

    const prev = arr[index - 1]
    const next = arr[index + 1]

    const momentDate = momentTz(date).tz("America/Los_Angeles").format("L");
    const [month, day, year] = momentDate.split("/");

    const months = ["january", "february", "march", "april", "may", "june", 
    "july", "august", "september", "october", "november", "december"];
  

    // const monthName= getMonthName(month)

    // console.log("MONTH NAME: ", monthName)

  
    yearsArr.push(year) // Building the years arrary
    // const path = `/blog/${year}/${month}/${day}/${fields.slug}`
    const path = `/blog/${year}/${months[month-1]}/${fields.slug}`

    createPage({
      path: path,
      component: singlePostTemplate,
      context: {
        id: id,
        slug: post.node.fields.slug,
        prev: prev,
        next: next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode}) => {

  const {createNodeField} = actions
  
  fmImagesToRelative(node) // convert image paths for gatsby images
 
  //Createing Date timestamp 
  // console.log("NODE IS MAIN ++++++++", node.fields.sourceName)

  if (node.internal.type === `MarkdownRemark`){

    if(node.fields.sourceName === "posts"){
      const date = node.frontmatter.date;
      createNodeField({
        name: 'date_timestamp',
        node,
        // convert date to unix timestamp & convert to number
        value: +momentTz(date).format('X'),
      })
    }
  }
}