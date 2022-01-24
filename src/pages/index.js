import React from "react"

import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
export default function Home() {
  return (
    <Layout>
      <Seo title="Home" description="this is my home page" />
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  )
}
