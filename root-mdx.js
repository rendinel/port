import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { myH2, myH4 } from "./src/components/Headings"
import Code from "./src/components/Code"
import BlockQuote from "./src/components/BlockQuote"
// import Example from "./src/components/Example"
import PrismSetup from "./src/components/PrismSetup"
const components = {
  h2: myH2,
  h4: myH4,
  inlineCode: Code,
  blockquote: BlockQuote,
  pre: PrismSetup,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
