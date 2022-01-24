import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Projects = () => {
  return (
    <div id="project">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <StaticImage
                  className="w-40 h-40 mb-8 object-cover object-center inline-block"
                  src="../images/realtor.png"
                  alt="realtop photo"
                />
                <p className="leading-relaxed">
                  Realtor is a real estate application with rental homes and
                  for-sale properties, advanced property filtering, property
                  details page with an image carousel build with Next.js and
                  Chakra UI.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <div className="flex justify-center">
                  <a
                    href="https://realtor-iota.vercel.app/"
                    className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                    View
                  </a>
                  <a
                    href="https://github.com/rendinel/realtor"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <StaticImage
                  className="w-40 h-40 mb-8 object-cover object-center inline-block"
                  src="../images/hackernews.png"
                  alt="hackernews photo"
                />
                <p className="leading-relaxed">
                  Hacker News is a news app that fetch data from Hacker News api
                  and is build with React.It allow the user to fetch stories
                  that reference the input,read or remove them.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <div className="flex justify-center">
                  <a
                    href="https://hackingnews.netlify.app/"
                    className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                    View
                  </a>
                  <a
                    href="https://github.com/rendinel/hacker-news"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
