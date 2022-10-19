import React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import GlobalImage from "../GlobalImage/GlobalImage";

import "./index.scss";

const TopMessage = () => {
    const data = useStaticQuery(graphql`
                query TopMessage {
                    datoCmsTopMessage {
                        message
                        statusTopMessage
                        icon{
                          gatsbyImageData
                          url
                        }
                    }
                }
    `);

    const [toggleMessage, setToggleMessage] = useState(data.datoCmsTopMessage.statusTopMessage || false);
    const handleToggleMessage = () => setToggleMessage(toggleMessage => !toggleMessage)

    if (!toggleMessage) {
        return <></>;
    }

    return (
        <div className="top-message-container">
            <div className="d-flex h-100 align-items-center justify-content-center">
                <h1 className="flex-grow-1">{data.datoCmsTopMessage.message}</h1>

                <div className="close-btn" onClick={handleToggleMessage}>
                    <GlobalImage image={data.datoCmsTopMessage.icon} />
                </div>
            </div>
        </div>
    );
}

export default TopMessage;