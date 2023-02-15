import React from 'react'
import VideoPlayer from '../../Global/VideoPlayer/VideoPlayer'

function VideoEmbed({ block }) {
  return (
    <div>
      <VideoPlayer video={block.video}/>
    </div>
  )
}

export default VideoEmbed