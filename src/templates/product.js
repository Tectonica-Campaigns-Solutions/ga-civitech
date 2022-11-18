import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';
import HeroSelector from '../components/HeroSelector';

const Product = ({ data: { page } }) => {
  return (
    <Layout>
      <SeoDatoCms seo={page.seo} />
      <Blocks blocks={page.blocks}></Blocks>
    </Layout>
  );
};

export default Product;

export const ProductQuery = graphql`
  query ProductById($id: String) {
    page: datoCmsProduct(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      title
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
      }
    }
  }
`;
