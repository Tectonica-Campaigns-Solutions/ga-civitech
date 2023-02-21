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
    textContent,
    ctas,
    image,
    xlImage,
    video,
    alt,
  } = block;

  const hasImages = image?.length > 0;
  const isAlignmentCenter = alignment === 'center';
  const hasMedia = hasImages || video;
  const hasImageAndCentered = hasMedia && isAlignmentCenter;

  const shouldUseH1 = usePrimaryHeading;

  return (
    <div className={`component-narrative-block ${backgroundColor} ${classNames}`}>
      <div className="container pb-lg-5">
        {sectionTitle && (
          <div className="row">
            <div className={`col pb-3 ${isAlignmentCenter ? 'text-center' : ''}`}>{<h2>{sectionTitle}</h2>}</div>
          </div>
        )}

        <div className={`row align-items-center ${alignment === 'left' ? 'flex-row-reverse' : ''} ${alignment === 'center' ? 'justify-content-center' : ''}`}>
          <div
            className={`${hasImageAndCentered || !hasMedia ? 'col-lg-12' : 'col-lg-6 mb-lg-0'} ${
              alignment === 'left' ? 'offset-lg-1 mt-5 mt-lg-0' : ''
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
          {(isArray(image || xlImage) || video) && (
            <div
              className={`${isAlignmentCenter ? 'col-lg-8 text-center pt-4' : 'col-lg-5 mt-5 mt-lg-0'} ${
                alignment === 'right' ? 'offset-lg-1  mt-5 mt-lg-0' : ''
              }`}
            >
              {isArray(image || xlImage) ? (
                <ImageWrapper alt={alt} image={isAlignmentCenter ? xlImage : image} objectFit="contain" />
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
