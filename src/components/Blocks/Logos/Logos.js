import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import CtaList from "../../Global/Cta/CtaList";

import "./index.scss";

function Logos({ block }) {
  return (
    <div className={`logos-block ${block.backgroundColor}`}>
      <div className="container">
        <h2>{block.title}</h2>
        <div className="container intro">
          {block.intro}
        </div>

        {
          block.logos && (
            <div className="row logos-list justify-content-center g-5">
              {
                block.logos.map(logo => (
                  <div className="col-lg-2 col-md-3 col-6">
                    <a href={logo.url} target="_blank">
                      <GatsbyImage image={logo.icon?.gatsbyImageData} />
                    </a>
                  </div>
                ))
              }
            </div>
          )
        }

        <div className="ctas">
          <CtaList ctas={block.ctas} />
        </div>
      </div>
    </div>
  )
}

export default Logos