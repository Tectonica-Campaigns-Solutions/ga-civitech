import * as React from 'react';
import { isArray } from '../../../../utils';
import CtaList from '../../Cta/CtaList';
import ImageWrapper from '../../Image/ImageWrapper';
import arrows from '../../../Icons/Union.svg';

import './index.scss';

export default function HeroImageBottom({ heroTitle, description, image, ctas }) {
  return (
    <div className="hero-image-bottom-container">
      <div className="container">
        <div className="row justify-content-center">
          {heroTitle && <h1>{heroTitle}</h1>}
          {description && <div className="description" dangerouslySetInnerHTML={{ __html: description }} />}

          {isArray(ctas) && <CtaList ctas={ctas} />}

          {image && (
            <div className="image-container">
              <ImageWrapper image={image} />
            </div>
          )}
        </div>
      </div>

      <img className="arrows" src={arrows} alt="Arrows effect" />
    </div>
  );
}
