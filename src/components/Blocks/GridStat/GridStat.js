import React from 'react';
import { isArray } from '../../../utils/array.utils';
import GlobalImage from '../../Global/Image/GlobalImage';

import './index.scss';

function GridStat({ block }) {
  const { title, text, backgroundColor, stats = [] } = block;
  const isGridSizeGreaterThan3 = stats.length > 3;

  return (
    <div className={`grid-stats ${backgroundColor}`}>
      <div className="container">
        {title && <h2>{title}</h2>}
        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}

        {isArray(stats) && (
          <div className="row gy-5">
            {stats.map((item, index) => (
              <div
                className={`${isGridSizeGreaterThan3 ? 'col-lg-3' : 'col-lg-4'} col-md-4 col-sm-6 stat-item`}
                key={index}
              >
                <div className={`stat-image ${isGridSizeGreaterThan3 ? 'sm-img' : 'lg-img'}`}>
                  <GlobalImage image={item.icon} />
                </div>

                <h3 className={`${isGridSizeGreaterThan3 ? 'sm-title' : 'lg-title'}`}>{item.title}</h3>
                <span className={`${isGridSizeGreaterThan3 ? 'sm-text' : 'lg-text'}`}>{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GridStat;
