import React from 'react'
import Tab from './Tab'
import "./index.scss"

function Tabs({block}) {
  return (
    <div className="tabs">
        <div className="container">
          <div className="d-flex">
            { block.length > 0 && 
              block.map(item => {
                return (<Tab title={item.title}/>)
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Tabs