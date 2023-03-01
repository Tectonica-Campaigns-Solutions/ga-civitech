import * as React from 'react';
import PropTypes from 'prop-types';
import TopMessage from './Global/TopMessage/TopMessage';
import {CookieNotice} from "gatsby-cookie-notice";
import { Slice } from 'gatsby';

import '../styles/main.scss';

const Layout = ({ location, children, currentSlug }) => {
  return (
    <div className={`pale-gray wrap-page`}>
      <CookieNotice acceptButtonText={"Accept"} declineButton={false} personalizeButtonClasses={"d-none"}>
          <p>This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.</p>
      </CookieNotice>
      <TopMessage />
      <Slice alias="header" location={location} pageSlug={currentSlug} />
      <main>{children}</main>
      <Slice alias="footer" />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
