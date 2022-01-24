import React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom"
import styled from "styled-components"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const NewHits = connectHits(({ hits }) => {
  return hits.map(item => {
    const { objectID, category, title, slug } = item
    return (
      <Link to={`/blog/${slug}`} key={objectID}>
        <h1 className="sm:text-4xl hover:text-blue-500 text-3xl font-medium title-font text-white text-center">
          {title}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-blue-500 text-center mb-8 hover:text-blue-500">
          {category}
        </p>
      </Link>
    )
  })
})

const Algolia = () => {
  return (
    <Wrapper>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox />
        <NewHits />
        {/* <Hits /> */}
      </InstantSearch>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  .ais-SearchBox {
    width: 90vw;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 2rem;
    form {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 3rem 3rem;
      button {
        border: transparent;
        font-size: 1.1rem;
      }
      input {
        width: 100%;
        background-color: rgba(31, 41, 55, 1);
        border-radius: 0.25rem;
        border-color: rgba(55, 65, 81, 1);
        font-size: 1rem;
        line-height: 1.5rem;
        outline: 2px solid transparent;
        outline-offset: 2px;
        color: rgba(243, 244, 246, 1);
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        transition-property: background-color, border-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
      }
      input:focus {
        border-color: rgba(59, 130, 246, 1);
      }
      button {
        background-color: rgba(59, 130, 246, 1);
        border-width: 0px;
        min-width: 2.5rem;
        margin-right: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          fill: white;
        }
      }
      button.ais-SearchBox-reset {
        background-color: rgba(59, 130, 246, 1);
        border-width: 0px;
        min-width: 2.5rem;
      }
    }
  }
`

export default Algolia
