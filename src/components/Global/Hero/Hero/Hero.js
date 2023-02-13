import React from 'react';
import Shortcut from '../../Shortcut/Shortcut';
import { isArray } from '../../../../utils';
import NarrativeBlock from '../../../Blocks/NarrativeBlock/NarrativeBlock';

import './index.scss';

function Hero({ ctas, title, content, image, shortcuts, titleShortcuts }) {
  const heroData = { alignment: 'right', title, textContent: content, ctas, image };

  return (
    <div className="hero">
      <div className="container">
        <NarrativeBlock block={heroData} usePrimaryHeading />

        {/* Shortcuts lists */}
        {isArray(shortcuts) && (
          <div className="row mt-5 mb-5 shortcuts-container">
            <div className="col-lg-12">
              <h3>{titleShortcuts}</h3>
            </div>

            {shortcuts.map((item, index) => (
              <div className="col-lg-4 mb-3">
                <Shortcut
                  key={index}
                  title={item.title}
                  description={item.description}
                  btnLabel="Learn more"
                  btnUrl={item.slug}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
