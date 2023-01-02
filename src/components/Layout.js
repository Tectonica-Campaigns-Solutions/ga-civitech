import * as React from 'react';
import PropTypes from 'prop-types';
import TopMessage from './Global/TopMessage/TopMessage';
import { Slice } from 'gatsby';

import '../styles/main.scss';

const Layout = ({ location, children }) => {
  return (
    <>
      <TopMessage />
      {/* <Header location={location} /> */}
      <Slice alias="header" location={location}></Slice>
      <main>{children}</main>
      <Slice alias="footer"></Slice>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
