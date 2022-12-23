import React, { useState } from 'react';

import './index.scss';

function VideoPlayer({ video }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleOnPlayVideo = () => setIsFullScreen(true);
  const handleOnCloseVideo = () => setIsFullScreen(false);

  const getYoutubeVideoSrc = () => {
    const videoId = video.url?.replace('https://www.youtube.com/watch?v=', '');
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="video-player">
      {isFullScreen ? (
        <div className="fullscreen">
          <span onClick={handleOnCloseVideo}>X</span>
          <iframe src={getYoutubeVideoSrc()} />
        </div>
      ) : (
        <div className="thumbnail" onClick={handleOnPlayVideo}>
          <img src={video.thumbnailUrl} />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
