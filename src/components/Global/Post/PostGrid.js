import * as React from 'react';
import { isArray } from '../../../utils';
import Tag from '../Tag/Tag';
import StructuredTextDefault from '../../StructuredTextDefault';
import RelatedProductGrid from '../RelatedProduct/RelatedProductGrid';
import ShareButtons from '../ShareButton/ShareButton';
import LatestPost from '../../Blocks/LatestPost/LatestPost';

import './index.scss';

export default function PostGrid({ content, tags, relatedProduct, relatedPost, titleLatest }) {
  const hasRelatedProducts = relatedProduct != null;

  return (
    <>
      <div className="post-content">
        <div className="container">
          <div className={`row ${!hasRelatedProducts ? 'justify-content-center' : ''}`}>
            <div className={`content ${hasRelatedProducts ? 'col-lg-7' : 'col-lg-10'}`}>
              {content && <StructuredTextDefault content={content} />}

              {isArray(tags) && (
                <div className="tags mt-5">
                  {tags.map(item => (
                    <Tag title={item.name} />
                  ))}
                </div>
              )}
            </div>

            {hasRelatedProducts && (
              <div className="col-lg-4 offset-md-1">
                <RelatedProductGrid relatedProduct={relatedProduct} relatedPost={relatedPost.nodes[0]} />
              </div>
            )}

            <ShareButtons />
          </div>
        </div>
      </div>

      <LatestPost block={{ title: titleLatest }} />
    </>
  );
}
