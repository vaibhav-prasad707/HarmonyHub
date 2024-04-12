import React, { useState } from 'react';
import './App.css';
import Player from './players';

function App() {
  const [currentSong, setCurrentSong] = useState('Song Title');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState([]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAddToPlaylist = (song) => {
    if (!playlist.includes(song)) {
      setPlaylist([...playlist, song]);
    }
  };

  const handlePlaySong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>HarmonyHub</h1>
        <nav>
          <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#songs">Songs</a></li>
            <li><a href="#playlist">Playlist</a></li>
            <li><a href="#genres">Genres</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className='title'>HarmonyHub</h1>
        <section id="introduction">
          <p>It is a dynamic and engaging Collaborative Playlist Maker web application that 
          allows users to create, share, and collaborate on playlists in real time. Whether 
          you're planning a party, curating a road trip soundtrack, or simply sharing your favourite
          tunes with friends, Harmony Hub makes it easy and fun to collaborate on music playlists with others.</p>
        </section>
        <h1 className='title'>Songs</h1>
        <section id="songs">
          <div className="flex-container">
            <button onClick={() => handleAddToPlaylist("Song 1")}>Song 1</button>
            <button onClick={() => handleAddToPlaylist("Song 2")}>Song 2</button>
            <button onClick={() => handleAddToPlaylist("Song 3")}>Song 3</button>
            <button onClick={() => handleAddToPlaylist("Song 4")}>Song 4</button>
            <button onClick={() => handleAddToPlaylist("Song 5")}>Song 5</button>
          </div>
        </section>
        <h1 className='title'>Playlist</h1>
        <section id="playlist">
          <ul>
            {playlist.map((song, index) => (
              <li key={index}>
                <button onClick={() => handlePlaySong(song)}>{song}</button>
              </li>
            ))}
          </ul>
        </section>
        <h1 className='title'>Genre</h1>
        <section id="genres">
          <div className="genre-container">
            <button className="genre-button">Lofi</button>
            <button className="genre-button">EDM</button>
            <button className="genre-button">Pop</button>
            <button className="genre-button">Rap</button>
          </div>
        </section>
      </main>
      <footer className="player-container">
        <Player currentSong={currentSong} togglePlay={togglePlay} />
      </footer>
    </div>
  );
}

export default App;
