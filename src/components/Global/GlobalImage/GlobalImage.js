import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const GlobalImage = ({ image }) => {
    if (image?.gatsbyImageData) {
        return <GatsbyImage image={image.gatsbyImageData} />;
    }

    return <img src={image.url} />;
}

export default GlobalImage;
