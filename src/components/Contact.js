import React from "react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-gray-400 bg-gray-900 body-font relative"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Want to work together or have any questions?
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            name="testing-contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contact" />
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <div
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <div
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <div
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Button
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <div className="text-blue-400">rendinel@protonmail.com</div>
                <p className="leading-normal my-5">
                  Pescara
                  <br></br>Italy, PE 65127
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
