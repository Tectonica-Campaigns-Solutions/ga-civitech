import React from 'react';

const VideoEmbed = ({ block }) => {
  const { iframe, baseUrl } = block;

  return (
    <div className="container pb-5">
      <div className="mb-5">
        <h2>Testing dangerouslySetInnerHTML</h2>
        <div dangerouslySetInnerHTML={{ __html: iframe }} />
      </div>

      <h2>Testing only base url</h2>
      <iframe src={baseUrl} />
    </div>
  );
};

export default VideoEmbed;
