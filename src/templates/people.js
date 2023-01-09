import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import MemberDetail from '../components/Global/MemberDetail/MemberDetail';

const People = ({ location, data: { page } }) => {
  return (
    <Layout location={location}>
      <MemberDetail member={page} location={location} />
    </Layout>
  );
};

export default People;

export const Head = ({ data: { page } }) => <SeoDatoCms page={page} />;

export const PeopleQuery = graphql`
  query PeopleBySlug($slug: String) {
    page: datoCmsTeamMember(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      seo {
        title
        description
      }
      id
      image {
        gatsbyImageData(width: 700)
      }
      name
      info
      positionMember
      model {
        apiKey
      }
    }
  }
`;
