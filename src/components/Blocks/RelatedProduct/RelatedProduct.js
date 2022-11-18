import React from 'react'
import Link from '../../Global/Link'

function RelatedProduct({ block }) {
  return (
    <div className="related-product">
      <div className="container">
        <h2>{ block.title }</h2>
        <div>{ block.description }</div>
        <div>
          {
            block.products && block.products.length > 0 && (
              block.products.map(item => {
                return (<div>
                  {item.title}
                  { item.descriptionPreview }
                  <Link to={item.slug}>Read more</Link>
                  </div>)
              })
            )
          }
        </div>
       </div>
    </div>
  )
}

export default RelatedProduct