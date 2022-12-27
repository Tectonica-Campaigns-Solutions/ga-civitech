import React from 'react';
import Shortcut from '../Shortcut/Shortcut';
import { isArray } from '../../../utils';
import NarrativeBlock from '../../Blocks/NarrativeBlock/NarrativeBlock';

import './index.scss';

function Hero({ ctas, title, content, image, shortcuts, titleShortcuts }) {
  const heroData = { alignment: 'right', title, textContent: content, ctas, image };

  return (
    <div className="hero pt-5 pb-3">
      <div className="container">
        <NarrativeBlock block={heroData} />

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
