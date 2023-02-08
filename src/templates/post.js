import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import HeroBlogPost from '../components/Global/Hero/HeroBlogPost/HeroBlogPost';
import PostGrid from '../components/Global/Post/PostGrid';

const Post = ({ location, pageContext, data: { post, relatedPost } }) => {
  const { globalSettings } = pageContext;

  let titleLatestPosts = globalSettings.find(setting => setting.codeId === 'text_latest_posts');
  titleLatestPosts = titleLatestPosts ? titleLatestPosts?.value : 'Latest from the community';

  return (
    <Layout location={location}>
      <HeroBlogPost
        title={post.title}
        summary={post.summary}
        createdAt={post.date}
        topic={post.topic}
        image={post.image}
      />

      <PostGrid
        {...post}
        relatedProduct={post.relatedProduct}
        relatedPost={relatedPost}
        titleLatest={titleLatestPosts}
      />
    </Layout>
  );
};

export default Post;

export const Head = ({ data: { post } }) => <SeoDatoCms page={post} />;

export const PostQuery = graphql`
  query PostById($id: String, $topic: String) {
    post: datoCmsPost(id: { eq: $id }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      seo {
        title
        description
      }
      date(formatString: "MMM D YYYY")
      id
      title
      featured
      relatedProduct {
        ... on DatoCmsProduct {
          model {
            apiKey
          }
          title
          slug
          imagePreview {
            gatsbyImageData(width: 374, height: 211)
            url
          }
          descriptionPreview
        }
      }
      slug
      content {
        value
        blocks {
          __typename
          ... on DatoCmsImage {
            id: originalId
            image {
              gatsbyImageData(width: 645, height: 375)
              title
              url
            }
          }
          ... on DatoCmsBlogPostCta {
            id: originalId
            title
            model {
              apiKey
            }
            image {
              gatsbyImageData
            }
            cta {
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
          }
        }
      }
      image {
        gatsbyImageData(width: 600, height: 400)
        alt
        url
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
    relatedPost: allDatoCmsPost(
      limit: 1
      filter: { topic: { originalId: { eq: $topic } }, featured: { eq: true }, id: { ne: $id } }
    ) {
      nodes {
        ...PostCard
      }
    }
  }
`;
