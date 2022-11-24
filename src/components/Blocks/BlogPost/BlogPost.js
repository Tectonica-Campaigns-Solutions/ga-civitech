import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { isArray } from '../../../utils/array.utils';
import TabTitles from '../Tabs/TabTitles/TabTitles';
import BlogPostTab from './BlogPostTab';

import './index.scss';

function BlogPost({ block, topics }) {
  const {
    posts: { nodes: blogList },
  } = useStaticQuery(graphql`
    query allPosts {
      posts: allDatoCmsPost {
        nodes {
          meta {
            createdAt(formatString: "MMM D YYYY")
          }
          title
          slug
          model {
            apiKey
          }
          topic {
            ... on DatoCmsTag {
              name
              id
            }
          }
          tags {
            ... on DatoCmsTag {
              name
            }
          }
          image {
            gatsbyImageData(width: 387, height: 259)
            url
          }
        }
      }
    }
  `);

  const [activeTab, setActiveTab] = useState(0);
  const activeTopic = topics[activeTab];

  const handleTab = val => setActiveTab(val);

  // We filter those blog posts whose topic is identical to the one that is active
  const blogListFiltered = blogList.filter(post => {
    const { name } = post.topic;
    return name === activeTopic.name;
  });

  return (
    <div className="blog-post-list">
      <div className="container">
        {isArray(topics) && <TabTitles items={topics} classes="col-lg-3" activeTab={activeTab} handleTab={handleTab} />}

        {isArray(blogListFiltered) && <BlogPostTab title={activeTopic.name} items={blogListFiltered} />}
      </div>
    </div>
  );
}

export default BlogPost;
