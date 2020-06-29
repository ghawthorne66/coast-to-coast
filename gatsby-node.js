/* eslint-disable */
const path = require('path')
const momentTz = require('moment-timezone')

const kebabCase = require(`lodash.kebabcase`)

const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ actions, graphql, reporter, getNode }) => {
  const { createPage, createRedirect } = actions

  const singlePostTemplate = path.resolve('src/templates/single-post.jsx')
  const blogTagTemplate = path.resolve('src/templates/blog-tag.jsx')

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
              tags{
                tag
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
  const tagsArr=[]
  const yearsArr = []

  // For Posts/News
  posts.forEach((post, index, arr) => {
    
    const {fields, frontmatter, id} = post.node
    const { categories, date, tags, title } = frontmatter;

    console.log("TITLE: ", title, " TAGS: ",tags)
    console.log("TITLE: ", title, " Categories: ",categories)
  
    if(categories)
      categories.forEach(cat => categoriesArr.push(cat.category))
    
    if(tags)
      tags.forEach(item => tagsArr.push(item.tag))

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
    // const path = `/blog/${year}/${months[month-1]}/${fields.slug}`
    const path = `/news/${fields.slug}`

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

  // For creating Tags

  const countTags = tagsArr.length && tagsArr.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  const countYears = yearsArr.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  const allTags = Object.keys(countTags)
  const allYears = Object.keys(countYears)

  console.log("ALL TAGS ARE: ", allTags)

  allTags.forEach((tag, i) => {
    const link = `/tag/${kebabCase(tag)}`
    Array.from({
      length: Math.ceil(countTags[tag] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/${i + 1}`,
        component: blogTagTemplate,
        context: {
          allTags: allTags,
          allYears: allYears,
          tag: cat,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countTags[cat] / postsPerPage),
        },
      })
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