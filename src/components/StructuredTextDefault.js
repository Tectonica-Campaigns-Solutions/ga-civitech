import React from 'react';
import { StructuredText } from 'react-datocms';
import ImageWrapper from './Slider/ImageWrapper';

const StructuredTextDefault = ({ content }) => {
  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'DatoCmsImage':
            return (
              <div className="mb-4">
                <ImageWrapper image={record.image} />
              </div>
            );
          default:
            return null;
        }
      }}
    />
  );
};

export default StructuredTextDefault;
