import React from 'react';

const SeoDatoCMS = ({ page, children }) => {
  const seo = page.seoMetaTags;

  const sitename = 'Civitech';
  const titleIndex = seo?.tags?.find(tag => tag.tagName === 'title');
  const overrideTitle = page.seo?.title ? page.seo.title : titleIndex?.content;

  return (
    <>
      {seo?.tags?.map(seoTag => {
        if (seoTag.tagName === 'title') {
          return <title>{`${overrideTitle} - ${sitename}`}</title>;
        }

        const name = seoTag.attributes?.property || seoTag.attributes?.name;
        let content = seoTag.attributes?.content;

        if (name === 'description') {
          content = page.seo?.description || seoTag.attributes?.content;
        } else if (name === 'og:image') {
          content = page.seo?.image?.url || seoTag.attributes?.content;
        }

        return <meta name={name} content={content} />;
      })}

      {children}
    </>
  );
};
export default SeoDatoCMS;
