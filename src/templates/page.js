import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import HeroSelector from '../components/Hero/HeroSelector';

const Page = ({ location, data: { page } }) => {
  return (
    <Layout location={location}>
      <HeroSelector page={page} />
      <Blocks blocks={page.blocks}></Blocks>
    </Layout>
  );
};

export default Page;

export const Head = ({ data: { page } }) => <SeoDatoCms page={page} />;

export const PageQuery = graphql`
  query PageById($id: String) {
    page: datoCmsPage(id: { eq: $id }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      seo {
        title
        description
      }
      id
      title
      slug
      image {
        gatsbyImageData
        url
      }
      logo {
        gatsbyImageData
        url
      }
      description
      heroVisual
      heroTitle
      backgroundColor
      video {
        source {
          url
          thumbnailUrl
          providerUid
        }
        preview {
          gatsbyImageData
        }
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
        ... on DatoCmsRelatedProduct {
          ...BlockRelatedProduct
        }
        ... on DatoCmsBlogPost {
          ...BlockBlogPost
        }
        ... on DatoCmsTab {
          ...BlockTab
        }
      }
    }
  }
`;
