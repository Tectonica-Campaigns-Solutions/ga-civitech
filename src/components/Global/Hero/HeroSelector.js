import * as React from 'react';
import HeroImageBottom from './HeroImageBottom/HeroImageBottom';
import HeroImageCenter from './HeroImageCenter/HeroImageCenter';
import HeroImageRight from './HeroImageRight/HeroImageRight';

export default function HeroSelector({ page }) {
  const visual = page?.heroVisual;

  if (visual === 'image_bottom') {
    return <HeroImageBottom {...page} />;
  } else if (visual === 'image_center') {
    return <HeroImageCenter {...page} />;
  } else if (visual === 'image_right') {
    return <HeroImageRight {...page} />;
  }

  return <></>;
}
