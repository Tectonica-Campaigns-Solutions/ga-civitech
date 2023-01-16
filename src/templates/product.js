import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import HeroProduct from '../components/Global/Hero/HeroProduct/HeroProduct';

const Product = ({ location, pageContext, data: { page } }) => {
  const { globalSettings } = pageContext;
  let loginTitle = globalSettings.find(setting => setting.codeId === 'text_login_tool');

  return (
    <Layout location={location}>
      <HeroProduct data={page} loginTitle={loginTitle.value} />
      <Blocks blocks={page.blocks}></Blocks>
    </Layout>
  );
};

export default Product;

export const Head = ({ data: { page } }) => <SeoDatoCms page={page} />;

export const ProductQuery = graphql`
  query ProductById($id: String) {
    page: datoCmsProduct(id: { eq: $id }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      seo {
        title
        description
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
