import React from 'react';
import ToolsetCta from './ToolsetCta';
import { isArray } from '../../../utils/array.utils';

import './index.scss';

function Toolset({ toolset }) {
  const { intro, headline, description, links } = toolset;

  return (
    intro &&
    headline && (
      <div className="related-toolset">
        {intro && <h4>{intro}</h4>}
        {headline && <h3>{headline}</h3>}

        {description && <div className="toolset-description" dangerouslySetInnerHTML={{ __html: description }} />}

        {isArray(links) && (
          <div className="links-ctas">
            {links.map(link => (
              <ToolsetCta cta={link} />
            ))}
          </div>
        )}
      </div>
    )
  );
}

export default Toolset;
