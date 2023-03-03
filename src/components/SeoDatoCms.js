import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms'

const SeoDatoCMS = ({ seo, favicon }) => {
  // override values if necessary
 
  return (
    <HelmetDatoCms seo={seo} favicon={favicon?.faviconMetaTags} />
  )
};
export default SeoDatoCMS;
