import * as React from 'react';
import PropTypes from 'prop-types';
import TopMessage from './Global/TopMessage/TopMessage';
import { Slice } from 'gatsby';

import '../styles/main.scss';

const Layout = ({ location, children, currentId }) => {
  return (
    <div className={`pale-gray wrap-page ${currentId}`}>
      <TopMessage />
      <Slice alias="header" location={location} />
      <main>{children}</main>
      <Slice alias="footer" />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
