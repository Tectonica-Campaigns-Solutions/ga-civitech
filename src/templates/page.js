import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import GlobalImage from '../components/Global/GlobalImage/GlobalImage';

const Page = ({ data: { page } }) => {
  return (
    <Layout>
      <SeoDatoCms seo={page.seo} />
        <div>
          <div>{ page.title }</div>
          <div>{ page.description }</div>
          <div>{ page.heroVisual }</div>
          <div>
          {
            page.image && page.image.length > 0 && (
              <GlobalImage image={page.image} />
            )
          }
          </div>
          <div>
          {
            page.logo && page.logo.length > 0 && (
              <GlobalImage image={page.logo} />
            )
          }
          </div>
          
          {
            page.ctas.map(item => (item.title))
          }
        </div>
        <Blocks blocks={page.blocks}></Blocks>
      
    </Layout>
  );
};

export default Page;

export const PageQuery = graphql`
  query PageById($id: String) {
    page: datoCmsPage(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      title
      slug
      image{
        gatsbyImageData
      }
      logo{
        gatsbyImageData
      }
      description
      heroVisual
      ctas {
        title
        isButton
        link {
          ... on DatoCmsGlobalLink {
            label
            url
            content {
              ... on DatoCmsPage {
                slug
              }
            }
          }
        }
      }
      blocks {
        __typename
        ... on DatoCmsNarrativeBlock {
          ...BlockNarrativeBlock
        }
        ... on DatoCmsLogosBlock {
          ...BlockLogos
        }
        
      }
    }
  }
`;
