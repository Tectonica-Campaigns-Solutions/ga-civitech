import React from 'react';
import { Link } from 'gatsby';
import { isArray } from '../../../utils/array.utils';
import GlobalImage from '../../Global/GlobalImage/GlobalImage';
import Tag from '../../Global/Tag/Tag';
import { pathToModel } from '../../../utils';

import './index.scss';

export default function BlogPost({ post }) {
  return (
    <div className="blog-post-detail">
      <Link to={`${pathToModel('post', post.slug)}`}>
        <GlobalImage image={post.image} />
      </Link>

      <div className="meta">
        <span className="date">{post.meta.createdAt}</span>

        {isArray(post.tags) && (
          <div className="tags">
            {post.tags.map(tag => (
              <Tag title={tag.name} />
            ))}
          </div>
        )}
      </div>

      <Link to={`${pathToModel('post', post.slug)}`}>
        <h3>{post.title}</h3>
      </Link>
    </div>
  );
}
