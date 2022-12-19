import * as React from 'react';
import { isArray } from '../../../utils/array.utils';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Global/Image/ImageWrapper';

import './index.scss';

const HeroImageCenter = ({ backgroundColor, title, description, image, ctas }) => {
  return (
    <div className={`hero-image-center ${backgroundColor}`}>
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
