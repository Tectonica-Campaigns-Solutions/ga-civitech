import * as React from 'react';
import HeroImageBottom from './HeroImageBottom';

export default function HeroSelector({ page }) {
  const selectHeroTemplate = page => {
    if (page?.heroVisual === 'image_bottom') {
      return <HeroImageBottom {...page} />;
    }
  };

  return <header>{selectHeroTemplate(page)}</header>;
}
