import * as React from 'react';
import { Link } from 'gatsby';
import Cta from '../../../Global/Cta/Cta';
import GlobalImage from '../../../Global/Image/GlobalImage';
import { pathToModel } from '../../../../utils';

import './index.scss';

export default function TabPost({ pretitle = null, item }) {
  const link = pathToModel(item?.model?.apiKey, item?.slug);

  return (
    <div className="tab-case-study-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {pretitle && <h4>{pretitle}</h4>}

            <Link to={link}>
              <h2>{item.title}</h2>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: item.summary }} />

            <Cta label="Read more" url={link} isButton />
          </div>

          {item.image && (
            <div className="col-lg-5 offset-lg-1">
              <Link to={link}>
                <GlobalImage image={item.image} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
