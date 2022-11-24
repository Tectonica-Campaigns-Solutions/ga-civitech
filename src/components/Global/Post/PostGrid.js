import * as React from 'react';
import { isArray } from '../../../utils/array.utils';
import Tag from '../Tag/Tag';
import StructuredTextDefault from '../../StructuredTextDefault';
import RelatedProductGrid from '../RelatedProduct/RelatedProductGrid';

import './index.scss';

export default function PostGrid({ content, tags, relatedProduct, relatedPost = null }) {
  const hasRelatedProducts = relatedProduct != null || relatedPost != null;

  return (
    <div className="post-content container">
      <div className={`row ${!hasRelatedProducts ? 'justify-content-center' : ''}`}>
        <div className={`${hasRelatedProducts ? 'col-lg-6 offset-md-1 content' : 'col-lg-10'}`}>
          <StructuredTextDefault content={content} />

          {isArray(tags) && (
            <div className="tags">
              {tags.map(item => (
                <Tag title={item.name} />
              ))}
            </div>
          )}
        </div>

        {hasRelatedProducts && (
          <div className="col-lg-4 offset-md-1">
            <RelatedProductGrid relatedProduct={relatedProduct} relatedPost={relatedPost} />
          </div>
        )}
      </div>
    </div>
  );
}
