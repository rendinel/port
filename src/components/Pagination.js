import { Link } from "gatsby"
import React from "react"

const Pagination = ({ prevPage, nextPage, currentPage, numPages }) => {
  return (
    <div className="flex justify-center">
      <Link to={prevPage}>
        <button
          className="mt-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </Link>
      <Link to={nextPage}>
        <button
          disabled={currentPage === numPages}
          className="ml-4 mt-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        >
          Next
        </button>
      </Link>
    </div>
  )
}

export default Pagination
