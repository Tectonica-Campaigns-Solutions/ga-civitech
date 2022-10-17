import React, {useEffect} from 'react'
import "./index.scss"

function TextHubsportForm({block}) {

  const formId = block.hubspot.formId
  const region = block.hubspot.region
  const portalId = block.hubspot.portalId
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'hubspot-contact-form';
    script.src='https://js.hsforms.net/forms/v2.js';
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
  }, [formId,region,portalId ]);
 
  return (
    <div className="text-hubspot-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            {block.title}
            {block.text}
          </div>
          <div className="col-lg-7">
            <div id="hubspotForm" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextHubsportForm