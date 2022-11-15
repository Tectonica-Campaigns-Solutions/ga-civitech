import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const SeoDatoCMS = ({ seo }) => {
  const sitename = 'Civitech';
  const og_datocms_title = seo.tags?.find(tag => tag.attributes?.property === 'og:title');
  const og_datocms_sitename = seo.tags?.findIndex(tag => tag.attributes?.property === 'og:site_name');

  // Override og:title because share same CMS
  seo.tags[og_datocms_sitename].attributes.content = sitename;

  // Override Title because share same CMS
  const title = seo.tags?.findIndex(tag => tag.tagName === 'title');
  seo.tags[title].content = `${og_datocms_title.attributes.content} | ${sitename}`;

  return <HelmetDatoCms seo={seo} />;
};
export default SeoDatoCMS;
