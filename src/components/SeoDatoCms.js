import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms'

const SeoDatoCMS = ({ page }) => {
  const seo = page.seoMetaTags
  const sitename = 'Civitech'
  //override title from seo field
  const titleIndex = seo.tags?.find((tag) => tag.tagName === 'title')
  const overrideTitle = page.seo?.title ? page.seo.title :  titleIndex.content;
  const overrideDescription = page.seo?.description ? page.seo?.description : ''
  
  seo.tags.map(item => {
    if(item.tagName === 'title'){
      item.content = `${overrideTitle} - ${sitename}`
    }
  })

  //add description to seo tags
  seo.tags.push({tagName:'meta', attributes: {property: 'description', content: overrideDescription}})
  return <HelmetDatoCms seo={seo} />
};
export default SeoDatoCMS;
