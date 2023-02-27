import React from 'react';

const SeoDatoCMS = ({ page }) => {
  const seo = page.seoMetaTags;
  const sitename = 'Civitech';
  const titleIndex = seo?.tags?.find(tag => tag.tagName === 'title');
  const overrideTitle = page.seo?.title ? page.seo.title : titleIndex?.content;

  seo?.tags.map(item => {
    if (item.tagName === 'title') {
      return item.content = `${overrideTitle} - ${sitename}`;
    }
  });
  return (
    <>
      <title>{overrideTitle}</title>
    </>
  )  
  // return <HelmetDatoCms seo={seo} />;
};
export default SeoDatoCMS;
