import React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Link from '../Link';
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
          <img src={footer.logoFooter.image.url} />
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
          <div className="col-sm-6 col-lg-2 logo-container">
            <img src={footer.certified.image.url} alt="" />
          </div>

          <div className="col-sm-6 col-lg-6 mt-md-0">
            <div className="row">
              <div className="col">{footer.copyright.value}</div>
              {footer.menuLegal.navigationItems.map(item => {
                return (
                  <div className="col-md col-sm-12" key={item.id}>
                    <Link to={item.mainLink}>{item.label}</Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg col-sm-12 ct-footer-social-icons-container pt-5 pt-lg-0">
            <ul className="justify-content-lg-end justify-content-sm-start">
              {footer.social.navigationItems.map(item => {
                return (
                  <li key={item.id}>
                    <Link to={item.mainLink} target="_blank">
                      <img src={item.icon.url} />
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
