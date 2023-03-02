import React from 'react';
import Link from '../Link/Link';
import { getCtaTitle } from '../../../utils';

export default function Cta({ cta = null, url = '', label = '', isButton = false }) {
  const ctaTitle = cta ? getCtaTitle(cta) : label;
  const isCtaPrimaryButton = cta?.isButton || isButton;

  return (
    <div>
      <Link className={`btn ${isCtaPrimaryButton ? 'btn-primary' : ''}`} to={cta || url}>
        {ctaTitle}
      </Link>
    </div>
  );
}
