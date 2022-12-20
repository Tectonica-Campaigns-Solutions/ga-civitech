import React from 'react';
import { isArray } from '../../../utils/array.utils';
import CtaList from '../../Global/Cta/CtaList';
import GlobalImage from '../../Global/Image/GlobalImage';
import ImageWrapper from '../../Global/Image/ImageWrapper';

import './index.scss';

export default function NarrativeBlock({ block }) {
  const {
    backgroundColor,
    verticalCtas = false,
    classNames,
    alignment,
    logo,
    pretitle,
    title,
    textContent,
    ctas,
    image,
  } = block;

  const hasImages = image?.length > 0;
  const isAlignmentCenter = alignment === 'center';
  const hasImageAndCentered = hasImages && isAlignmentCenter;

  return (
    <div className={`component-narrative-block ${backgroundColor} ${classNames}`}>
      <div className="container pb-5">
        <div className={`row align-items-center ${alignment === 'left' ? 'flex-row-reverse' : ''}`}>
          <div
            className={`${hasImageAndCentered || !hasImages ? 'col-lg-12' : 'col-lg-6 mb-5 mb-lg-0'} ${
              alignment === 'left' ? 'offset-lg-1' : ''
            } ${isAlignmentCenter ? 'center-content' : ''}`}
          >
            {logo && (
              <div className="logo">
                <GlobalImage image={logo} />
              </div>
            )}

            {pretitle && <h3>{pretitle}</h3>}
            {title && <h2>{title}</h2>}

            {textContent && <div className="text-content" dangerouslySetInnerHTML={{ __html: textContent }} />}

            {isArray(ctas) && (
              <div className={`${verticalCtas ? 'vertical-ctas' : ''}`}>
                <CtaList ctas={ctas} />
              </div>
            )}
          </div>

          {isArray(image) && (
            <div
              className={`${alignment === 'center' ? 'col-lg-12' : 'col-lg-5'} ${
                alignment === 'right' ? 'offset-lg-1' : ''
              }`}
            >
              <ImageWrapper image={image} objectFit="contain" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
