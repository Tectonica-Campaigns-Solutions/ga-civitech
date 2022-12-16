import * as React from 'react';
import HeroImageBottom from './HeroImageBottom/HeroImageBottom';
import HeroImageRight from './HeroImageRight/HeroImageRight';

export default function HeroSelector({ page }) {
  const selectHeroTemplate = () => {
    const visual = page?.heroVisual;

    if (visual === 'image_bottom') {
      return <HeroImageBottom {...page} />;
    } else if (visual === 'image_center') {
      return <>TODO: Hero image center</>;
    } else if (visual === 'image_right') {
      return <HeroImageRight {...page} />;
    }
  };

  return <header>{selectHeroTemplate()}</header>;
}
