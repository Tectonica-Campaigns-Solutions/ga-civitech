import React from 'react'
import Cta from '../Cta/Cta'

function BlogListCta({ text, cta, label}) {
  return (
    <div className="col-lg-12">
      <div className="blog-post-tab-cta">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <h4>{ text }</h4>
          </div>

          <div className="col-lg-3">
            <Cta label={label} url={cta.link?.content ? cta.content?.slug : cta.url}  isButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogListCta