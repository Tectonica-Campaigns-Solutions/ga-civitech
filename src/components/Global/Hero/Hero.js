import React from 'react'
import Cta from '../Cta/Cta'
import { GatsbyImage } from "gatsby-plugin-image"

import "./index.scss";

function Hero({ ctas, title, content, image, shortcuts }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>{title}</h1>
            {content}
            <div className="ctas-block">
              {
                ctas?.map(cta => <Cta key={cta.id} url={cta.slug} label={cta.title} />)
              }
            </div>
          </div>
          {
            image && (
              <div className="col-lg-6">
                <GatsbyImage image={image?.gatsbyImageData} alt={image?.alt} />
              </div>
            )
          }
        </div>
        <div className="row mt-5 mb-5">
          {
            shortcuts && shortcuts.length > 0 && shortcuts.map(item => {
              return (
                <div class="col-lg-3">{item.title}</div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Hero