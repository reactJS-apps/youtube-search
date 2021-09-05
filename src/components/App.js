import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}
