import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import SeoDatoCms from "../components/SeoDatoCms"
import Blocks from "../components/Blocks"
import Hero from "../components/Global/Hero/Hero"


const IndexPage = ({ data: { page } }) => (
  <Layout>
    <SeoDatoCms seo={page.seo} />
    <Hero ctas={page.ctas}/>
    <Blocks blocks={page.blocks}></Blocks>
  </Layout>
)

export default IndexPage

export const HomeQuery = graphql`
  query Home{
    page: datoCmsHome{
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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

