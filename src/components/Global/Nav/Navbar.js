import React, { useState, useEffect } from 'react';
import Link from '../Link';
import DropdownItem from './DropdownItem';
import DropdownMegaMenu from './DropdownMegaMenu';
import LinkItem from './LinkItem';
import logo from '../../Icons/logo.svg';
import MegaMenu from './MegaMenu/MegaMenu';

const Navbar = ({ navData, path }) => {
  const { navigationItems = [] } = navData.datoCmsNavigation;
  const isHomePage = !path || path === '/';

  const [expanded, setExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Main links
  const [activeLink, setActiveLink] = useState(null);

  const [activeMainLink, setActiveMainLink] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const position = window.pageYOffset;
        setScrollPosition(position);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // console.log({ navigationItems });

  return (
    <>
      <div style={{ position: 'relative', backgroundColor: 'darkgoldenrod' }}>
        <nav
          className={`navbar navbar-expand-lg ${isHomePage ? 'home-nav' : ''} ${expanded ? 'expanded' : ''} ${
            scrollPosition > 75 ? 'sticky-nav' : ''
          }`}
        >
          <Link className="navbar-brand" to={'/'}>
            <img src={logo} alt="logo civitech" />
          </Link>

          <button
            type="button"
            data-target="#navNav"
            aria-expanded="false"
            aria-controls="navNav"
            data-toggle="collapse"
            className="navbar-toggler"
            aria-label="Toggle navigation"
            onClick={() => setExpanded(prev => !prev)}
          >
            <span className={`${expanded ? 'open-toggle ' : ''} navbar-toggler-icon`}></span>
          </button>

          <div className={` ${expanded ? 'show' : ''} collapse navbar-collapse`} id="navNav">
            <ul className="navbar-nav mr-auto">
              {navigationItems?.map((link, index) => {
                return (
                  <span onClick={() => setActiveLink(link)} style={{ marginRight: '1rem' }}>
                    {link.label}
                  </span>
                );
              })}
            </ul>
          </div>
        </nav>

        {activeLink && <MegaMenu link={activeLink} />}
      </div>
    </>
  );
};

export default Navbar;
