import React from 'react';
import Link from '../Link/Link';

import facebookIcon from '../../Icons/member-facebook.svg';
import instagramIcon from '../../Icons/member-instagram.svg';
import twitterIcon from '../../Icons/member-twitter.svg';
import linkedinIcon from '../../Icons/member-linkedin.svg';

const SocialMap = {
  linkedin: linkedinIcon,
  twitter: twitterIcon,
  facebook: facebookIcon,
  instagram: instagramIcon,
};

const SocialLink = ({ name, url }) => {
  const socialImg = SocialMap[name];

  return (
    <Link to={url}>
      <img height={26} src={socialImg} alt={name} />
    </Link>
  );
};

export default SocialLink;
