import React from 'react';

const IframeEmbed = ({ block }) => {
  const { iframe } = block;

  return (
    <div className="container pb-5 mt-5">
      <div className="mb-5">
        <div dangerouslySetInnerHTML={{ __html: iframe }} />
      </div>
    </div>
  );
};

export default IframeEmbed;
