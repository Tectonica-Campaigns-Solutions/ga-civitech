import React from 'react'
import "./index.scss"

function GridStat({ block }) {
  return (
    <div className="grid-stats">
      <div className="container">
        <div className="row">
          {
            block?.stats.map((item, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <img src={item.icon.url} alt="" />
                  {item.title}
                  {item.text}
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default GridStat