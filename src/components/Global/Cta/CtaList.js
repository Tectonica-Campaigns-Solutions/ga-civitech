import React from 'react';
import Cta from './Cta';

import './index.scss';

const CtaList = ({ ctas }) => {
  return (
    <div className="ctas">
      {ctas.map((cta, index) => (
        <Cta key={index} cta={cta} />
      ))}
    </div>
  );
};

export default CtaList;
