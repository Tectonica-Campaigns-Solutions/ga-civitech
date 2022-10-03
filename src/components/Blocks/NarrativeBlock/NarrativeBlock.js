import { GatsbyImage } from "gatsby-plugin-image"
import Cta from "../../Global/Cta/Cta"
import Slider from "react-slick"
import React from "react"
import "./index.scss"

export default function NarrativeBlock({ block }) {
  console.log(block)
  return ( 
  <div className={`component-narrative-block ${block.backgroundColor}`}>
    <div className="container pt-4 pb-4">
      <div className={`row ${block.alignment === 'right' ? 'flex-row-reverse': ''}`}>
        <div className="col-lg-6">
          <h2>{ block.title }</h2>
          { block.textContent }
          {/* <div className="ctas-block">
            {
              block.ctas?.map(cta => <Cta key={cta.id} url={cta.link.content.slug} label={cta.title}/>)
            }
          </div> */}
        </div>
        {/* {
          block.image && (
            <div className="col-lg-6">
              <GatsbyImage image={block.image?.gatsbyImageData} alt={block.image?.alt} />
            </div>
          )
        } */}
      </div>
    </div>
  </div>  
  
  )
}
