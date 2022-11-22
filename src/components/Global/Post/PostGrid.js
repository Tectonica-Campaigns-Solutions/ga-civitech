import * as React from 'react';
import { isArray } from '../../../utils/array.utils';
import Tag from '../Tag/Tag';
import StructuredTextDefault from '../../StructuredTextDefault';
import RelatedProductGrid from '../RelatedProduct/RelatedProductGrid';

import './index.scss';

export default function PostGrid({ content, tags }) {
  return (
    <div className="post-content container">
      <div className="row">
        <div className="col-lg-6 offset-md-1 content">
          <StructuredTextDefault content={content} />

          {isArray(tags) && (
            <div className="tags">
              {tags.map(item => (
                <Tag title={item.name} />
              ))}
            </div>
          )}
        </div>

        <div className="col-lg-4 offset-md-1">
          <RelatedProductGrid />
        </div>
      </div>
    </div>
  );
}
