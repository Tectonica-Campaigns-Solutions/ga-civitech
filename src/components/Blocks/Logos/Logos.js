import React from 'react'
import "./index.scss"
import { GatsbyImage } from 'gatsby-plugin-image'
import Cta from "../../Global/Cta/Cta"

function Logos({block}) {
  return (
    <div className={`logos-block ${block.backgroundColor}`}>
      <div className="container">
        <h2>{block.title}</h2>
        <div className="intro">
          {block.intro}
        </div>
        {
          block.logos && (
            <div className="row logos-list justify-content-center">
              { 
                block.logos.map(logo => {
                  return (
                  <div className="col-lg-2">
                    <a href={logo.url} target="_blank">
                      <GatsbyImage image={logo.icon?.gatsbyImageData} />
                    </a>
                  </div>
                  ) 
                })
              }
            </div>
          )
        }
        <div className="ctas">
          {
            block.ctas?.map(cta => <Cta key={cta.id} url={cta.link.content ? cta.link.content.slug : cta.link.url } label={cta.title ? cta.title : cta.link.content.label}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Logos