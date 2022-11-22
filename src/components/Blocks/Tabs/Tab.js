import React from 'react';
import CtaList from '../../Global/Cta/CtaList';
import Toolset from './Toolset';
import GlobalImage from '../../Global/GlobalImage/GlobalImage';
import { isArray } from '../../../utils/array.utils';

import './index.scss';

function Tab({ item }) {
  const testimonial = item.testimonial;

  return (
    <div className="tab-content">
      <div className="row">
        <div className="col-lg-4 testimonial">
          <div className="content-image">
            <GlobalImage image={testimonial.image} />
          </div>

          <div className="quote-information">
            <div className="quote">{testimonial?.quote}</div>

            <div className="author">{testimonial?.author}</div>
          </div>
        </div>

        <div className="col-lg-8 d-flex flex-column tab-information mt-5 mt-lg-0">
          <div className="flex-grow-1 mb-5 mb-lg-0">
            <h2>{item.title}</h2>
            <div className="description" dangerouslySetInnerHTML={{ __html: item.text }} />

            {isArray(item.ctas) && <CtaList ctas={item.ctas} />}
          </div>

          <Toolset toolset={item} />
        </div>
      </div>
    </div>
  );
}

export default Tab;
