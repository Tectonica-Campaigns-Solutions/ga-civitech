import React, { useEffect } from 'react';
import "./index.scss";

function TextHubsportForm({ block }) {

  const formId = block.hubspot.formId
  const region = block.hubspot.region
  const portalId = block.hubspot.portalId

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
          target: '#hubspotForm'
        })
      }
    });
  }, [formId, region, portalId]);

  return (
    <div className="text-hubspot-form">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-5">
            <h2>{block.title}</h2>
            <p>{block.text}</p>
          </div>

          <div className="col-lg-4 offset-lg-1">
            <div id="hubspotForm" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextHubsportForm