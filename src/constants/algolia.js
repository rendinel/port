const mdxQuery = `
  {
    allMdx {
      edges {
        node {
          frontmatter {
            category
            date(formatString: "MMMM Do, YYYY")
            excerpt
            slug
            title
          }
          id
        }
      }
    }
  }
`

function pageToAlgoliaRecord({
  node: {
    id,
    frontmatter: { category, title, date, slug, excerpt },
  },
}) {
  return {
    objectID: id,
    category: category,
    title: title,
    date: date,
    slug: slug,
    excerpt: excerpt,
  }
}

const queries = [
  {
    query: mdxQuery,
    transformer: ({ data }) => data.allMdx.edges.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
