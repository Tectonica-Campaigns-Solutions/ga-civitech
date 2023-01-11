import React from 'react';
import ImageWrapper from '../../Image/ImageWrapper';
import { Link } from 'gatsby-link';

import './index.scss';

const MegaMenuCard = ({ meta, title, image, description }) => {
  return (
    <div className="mega-menu-card">
      {meta && <span className="meta">{meta}</span>}

      {title && (
        <Link>
          <h2>{title}</h2>
        </Link>
      )}

      {image && <ImageWrapper image={image} />}

      {description && <div className="description" dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
};

export default MegaMenuCard;
