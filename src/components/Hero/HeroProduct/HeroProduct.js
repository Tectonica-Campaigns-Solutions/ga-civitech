import * as React from 'react';
import NarrativeBlock from '../../Blocks/NarrativeBlock/NarrativeBlock';

import './index.scss';

export default function HeroProduct({ data }) {
  // convert image object to array to pass to narrativeblock
  const productBlockData = {
    backgroundColor: data.backgroundColor,
    alignment: data.alignment,
    title: data.title,
    textContent: data.description,
    image: data.image ? [data.image] : null,
    ctas: data.ctas,
    logo: data.logo,
  };

  return (
    <div className="hero-single-product">
      <NarrativeBlock block={productBlockData} />
    </div>
  );
}
