import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blocks from "../components/Blocks"

const Page = ({ data: { page } }) => {
  return (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{ page.title }</h1>
        </div>
      </div> 
      <Blocks blocks={page.blocks}></Blocks>
    </div> 
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default Page

export const PageQuery = graphql`
  query PageById($id: String) {
      page: datoCmsPage(id: { eq: $id }) {
        id
        title
        slug
        blocks{
          id
          __typename
          ... on DatoCmsNarrativeBlock{
            title
          }
        }
      } 
  }
`