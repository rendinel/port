import React from "react"
const Code = ({ children }) => {
  return (
    <code
      style={{
        background: "grey",
        color: "red",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      {children}
    </code>
  )
}

export default Code
