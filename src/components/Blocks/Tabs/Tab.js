import React from 'react'
import "./index.scss"

function Tab({item}) {
  const testimonial = item.testimonial
  return (
    <div className="tab-content">
      { testimonial?.quote}
      { testimonial?.author}
    </div>
    
  )
}

export default Tab