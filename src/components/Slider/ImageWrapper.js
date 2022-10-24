import React from "react";
import CTSlider from "../Slider/CTSlider";
import GlobalImage from "../Global/GlobalImage/GlobalImage";

export default function ImageWrapper({ image }) {
    if (Array.isArray(image) && image.length > 0) {
        return (
            <CTSlider>
                {image.map(img => <GlobalImage image={img} />)}
            </CTSlider>
        );
    }

    return <GlobalImage image={image} />
}
