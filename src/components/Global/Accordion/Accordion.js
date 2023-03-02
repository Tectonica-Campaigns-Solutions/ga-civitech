import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ content, alignment }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnClickTab = indexTab => {
    setActiveTab(indexTab === activeTab ? -1 : indexTab);
  };

  return (
    <div>
      {content.map(
        (
          {
            id,
            title,
            descriptionPreview,
            slug,
            imagePreview,
            model,
            description = null,
            image = null,
            link = null,
            externalUrl = false,
            url = null,
            logo = null,
          },
          index
        ) => (
          <AccordionItem
            key={id}
            title={title}
            content={description ?? descriptionPreview}
            model={link ? link.model : model}
            slug={link ? link.slug : slug}
            image={image ?? imagePreview}
            alignment={alignment}
            isActive={activeTab === index}
            handleOnClickTab={() => handleOnClickTab(index)}
            hideCollapse={content.length === 1}
            externalUrl={externalUrl ? url : null}
            logo={logo}
          />
        )
      )}
    </div>
  );
};

export default Accordion;
