import React from 'react';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Global/Image/ImageWrapper';
import { isArray } from '../../../utils';
import Link from '../../Global/Link/Link';

import './index.scss';

function Logos({ block }) {
  const { title, intro, logos, ctas = [], backgroundColor } = block;

  if (!isArray(logos)) {
    return null;
  }

  return (
    <div className={`logos-block ${backgroundColor}`}>
      <div className="container">
        {title && <h2>{title}</h2>}

        {intro && <div className="intro" dangerouslySetInnerHTML={{ __html: intro }} />}

        {isArray(logos) && (
          <div className="row logos-list justify-content-center g-5">
            {logos.map((logo, index) => (
              <div className="col-lg-2 col-md-3 col-6" key={index}>
                <Link to={logo.url ? logo.url : null} target="_blank" rel="noreferrer">
                  <ImageWrapper image={logo.icon} />
                </Link>
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
