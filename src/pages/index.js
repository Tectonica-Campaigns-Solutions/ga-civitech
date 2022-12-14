import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import Hero from '../components/Global/Hero/Hero';

const IndexPage = ({ data: { page } }) => (
  <Layout>
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

export const Head = ({ data: { page } }) => <SeoDatoCms page={page} />;

export const HomeQuery = graphql`
  query Home {
    page: datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      seo {
        title
        description
      }
      id
      title
      contentText
      shortcuts {
        ... on DatoCmsPage {
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
              ... on DatoCmsPage {
                slug
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
