import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import HeroProduct from '../components/Global/Hero/HeroProduct/HeroProduct';

const Product = ({ location, pageContext, data: { page, favicon } }) => {
  const { globalSettings } = pageContext;
  let loginTitle = globalSettings.find(setting => setting.codeId === 'text_login_tool');

  return (
    <Layout location={location}>
      <SeoDatoCms seo={page.seo} favicon={favicon} />
      <HeroProduct data={page} loginTitle={loginTitle.value} />
      <Blocks blocks={page.blocks}></Blocks>
    </Layout>
  );
};

export default Product;

export const ProductQuery = graphql`
  query ProductById($id: String) {
    favicon: datoCmsSite{
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsProduct(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      title
      backgroundColor
      alignment
      textLink
      linkUrl
      logo {
        url
      }
      description
      image {
        gatsbyImageData
        url
      }
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
                model {
                  apiKey
                }
              }
              ... on DatoCmsProduct {
                slug
                model {
                  apiKey
                }
              }
              ... on DatoCmsPost {
                slug
                model {
                  apiKey
                }
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
        ... on DatoCmsGridStat {
          ...BlockGridStat
        }
        ... on DatoCmsTextHubspotForm {
          ...BlockTextHubspot
        }
        ... on DatoCmsListMember {
          ...BlockListMember
        }
        ... on DatoCmsTab {
          ...BlockTab
        }
      }
    }
  }
`;
