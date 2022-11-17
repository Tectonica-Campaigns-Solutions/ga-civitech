import * as React from 'react';
import Tag from '../Global/Tag/Tag';
import StructuredTextDefault from '../StructuredTextDefault';

import './index.scss';

export default function PostGrid({ content, tags }) {
  return (
    <div className="post-content container">
      <div className="row">
        <div className="col-lg-6 offset-md-1 content">
          <StructuredTextDefault content={content} />

          {Array.isArray(tags) && tags.length > 0 && (
            <div className="tags">
              {tags.map(item => (
                <Tag title={item.name} />
              ))}
            </div>
          )}
        </div>

        <div className="col-lg-4 offset-md-1 related-products">
          <h3>Related product</h3>
        </div>
      </div>
    </div>
  );
}
