import React from 'react';
import { Link } from 'gatsby';
import { getCtaTitle, getCtaUrl } from '../../../utils';

import './index.scss';

const ToolsetCta = ({ cta }) => {
  return (
    <Link className="link-cta" to={getCtaUrl(cta)}>
      {getCtaTitle(cta)}
    </Link>
  );
};

export default ToolsetCta;
