import React from 'react';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Global/Image/ImageWrapper';
import { isArray } from '../../../utils';
import Link from '../../Global/Link/Link';

import './index.scss';

function Logos({ block }) {
  const { title, intro, logos, ctas = [], backgroundColor, alignment = null } = block;

  if (!isArray(logos)) {
    return null;
  }

  return (
    <div className={`logos-block ${backgroundColor}`}>
      <div className="container">
        {title && <h2 className={`text-${alignment}`}>{title}</h2>}

        {intro && <div className="intro" dangerouslySetInnerHTML={{ __html: intro }} />}

        {isArray(logos) && (
          <div className="row g-0 logos-list justify-content-center">
            {logos.map((logo, index) => (
              <div className="col-lg-2 col-md-3 col-6" key={index}>
                {logo.url ? (
                  <Link to={logo.url} target="_blank" rel="noreferrer">
                    <ImageWrapper image={logo.icon} />
                  </Link>
                ) : (
                  <ImageWrapper image={logo.icon} />
                )}
              </div>
            ))}
          </div>
        )}

        {isArray(ctas) && (
          <div className="logos-ctas">
            <CtaList ctas={ctas} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Logos;
