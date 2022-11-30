import React, { useEffect } from 'react';
import blueArrows from '../../Icons/hubspot-arrows.svg';

import './index.scss';

function TextHubsportForm({ block }) {
  const { formId, region, portalId } = block.hubspot;

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'hubspot-contact-form';
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: '#hubspotForm',
        });
      }
    });
  }, [formId, region, portalId]);

  return (
    <div className={`text-hubspot-form ${block.backgroundColor}`}>
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-5">
            <h2>{block.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: block.text }} />

            <img className="blue-arrows" src={blueArrows} />
          </div>

          <div className={`form-content ${block.whiteBox ? 'col-lg-6 white-box' : 'col-lg-4'} offset-lg-1`}>
            {block.titleInsideBox && <h3>{block.titleInsideBox}</h3>}
            {block.descriptionInsideBox && <p>{block.descriptionInsideBox}</p>}

            <div id="hubspotForm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextHubsportForm;
