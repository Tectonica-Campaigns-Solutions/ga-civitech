import * as React from 'react';
import { isArray } from '../../../../utils';
import CtaList from '../../Cta/CtaList';
import ImageWrapper from '../../Image/ImageWrapper';
import arrow from '../../../Icons/Triple-Union.svg';

import './index.scss';

const HeroImageCenter = ({ backgroundColor, heroTitle, description, image, ctas }) => {
  return (
    <div className={`hero-image-center ${backgroundColor}`}>
      <img className="arrow-effect" src={arrow} alt="Arrow right" />

      <div className="container content">
        {heroTitle && <h1>{heroTitle}</h1>}

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
