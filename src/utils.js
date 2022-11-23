export const pathToModel = (model, slug = '') => {
  if (model == 'product') {
    return `/product/${slug}`;
  } else if (model == 'post') {
    return `/post/${slug}`;
  } else {
    return '';
  }
};
