import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { isArray } from '../../../utils';
import Cta from '../../Global/Cta/Cta';
import BlogPostCard from '../../Global/BlogPostCard/BlogPostCard';

import './index.scss';

const LatestPost = ({ block }) => {
  const {
    allDatoCmsPost: { nodes: latestsPosts },
  } = useStaticQuery(graphql`
    query latestPost {
      allDatoCmsPost(limit: 3, sort: { date: DESC }) {
        nodes {
          ...PostCard
        }
      }
    }
  `);

  const { title, backgroundColor = 'pale-blue' } = block;

  return (
    <div className={`latest-posts-container ${backgroundColor}`}>
      <div className={`container`}>
        <div className="title-section">
          {title && <h2>{title}</h2>}
          <Cta url="/blog" label={'Read all'} isButton />
        </div>

        <div className="row gx-6">
          {isArray(latestsPosts) ? (
            latestsPosts.map(({ id, image, slug, tags, title, model, date }) => (
              <div className="col-lg-4 mb-lg-0 mb-5" key={id}>
                <BlogPostCard slug={slug} image={image} date={date} tags={tags} title={title} model={model} />
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
