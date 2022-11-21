import React from 'react';
import { isArray } from '../../../utils/array.utils';
import Accordion from '../../Global/Accordion/Accordion';

import './index.scss';

function RelatedProduct({ block }) {
  return (
    <div className="related-products-tab light-blue">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2>{block.title}</h2>
            <p className="description" dangerouslySetInnerHTML={{ __html: block.description }} />
          </div>
        </div>

        <div>
          {isArray(block.products) && (
            <div className="products">
              <span>Related tools</span>
              <Accordion content={block.products} alignment={block.alignment} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
