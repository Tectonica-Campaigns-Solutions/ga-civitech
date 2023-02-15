import * as React from 'react';
import NarrativeBlock from '../../../Blocks/NarrativeBlock/NarrativeBlock';

import './index.scss';

export default function HeroImageRight(data) {
  const heroData = {
    backgroundColor: data?.backgroundColor,
    alignment: data?.alignment || 'right',
    title: data.heroTitle ? data.heroTitle : data.title,
    textContent: data.description,
    image: data.image ? [data.image] : null,
    ctas: data.ctas,
    video: data.video,
    classNames: 'pb-5',
  };

  return (
    <div className={`hero-image-right ${heroData.backgroundColor}`} style={{ paddingTop: '100px' }}>
      <NarrativeBlock block={heroData} usePrimaryHeading />
    </div>
  );
}
