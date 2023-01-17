import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from '../Link/Link';
import FooterGroupLinks from './FooterGroupLinks';
import Divider from '../Divider/Divider';

import './index.scss';

function Footer() {
  const footer = useStaticQuery(graphql`
    query footer {
      menuFooter: datoCmsNavigation(codeId: { eq: "footer_menu" }) {
        ...Navigation
      }
      social: datoCmsNavigation(codeId: { eq: "social" }) {
        ...Navigation
      }
      menuLegal: datoCmsNavigation(codeId: { eq: "menu_legal" }) {
        ...Navigation
      }
      certified: datoCmsGlobalSetting(codeId: { eq: "logo_certified" }) {
        image {
          url
        }
      }
      copyright: datoCmsGlobalSetting(codeId: { eq: "copyright_footer" }) {
        value
      }
      logoFooter: datoCmsGlobalSetting(codeId: { eq: "logo_footer_white" }) {
        value
        image {
          url
        }
      }
    }
  `);

  return (
    <footer id="main-footer">
      <div className="container mb-4">
        <div className="row footer-ct-logo">
          <img src={footer.logoFooter.image.url} alt="Logo civitech" />
        </div>

        {/* Menu navigation items */}
        <div className="row ct-footer-links-container">
          {footer.menuFooter.navigationItems.map((item, index) => (
            <FooterGroupLinks key={index} item={item} />
          ))}
        </div>

        <Divider />
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Logo B Corporation */}
          <div className="col-sm-6 col-lg-2 logo-container">
            <img src={footer.certified.image.url} alt="B Corporation" />
          </div>

          {/* Links */}
          <div className="col-sm-6 col-lg-7 mt-md-0 footer-links">
            <div>{footer.copyright.value}</div>

            {footer.menuLegal.navigationItems.map(item => {
              const isButton = item.isButton;
              return (
                <div key={item.id}>
                  <Link to={item.mainLink} className={isButton ? 'btn btn-primary' : ''}>
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Social links */}
          <div className="col-lg col-sm-12 ct-footer-social-icons-container pt-5 pt-lg-0">
            <ul className="justify-content-lg-end justify-content-sm-start">
              {footer.social.navigationItems.map(item => {
                return (
                  <li key={item.id}>
                    <Link to={item.mainLink} target="_blank">
                      <img src={item.icon.url} alt="follow" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
