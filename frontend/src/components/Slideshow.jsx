import { useEffect, useState } from 'react';

const slides = [
  'images/main-image.jpeg',
  'images/distance.jpeg',
  'images/trophy.jpeg',
  'images/mik.jpg',
  'images/dan-tay.jpg',
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="slideshow-container">
      {slides.map((src, i) => (
        <div
          key={src}
          className="mySlides fade"
          style={{ display: i === index ? 'block' : 'none' }}
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
}