import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms'

const SeoDatoCMS = ({ seo, favicon }) => {
  // override values if necessary
  seo?.tags.map(seoTag => {
    if (seoTag.tagName === 'title') {
       seoTag.content = seoTag.content + ' - Civitech'
    }
    return seoTag
  })
  return (
    <HelmetDatoCms seo={seo} favicon={favicon?.faviconMetaTags} />
  )
};
export default SeoDatoCMS;
