import * as React from 'react';
import { Link } from 'gatsby';
import NarrativeBlock from '../../Blocks/NarrativeBlock/NarrativeBlock';
import vector from '../../Icons/login-vector.svg';

import './index.scss';

export default function HeroProduct({ data, loginTitle }) {
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
    <>
      <div className="hero-single-product">
        {data.textLink && data.linkUrl && (
          <div className="login-product">
            <span>{data.textLink}</span>

            <Link to={data.linkUrl} target="_blank">
              {loginTitle}
              <img src={vector} />
            </Link>
          </div>
        )}

        <NarrativeBlock block={productBlockData} />
      </div>
    </>
  );
}
