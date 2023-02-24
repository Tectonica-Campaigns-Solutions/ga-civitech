import React from 'react';
import Link from '../../Global/Link/Link'
import GlobalImage from '../../Global/Image/GlobalImage';
import { pathToModel } from '../../../utils';
import './index.scss';

function ListContent({ block }) {
  const { title, content } = block;

  return (
    <div className="container mt-5 list-content">
      { title && <h2>{ title }</h2>}
      <div className="row mt-3 mb-5">
        {content.map(item => {
           const link = pathToModel(item.model?.apiKey, item.slug);
          return (
          <div className="col-lg-4 mb-4">
            { item.imageCard && <div className="image"><Link to={link}><GlobalImage image={item.imageCard} className="mb-3"/></Link></div>}
            <Link to={link}>
              <h3>{item.title}</h3>
            </Link>
            { item.descriptionCard && <p className="descr">{ item.descriptionCard }</p>}
          </div>
        )})}
      </div>
    </div>
  );
}

export default ListContent;
