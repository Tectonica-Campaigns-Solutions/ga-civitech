import React from "react";
import { StaticQuery, graphql } from "gatsby";

import "./index.scss";

const TopMessage = () => {
    return <StaticQuery
        query={graphql`
                query TopMessage {
                    datoCmsTopMessage {
                        message
                        statusTopMessage
                    }
                }
        `}
        render={data => (data.datoCmsTopMessage.statusTopMessage
            ? (
                <div className="top-message-container">
                    <h1>{data.datoCmsTopMessage.message}</h1>
                </div>
            )
            : <></>
        )}
    />;
}

export default TopMessage;