import React from 'react';
import ToolsetCta from './ToolsetCta';

import './index.scss';

function Toolset({ toolset }) {
  return (
    toolset.intro &&
    toolset.headline && (
      <div className="related-toolset">
        <h4>{toolset.intro}</h4>
        <h3>{toolset.headline}</h3>

        <div className="toolset-description" dangerouslySetInnerHTML={{ __html: toolset.description }} />

        {toolset.links && toolset.links.length && (
          <div className="links-ctas">
            {toolset.links.map(link => (
              <ToolsetCta cta={link} />
            ))}
          </div>
        )}
      </div>
    )
  );
}

export default Toolset;
