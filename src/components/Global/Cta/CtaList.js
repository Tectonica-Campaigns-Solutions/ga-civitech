import React from 'react';
import Cta from './Cta';
import { getCtaTitle, getCtaUrl } from '../../../utils';

import './index.scss';

const CtaList = ({ ctas }) => {
  return (
    <div className="ctas">
      {ctas.map((cta, index) => (
        <Cta key={index} url={getCtaUrl(cta)} label={getCtaTitle(cta)} isButton={cta.isButton} />
      ))}
    </div>
  );
};

export default CtaList;
