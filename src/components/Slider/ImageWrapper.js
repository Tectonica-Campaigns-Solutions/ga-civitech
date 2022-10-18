import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import CTSlider from "../Slider/CTSlider";

export default function ImageWrapper({ image }) {
    if (Array.isArray(image) && image.length > 0) {
        return (
            <CTSlider>
                {image.map(img => <GatsbyImage image={img.gatsbyImageData} alt={img.alt} />)}
            </CTSlider>
        );
    }

    return <GatsbyImage image={image.gatsbyImageData} alt={image?.alt} />;
}
