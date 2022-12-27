import * as React from 'react';
import { isArray } from '../../../utils';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Global/Image/ImageWrapper';
import arrow from '../../Icons/Triple-Union.svg';

import './index.scss';

const HeroImageCenter = ({ backgroundColor, title, description, image, ctas }) => {
  return (
    <div className={`hero-image-center ${backgroundColor}`}>
      <img className="arrow-effect" src={arrow} alt="Arrow right" />

      <div className="container content">
        {title && <h1>{title}</h1>}

        {image && (
          <div className="image">
            <ImageWrapper image={image} objectFit="contain" />
          </div>
        )}

        {description && <div className="text" dangerouslySetInnerHTML={{ __html: description }} />}

        {isArray(ctas) && <CtaList ctas={ctas} />}
      </div>
    </div>
  );
};

export default HeroImageCenter;
