import React from "react"
import Algolia from "../components/Algolia"
import Layout from "../components/Layout"
import BlogHomepage from "../components/BlogHomepage"
import Seo from "../components/Seo"
export default function Search() {
  return (
    <Layout>
      <Seo title="Search Page" description="the search page" />
      <BlogHomepage>
        <Algolia />
      </BlogHomepage>
    </Layout>
  )
}
