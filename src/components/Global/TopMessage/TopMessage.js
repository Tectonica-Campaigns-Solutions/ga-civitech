import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "./index.scss";

const TopMessage = () => {
    return <StaticQuery
        query={graphql`
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
        `}
        render={data => (data.datoCmsTopMessage.statusTopMessage
            ? (
                <div className="top-message-container">
                    <GatsbyImage image={data.datoCmsTopMessage.icon.gatsbyImageData} />
                    <h1>{data.datoCmsTopMessage.message}</h1>
                </div>
            )
            : <></>
        )}
    />;
}

export default TopMessage;