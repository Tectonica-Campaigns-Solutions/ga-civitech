import * as React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Navbar from './Global/Nav/Navbar';

const Header = ({ location }) => {
  const mainMenu = useStaticQuery(graphql`
    query {
      datoCmsNavigation(codeId: { eq: "main_menu" }) {
        ...Navigation
      }
    }
  `);

  return (
    <header>
      <Navbar navData={mainMenu} path={location?.pathname} />
    </header>
  );
};

export default Header;
