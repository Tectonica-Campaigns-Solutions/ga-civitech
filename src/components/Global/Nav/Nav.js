import React, { useState, useEffect } from 'react';
import Link from '../Link';
import logo from '../../Icons/logo.svg';
import DropdownItem from './DropdownItem';
import DropdownMegaMenu from './DropdownMegaMenu';
import LinkItem from './LinkItem';

import './index.scss';

export default function Nav({ navData, path }) {
  const navLinks = navData.datoCmsNavigation.navigationItems;

  const [expanded, setExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
  };

  // Use effect for sticky nav
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Event Handlers -----
  const handleNavClick = () => {
    setExpanded(!expanded);
  };

  const mouseClick = e => {
    e.preventDefault();
    setIsDropdownOpen(true);
  };

  const isHome = !path || path === '/';

  return (
    <nav
      className={`navbar navbar-expand-lg ${isHome ? 'home-nav' : ''} ${expanded ? 'expanded' : ''} ${
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
        onClick={() => handleNavClick()}
      >
        <span className={`${expanded ? 'open-toggle ' : ''} navbar-toggler-icon`}></span>
      </button>

      <div className={` ${expanded ? 'show' : ''} collapse navbar-collapse`} id="navNav">
        <ul className="navbar-nav mr-auto">
          {navLinks?.map(link => {
            if (link.megaMenu) {
              return (
                <DropdownMegaMenu
                  key={link?.mainLink?.id}
                  megaMenu={link.megaMenu}
                  link={link?.mainLink}
                  isOpen={isDropdownOpen}
                  handleOnClickMouse={mouseClick}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              );
            } else if (link.links.length !== 0) {
              return (
                <DropdownItem
                  key={link?.mainLink?.id}
                  link={link?.mainLink}
                  label={link?.label}
                  children={link?.links}
                  isOpen={isDropdownOpen}
                  handleOnClickMouse={mouseClick}
                />
              );
            } else {
              return (
                <LinkItem
                  key={link?.mainLink?.id}
                  link={link?.mainLink}
                  label={link?.label}
                  isButton={link?.isButton}
                />
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
}
