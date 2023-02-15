import React from 'react';
import { StructuredText } from 'react-datocms';
import ImageWrapper from '../components/Global/Image/ImageWrapper';
import BlogCta from '../components/Global/BlogCta/BlogCta';
import VideoEmbed from './Blocks/VideoEmbed/VideoEmbed';
import IframeEmbed from './Blocks/IframeEmbed/IframeEmbed';

const StructuredTextDefault = ({ content }) => {
  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'DatoCmsImage':
            return (
              <div className="post-content-image">
                <ImageWrapper image={record.image} />
              </div>
            );

          case 'DatoCmsBlogPostCta':
            return <BlogCta image={record.image} cta={record.cta} title={record.title} />;
          case 'DatoCmsVideoEmbed':
            return <VideoEmbed block={record} key={record.id} />;
          case 'DatoCmsIframeEmbed':
            return <IframeEmbed block={record} key={record.id} />;
          default:
            return null;
        }
      }}
    />
  );
};

export default StructuredTextDefault;
