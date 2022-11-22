import React, { useState } from 'react';
import Tab from './Tab';
import TabTitles from './TabTitles';
import { isArray } from '../../../utils/array.utils';

import './index.scss';

function Tabs({ block }) {
  const items = block.items;
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = val => {
    setActiveTab(val);
  };

  return (
    <div className={`tabs ${block.backgroundColor}`}>
      <div className="container">
        {isArray(items) && <TabTitles items={items} classes="col-lg-4" activeTab={activeTab} handleTab={handleTab} />}

        <div>
          {isArray(items) &&
            items.map((item, index) => {
              return index === activeTab ? <Tab item={item} /> : '';
            })}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
