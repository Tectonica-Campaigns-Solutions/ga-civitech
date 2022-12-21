export const getCtaUrl = cta => {
  const url = cta.link?.content ? cta.link?.content?.slug : cta.link?.url;
  return '/' + url;
};

export const getCtaTitle = cta => {
  return cta.title ? cta.title : cta.link?.content?.label;
};
