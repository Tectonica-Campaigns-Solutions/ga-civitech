import React from 'react';
import { isArray } from '../../../utils/array.utils';
import GlobalImage from '../../Global/GlobalImage/GlobalImage';

import './index.scss';

const PostCard = ({ item }) => {
  return (
    <div className="post-card">
      <div className="image">
        <GlobalImage image={item.image} />
      </div>

      <div className="metadata">
        <span className="date">{item.meta.publishedAt}</span>
        {isArray(item.tags) && item.tags.map(tag => <span className="tag">{tag.name}</span>)}
      </div>

      <h3>{item.title}</h3>
    </div>
  );
};

export default PostCard;
