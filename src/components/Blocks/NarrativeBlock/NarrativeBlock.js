import React from 'react';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Slider/ImageWrapper';

import './index.scss';

export default function NarrativeBlock({ block }) {
  console.log(block)
  const hasImages = block.image?.length > 0;
  const hasImageAndCentered = hasImages && block.alignment === 'center';

  return (
    <div className={`component-narrative-block ${block.backgroundColor}`}>
      <div className="container pt-4 pb-4">
        <div className={`row ${block.alignment === 'left' ? 'flex-row-reverse' : ''}`}>
          <div
            className={`${hasImageAndCentered || !hasImages ? 'col-lg-12 text-center' : 'col-lg-6 mb-5 mb-lg-0'} ${
              block.alignment === 'left' ? 'offset-lg-1' : ''
            }`}
          >
            <h3>{block.pretitle}</h3>
            <h2>{block.title}</h2>

            <p dangerouslySetInnerHTML={{ __html: block.textContent }} />

            {block.ctas && block.ctas.length > 0 && <CtaList ctas={block.ctas} />}
          </div>

          {block.image && block.image.length > 0 && (
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
