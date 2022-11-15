import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Cta from '../../Global/Cta/Cta';
import PostCard from './PostCard';

import './index.scss';

const LatestPost = ({ block }) => {
  return (
    <StaticQuery
      query={graphql`
        query latestPost {
          allDatoCmsPost(limit: 3) {
            nodes {
              title
              image {
                gatsbyImageData
              }
              tags {
                ... on DatoCmsTag {
                  name
                }
              }
              meta {
                publishedAt(formatString: "MMMM D YYYY")
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div className={`latest-posts-container ${block.backgroundColor}`}>
            <div className={`container`}>
              <div className="title-section">
                <h2>{block.title}</h2>

                {/* TODO: Remove hardcoded CTA */}
                <Cta label={'Read all'} isButton />
              </div>

              <div className="row">
                {data.allDatoCmsPost.nodes.map(item => (
                  <div className="col-lg-4 mb-lg-0 mb-5">
                    <PostCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default LatestPost;
