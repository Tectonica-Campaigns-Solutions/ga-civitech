import React from 'react';
import Link from '../Link';
import Cta from '../Cta/Cta';

const DropdownMegaMenu = ({ link, megaMenu, activeIndex, setActiveIndex, isOpen, handleOnClickMouse }) => {
  return (
    <li className="dropdown nav-item">
      <Link to={link} onClick={handleOnClickMouse}>
        {link.label}
      </Link>

      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <div>
          <div className="megaMenuBox">
            <div style={{ backgroundColor: '#E4F7FF' }}>
              <div className="navMegaMenu container">
                {megaMenu.tabs.map((item, index) => (
                  <div onClick={() => setActiveIndex(index)}>{item.title}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-items">
            {megaMenu.tabs.map((item, index) => {
              if (activeIndex === index) {
                return (
                  <div className="container" key={index}>
                    <div className="row">
                      {/* Primary item */}
                      <div className="col-lg-4">
                        <h3>{item.title}</h3>
                        <div className="description" dangerouslySetInnerHTML={{ __html: item.description }} />
                        <Cta url={link} label={link.label} isButton />
                      </div>

                      {/* Secondary items */}
                      <div className="col-lg-8">
                        <div className="row gy-5">
                          {item.groupLink.map(item => {
                            return (
                              <div className="col-lg-6">
                                <h4>{item.title}</h4>

                                <div className="links">
                                  {item.links.map(linkItem => (
                                    <Link className="secondary-item" to={linkItem.url}>
                                      {linkItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </ul>
    </li>
  );
};

export default DropdownMegaMenu;
