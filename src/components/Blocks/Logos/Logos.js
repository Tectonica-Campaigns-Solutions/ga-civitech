import React from 'react';
import CtaList from "../../Global/Cta/CtaList";
import GlobalImage from '../../Global/GlobalImage/GlobalImage';

import "./index.scss";

function Logos({ block }) {
  return (
    <div className={`logos-block ${block.backgroundColor}`}>
      <div className="container">
        <h2>{block.title}</h2>
        <div className="intro">
          {block.intro}
        </div>

        {
          block.logos && (
            <div className="row logos-list justify-content-center g-5">
              {
                block.logos.map(logo => (
                  <div className="col-lg-2 col-md-3 col-6">
                    <a href={logo.url} target="_blank">
                      <GlobalImage image={logo.icon} />
                    </a>
                  </div>
                ))
              }
            </div>
          )
        }

        {
          block.ctas && (
            <div className="logos-ctas">
              <CtaList ctas={block.ctas} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Logos