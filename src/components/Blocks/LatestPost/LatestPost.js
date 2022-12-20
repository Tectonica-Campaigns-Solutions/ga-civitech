import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { isArray } from '../../../utils/array.utils';
import Cta from '../../Global/Cta/Cta';
import BlogPostCard from '../../Global/BlogPostCard/BlogPostCard';

import './index.scss';

const LatestPost = ({ block }) => {
  const {
    allDatoCmsPost: { nodes: latestsPosts },
  } = useStaticQuery(graphql`
    query latestPost {
      allDatoCmsPost(limit: 3) {
        nodes {
          ...PostCard
        }
      }
    }
  `);

  const { title, backgroundColor } = block;

  return (
    <div className={`latest-posts-container ${backgroundColor}`}>
      <div className={`container`}>
        <div className="title-section">
          {title && <h2>{title}</h2>}
          <Cta url="/blog" label={'Read all'} isButton />
        </div>

        <div className="row gx-6">
          {isArray(latestsPosts) ? (
            latestsPosts.map(({ image, meta, slug, tags, title, model }) => (
              <div className="col-lg-4 mb-lg-0 mb-5">
                <BlogPostCard
                  slug={slug}
                  image={image}
                  date={meta.publishedAt}
                  tags={tags}
                  title={title}
                  model={model}
                />
              </div>
            ))
          ) : (
            <span>There is no blog post at the moment.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
