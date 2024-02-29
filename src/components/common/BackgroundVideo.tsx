import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline preload='auto' className='video'>
        <source src='/backgroundVideo.mp4' type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
