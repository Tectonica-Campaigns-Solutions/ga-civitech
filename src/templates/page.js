import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import HeroSelector from '../components/Global/Hero/HeroSelector';
import { blockWithPrimaryHeading } from '../utils';

const Page = ({ pageContext, location, data: { page } }) => {
  const shouldRenderPrimaryHeading = !page.showHero && !blockWithPrimaryHeading(page.blocks);
  const shouldRemoveH1 = page.blocks.filter(item => item.__typename === 'DatoCmsBlogPost').length > 0;

  return (
    <Layout location={location} currentSlug={page.slug}>
      <HeroSelector page={page} />

      {shouldRenderPrimaryHeading && !shouldRemoveH1 ? (
        <div className="container mt-5 mt-md-5 pt-5 pt-md-5">
          <h1>{page.title}</h1>
        </div>
      ) : null}

      <Blocks blocks={page.blocks} />
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
      showHero
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
        ... on DatoCmsAccordion {
          ...BlockAccordion
        }
        ... on DatoCmsIframeEmbed {
          ...BlockIframeEmbed
        }
        ... on DatoCmsVideoEmbed {
          ...BlockVideoEmbed
        }
        ... on DatoCmsListContent {
          ...BlockListContent
        }
      }
    }
  }
`;
