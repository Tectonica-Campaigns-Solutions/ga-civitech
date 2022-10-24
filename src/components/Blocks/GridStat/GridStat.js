import React from 'react';
import GlobalImage from "../../Global/GlobalImage/GlobalImage";

import "./index.scss";

function GridStat({ block }) {
  const gridSizeGreaterThan3 = block?.stats.length > 3;

  return (
    <div className="grid-stats">
      <div className="container">
        <h2>{block.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: block.text }}
        />

        <div className="row gy-5">
          {
            block?.stats.map((item, index) => (
              <div className={`${gridSizeGreaterThan3 ? "col-lg-3" : "col-lg-4"} col-md-4 col-sm-6 stat-item`} key={index}>
                <div className={`stat-image ${gridSizeGreaterThan3 ? "sm-img" : "lg-img"}`}>
                  <GlobalImage image={item.icon} />
                </div>

                <h3 className={`${gridSizeGreaterThan3 ? "sm-title" : "lg-title"}`}>{item.title}</h3>
                <span className={`${gridSizeGreaterThan3 ? "sm-text" : "lg-text"}`}>{item.text}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default GridStat