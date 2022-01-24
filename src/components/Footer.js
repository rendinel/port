import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaMediumM, FaInstagram, FaLinkedin } from "react-icons/fa"
import { ImGithub, ImYoutube } from "react-icons/im"
const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <StaticImage
            className="w-10 h-10"
            src="../images/logo.png"
            alt="My logo"
          />
          <span className="ml-3 text-xl">Rendinel</span>
        </div>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2020 Rendinel —
          <a
            href="https://github.com/rendinel"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rendinel
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/rendinel" className="ml-3 text-gray-400">
            <ImGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucio-rendine-3281bb20b/"
            className="ml-3 text-gray-400"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
