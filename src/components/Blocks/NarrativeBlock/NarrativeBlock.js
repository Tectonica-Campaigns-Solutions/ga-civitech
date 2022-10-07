import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import CTSlider from "../../Slider/CTSlider"
import Cta from "../../Global/Cta/Cta"

import "./index.scss"

export default function NarrativeBlock({ block }) {
  return (
    <div className={`component-narrative-block ${block.backgroundColor}`}>
      <div className="container pt-4 pb-4">
        <div className={`row ${block.alignment === 'right' ? 'flex-row-reverse' : ''}`}>
          <div className="col-lg-6">
            <h2>{block.title}</h2>
            {block.textContent}
            {/* <div className="ctas-block">
            {
              block.ctas?.map(cta => <Cta key={cta.id} url={cta.link.content.slug} label={cta.title}/>)
            }
          </div> */}
          </div>

          {Array.isArray(block.image) && block.image.length > 0 ? (
            <div className="col-lg-6">
              <CTSlider>
                {block.image.map(img => (
                  <GatsbyImage image={img.gatsbyImageData} alt={img.alt} />
                ))}
              </CTSlider>
            </div>
          ) : block.image ? (
            <div className="col-lg-6">
              <GatsbyImage image={block.image?.gatsbyImageData} alt={block.image?.alt} />
            </div>
          ) : null}

        </div>
      </div>
    </div>

  )
}
