import React from 'react';
import { Link } from 'gatsby';
import { pathToModel } from '../../../utils';
import GlobalImage from '../Image/GlobalImage';
import Cta from '../Cta/Cta';

import './index.scss';

export default function RelatedProductCard({ preTitle, title, slug, image, description }) {
  return (
    <div className="related-product-card">
      <span>{preTitle}</span>

      <Link to={slug}>
        <h2>{title}</h2>
      </Link>

      <Link to={slug}>
        <GlobalImage image={image} />
      </Link>

      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Cta isButton label="Read more" to={pathToModel('product', slug)} />
    </div>
  );
}
