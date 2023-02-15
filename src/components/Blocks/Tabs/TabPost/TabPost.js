import * as React from 'react';
import Link from '../../../Global/Link/Link';
import Cta from '../../../Global/Cta/Cta';
import GlobalImage from '../../../Global/Image/GlobalImage';
import { pathToModel } from '../../../../utils';

import './index.scss';

export default function TabPost({ pretitle = null, item }) {
  const { title, summary, image, model, slug } = item;
  const link = pathToModel(model?.apiKey, slug);

  return (
    <div className="tab-case-study-item">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            {pretitle && <h4>{pretitle}</h4>}

            {title && (
              <Link to={link}>
                <h2>{title}</h2>
              </Link>
            )}

            {summary && <p dangerouslySetInnerHTML={{ __html: summary }} />}

            <Cta label="Read more" url={link} isButton />
          </div>

          {image && (
            <div className="col-lg-5 offset-lg-1">
              <Link to={link}>
                <GlobalImage image={image} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
