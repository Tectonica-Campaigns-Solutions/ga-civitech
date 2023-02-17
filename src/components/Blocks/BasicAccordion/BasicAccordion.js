import React, { useState } from 'react';
import accordionOpen from '../../Icons/accordion_open.svg';
import accordionClose from '../../Icons/accordion_close.svg';

import './index.scss';

const BasicAccordion = ({ block }) => {
  const { items = [] } = block;

  const [activeItem, setActiveItem] = useState(0);

  const handleOnChangeAccordion = newIndex => setActiveItem(newIndex);

  return (
    <div className="accordion">
      <div className="container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${activeItem === index ? 'active' : ''}`}
            onClick={() => handleOnChangeAccordion(index)}
          >
            <div className="ac-title">
              {item.title && <h3>{item?.title}</h3>}
              <img src={activeItem === index ? accordionClose : accordionOpen} alt="Accordion close/open icon" />
            </div>

            {item.text && <div className="ac-content" dangerouslySetInnerHTML={{ __html: item.text }} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicAccordion;
