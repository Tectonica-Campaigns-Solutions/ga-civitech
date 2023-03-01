import React from 'react';
import Link from '../Link/Link';
import { getCtaTitle } from '../../../utils';

import './index.scss';

const ToolsetCta = ({ cta }) => {
  return (
    <Link className="link-cta" to={cta}>
      {getCtaTitle(cta)}
    </Link>
  );
};

export default ToolsetCta;
