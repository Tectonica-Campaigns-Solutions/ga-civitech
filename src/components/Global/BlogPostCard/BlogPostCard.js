import React from 'react';
import Link from '../Link/Link';
import GlobalImage from '../Image/GlobalImage';
import Tag from '../Tag/Tag';
import { pathToModel } from '../../../utils';
import { isArray } from '../../../utils';

import './index.scss';

export default function BlogPostCard({ slug, model, image, date, tags, title }) {
  const link = pathToModel(model?.apiKey, slug);

  return (
    <div className="blog-post-card">
      <div className="image">
        <Link to={link}>
          <GlobalImage image={image} />
        </Link>
      </div>

      <div className="meta">
        {date && <span className="date">{date}</span>}

        {isArray(tags) && (
          <div className="tags">
            {tags.map(tag => (
              <Tag title={tag.name} />
            ))}
          </div>
        )}
      </div>

      {title && (
        <Link to={link}>
          <h3>{title}</h3>
        </Link>
      )}
    </div>
  );
}
