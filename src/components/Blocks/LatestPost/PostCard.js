import React from 'react';
import { Link } from 'gatsby';
import { isArray } from '../../../utils/array.utils';
import GlobalImage from '../../Global/GlobalImage/GlobalImage';
import { pathToModel } from '../../../utils';
import Tag from '../../Global/Tag/Tag';

import './index.scss';

const PostCard = ({ item }) => {
  return (
    <div className="post-card">
      <div className="image">
        <Link to={pathToModel('post', item.slug)}>
          <GlobalImage image={item.image} />
        </Link>
      </div>

      <div className="metadata">
        <span className="date">{item.meta.publishedAt}</span>

        <div className="tags">{isArray(item.tags) && item.tags.map(tag => <Tag title={tag.name} />)}</div>
      </div>

      <Link to={pathToModel('post', item.slug)}>
        <h3>{item.title}</h3>
      </Link>
    </div>
  );
};

export default PostCard;
