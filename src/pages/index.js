import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import Hero from '../components/Global/Hero/Hero/Hero';

const IndexPage = ({ data: { page, favicon } }) => (
  <Layout>
    <SeoDatoCms seo={page.seo} favicon={favicon} />
    <Hero
      ctas={page.ctas}
      title={page.title}
      content={page.contentText}
      image={page.heroImage}
      shortcuts={page.shortcuts}
      titleShortcuts={page.titleShortcuts}
    />
    <Blocks blocks={page.blocks}></Blocks>
  </Layout>
);

export default IndexPage;

export const HomeQuery = graphql`
  query Home {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsHome {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      title
      contentText
      shortcuts {
        ... on DatoCmsPage {
          id
          title
          slug
          description
        }
      }
      titleShortcuts
      heroImage {
        gatsbyImageData(width: 500, height: 500)
        url
        alt
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
        ... on DatoCmsNarrativeBlock {
          ...BlockNarrativeBlock
        }
        ... on DatoCmsGridStat {
          ...BlockGridStat
        }
        ... on DatoCmsTab {
          ...BlockTab
        }
        ... on DatoCmsTextHubspotForm {
          ...BlockTextHubspot
        }
        ... on DatoCmsLogosBlock {
          ...BlockLogos
        }
        ... on DatoCmsLatestPost {
          ...BlockLatestPost
        }
      }
    }
  }
`;
