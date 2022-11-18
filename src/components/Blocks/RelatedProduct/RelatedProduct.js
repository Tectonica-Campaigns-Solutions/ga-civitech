import React from 'react';
import { isArray } from '../../../utils/array.utils';
import Accordion from '../../Global/Accordion/Accordion';

import './index.scss';

function RelatedProduct({ block }) {
  return (
    <div className="related-products-tab light-blue">
      <div className="container">
        <h2>{block.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: block.description }} />

        <div>{isArray(block.products) && <Accordion content={block.products} />}</div>
      </div>
    </div>
  );
}

export default RelatedProduct;
