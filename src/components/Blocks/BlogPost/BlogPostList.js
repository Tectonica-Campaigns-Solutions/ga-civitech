import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BlogPost from './BlogPost';
import { isArray } from '../../../utils/array.utils';
import TabTitles from '../Tabs/TabTitles';

import './index.scss';

function BlogPostList({ block }) {
  const data = useStaticQuery(graphql`
    query allPosts {
      posts: allDatoCmsPost {
        nodes {
          meta {
            createdAt(formatString: "MMM D YYYY")
          }
          title
          slug
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
          image {
            gatsbyImageData(width: 387, height: 259)
          }
        }
      }
    }
  `);
  const blogList = data.posts.nodes;

  // TODO: Hardcoded, remove...
  const items = [{ titleTab: 'Updates' }, { titleTab: 'Success Stories' }, { titleTab: 'Press' }];

  return (
    <div className="blog-post">
      <div className="container">
        <div>{isArray(items) && <TabTitles items={items} classes="col-lg-3" activeTab={0} handleTab={() => {}} />}</div>

        <h2>{block.title}</h2>

        {isArray(blogList) && (
          <div className="row gy-5">
            {blogList.map(post => (
              <div className="col-lg-4 col-md-6">
                <BlogPost post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPostList;
