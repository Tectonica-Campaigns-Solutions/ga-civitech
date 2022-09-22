import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Blocks from "../components/Blocks"
import Hero from "../components/Global/Hero/Hero"


const IndexPage = ({ data: { page } }) => (
  <Layout>
    <Seo title="Home" />
    <Hero ctas={page.ctas}/>
    <Blocks blocks={page.blocks}></Blocks>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const HomeQuery = graphql`
  query Home{
    page: datoCmsHome{
      id
      ctas{
        ... on DatoCmsPage{
          slug
        }
      }
      blocks{
        ... on DatoCmsNarrativeBlock{
          ...BlockNarrativeBlock
        }
        ... on DatoCmsGridStat{
          ...BlockGridStat
        }
        ... on DatoCmsTab{
          ...BlockTab
        }
      }
    }
  }
`

