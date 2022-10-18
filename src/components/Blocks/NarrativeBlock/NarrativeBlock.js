import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import CTSlider from "../../Slider/CTSlider"
import Cta from "../../Global/Cta/Cta"

import "./index.scss"

export default function NarrativeBlock({ block }) {
  const hasImages = block.image?.length > 0;
  const hasImageAndCentered = hasImages && block.alignment === 'center';

  return (
    <div className={`component-narrative-block ${block.backgroundColor}`}>
      <div className="container pt-4 pb-4">
        <div className={`row ${block.alignment === 'left' ? 'flex-row-reverse' : ''}`}>

          <div className={`${hasImageAndCentered || !hasImages ? "col-lg-12 text-center" : "col-lg-6"} ${block.alignment === "left" ? "offset-lg-1" : ""}`}>
            <h3>{block.pretitle}</h3>
            <h2>{block.title}</h2>
            <p>{block.textContent}</p>

            <div className="ctas-block">
            {
              block.ctas?.map(cta => {
                console.log(cta)
                return (<Cta key={cta.id} url={cta.link.content ? cta.link.content.slug : cta.link.url } label={cta.title ? cta.title : cta.link.content.label}/>)
              })
            }
          </div>
          </div>

          {Array.isArray(block.image) && hasImages ? (
            <div className={`${block.alignment === 'center' ? "col-lg-12" : "col-lg-5"} ${block.alignment === "right" ? "offset-lg-1" : ""}`}>
              <CTSlider>
                {block.image.map(img => (
                  <GatsbyImage image={img.gatsbyImageData} alt={img.alt} />
                ))}
              </CTSlider>
            </div>
          ) : block.image ? (
            <div className={`${block.alignment === 'center' ? "col-lg-12" : "col-lg-5"} ${block.alignment === "right" ? "offset-lg-1" : ""}`}>
              <GatsbyImage image={block.image?.gatsbyImageData} alt={block.image?.alt} />
            </div>
          ) : null}

        </div>
      </div>
    </div>

  )
}
