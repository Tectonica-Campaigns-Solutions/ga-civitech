import * as React from 'react';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });

  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Public_Sans/PublicSans-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="publicSans"
    />,
    <link
      rel="preload"
      href="/fonts/Libre_Franklin/LibreFranklin-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="libreFranklin"
    />,
  ]);
};
