import React, { useState } from 'react';
import TabTitles from './TabTitles/TabTitles';
import TabSelector from './TabSelector';
import { isArray } from '../../../utils';

import './index.scss';

function Tabs({ block }) {
  const { items, backgroundColor } = block;
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = val => {
    setActiveTab(val);
  };

  return (
    <div className={`tabs ${backgroundColor}`}>
      <div className="container">
        {isArray(items) && items.length > 1 && <TabTitles items={items} classes="col-lg-4" activeTab={activeTab} handleTab={handleTab} />}
        {isArray(items) && items.map((item, index) => (index === activeTab ? <TabSelector item={item} key={index} /> : ''))}
      </div>
    </div>
  );
}

export default Tabs;
