import React from "react"
import { graphql } from "gatsby"
import BlogHomepage from "../components/BlogHomepage"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import ContentCard from "../components/ContentCard"
import Seo from "../components/Seo"
const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const prevPage =
    currentPage - 1 === 0 || currentPage - 1 === 1
      ? `/blog`
      : `/blog/${currentPage - 1}`

  const nextPage =
    currentPage === numPages
      ? `/blog/${currentPage}`
      : `/blog/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Layout>
      <Seo title="Blog Homepage" description="the blog homepage" />
      <BlogHomepage>
        {posts.map(post => {
          return (
            <ContentCard
              key={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              slug={post.node.frontmatter.slug}
              category={post.node.frontmatter.category}
            />
          )
        })}
        <Pagination
          numPages={numPages}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </BlogHomepage>
    </Layout>
  )
}

export default allPosts
export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM Do, YYYY")
            excerpt
            category
          }
        }
      }
    }
  }
`
