import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div
          className="
            flex
            title-font
            font-medium
            items-center
            text-white
            mb-4
            md:mb-0
          "
        >
          <StaticImage
            className="w-10 h-10"
            src="../images/logo.png"
            alt="My logo"
          />
          <span className="ml-3 text-xl">Rendinel</span>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-7">
            Home
          </Link>
          <Link to="/#project" className="mr-7">
            Projects
          </Link>
          <Link to="/#contact" className="mr-7">
            Contact
          </Link>
          <a href="/CV_ref.pdf" className="mr-7">
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
