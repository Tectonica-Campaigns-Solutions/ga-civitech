import React from 'react';
import { isArray } from '../../../utils';
import CtaList from '../../Global/Cta/CtaList';
import GlobalImage from '../../Global/Image/GlobalImage';
import ImageWrapper from '../../Global/Image/ImageWrapper';
import VideoPlayer from '../../Global/VideoPlayer/VideoPlayer';

import './index.scss';

export default function NarrativeBlock({ block, usePrimaryHeading }) {
  const {
    backgroundColor,
    verticalCtas = false,
    classNames,
    alignment,
    logo,
    sectionTitle,
    pretitle,
    title,
    useTitleAsH1,
    textContent,
    ctas,
    image,
    video,
    alt,
  } = block;

  const hasImages = image?.length > 0;
  const isAlignmentCenter = alignment === 'center';
  const hasMedia = hasImages || video;
  const hasImageAndCentered = hasMedia && isAlignmentCenter;

  const shouldUseH1 = usePrimaryHeading || useTitleAsH1;

  return (
    <div className={`component-narrative-block ${backgroundColor} ${classNames}`}>
      <div className="container pb-5">
        {sectionTitle && (
          <div className="row">
            <div className={`col pb-3 ${isAlignmentCenter ? 'text-center' : ''}`}>{<h2>{sectionTitle}</h2>}</div>
          </div>
        )}

        <div className={`row align-items-center ${alignment === 'left' ? 'flex-row-reverse' : ''}`}>
          <div
            className={`${hasImageAndCentered || !hasMedia ? 'col-lg-12 mb-5' : 'col-lg-6 mb-5 mb-lg-0'} ${
              alignment === 'left' ? 'offset-lg-1' : ''
            } ${isAlignmentCenter ? 'center-content' : ''}`}
          >
            {logo && (
              <div className="logo">
                <GlobalImage image={logo} />
              </div>
            )}

            {pretitle && <h3>{pretitle}</h3>}
            {title && (shouldUseH1 ? <h1>{title}</h1> : <h2>{title}</h2>)}

            {textContent && <div className="text-content" dangerouslySetInnerHTML={{ __html: textContent }} />}

            {isArray(ctas) && (
              <div className={`${verticalCtas ? 'vertical-ctas' : ''}`}>
                <CtaList ctas={ctas} />
              </div>
            )}
          </div>

          {/* Render image or video */}
          {(isArray(image) || video) && (
            <div
              className={`${alignment === 'center' ? 'col-lg-12 text-center' : 'col-lg-5'} ${
                alignment === 'right' ? 'offset-lg-1' : ''
              }`}
            >
              {isArray(image) ? (
                <ImageWrapper alt={alt} image={image} objectFit="contain" />
              ) : (
                video && <VideoPlayer video={video} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
