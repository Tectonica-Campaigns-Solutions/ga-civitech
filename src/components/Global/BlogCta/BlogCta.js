import React from 'react';
import { isArray } from '../../../utils/array.utils';
import { getCtaUrl } from '../../../utils/cta.utils';
import Cta from '../Cta/Cta';
import GlobalImage from '../Image/GlobalImage';

import './index.scss';

export default function BlogCta({ title, cta, image }) {
  const renderCta = () => {
    if (!isArray(cta)) return null;

    const [firstCta] = cta;

    return <Cta url={`/${getCtaUrl(firstCta)}`} label={firstCta.title} isButton />;
  };

  return (
    <div className="blog-cta-container light-red">
      <div className="row">
        {image && (
          <div className="col-lg-4 image">
            <GlobalImage image={image} />
          </div>
        )}

        <div className="col">
          {title && <h4>{title}</h4>}
          {renderCta()}
        </div>
      </div>
    </div>
  );
}
