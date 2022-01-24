import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"

const query = graphql`
  query MyQuery {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            category
            excerpt
            slug
            date(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
  }
`

const BlogHome = () => {
  const data = useStaticQuery(query)
  const {
    allMdx: { edges },
  } = data
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Blog
          </h1>
          <Link
            to="/blog"
            className="text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-lg  mx-auto leading-relaxed text-base"
          >
            Check our blog!
          </Link>
        </div>
        <div className="flex flex-wrap -m-4">
          {edges.map(post => {
            const { category, excerpt, slug, date, title } =
              post.node.frontmatter
            return (
              <div key={slug} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {category}
                  </h2>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {date}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    {title}
                  </h1>
                  <p className="leading-relaxed mb-3">{excerpt}</p>
                  <Link
                    to={`/blog/${slug}`}
                    className="text-blue-400 inline-flex items-center"
                  >
                    Learn More
                    <AiOutlineArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogHome
