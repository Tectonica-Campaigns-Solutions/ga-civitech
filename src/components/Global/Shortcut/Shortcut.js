import React from 'react';
import { Link } from 'gatsby';

import arrow1 from '../../Icons/arrow1.svg';
import arrow2 from '../../Icons/arrow2.svg';
import arrow3 from '../../Icons/arrow3.svg';

import './index.scss';

export default function Shortcut({ title, description, btnLabel, btnUrl }) {
  return (
    <div className="shortcut">
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={btnUrl}>{btnLabel} ›</Link>

      {/* Arrow icons */}
      <div className="arrows">
        <img src={arrow1} width="49" />
        <img src={arrow2} width="38" />
        <img src={arrow3} width="25" />
      </div>
    </div>
  );
}
