import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
const PageNotFound = () => {
  return (
    <>
      <Seo title="Error page" description="this is the error page" />
      <div className="bg-gray-900">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div className="bg-gray-800 bg-opacity-40 overflow-hidden sm:rounded-lg pb-8">
            <div className=" text-center pt-8">
              <h1 className="text-9xl font-bold text-white">404</h1>
              <h1 className="text-6xl font-medium text-gray-400 py-8">
                oops! Page not found
              </h1>
              <p className="text-2xl text-gray-400 pb-8 px-12 font-medium">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
