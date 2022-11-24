import React from 'react';
import { Link } from 'gatsby';
import { pathToModel } from '../../../utils';
import GlobalImage from '../Image/GlobalImage';
import Cta from '../Cta/Cta';

import './index.scss';

export default function RelatedProductCard({ preTitle, title, slug, image, description, model }) {
  const link = pathToModel(model.apiKey, slug);

  return (
    <div className="related-product-card">
      <h3>{preTitle}</h3>

      <Link to={link}>
        <h2>{title}</h2>
      </Link>

      {image && (
        <Link className="image" to={link}>
          <GlobalImage image={image} />
        </Link>
      )}

      {description && <p dangerouslySetInnerHTML={{ __html: description }} />}

      <Cta isButton label="Read more" url={link} />
    </div>
  );
}
