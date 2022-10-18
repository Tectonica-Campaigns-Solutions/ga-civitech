import React from 'react';
import "./index.scss";

function GridStat({ block }) {
  return (
    <div className="grid-stats">
      <div className="container">
        <h2>{block.title}</h2>

        <div className="row gy-5">
          {
            block?.stats.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 stat-item" key={index}>
                <div className='stat-image'>
                  <img src={item.icon.url} alt="" />
                </div>

                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default GridStat