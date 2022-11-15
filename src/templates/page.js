import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import Blocks from '../components/Blocks';

const Page = ({ data: { page } }) => {
  return (
    <Layout>
      <SeoDatoCms seo={page.seo} />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{page.title}</h1>
          </div>
        </div>
        <Blocks blocks={page.blocks}></Blocks>
      </div>
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
      blocks {
        id
        __typename
        ... on DatoCmsNarrativeBlock {
          title
        }
      }
    }
  }
`;
