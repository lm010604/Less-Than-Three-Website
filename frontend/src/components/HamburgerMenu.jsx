import { useEffect, useState } from 'react';

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 720;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="hamburger-menu">
      {isMobile && (
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
      {(!isMobile || menuOpen) && (
        <nav>
          <ul id="menu">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="members.html">MEMBERS</a></li>
            <li><a href="auditions.html">AUDITION</a></li>
            <li><a href="#events">EVENTS</a></li>
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}