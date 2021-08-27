import React from 'react';
import Spinner from './Spinner';

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <Spinner />;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  const { title, description } = selectedVideo.snippet;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
