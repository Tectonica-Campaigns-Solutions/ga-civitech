import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log('Force new commit');

  const handleOnClickTab = indexTab => {
    setActiveTab(indexTab === activeTab ? -1 : indexTab);
  };

  return (
    <div>
      {content.map(({ title, descriptionPreview, imagePreview }, index) => (
        <AccordionItem
          title={title}
          content={descriptionPreview}
          image={imagePreview}
          isActive={activeTab === index}
          handleOnClickTab={() => handleOnClickTab(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
