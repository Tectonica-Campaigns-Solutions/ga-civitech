import React from 'react';
import ImageWrapper from '../Image/ImageWrapper';
import SocialLink from '../SocialLink/SocialLink';
import { isArray } from '../../../utils';
import closeIcon from '../../Icons/member-close.svg';
import Link from '../Link/Link';

import './index.scss';

const MemberDetail = ({ member, location }) => {
  const { image, name, info, positionMember, socialLinks } = member;
  const memberListUrl = location.pathname.split('/')[1];

  return (
    <section className="member-detail">
      <Link to={`/${memberListUrl}`}>
        <img src={closeIcon} alt="Close icon" className="close-icon" />
      </Link>

      <div className="container">
        <div className="row justify-content-between">
          {image && (
            <div className="col-lg-5">
              <ImageWrapper image={image} />
            </div>
          )}

          <div className="col-lg-6">
            {positionMember && <h4>{positionMember}</h4>}
            {name && <h1>{name}</h1>}

            {isArray(socialLinks) && (
              <div className="social-icons">
                {socialLinks.map(social => (
                  <SocialLink name={social.socialNetwork} url={social.url} />
                ))}
              </div>
            )}

            {info && <div className="description" dangerouslySetInnerHTML={{ __html: info }} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDetail;
