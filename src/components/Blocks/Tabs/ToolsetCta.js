import React from 'react';
import { Link } from 'gatsby';

import './index.scss';

const ToolsetCta = ({ cta }) => {
  return (
    <Link className="link-cta" to={cta.link?.content ? cta.link?.content?.slug : cta.link?.url}>
      {cta.title ? cta.title : cta.link?.content?.label}
    </Link>
  );
};

export default ToolsetCta;
