import React from 'react';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Global/Image/ImageWrapper';

import './index.scss';

function Logos({ block }) {
  return (
    <div className={`logos-block ${block.backgroundColor}`}>
      <div className="container">
        {block.title && <h2>{block.title}</h2>}

        {block.intro && <div className="intro" dangerouslySetInnerHTML={{ __html: block.intro }} />}

        {block.logos && (
          <div className="row logos-list justify-content-center g-5">
            {block.logos.map(logo => (
              <div className="col-lg-2 col-md-3 col-6">
                <a href={logo.url} target="_blank">
                  <ImageWrapper image={logo.icon} />
                </a>
              </div>
            ))}
          </div>
        )}

        {block.ctas && (
          <div className="logos-ctas">
            <CtaList ctas={block.ctas} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Logos;
