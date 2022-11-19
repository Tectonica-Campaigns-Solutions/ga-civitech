import React from 'react';
import { Link } from 'gatsby';
import GlobalImage from '../GlobalImage/GlobalImage';
import openTab from '../../Icons/tab-plus.svg';
import closeTab from '../../Icons/tab-minus.svg';
import { pathToModel } from '../../../utils'

import './index.scss';

const AccordionItem = ({ title, content, slug, image, isActive, handleOnClickTab }) => {
  return (
    <div className={`cv-accordion-item ${isActive ? 'active' : ''}`}>
      <div className="btn-item" onClick={handleOnClickTab}>
        <img src={isActive ? closeTab : openTab} />
      </div>

      <div className="accordion-content">
        <div className="row">
          <div className="col-lg-6">
            <h2 onClick={handleOnClickTab}>{title}</h2>
            {isActive && (
              <>
                <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

                <Link className="btn btn-primary mb-5" to={`${pathToModel('product')}${slug}`}>
                  Learn more
                </Link>
              </>
            )}
          </div>

          <div className="col-lg-5 col-md-12 offset-lg-1 image">{isActive && image && <GlobalImage image={image} />}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
