import * as React from 'react';
import Tag from '../../Global/Tag/Tag';
import ImageWrapper from '../../Slider/ImageWrapper';

import './index.scss';

export default function HeroBlogPost({ title, summary, createdAt, topic, image }) {
  return (
    <div className="hero-blog-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ImageWrapper image={image} />
          </div>

          <div className="col-lg-6 content">
            <div className="info">
              <span className="date">{createdAt}</span>
              <Tag title={topic ? topic.name : ''} />
            </div>

            <h2>{title}</h2>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
