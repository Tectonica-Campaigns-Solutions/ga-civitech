import * as React from 'react';
import NarrativeBlock from '../Blocks/NarrativeBlock/NarrativeBlock';

export default function HeroImageRight(data) {
  const heroData = {
    backgroundColor: data?.backgroundColor,
    alignment: data?.alignment || 'right',
    title: data.title,
    textContent: data.description,
    image: data.image ? [data.image] : null,
    ctas: data.ctas,
    classNames: 'pb-5',
  };

  return (
    <div className={`${heroData.backgroundColor} py-5 mb-5`}>
      <NarrativeBlock block={heroData} />
    </div>
  );
}
