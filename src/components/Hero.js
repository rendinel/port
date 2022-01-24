import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm
            <br className="hidden lg:inline-block"></br>
            Lucio Rendine
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a web developer that comes from a Business background . Through
            my past experiences, I can balance the need of users and businesses
            to understand their pain points and how I can contribute as a
            Front-end developer and solve their problems.
          </p>
          <div className="flex justify-center">
            <a
              href="/CV_ref.pdf"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Get my CV!
            </a>
            <Link
              to="/#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Contact me!
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <StaticImage
            className="object-cover object-center rounded"
            alt="hero"
            src="../images/myself.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
