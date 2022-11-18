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
      hola!
    </Layout>
  );
};

export default Product;

export const PageQuery = graphql`
  query PageById($id: String) {
    page: datoCmsPage(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      title
    }
  }
`;
