import React from 'react'
import "./index.scss"
import { GatsbyImage } from 'gatsby-plugin-image'
function Tab({item}) {
  const testimonial = item.testimonial
  return (
    <div className="tab-content">
      <GatsbyImage image={testimonial.image?.gatsbyImageData} />
      { testimonial?.quote}
      { testimonial?.author}
    </div>
    
  )
}

export default Tab