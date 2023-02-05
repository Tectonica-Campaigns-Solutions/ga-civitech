import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalImage from '../Image/GlobalImage';
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

  const [toggleTopMessage, setToggleTopMessage] = useState(data.datoCmsTopMessage.statusTopMessage || false);
  const [showTopMessageAccordingSession, setShowTopMessageAccordingSession] = useState(true);

  useLayoutEffect(() => {
    if (sessionStorage.getItem('show_top_message')) {
      setShowTopMessageAccordingSession(sessionStorage.getItem('show_top_message') === 'true');
    }
  }, []);

  const handleToggleTopMessage = () => {
    setToggleTopMessage(toggleMessage => {
      sessionStorage.setItem('show_top_message', !toggleMessage);
      return !toggleMessage;
    });
  };

  if (!toggleTopMessage || !showTopMessageAccordingSession) {
    return <></>;
  }

  return (
    <div className="top-message-container">
      <span className="information">
        <GlobalImage image={data.datoCmsTopMessage.icon} />
        <span>{data.datoCmsTopMessage.message}</span>
      </span>

      <div className="close-btn" onClick={handleToggleTopMessage}>
        <img src={closeButton} alt="close message icon" />
      </div>
    </div>
  );
};

export default TopMessage;
