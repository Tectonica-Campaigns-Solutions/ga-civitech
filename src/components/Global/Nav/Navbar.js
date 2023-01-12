import React, { useState, useEffect, useRef } from 'react';
import Link from '../Link';
import MegaMenu from './MegaMenu/MegaMenu';
import logo from '../../Icons/logo.svg';
import dropdownIcon from '../../Icons/nav-dropdown.svg';
import dropdownActiveIcon from '../../Icons/nav-dropdown-active.svg';
import { isArray } from '../../../utils';

import './index.scss';

const Navbar = ({ navData, path }) => {
  const { navigationItems = [] } = navData.datoCmsNavigation;
  const isHomePage = !path || path === '/';

  const [expanded, setExpanded] = useState(false);
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

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
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
          setActiveLink(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

 

  return (
    <div className="navbar-container"  ref={wrapperRef}>
      <nav
        className={`navbar navbar-expand-lg ${isHomePage ? 'home-nav' : ''} ${expanded ? 'expanded' : ''} ${
          scrollPosition > 40 ? 'sticky-nav' : ''
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
          <ul className="navbar-nav mr-auto nav-c-group-items">
            {navigationItems?.map(link => {
              // If the link has children or is a mega menu we do not need to redirect to another page
              if (isArray(link.links) || !!link.megaMenu) {
                return (
                  <span
                    onClick={() => setActiveLink(link)}
                    className={`nav-c-item ${activeLink === link ? 'active' : ''}`}
                  >
                    {link.label}

                    <span>
                      <img src={activeLink === link ? dropdownActiveIcon : dropdownIcon} />
                    </span>
                  </span>
                );
              }

              return (
                <Link to={link} className={link.isButton ? 'btn btn-primary' : ''}>
                  {link.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>

      {activeLink && <MegaMenu link={activeLink} />}
    </div>
  );
};

export default Navbar;
