import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnClickTab = indexTab => {
    setActiveTab(indexTab === activeTab ? -1 : indexTab);
  };

  return (
    <div>
      {content.map(({ title, descriptionPreview, slug, imagePreview }, index) => (
        <AccordionItem
          title={title}
          content={descriptionPreview}
          slug={slug}
          image={imagePreview}
          isActive={activeTab === index}
          handleOnClickTab={() => handleOnClickTab(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
