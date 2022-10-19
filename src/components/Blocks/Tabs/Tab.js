import React from 'react'
import "./index.scss"
import { GatsbyImage } from 'gatsby-plugin-image'
import CtaList from '../../Global/Cta/CtaList'
import Toolset from './Toolset'

function Tab({item}) {
  const testimonial = item.testimonial
  return (
    <div className="tab-content">
        <div className="row">
          <div className="col-lg-4">
            <GatsbyImage image={testimonial.image?.gatsbyImageData} />
            <div>
              { testimonial?.quote}
            </div>
            <div>
              { testimonial?.author}
            </div>
          </div>
          <div className="col-lg-8">
            <h2>{ item.title }</h2>
            <div
               dangerouslySetInnerHTML={{__html: item.description}}
            />
            <CtaList ctas={item.ctas} />
            <Toolset toolset={item} />
          </div>
        </div>
      
    </div>
    
  )
}

export default Tab