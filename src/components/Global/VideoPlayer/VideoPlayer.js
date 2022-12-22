import React from 'react'

function VideoPlayer({ video }) {
  return (
    <div>
      <img src={video.thumbnailUrl} />
    </div>
  )
}

export default VideoPlayer