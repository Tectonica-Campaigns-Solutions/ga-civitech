import React from 'react';
import VideoPlayer from '../../Global/VideoPlayer/VideoPlayer';

function VideoEmbed({ block }) {
  return (
    <div className="container video-embed my-5">
      <VideoPlayer video={block.video} />
    </div>
  );
}

export default VideoEmbed;
