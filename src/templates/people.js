import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import MemberDetail from '../components/Global/MemberDetail/MemberDetail';

const People = ({ location, data: { page } }) => {
  return (
    <Layout location={location} currentSlug={page.slug}>
      <MemberDetail member={page} location={location} />
    </Layout>
  );
};

export default People;

export const Head = ({ data: { page } }) => <SeoDatoCms page={page} />;

export const PeopleQuery = graphql`
  query PeopleBySlug($slug: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsTeamMember(slug: { eq: $slug }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      image {
        gatsbyImageData(width: 700)
      }
      slug
      name
      info
      positionMember
      model {
        apiKey
      }
      socialLinks {
        url
        socialNetwork
      }
    }
  }
`;
