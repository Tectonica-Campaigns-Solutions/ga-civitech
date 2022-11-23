import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { isArray } from '../../../utils/array.utils';
import TabTitles from '../Tabs/TabTitles';
import BlogPostCard from '../../Global/BlogPostCard/BlogPostCard';

import './index.scss';

function BlogPost({ block }) {
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
    <div className="blog-post-list">
      <div className="container">
        {isArray(items) && <TabTitles items={items} classes="col-lg-3" activeTab={0} handleTab={() => {}} />}

        <h2>{block.title}</h2>

        {isArray(blogList) && (
          <div className="row gy-5">
            {blogList.map(({ slug, image, meta, tags, title }) => (
              <div className="col-lg-4 col-md-6">
                <BlogPostCard slug={slug} image={image} date={meta.createdAt} tags={tags} title={title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
