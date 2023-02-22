import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ content, alignment }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnClickTab = indexTab => {
    setActiveTab(indexTab === activeTab ? -1 : indexTab);
  };

  return (
    <div>
      {content.map(({ id, title, descriptionPreview, slug, imagePreview, model }, index) => (
        <AccordionItem
          key={id}
          title={title}
          content={descriptionPreview}
          model={model}
          slug={slug}
          image={imagePreview}
          alignment={alignment}
          isActive={activeTab === index}
          handleOnClickTab={() => handleOnClickTab(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
