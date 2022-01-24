import React from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
    >
      <AiOutlineArrowUp />
    </button>
  )
}
