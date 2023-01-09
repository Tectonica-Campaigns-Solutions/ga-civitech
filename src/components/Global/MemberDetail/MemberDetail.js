import { Link } from 'gatsby';
import React from 'react';
import ImageWrapper from '../Image/ImageWrapper';
import AnimateLink from '../Link/AnimateLink';

import closeIcon from '../../Icons/member-close.svg';
import facebookIcon from '../../Icons/member-facebook.svg';
import instagramIcon from '../../Icons/member-instagram.svg';
import twitterIcon from '../../Icons/member-twitter.svg';
import linkedinIcon from '../../Icons/member-linkedin.svg';

import './index.scss';

const MemberDetail = ({ member, location }) => {
  const { image, name, info, positionMember } = member;
  const memberListUrl = location.pathname.split('/')[1];

  return (
    <section className="member-detail">
      <AnimateLink to={`/${memberListUrl}`}>
        <img src={closeIcon} alt="Close icon" className="close-icon" />
      </AnimateLink>

      <div className="container">
        <div className="row">
          {image && (
            <div className="col-lg-6">
              <ImageWrapper image={image} />
            </div>
          )}

          <div className="col-lg-6">
            {positionMember && <h4>{positionMember}</h4>}
            {name && <h1>{name}</h1>}

            <div className="social-icons">
              <Link to="">
                <img src={facebookIcon} alt="Facebook icon" />
              </Link>
              <Link to="">
                <img src={instagramIcon} alt="Instagram icon" />
              </Link>
              <Link to="">
                <img src={twitterIcon} alt="Twitter icon" />
              </Link>
              <Link to="">
                <img src={linkedinIcon} alt="Linkedin icon" />
              </Link>
            </div>

            {info && <div className="description" dangerouslySetInnerHTML={{ __html: info }} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDetail;
