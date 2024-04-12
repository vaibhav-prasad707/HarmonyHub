// Player.js
import React, { useState } from 'react';

function Player({ currentSong, togglePlay }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    togglePlay();
  };

  return (
    <div className="player">
      <h2>Now Playing: {currentSong}</h2>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default Player;
