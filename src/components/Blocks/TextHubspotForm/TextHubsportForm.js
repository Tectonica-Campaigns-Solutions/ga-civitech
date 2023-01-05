import React, { useEffect } from 'react';
import blueArrows from '../../Icons/hubspot-arrows.svg';
import arrows from '../../Icons/form-union.svg';

import './index.scss';

function TextHubspotForm({ block }) {
  const { id, backgroundColor, text, title, whiteBox, titleInsideBox, descriptionInsideBox, visual } = block;
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
          target: `#hubspotForm-${id}`,
        });
      }
    });
  }, [id, formId, region, portalId]);

  return (
    <div className={`text-hubspot-form ${backgroundColor} ${visual}`}>
      {visual === 'small' && (
        <div className="container">
          <img className="arrows" src={arrows} alt="Arrows effect" />

          <div className="row align-items-center py-3">
            <div className="col-md-3">{title && <h3>{title}</h3>}</div>
            <div className="col-md-9 hubspot-form">
              <div id={`hubspotForm-${block.id}`} />
            </div>
          </div>
        </div>
      )}

      {visual === 'two_columns' && (
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-5">
              {title && <h2>{title}</h2>}
              {text && <p dangerouslySetInnerHTML={{ __html: text }} />}

              <img className="blue-arrows" src={blueArrows} alt="Blue arrows effect" />
            </div>

            <div className={`form-content ${whiteBox ? 'col-lg-6 white-box' : 'col-lg-4'} offset-lg-1`}>
              {titleInsideBox && <h3>{titleInsideBox}</h3>}
              {descriptionInsideBox && <p>{descriptionInsideBox}</p>}

              <div id={`hubspotForm-${block.id}`} />
            </div>
          </div>
        </div>
      )}

      {visual === 'one_column' && (
        <div className="container">
          <div className="row align-items-center flex-column">
            <div className="col-lg-6">
              {title && <h2>{title}</h2>}
              {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
            </div>
            <div className="col-lg-6">
              <div id={`hubspotForm-${block.id}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextHubspotForm;
