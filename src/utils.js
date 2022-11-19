export const formatDate = val => {
  return new Date(val).toDateString();
};

export const pathToModel = (model, slug) => {
  if(model == 'product'){
    return '/product/'
  }else{
    return null;
  }
}

