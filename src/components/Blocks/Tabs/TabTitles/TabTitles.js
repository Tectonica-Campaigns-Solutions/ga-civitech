import React from 'react';

import './index.scss';

export default function TabTitles({ items, activeTab, handleTab, classes }) {
  return (
    <div className="row titles">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${classes} mb-4 mb-lg-0 ${activeTab === index ? 'active' : ''}`}
          onClick={() => handleTab(index)}
        >
          {item.titleTab || item.name || item.title}
        </div>
      ))}
    </div>
  );
}
