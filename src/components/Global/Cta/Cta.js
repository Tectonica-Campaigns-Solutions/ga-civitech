import React from 'react';
import Link from '../Link/Link';
import { getCtaTitle, getCtaUrl } from '../../../utils';

export default function Cta({ cta = null, url = '', label = '', isButton = false }) {
  const ctaTitle = cta ? getCtaTitle(cta) : label;
  const ctaUrl = cta ? getCtaUrl(cta) : url;
  const isCtaPrimaryButton = cta?.isButton ?? isButton;

  return (
    <div>
      <Link className={`btn ${isCtaPrimaryButton ? 'btn-primary' : ''}`} to={ctaUrl}>
        {ctaTitle}
      </Link>
    </div>
  );
}
