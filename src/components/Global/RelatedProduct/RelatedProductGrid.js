import * as React from 'react';
import RelatedProductCard from './RelatedProductCard';

export default function RelatedProductGrid({ relatedProduct, relatedPost }) {
  return (
    <div className="post-related-product-container">
      {relatedProduct && (
        <RelatedProductCard
          preTitle="Related product"
          title={relatedProduct.title || relatedProduct.title}
          slug={relatedProduct.slug || relatedProduct.link?.slug}
          image={relatedProduct.imagePreview || relatedProduct.image}
          description={relatedProduct.descriptionPreview || relatedProduct.description}
          model={relatedProduct.model || relatedProduct.link?.model}
        />
      )}

      {relatedPost && (
        <RelatedProductCard
          preTitle="Feature"
          title={relatedPost.title}
          slug={relatedPost.slug}
          image={relatedPost.image}
          description={relatedPost.summary}
          model={relatedPost.model}
        />
      )}
    </div>
  );
}
