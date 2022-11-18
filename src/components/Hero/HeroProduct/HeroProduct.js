import * as React from 'react';
import NarrativeBlock from '../../Blocks/NarrativeBlock/NarrativeBlock';

import './index.scss';

export default function HeroProduct({ data }) {
  const productBlockData = {
    backgroundColor: data.backgroundColor,
    alignment: data.alignment,
    title: data.title,
    textContent: data.description,
    image: [data.image],
    ctas: data.ctas,
    logo: data.logo,
  };

  return (
    <div className="hero-single-product">
      <NarrativeBlock block={productBlockData} />
    </div>
  );
}
