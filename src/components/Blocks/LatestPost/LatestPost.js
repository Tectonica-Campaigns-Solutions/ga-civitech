import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Cta from '../../Global/Cta/Cta';
import PostCard from './PostCard';
import { isArray } from '../../../utils/array.utils';

import './index.scss';

const LatestPost = ({ block }) => {
  const {
    allDatoCmsPost: { nodes: latestsPosts },
  } = useStaticQuery(graphql`
    query latestPost {
      allDatoCmsPost(limit: 3) {
        nodes {
          title
          slug
          image {
            gatsbyImageData
          }
          tags {
            ... on DatoCmsTag {
              name
            }
          }
          meta {
            publishedAt(formatString: "MMM D YYYY")
          }
        }
      }
    }
  `);

  return (
    <div className={`latest-posts-container ${block.backgroundColor}`}>
      <div className={`container`}>
        <div className="title-section">
          <h2>{block.title}</h2>
          <Cta label={'Read all'} isButton />
        </div>

        <div className="row">
          {isArray(latestsPosts) ? (
            latestsPosts.map(item => (
              <div className="col-lg-4 mb-lg-0 mb-5">
                <PostCard item={item} />
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
