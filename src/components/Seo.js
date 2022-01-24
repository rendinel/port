// import React from "react"
// import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// siteMetadata for this
// siteMetadata: {
//   title: `WebDev Blog`,
//   description: `Awesome Blog with a log of programming tutorial`,
//   author: `Lucio Rendine`,
//   titleTemplate: `%s | Rendinel Blog`,
//   siteUrl: `https://vibrant-babbage-507977.netlify.app`,
//   twitterUsername: `@rendinel`,
//   image: "/favicon.png",
// },

// const query = graphql`
//   {
//     site {
//       siteMetadata {
//         author
//         siteDesc: description
//         siteTitle: title
//         titleTemplate
//         siteUrl
//         image
//         twitterUsername
//       }
//     }
//   }
// `

// const Seo = ({ title, description }) => {
//   const { site } = useStaticQuery(query)
//   const { siteDesc, siteTitle, siteUrl, twitterUsername, image } =
//     site.siteMetadata
//   return (
//     <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle} `}>
//       <meta name="description" content={description || siteDesc}></meta>
//       <meta name="image" content={image} />

//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:creator" content={twitterUsername} />
//       <meta name="twitter:title" content={siteTitle} />
//       <meta name="twitter:description" content={siteDesc} />
//       <meta name="twitter:image" content={`${siteUrl}${image}`} />
//     </Helmet>
//   )
// }

// export default Seo

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`
