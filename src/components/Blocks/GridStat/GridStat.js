import React from 'react'
import "./index.scss"

function GridStat({block}) {
  return (
    <div className="grid-stats">
      <div className="container">
        <div className="row">
          {
            block?.stats.map(item => {
              return (
                <div className="col-lg-4">
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