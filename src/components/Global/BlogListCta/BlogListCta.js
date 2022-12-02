import React from 'react';
import Cta from '../Cta/Cta';

function BlogListCta({ text, cta, label }) {
  return (
    <div className="col-lg-12">
      <div className="blog-post-tab-cta">
        <div className="row align-items-center">
          <div className="col-lg-8">{text && <h4>{text}</h4>}</div>

          <div className="col-lg-3 offset-lg-1 mb-3">
            <Cta label={label} url={`/${cta.content.slug}`} isButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogListCta;
