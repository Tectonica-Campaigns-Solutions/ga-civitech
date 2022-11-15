import React from 'react';
import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalImage from '../GlobalImage/GlobalImage';
import closeButton from '../../Icons/close.svg';

import './index.scss';

const TopMessage = () => {
  const data = useStaticQuery(graphql`
    query TopMessage {
      datoCmsTopMessage {
        message
        statusTopMessage
        icon {
          gatsbyImageData
          url
        }
      }
    }
  `);

  const [toggleMessage, setToggleMessage] = useState(data.datoCmsTopMessage.statusTopMessage || false);
  const handleToggleMessage = () => setToggleMessage(toggleMessage => !toggleMessage);

  if (!toggleMessage) {
    return <></>;
  }

  return (
    <div className="top-message-container">
      <div className="d-flex h-100 align-items-center justify-content-center">
        <span className="information">
          <GlobalImage image={data.datoCmsTopMessage.icon} />
          <h1>{data.datoCmsTopMessage.message}</h1>
        </span>

        <div className="close-btn" onClick={handleToggleMessage}>
          <img src={closeButton} />
        </div>
      </div>
    </div>
  );
};

export default TopMessage;
