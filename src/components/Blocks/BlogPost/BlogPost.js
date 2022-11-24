import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { isArray } from '../../../utils/array.utils';
import TabTitles from '../Tabs/TabTitles/TabTitles';
import BlogPostTab from './BlogPostTab';

import './index.scss';

function BlogPost({ block, topics }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = val => {
    setActiveTab(val);
  };

  const data = useStaticQuery(graphql`
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
  const blogList = data.posts.nodes;

  const filteredBlogList = blogList.reduce((group, post) => {
    const { name } = post.topic;
    group[name] = group[name] ?? [];
    group[name].push(post);
    return group;
  }, {});

  return (
    <div className="blog-post-list">
      <div className="container">
        {isArray(topics) && <TabTitles items={topics} classes="col-lg-3" activeTab={activeTab} handleTab={handleTab} />}

        {Object.entries(filteredBlogList).map((item, index) => {
          return index === activeTab ? <BlogPostTab title={item[0]} items={item[1]} /> : '';
        })}
      </div>
    </div>
  );
}

export default BlogPost;
