import React from 'react';
import { isArray } from '../../../utils/array.utils';
import CtaList from '../../Global/Cta/CtaList';
import GlobalImage from '../../Global/Image/GlobalImage';
import ImageWrapper from '../../Global/Image/ImageWrapper';

import './index.scss';

export default function NarrativeBlock({ block }) {
  const hasImages = block.image?.length > 0;
  const hasImageAndCentered = hasImages && block.alignment === 'center';

  return (
    <div className={`component-narrative-block ${block.backgroundColor} ${block.classNames}`}>
      <div className="container pb-5">
        <div className={`row ${block.alignment === 'left' ? 'flex-row-reverse' : ''}`}>
          <div
            className={`${hasImageAndCentered || !hasImages ? 'col-lg-12' : 'col-lg-6 mb-5 mb-lg-0'} ${
              block.alignment === 'left' ? 'offset-lg-1' : ''
            } ${block.alignment === 'center' ? 'center-content' : ''}`}
          >
            {block.logo && (
              <div className="logo">
                <GlobalImage image={block.logo} />
              </div>
            )}

            {block.pretitle && <h3>{block.pretitle}</h3>}
            {block.title && <h2>{block.title}</h2>}

            {block.textContent && <p dangerouslySetInnerHTML={{ __html: block.textContent }} />}

            {isArray(block.ctas) && <CtaList ctas={block.ctas} />}
          </div>

          {isArray(block.image) && (
            <div
              className={`${block.alignment === 'center' ? 'col-lg-12' : 'col-lg-5'} ${
                block.alignment === 'right' ? 'offset-lg-1' : ''
              }`}
            >
              <ImageWrapper image={block.image} objectFit="contain" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
