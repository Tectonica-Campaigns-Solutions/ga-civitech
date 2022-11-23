import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import HeroBlogPost from '../components/Hero/HeroBlogPost/HeroBlogPost';
import PostGrid from '../components/Global/Post/PostGrid';

const Post = ({ data: { post, relatedProducts } }) => {
  return (
    <Layout>
      <SeoDatoCms seo={post.seo} />

      <HeroBlogPost
        title={post.title}
        summary={post.summary}
        createdAt={post.meta.createdAt}
        topic={post.topic}
        image={post.image}
      />

      <PostGrid {...post} relatedProducts={relatedProducts} />
    </Layout>
  );
};

export default Post;

export const PostQuery = graphql`
  query PostById($id: String, $topic: String) {
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      meta {
        createdAt(formatString: "MMMM D, YYYY")
      }
      id
      title
      slug
      content {
        value
        blocks {
          id: originalId
          __typename
          ... on DatoCmsImage {
            id: originalId
            image {
              gatsbyImageData
              title
            }
          }
        }
      }
      image {
        gatsbyImageData(width: 600, height: 400)
        alt
      }
      summary
      topic {
        ... on DatoCmsTag {
          name
        }
      }
      tags {
        ... on DatoCmsTag {
          name
        }
      }
    }
    relatedProducts: allDatoCmsProduct(filter: {topic: {id: {eq: $topic}}}) {
      nodes {
        title
        slug
        
      }
    }
  }
`;
