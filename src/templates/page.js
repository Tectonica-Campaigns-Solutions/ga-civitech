import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import HeroSelector from '../components/Global/Hero/HeroSelector';
import { blockWithPrimaryHeading } from '../utils';

import * as styles from './page.module.scss';

const Page = ({ pageContext, location, data: { page, favicon } }) => {
  const shouldRenderPrimaryHeading = !page.showHero && !blockWithPrimaryHeading(page.blocks);
  const shouldRemoveH1 = page.blocks.filter(item => item.__typename === 'DatoCmsBlogPost').length > 0;

  return (
    <Layout location={location} currentSlug={page.slug}>
      <SeoDatoCms seo={page.seo} favicon={favicon} />
      <HeroSelector page={page} />

      {shouldRenderPrimaryHeading && !shouldRemoveH1 ? (
        <div className="container">
          <h1 className={styles.pageTitle}>{page.title}</h1>
        </div>
      ) : null}

      <Blocks blocks={page.blocks} location={location} />
    </Layout>
  );
};

export default Page;

export const PageQuery = graphql`
  query PageById($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsPage(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
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
              ... on DatoCmsTeamMember {
                slug
                model {
                  apiKey
                }
              }
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
              ... on DatoCmsHome {
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
        ... on DatoCmsTextColumn {
          ...BlockTextColumn
        }
      }
    }
  }
`;
