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

  if (!visual) {
    return <></>;
  }

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

              {/* <div id={`hubspotForm-${block.id}`} /> */}

              <div className="hubspot-form-block">
                <HubspotHardcodedTest />
              </div>
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

// TODO: Remove, just for testing styles
const HubspotHardcodedTest = () => (
  <div id="hubspotForm-DatoCmsHubspot-85721204" data-hs-forms-root="true">
    <form
      id="hsForm_3eb4259d-97a6-4a8c-af05-330d2089f7ca"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      noValidate=""
      action="https://forms-eu1.hsforms.com/submissions/v3/public/submit/formsnext/multipart/26289884/3eb4259d-97a6-4a8c-af05-330d2089f7ca"
      className="hs-form-private hsForm_3eb4259d-97a6-4a8c-af05-330d2089f7ca hs-form-3eb4259d-97a6-4a8c-af05-330d2089f7ca hs-form-3eb4259d-97a6-4a8c-af05-330d2089f7ca_082fa578-1e4b-4b51-8eca-3d4dde01bf18 hs-form stacked"
      target="target_iframe_3eb4259d-97a6-4a8c-af05-330d2089f7ca"
      data-instance-id="082fa578-1e4b-4b51-8eca-3d4dde01bf18"
      data-form-id="3eb4259d-97a6-4a8c-af05-330d2089f7ca"
      data-portal-id="26289884"
    >
      <fieldset className="form-columns-2">
        <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
          <label
            id="label-email-3eb4259d-97a6-4a8c-af05-330d2089f7ca"
            className=""
            placeholder="Enter your Correo"
            htmlFor="email-3eb4259d-97a6-4a8c-af05-330d2089f7ca"
          >
            <span>Correo</span>
            <span className="hs-form-required">*</span>
          </label>
          <legend
            className="hs-field-desc"
            // style="display: none;"
          ></legend>
          <div className="input">
            <input
              id="email-3eb4259d-97a6-4a8c-af05-330d2089f7ca"
              name="email"
              required=""
              placeholder="Email"
              type="email"
              className="hs-input"
              inputMode="email"
              autoComplete="email"
              value=""
            />
            <div
              data-lastpass-icon-root="true"
              // style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
            ></div>
          </div>
        </div>
        <div className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field">
          <label
            id="label-lastname-3eb4259d-97a6-4a8c-af05-330d2089f7ca"
            className=""
            placeholder="Enter your Apellido"
            htmlFor="lastname-3eb4259d-97a6-4a8c-af05-330d2089f7ca"
          >
            <span>Apellido</span>
          </label>
          <legend
            className="hs-field-desc"
            //style="display: none;"
          ></legend>
          <div className="input">
            <input
              id="lastname-3eb4259d-97a6-4a8c-af05-330d2089f7ca"
              name="lastname"
              placeholder="lastname"
              type="text"
              className="hs-input"
              inputMode="text"
              autoComplete="family-name"
              value=""
            />
          </div>
        </div>
      </fieldset>
      <div className="hs_submit hs-submit">
        <div
          className="hs-field-desc"
          //style="display: none;"
        ></div>
        <div className="actions">
          <input type="submit" className="hs-button primary large" value="Enviar" />
        </div>
      </div>

      <iframe
        name="target_iframe_3eb4259d-97a6-4a8c-af05-330d2089f7ca"
        // style="display: none;"
      ></iframe>
    </form>
  </div>
);
