import { Link } from 'gatsby';
import React from 'react';
import GlobalImage from '../GlobalImage/GlobalImage';
import Tag from '../Tag/Tag';
import { pathToModel } from '../../../utils';
import { isArray } from '../../../utils/array.utils';

import './index.scss';

export default function BlogPostCard({ slug, image, date, tags, title }) {
  return (
    <div className="blog-post-card">
      <Link to={`${pathToModel('post', slug)}`}>
        <GlobalImage image={image} />
      </Link>

      <div className="meta">
        <span className="date">{date}</span>

        {isArray(tags) && (
          <div className="tags">
            {tags.map(tag => (
              <Tag title={tag.name} />
            ))}
          </div>
        )}
      </div>

      <Link to={`${pathToModel('post', slug)}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
