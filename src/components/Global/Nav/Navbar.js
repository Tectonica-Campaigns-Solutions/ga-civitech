import React, { useState, useEffect, useRef } from 'react';
import Link from '../Link/Link';
import MegaMenu from './MegaMenu/MegaMenu';
import logo from '../../Icons/logo.svg';
import dropdownIcon from '../../Icons/nav-dropdown.svg';
import dropdownActiveIcon from '../../Icons/nav-dropdown-active.svg';
import { isArray } from '../../../utils';

import './index.scss';

const Navbar = ({ navData, path, context, pageSlug }) => {
  const { navigationItems = [] } = navData.datoCmsNavigation;
  const isHomePage = !path || path === '/';

  const [expanded, setExpanded] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeLink, setActiveLink] = useState(null);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const position = window.pageYOffset;
        setScrollPosition(position);
      }
    };

    const handleCurrentWidth = () => {
      if (typeof window !== 'undefined') {
        const currentWidth = window.innerWidth;
        setShowMobileMenu(currentWidth < 992);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleCurrentWidth);

      document.querySelector('body').classList.remove('scroll-menu');

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleCurrentWidth);
      };
    }
  }, []);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      //current id
      // const pageId = document.querySelector('.wrap-page').classList;
      // const navBar = document.querySelector('.nav-bar');

      // console.log({ pageId, navigationItems });

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActiveLink(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const handleOnClickMobileMenu = () => {
    const currentValue = expanded;
    if (!currentValue) {
      document.querySelector('body').classList.add('scroll-menu');
    } else {
      document.querySelector('body').classList.remove('scroll-menu');
    }

    setExpanded(prev => !prev);
  };

  const showStickyNav = scrollPosition > 300;

  const isLinkActive = link => {
    const childLinks = link.links;
    return childLinks?.some(link => link.content.slug === pageSlug);
  };

  return (
    <div className={`navbar-container ${showStickyNav ? 'sticky' : ''}`} ref={wrapperRef}>
      <nav
        className={`navbar navbar-expand-lg ${isHomePage ? 'home-nav' : ''} ${
          expanded || activeLink ? 'expanded' : ''
        } ${showStickyNav ? 'sticky-nav' : ''}`}
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
          onClick={handleOnClickMobileMenu}
        >
          <span className={`${expanded ? 'open-toggle ' : ''} navbar-toggler-icon`}></span>
        </button>

        <div className={` ${expanded ? 'show' : ''} collapse navbar-collapse`} id="navNav">
          <ul className="navbar-nav mr-auto nav-c-group-items">
            {navigationItems?.map((link, index) => {
              // If the link has children or is a mega menu we do not need to redirect to another page
              if (isArray(link.links) || !!link.megaMenu) {
                return (
                  <>
                    <li
                      key={index}
                      onClick={() => setActiveLink(prevLink => (prevLink === link ? null : link))}
                      className={`nav-c-item ${activeLink === link || isLinkActive(link) ? 'active' : ''}`}
                    >
                      {link.label}

                      <span>
                        <img
                          className={`${showMobileMenu && activeLink === link ? 'revert' : ''}`}
                          src={activeLink === link ? dropdownActiveIcon : dropdownIcon}
                          alt="dropdown menu icon"
                        />
                      </span>
                    </li>

                    {showMobileMenu && activeLink === link && (
                      <MegaMenu link={activeLink} pageSlug={pageSlug} isMobile />
                    )}
                  </>
                );
              }

              return (
                <li className="btn-container">
                  <Link to={link.link} className={link.isButton ? 'btn btn-primary' : ''}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {!showMobileMenu && activeLink && <MegaMenu link={activeLink} pageSlug={pageSlug} />}
    </div>
  );
};

export default Navbar;
