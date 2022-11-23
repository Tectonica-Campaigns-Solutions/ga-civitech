import * as React from 'react';
import RelatedProductCard from './RelatedProductCard';

export default function RelatedProductGrid({ relatedProducts }) {
  console.log(relatedProducts)
  return (
    <div className="post-related-product-container">
      {
        relatedProducts.nodes.map( item => {
          return (
            <RelatedProductCard
              preTitle="Related product"
              title={item.title}
              slug={item.slug}
              image={{ url: 'https://www.datocms-assets.com/79535/1664791181-image-post.jpg?auto=format&w=646' }}
              description="A short description of the tools that are part of this specific toolset. Ipsum dolor sit amet, consectetur adipiscing elit."
            />
          )
        })
      }
    </div>
  );
}
