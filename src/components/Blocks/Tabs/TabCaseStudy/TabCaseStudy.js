import * as React from 'react';
import { isArray } from '../../../../utils/array.utils';
import CtaList from '../../../Global/Cta/CtaList';
import GlobalImage from '../../../Global/Image/GlobalImage';

import './index.scss';

export default function TabCaseStudy({ item }) {
  return (
    <div className="tab-case-study-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {item.preTitle && <h4>{item.preTitle}</h4>}

            <h2>{item.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: item.text }} />

            {isArray(item.ctas) && <CtaList ctas={item.ctas} />}
          </div>

          <div className="col-lg-5 offset-lg-1">{item.image && <GlobalImage image={item.image} />}</div>
        </div>
      </div>
    </div>
  );
}
