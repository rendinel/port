import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../components/Seo"
const singlePost = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
      />
      <div className="bg-gray-900">
        <div className="  body-font container w-full md:max-w-3xl mx-auto pt-20">
          <div className="w-full px-4 md:px-6 text-xl text-gray-400 leading-normal">
            <div className="font-sans">
              <p className="text-base md:text-sm text-blue-500 font-bold">
                &lt;{" "}
                <Link
                  to="/blog"
                  className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
                >
                  BACK TO BLOG
                </Link>
              </p>
              <h1 className="font-bold font-sans break-normal text-blue-500 pt-6 pb-2 text-3xl md:text-4xl">
                {data.mdx.frontmatter.title}
              </h1>
              <p className="text-sm md:text-base font-normal text-gray-600">
                {data.mdx.frontmatter.date}
              </p>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
            <div className="text-base md:text-sm text-gray-500  pt-6">
              Tags:{" "}
              <span className="text-base md:text-sm text-blue-500 no-underline hover:underline">
                {data.mdx.frontmatter.category}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        excerpt
        category
        slug
        title
        excerpt
      }
    }
  }
`
