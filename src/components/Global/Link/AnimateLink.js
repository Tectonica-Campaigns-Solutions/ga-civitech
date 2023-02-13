import React from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const AnimateLink = ({ to, children }) => {
  return (
    <AniLink
      // paintDrip={false}
      // swipe={true}
      cover={true}
      fade={false}
      direction="bottom"
      bg="#0066FF"
      component={Link}
      to={to}
    >
      {children}
    </AniLink>
  );
};

export default AnimateLink;
