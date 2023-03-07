import React, { useState, useEffect, useRef } from 'react';
import Link from '../Link/Link';
import MegaMenu from './MegaMenu/MegaMenu';
import logo from '../../Icons/logo.svg';
import dropdownIcon from '../../Icons/nav-dropdown.svg';
import dropdownActiveIcon from '../../Icons/nav-dropdown-active.svg';
import { isArray } from '../../../utils';
import menuArrow from '../../Icons/menu-arrow.svg';

import './index.scss';

const Navbar = ({ navData, path, pageSlug }) => {
  const { navigationItems = [] } = navData.datoCmsNavigation;

  const isHomePage = !path || path === '/';
  const showMobile = () => (typeof window !== 'undefined' ? window.innerWidth < 992 : false);

  const [expanded, setExpanded] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(showMobile());
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
        setShowMobileMenu(showMobile());
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
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActiveLink(false);
        }
        if (event.target.getAttribute('aria-current') == 'page') {
          if (path == event.target.getAttribute('href')) {
            setActiveLink(false);
          }
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
    if (!pageSlug) return false;

    if (link.megaMenu) {
      const megaMenuTabs = link.megaMenu.tabs;

      return (
        megaMenuTabs.some(t => t.link.content.slug === pageSlug) ||
        megaMenuTabs.some(t => t.groupLink?.some(l => l.mainLink.content.slug === pageSlug)) ||
        megaMenuTabs.some(t =>
          t.groupLink?.some(l => l.links.some(internalLink => internalLink?.content?.slug === pageSlug))
        )
      );
    }

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
            {navigationItems?.map(link => {
              // If the link has children or is a mega menu we do not need to redirect to another page
              if (isArray(link.links) || !!link.megaMenu) {
                return (
                  <React.Fragment key={link.id}>
                    <li
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
                  </React.Fragment>
                );
              }

              return (
                <li className="btn-container" key={link.id}>
                  <Link to={link.link} className={link.isButton ? 'btn btn-primary' : ''}>
                    {link.label}
                    {link.isButton ? <img src={menuArrow} alt="Menu arrow" className="icon" /> : null}
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
