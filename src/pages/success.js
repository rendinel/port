import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
const Success = () => {
  return (
    <>
      <Seo
        title="Message sent"
        description="the page that confirm that your message was received"
      />
      <div className="bg-gray-900">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div className="bg-gray-800 bg-opacity-40 overflow-hidden sm:rounded-lg pb-8">
            <div className=" text-center pt-8">
              <h1 className="text-9xl font-bold text-white">Sent!</h1>
              <h1 className="text-6xl font-medium text-gray-400 py-8">
                Your message was successfully sent!
              </h1>
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

export default Success
