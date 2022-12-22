import React from 'react';
import { isArray } from '../../../utils/array.utils';
import CtaList from '../../Global/Cta/CtaList';
import GlobalImage from '../../Global/Image/GlobalImage';
import ImageWrapper from '../../Global/Image/ImageWrapper';

import './index.scss';

export default function NarrativeBlock({ block }) {
  console.log(block)
  const {
    backgroundColor,
    verticalCtas = false,
    classNames,
    alignment,
    logo,
    sectionTitle,
    pretitle,
    title,
    textContent,
    ctas,
    image,
    video,
  } = block;

  const hasImages = image?.length > 0;
  const isAlignmentCenter = alignment === 'center';
  const hasImageAndCentered = hasImages && isAlignmentCenter;

  return (
    <div className={`component-narrative-block ${backgroundColor} ${classNames}`}>
      <div className="container pb-5">
        {
          sectionTitle && <div className="row"><div className="col pb-3"><h2>{ sectionTitle }</h2></div></div>
        }
        <div className={`row align-items-center ${alignment === 'left' ? 'flex-row-reverse' : ''}`}>
          <div
            className={`${hasImageAndCentered || !hasImages && !video ? 'col-lg-12' : 'col-lg-6 mb-5 mb-lg-0'} ${
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
          {!image && video && (
              <div
              className={`${alignment === 'center' ? 'col-lg-12' : 'col-lg-5'} ${
                alignment === 'right' ? 'offset-lg-1' : ''
              }`}>
                <img src={video.thumbnailUrl} />
              </div>
          )}
        </div>
      </div>
    </div>
  );
}
