import * as React from 'react';
import CtaList from '../Global/Cta/CtaList';
import ImageWrapper from '../Slider/ImageWrapper';

import './index.scss';

export default function HeroImageBottom({ heroTitle, description, image, ctas }) {
  return (
    <div className="hero-image-bottom-container">
      <div className="container">
        <div className="row justify-content-center">
          <h2>{heroTitle}</h2>
          <div className="description" dangerouslySetInnerHTML={{ __html: description }} />

          {Array.isArray(ctas) && ctas.length > 0 && <CtaList ctas={ctas} />}

          {image && (
            <div className="image-container">
              <ImageWrapper image={image} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
