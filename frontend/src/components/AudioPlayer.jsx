import { useEffect, useRef, useState } from 'react';

const songs = [
  { title: 'Mr. Sandman - The Chordettes', url: 'audio/mr-sandman.mp3' },
  { title: 'Take Me To Church - Hozier', url: 'audio/hozier.mp3' },
  { title: 'Before He Cheats - Carrie Underwood', url: 'audio/underwood.mp3' },
  { title: "Somebody That I Used To Know - Gotye", url: 'audio/gotye.mp3' },
  { title: "You're So Vain - Carly Simon", url: 'audio/carly-simon.mp3' },
  { title: 'Royals - Lorde', url: 'audio/royals.mp3' },
  { title: 'No Roots - Alice Merton', url: 'audio/no-roots.mp3' },
  { title: "Can't Catch Me Now - Olivia Rodrigo", url: 'audio/oliviarodrigo.mp3' },
  { title: 'Enemy - Imagine Dragons', url: 'audio/enemy.mp3' },
  { title: 'Always - Erasure', url: 'audio/always.mp3' },
];

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = songs[current].url;
    if (isPlaying) {
      audio.play();
    }
  }, [current]);

  useEffect(() => {
    const audio = audioRef.current;
    const update = () => setIsPlaying(!audio.paused);
    const time = () => setCurrentTime(audio.currentTime);
    audio.addEventListener('play', update);
    audio.addEventListener('pause', update);
    audio.addEventListener('timeupdate', time);
    return () => {
      audio.removeEventListener('play', update);
      audio.removeEventListener('pause', update);
      audio.removeEventListener('timeupdate', time);
    };
  }, []);

  const playSong = (index) => {
    setCurrent(index);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const playPrevious = () => {
    playSong((current - 1 + songs.length) % songs.length);
  };

  const playNext = () => {
    playSong((current + 1) % songs.length);
  };

  const formatTime = (t) => {
    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="audio-container">
      <div className="audio-content">
        <img src="images/recordplayer.gif" alt="GIF" />
        <div className="audio-player">
          <p>Now Playing: <span id="songTitle">{songs[current].title}</span></p>
          <audio ref={audioRef} />
          <div>{formatTime(currentTime)}</div>
        </div>
      </div>

      <div className="playlist">
        <h3>SPRING '24 PLAYLIST</h3>
        <ul id="playlist">
          {songs.map((song, index) => (
            <li key={song.title} onClick={() => playSong(index)} style={{listStyle:'none', padding:0, margin:0}}>
              {song.title}
            </li>
          ))}
        </ul>
        <div className="audio-controls">
          <button onClick={playPrevious}>◄◄</button>
          <button onClick={togglePlayPause}>{isPlaying ? '⏸' : '▶'}</button>
          <button onClick={playNext}>►►</button>
        </div>
        <img id="unicornGif" src="images/unicorn.gif" alt="GIF" width="160" />
      </div>
    </div>
  );
}
