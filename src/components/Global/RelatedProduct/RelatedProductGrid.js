import * as React from 'react';
import RelatedProductCard from './RelatedProductCard';

export default function RelatedProductGrid({ relatedProduct, relatedPost = null }) {
  return (
    <div className="post-related-product-container">
      {relatedProduct && (
        <RelatedProductCard
          preTitle="Related product"
          title={relatedProduct.title}
          slug={relatedProduct.slug}
          image={relatedProduct.imagePreview}
          description={relatedProduct.descriptionPreview}
          model={relatedProduct.model}
        />
      )}

      {relatedPost && (
        <RelatedProductCard
          preTitle="Feature"
          title={relatedPost.title}
          slug={relatedPost.slug}
          image={relatedPost.imagePreview}
          description={relatedPost.descriptionPreview}
          model={relatedPost.model}
        />
      )}
    </div>
  );
}
