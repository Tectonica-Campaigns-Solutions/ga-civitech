import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import SeoDatoCms from "../components/SeoDatoCms"
import Blocks from "../components/Blocks"
import Hero from "../components/Global/Hero/Hero"


const IndexPage = ({ data: { page } }) => (
  <Layout>
    <SeoDatoCms seo={page.seo} />
    <Hero ctas={page.ctas} title={page.title} content={page.contentText} image={page.heroImage} shortcuts={page.shortcuts}/>
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
      title
      contentText
      shortcuts{
				... on DatoCmsPage{
					title
        }
      }
      heroImage{
        gatsbyImageData(width:500, height:500)
        alt
      }
      ctas{
        ... on DatoCmsPage{
          slug
          title
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

