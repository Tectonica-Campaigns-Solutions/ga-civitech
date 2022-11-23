import * as React from 'react';
import RelatedProductCard from './RelatedProductCard';

export default function RelatedProductGrid() {
  return (
    <div className="post-related-product-container">
      <RelatedProductCard
        preTitle="Related product"
        title="Voter Registration"
        slug=""
        image={{ url: 'https://www.datocms-assets.com/79535/1664791181-image-post.jpg?auto=format&w=646' }}
        description="A short description of the tools that are part of this specific toolset. Ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <RelatedProductCard
        preTitle="Feature"
        title="How the Sunrise Movement increases engagement across the board"
        slug=""
        image={{ url: 'https://www.datocms-assets.com/79535/1664791181-image-post.jpg?auto=format&w=646' }}
        description="A short description of the tools that are part of this specific toolset. Ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
}
