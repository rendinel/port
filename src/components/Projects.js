import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineArrowRight } from "react-icons/ai"
const Projects = () => {
  return (
    <div id="project">
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">
                Next.js
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
                Realtor
              </h2>
              <p className="leading-relaxed mb-8">
                Realtor is a real estate application with rental homes and
                for-sale properties, advanced property filtering, property
                details page with an image carousel build with Next.js and
                Chakra UI.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                <a
                  href="https://realtor-iota.vercel.app/"
                  className="text-blue-400 inline-flex items-center"
                >
                  View
                  <AiOutlineArrowRight className="ml-2" />
                </a>
                <a
                  href="https://github.com/rendinel/realtor"
                  className="text-blue-400 inline-flex items-center ml-4"
                >
                  Code
                  <AiOutlineArrowRight className="ml-2" />
                </a>
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">
                React.js
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
                Hackernews
              </h2>
              <p className="leading-relaxed mb-8">
                Hacker News is a news app that fetch data from Hacker News api
                and is build with React.It allow the user to fetch stories that
                reference the input,read or remove them.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                <a
                  href="https://hackingnews.netlify.app/"
                  className="text-blue-400 inline-flex items-center"
                >
                  View
                  <AiOutlineArrowRight className="ml-2" />
                </a>
                <a
                  href="https://github.com/rendinel/hacker-news"
                  className="text-blue-400 inline-flex items-center ml-4"
                >
                  Code
                  <AiOutlineArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
