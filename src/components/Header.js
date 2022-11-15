import * as React from 'react';
import PropTypes from 'prop-types';
import Nav from './Global/Nav/Nav';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

const Header = ({ siteTitle }) => {
  const mainMenu = useStaticQuery(graphql`
    query {
      datoCmsNavigation(codeId: { eq: "main_menu" }) {
        ...Navigation
      }
    }
  `);
  return (
    <header>
      <Nav navData={mainMenu} />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
