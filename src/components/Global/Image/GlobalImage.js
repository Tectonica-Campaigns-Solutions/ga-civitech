import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const GlobalImage = ({ image, ...props }) => {
  const altimage = props.alt ? props.alt : 'image';
  if (image?.gatsbyImageData) {
    return <GatsbyImage alt={altimage} image={{ ...image.gatsbyImageData }} {...props} />;
  } else if (image?.url) {
    return <img src={image.url} alt={altimage} loading="lazy"/>;
  } else {
    return '';
  }
};

export default GlobalImage;
