import React from 'react';
import { isArray } from '../../../utils';
import Accordion from '../../Global/Accordion/Accordion';

import './index.scss';

function RelatedProduct({ block }) {
  const { title, toolSectionTitle = '', description, products, alignment, backgroundColor } = block;

  return (
    <div className={`related-products-tab ${backgroundColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {title && <h2>{title}</h2>}
            {description && <p className="description" dangerouslySetInnerHTML={{ __html: description }} />}
          </div>
        </div>

        {isArray(products) && (
          <div>
            <div className="products">
              {toolSectionTitle && <span>{toolSectionTitle}</span>}
              <Accordion content={products} alignment={alignment} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RelatedProduct;
