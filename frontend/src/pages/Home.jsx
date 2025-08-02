import { useEffect, useState } from 'react';
import { fetchPosts } from '../api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      <Slideshow />
      <section id="events">
        <h2>Events</h2>
        <AudioPlayer />
      </section>
    </div>
  );
}
