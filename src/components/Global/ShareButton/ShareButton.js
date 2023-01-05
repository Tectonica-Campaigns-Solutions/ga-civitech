import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import telegram from '../../Icons/telegram.svg';
import facebook from '../../Icons/facebook.svg';
import twitter from '../../Icons/twitter.svg';
import share from '../../Icons/share.svg';

import './index.scss';

function ShareButtons() {
  const [isFixed, setIsFixed] = useState('');
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    typeof window !== 'undefined' ? setShareUrl(window.location.href) : setShareUrl('');
    window.addEventListener('scroll', isSticky);

    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  // TODO: Ask Mar about this
  const isSticky = e => {
    const topHero = document.querySelector('.hero-blog-post').offsetHeight;
    const topContent = document.querySelector('.post-content').offsetHeight;
    const scrollTop = window.scrollY;

    if (scrollTop >= topHero && scrollTop <= topContent) {
      setIsFixed('show');
    } else {
      setIsFixed('');
    }
  };

  return (
    <div className={`share-buttons-fixed ${isFixed}`}>
      <div className="telegram">
        <Link target={'_blank'} to={`https://t.me/share/url?url=${shareUrl}`}>
          <img src={telegram} alt="Telegram icon" />
        </Link>
      </div>

      <div className="facebook">
        <Link target={'_blank'} to={`http://www.facebook.com/share.php?u=${shareUrl}`}>
          <img src={facebook} alt="Facebook icon" />
        </Link>
      </div>

      <div className="twitter">
        <Link target={'_blank'} to={`http://twitter.com/share?url=${shareUrl}`}>
          <img src={twitter} alt="Twitter icon" />
        </Link>
      </div>

      {/* todo: share text is a svg at the moment */}
      <img src={share} style={{ height: '30%' }} alt="Share text icon" />
    </div>
  );
}

export default ShareButtons;
