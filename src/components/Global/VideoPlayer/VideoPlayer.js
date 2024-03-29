import React, { useState } from 'react';
import ImageWrapper from '../Image/ImageWrapper';

import './index.scss';

function VideoPlayer({ video }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleOnPlayVideo = () => setIsFullScreen(true);
  const handleOnCloseVideo = () => setIsFullScreen(false);

  const getYoutubeVideoSrc = () => {
    const videoId = video.source?.providerUid;
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const getVideoThumbnail = () => {
    return video.preview || { url: video.source?.thumbnailUrl };
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
          <ImageWrapper image={getVideoThumbnail()} />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
