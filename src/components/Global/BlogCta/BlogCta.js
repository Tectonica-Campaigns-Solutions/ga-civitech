import React from 'react';
import Cta from '../Cta/Cta';
import GlobalImage from '../Image/GlobalImage';

import './index.scss';

export default function BlogCta({ title, slug, image }) {
  return (
    <div className="blog-cta-container light-red">
      <div className="row">
        {image && (
          <div className="col-lg-4 image">
            <GlobalImage image={image} />
          </div>
        )}

        <div className="col">
          {title && <h4>{title}</h4>}
          {slug && <Cta url={slug} label="Learn more" isButton />}
        </div>
      </div>
    </div>
  );
}
