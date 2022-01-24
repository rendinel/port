import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { AiOutlineArrowUp } from "react-icons/ai"

const Layout = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      <Navbar />
      {children}
      <button
        onClick={scrollToTop}
        className="scroll-to-top text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg mb-8"
      >
        <AiOutlineArrowUp />
      </button>
      <Footer />
    </>
  )
}

export default Layout
