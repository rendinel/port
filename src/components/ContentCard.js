import React from "react"
import { Link } from "gatsby"
import { AiOutlineArrowRight } from "react-icons/ai"
const ContentCard = ({ date, title, excerpt, slug, category }) => {
  return (
    <div className="py-8  flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-white">CATEGORY</span>
        <div className="font-semibold title-font text-blue-400">{category}</div>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-white title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-blue-400 inline-flex items-center mt-4"
        >
          Learn More
          <AiOutlineArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  )
}

export default ContentCard
