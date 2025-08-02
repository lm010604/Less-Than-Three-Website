import { useEffect, useState } from 'react';
import { fetchPosts } from '../api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <main>
      <div className="slideshow-container">
        <div className="mySlides fade"><img src="/images/main-image.jpeg" alt="" /></div>
        <div className="mySlides fade"><img src="/images/distance.jpeg" alt="" /></div>
        <div className="mySlides fade"><img src="/images/trophy.jpeg" alt="" /></div>
        <div className="mySlides fade"><img src="/images/mik.jpg" alt="" /></div>
        <div className="mySlides fade"><img src="/images/dan-tay.jpg" alt="" /></div>
      </div>

      <section id="events">
        <h2>Events</h2>
        <div className="audio-container">
          <div className="audio-content">
            <img src="/images/recordplayer.gif" alt="GIF" />
            <div className="audio-player">
              <p>
                Now Playing: <span id="songTitle">Song Title</span>
              </p>
              <audio id="audioPlayer" controls>
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <img id="poster" src="/images/poster.png" alt="poster for spring 2024 concert" width="320" />
          <div className="playlist">
            <h3>SPRING '24 PLAYLIST</h3>
            <ul id="playlist"></ul>
            <div className="audio-controls">
              <button id="prevButton">&#9664;&#9664;</button>
              <button id="playPauseButton">&#9658;</button>
              <button id="nextButton">&#9654;&#9654;</button>
            </div>
            <img id="unicornGif" src="/images/unicorn.gif" alt="GIF" width="160" />
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <div className="wide-text">
          <p>
            &lt;3 A Cappella, pronounced “Less Than Three”, is an a cappella group from Cornell University in Ithaca, NY open to all treble voices. As a group founded on diversity, inclusivity, and professionalism, our mission is to make music accessible for everyone. Less Than Three is committed to producing electrifying harmonies, engaging concerts, and diverse set lists of everything from Disney to Pop.
          </p>
        </div>
        <div className="home-pictures">
          <img src="/images/picture-1.jpg" alt="" width="260" />
          <img src="/images/acu.jpeg" alt="" width="500" />
          <img src="/images/picture-2.jpg" alt="" width="260" />
        </div>
      </section>

      <section>
        <h2>Latest Posts</h2>
        {posts.map((p) => (
          <article key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
