import React from 'react';
import CtaList from '../../../Global/Cta/CtaList';
import Toolset from '../../../Global/Toolset/Toolset';
import GlobalImage from '../../../Global/Image/GlobalImage';
import { isArray } from '../../../../utils';

import './index.scss';

function TabGeneric({ item }) {
  const { testimonial, title, text, ctas } = item;

  return (
    <div className="tab-generic-content">
      <div className="row">
        {testimonial && (
          <div className="col-lg-4 testimonial order-1 order-md-0">
            {testimonial?.image && (
              <div className="content-image">
                <GlobalImage image={testimonial.image} />
              </div>
            )}

            <div className="quote-information">
              {testimonial.quote && <div className="quote" dangerouslySetInnerHTML={{ __html: testimonial.quote }} />}
              {testimonial.author && (
                <div className="author" dangerouslySetInnerHTML={{ __html: testimonial.author }} />
              )}
            </div>
          </div>
        )}

        <div className="col-lg-8 d-flex flex-column tab-information mt-md-5 mt-lg-0  order-0 order-md-1">
          <div className="flex-grow-1 mb-5 mb-lg-0">
            {title && <h2>{title}</h2>}
            {text && <div className="description" dangerouslySetInnerHTML={{ __html: text }} />}

            {isArray(ctas) && (
              <div className="mb-5">
                <CtaList ctas={ctas} />
              </div>
            )}
          </div>

          {item && <Toolset toolset={item} />}
        </div>
      </div>
    </div>
  );
}

export default TabGeneric;
