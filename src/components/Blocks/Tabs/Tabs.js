import React, { useState } from 'react';
import Tab from './Tab';

import './index.scss';

function Tabs({ block }) {
  const items = block.items;
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = val => {
    setActiveTab(val);
  };

  return (
    <div className={`tabs ${block.backgroundColor2}`}>
      <div className="container">
        <div className="row titles">
          {items.map((item, index) => (
            <div
              className={`col-lg-4 mb-4 mb-lg-0 ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTab(index)}
            >
              {item.titleTab}
            </div>
          ))}
        </div>

        <div>
          {items.length > 0 &&
            items.map((item, index) => {
              return index === activeTab ? <Tab item={item} /> : '';
            })}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
