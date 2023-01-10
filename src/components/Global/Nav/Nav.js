import React, { useState, useEffect } from 'react';
import Link from '../Link';
import logo from '../../Icons/logo.svg';

import './index.scss';

const LinkItem = ({ link, label, isButton }) => {
  return (
    <li className="nav-item">
      <Link to={link} className={isButton ? 'btn btn-primary' : ''}>
        {label}
      </Link>
    </li>
  );
};

const DropdownItem = ({ link, label, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mouseClick = (e) => {
    e.preventDefault();
    setDropdownOpen(true);
  };

  return (
    <li className="dropdown nav-item" >
      <Link to={link} type="button" aria-label="Expand" aria-expanded="false" data-bs-toggle="dropdown" className="dropdown-link" onClick={mouseClick}>
        {label}
      </Link>

      <ul className={`dropdown-menu ${dropdownOpen ? 'open' : null}`}>
        {children?.map(link => (
          <li className="dropdown-item" key={link?.id}>
            <Link className="dropdown-link" to={link}>
              {link?.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const DropdownMegaMenu = ({ link, megaMenu }) => {
  const [dropdownMegaMenu, setDropdownMegaMenu] = useState(false);
  const mouseClick = (e) => {
    e.preventDefault();
    setDropdownMegaMenu(true);
  };
  return (
    <li className="dropdown nav-item">
      <Link to={link} onClick={mouseClick}>{link.label}</Link>
      <ul className={`dropdown-menu ${dropdownMegaMenu ? 'open' : null}`}>
        <div className="megaMenuBox">
          <div className="navMegaMenu container">
            {
              megaMenu.tabs.map(item => <div>{ item.title }</div>)
            }
          </div>
          {
            megaMenu.tabs.map(item => 
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <h3>{ item.title }</h3>
                    { item.description }
                    <div>
                      <Link to={link} >{ link.label}</Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      {
                        item.groupLink.map(item => {
                          return (
                            <div className="col-lg-6">
                              <h4>{ item.title }</h4>
                              { 
                                  item.links.map(item => <div>{ item.label }</div>)
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
               
              </div>
            )
          }
        </div>
       
      </ul>
    </li>
  )
}

export default function Nav({ navData, path }) {
  // data
  const navLinks = navData.datoCmsNavigation.navigationItems;

  // Use States --------
  const [expanded, setExpanded] = useState(false);
  // Sticky Nav handlers are here
  const [scrollPosition, setScrollPosition] = useState(0);

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
          {/* {navLinks?.map(link =>
            link.links.length === 0 ? (
              <LinkItem key={link?.mainLink?.id} link={link?.mainLink} label={link?.label} isButton={link?.isButton} />
            ) : (
              <DropdownItem key={link?.mainLink?.id} link={link?.mainLink} label={link?.label} children={link?.links} />
            )
          )} */}
          {
            navLinks?.map(link => 
              {
                if(link.megaMenu){
                  return ( <DropdownMegaMenu key={link?.mainLink?.id} megaMenu={link.megaMenu} link={link?.mainLink}/> )
                }
                else if(link.links.length !== 0){
                  return ( <DropdownItem key={link?.mainLink?.id} link={link?.mainLink} label={link?.label} children={link?.links} /> )
                }else{
                  return (<LinkItem key={link?.mainLink?.id} link={link?.mainLink} label={link?.label} isButton={link?.isButton} /> )
                }
              }
              
            )
          }
        </ul>
      </div>
    </nav>
  );
}
