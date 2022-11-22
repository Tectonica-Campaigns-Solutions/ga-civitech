import React from 'react';

export default function TabTitles({ items, activeTab, handleTab, classes }) {
  return (
    <div className="row titles">
      {items.map((item, index) => (
        <div
          className={`${classes} mb-4 mb-lg-0 ${activeTab === index ? 'active' : ''}`}
          onClick={() => handleTab(index)}
        >
          {item.titleTab}
        </div>
      ))}
    </div>
  );
}
