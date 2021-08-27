import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
  const { title, description } = selectedVideo.snippet;
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
