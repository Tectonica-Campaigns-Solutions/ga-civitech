import React from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const AnimateLink = ({ to, children }) => {
  return (
    <AniLink
      paintDrip={true}
      swipe={false}
      cover={false}
      fade={false}
      direction="bottom"
      hex="#001325"
      component={Link}
      to={to}
    >
      {children}
    </AniLink>
  );
};

export default AnimateLink;
