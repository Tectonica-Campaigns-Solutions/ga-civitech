import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import HeroBlogPost from '../components/Hero/HeroBlogPost/HeroBlogPost';
import PostGrid from '../components/Global/Post/PostGrid';

const Post = ({ data: { post } }) => {
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

      {/* TODO: Add related post on query */}
      <PostGrid {...post} relatedProduct={post.relatedProduct} relatedPost={null} />
    </Layout>
  );
};

export default Post;

export const PostQuery = graphql`
  query PostById($id: String) {
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      meta {
        createdAt(formatString: "MMMM D, YYYY")
      }
      id
      title
      relatedProduct {
        ... on DatoCmsProduct {
          model {
            apiKey
          }
          title
          slug
          imagePreview {
            gatsbyImageData(width: 374, height: 211)
          }
          descriptionPreview
        }
      }
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
  }
`;
