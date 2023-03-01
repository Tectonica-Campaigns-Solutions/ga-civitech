import React from 'react';
import Link from '../Link/Link';
import GlobalImage from '../Image/GlobalImage';
import openTab from '../../Icons/tab-plus.svg';
import closeTab from '../../Icons/tab-minus.svg';
import { pathToModel } from '../../../utils';

import './index.scss';

const AccordionItem = ({
  title,
  content,
  slug,
  model,
  image,
  alignment,
  isActive,
  handleOnClickTab,
  hideCollapse = false,
}) => {
  const isAlignmentRight = alignment === 'right';
  const link = pathToModel(model.apiKey, slug);

  return (
    <div className={`cv-accordion-item ${hideCollapse ? 'hide-collapse' : ''}`}>
      <div className="accordion-content">
        <div className={`row ${!isAlignmentRight ? 'flex-row-reverse' : ''}`}>
          <div
            className={`col-lg-6 d-flex gap-lg-5 gap-3 ${!isAlignmentRight ? 'offset-lg-1' : ''} btn-item ${
              isActive ? 'active' : ''
            } `}
          >
            {!hideCollapse && (
              <div className="icon" onClick={handleOnClickTab}>
                <img src={isActive ? closeTab : openTab} alt="Open/close icon" />
              </div>
            )}

            <div>
              {title && <h2 onClick={handleOnClickTab}>{title}</h2>}

              {isActive && (
                <>
                  {content && <div className="content" dangerouslySetInnerHTML={{ __html: content }} />}

                  {link && (
                    <Link className="btn btn-primary mb-5" to={link}>
                      Learn more
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>

          <div
            className={`col-lg-5 col-md-12 ${isAlignmentRight ? 'offset-lg-1' : ''} image ${isActive ? 'active' : ''}`}
          >
            {isActive && image && <GlobalImage image={image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
