import React from "react";
import Cta from "./Cta";

const CtaList = ({ ctas }) => {
    return ctas.map(cta =>
        <Cta
            key={cta.id} url={cta.link?.content ? cta.link?.content?.slug : cta.link?.url}
            label={cta.title ? cta.title : cta.link?.content?.label}
            isButton={cta.isButton}
        />);
}

export default CtaList;