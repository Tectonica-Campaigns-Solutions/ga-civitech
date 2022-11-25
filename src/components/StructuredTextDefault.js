import React from 'react';
import { StructuredText } from 'react-datocms';
import ImageWrapper from '../components/Global/Image/ImageWrapper';
import BlogCta from '../components/Global/BlogCta/BlogCta';

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

          case 'DatoCmsBlogPostCta':
            return <BlogCta image={record.image} slug={record.slug} title={record.title} />;

          default:
            return null;
        }
      }}
    />
  );
};

export default StructuredTextDefault;
