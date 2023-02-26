export const pathToModel = (model = null, slug = '') => {
  if (model === 'product') {
    return `/product/${slug}`;
  } else if (model === 'post') {
    return `/post/${slug}`;
  } else if (model === 'list_member') {
    return `/leadership/${slug}`;
  } else {
    return `/${slug}`;
  }
};

export const isArray = array => {
  return Array.isArray(array) && array.length > 0;
};

export const getCtaUrl = cta => {
  if (typeof cta === 'string') {
    return cta;
  }

  if (cta.content?.model) {
    const { apiKey: model } = cta.content?.model;
    return pathToModel(model, cta.content?.slug);
  }

  if (cta.link?.content?.model) {
    const { apiKey: model } = cta.link?.content?.model;
    return pathToModel(model, cta.link?.content?.slug);
  }

  const url = cta.link?.content ? '/' + cta.link?.content?.slug : cta.link?.url;
  return url;
};

export const getCtaTitle = cta => {
  if (typeof cta === 'string') {
    return cta;
  }

  return cta.title ? cta.title : cta.link?.content ? cta.link.content.label : cta.label;
};

export const blockWithPrimaryHeading = blocks => {
  const blocksWithH1 = ['DatoCmsNarrativeBlock'];
  return blocks.some(b => blocksWithH1.includes(b.__typename));
};
