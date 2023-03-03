import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SeoDatoCms from '../components/SeoDatoCms';
import HeroBlogPost from '../components/Global/Hero/HeroBlogPost/HeroBlogPost';
import PostGrid from '../components/Global/Post/PostGrid';

const Post = ({ location, pageContext, data: { post, relatedPost, favicon } }) => {
  const { globalSettings } = pageContext;

  let titleLatestPosts = globalSettings.find(setting => setting.codeId === 'text_latest_posts');
  titleLatestPosts = titleLatestPosts ? titleLatestPosts?.value : 'Latest from the community';

  return (
    <Layout location={location}>
      <SeoDatoCms seo={post.seo} favicon={favicon} />
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

export const PostQuery = graphql`
  query PostById($id: String, $topic: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
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
        ... on DatoCmsTabProduct {
          title
          description
          image {
            gatsbyImageData(width: 374, height: 211)
            url
          }
          link {
            ... on DatoCmsProduct {
              model {
                apiKey
              }
              slug
            }
          }
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
              gatsbyImageData(width: 700)
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
          }
          ... on DatoCmsIframeEmbed {
            id: originalId
            iframe
          }
          ... on DatoCmsVideoEmbed {
            id: originalId
            video {
              source {
                url
                thumbnailUrl
                providerUid
              }
              preview {
                gatsbyImageData
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
