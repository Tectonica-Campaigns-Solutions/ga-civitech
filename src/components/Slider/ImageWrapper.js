import React from 'react';
import CTSlider from '../Slider/CTSlider';
import GlobalImage from '../Global/GlobalImage/GlobalImage';

export default function ImageWrapper({ image, ...props }) {
  if (image.length > 1) {
    return (
      <CTSlider>
        {image.map(img => (
          <GlobalImage image={img} {...props} />
        ))}
      </CTSlider>
    );
  }

  return <GlobalImage image={Array.isArray(image) ? image[0] : image} {...props} />;
}
