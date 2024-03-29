import * as React from 'react';
import Tag from '../../Tag/Tag';
import ImageWrapper from '../../Image/ImageWrapper';

import './index.scss';

export default function HeroBlogPost({ title, summary, createdAt, topic, image }) {
  return (
    <div className="hero-blog-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">{image && <ImageWrapper image={image} />}</div>

          <div className="col-lg-6 content">
            <div className="info">
              {createdAt && <span className="date">{createdAt}</span>}
              {topic ? <Tag title={topic.name} /> : null}
            </div>

            {title && <h1>{title}</h1>}
            {summary && <div className="summary" dangerouslySetInnerHTML={{ __html: summary }} />}
          </div>
        </div>
      </div>
    </div>
  );
}
