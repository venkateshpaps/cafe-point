import React from 'react';

type YoutubeProps = {
      videoId: Object
};
const YouTubeVideo = ({ videoId } : YoutubeProps ) => 
      <div className="video-responsive" style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        ></iframe>
      </div>
  
export default YouTubeVideo;