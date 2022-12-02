export const getCtaUrl = cta => {
  return cta.link?.content ? cta.link?.content?.slug : cta.link?.url;
};

export const getCtaTitle = cta => {
  return cta.title ? cta.title : cta.link?.content?.label;
};
