import React from 'react';
import CtaList from '../../../Global/Cta/CtaList';
import Toolset from '../../../Global/Toolset/Toolset';
import GlobalImage from '../../../Global/Image/GlobalImage';
import { isArray } from '../../../../utils/array.utils';

import './index.scss';

function TabGeneric({ item }) {
  const { testimonial, title, text, ctas } = item;

  return (
    <div className="tab-generic-content">
      <div className="row">
        {testimonial && (
          <div className="col-lg-4 testimonial">
            {testimonial?.image && (
              <div className="content-image">
                <GlobalImage image={testimonial.image} />
              </div>
            )}

            <div className="quote-information">
              <div className="quote">{testimonial?.quote}</div>
              <div className="author">{testimonial?.author}</div>
            </div>
          </div>
        )}

        <div className="col-lg-8 d-flex flex-column tab-information mt-5 mt-lg-0">
          <div className="flex-grow-1 mb-5 mb-lg-0">
            <h2>{title}</h2>
            <div className="description" dangerouslySetInnerHTML={{ __html: text }} />

            {isArray(ctas) && (
              <div className="mb-5">
                <CtaList ctas={ctas} />
              </div>
            )}
          </div>

          <Toolset toolset={item} />
        </div>
      </div>
    </div>
  );
}

export default TabGeneric;
