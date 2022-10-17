import React, {useState} from 'react'
import Tab from './Tab'
import "./index.scss"

function Tabs({ block }) {
  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (val) => {
    setActiveTab(val)
  }

  return (
    <div className="tabs">
      <div className="container">
        <div className="d-flex titles">
          {
             block.map((item, index) => {
              return (<div onClick={() => handleTab(index)}>{item.title}</div>)
            })
          }
         
        </div>
        <div>
          {block.length > 0 &&
            block.map((item, index) => {
              return index === activeTab ? <Tab item={item} /> : ''
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Tabs