import React from "react"
const BlogHomepage = ({ children }) => {
  return (
    <section className="min-heigth text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">{children}</div>
      </div>
    </section>
  )
}

export default BlogHomepage
