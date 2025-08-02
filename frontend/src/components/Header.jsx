import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div id="header-flex">
        <div className="title">
          <NavLink to="/">less than three a cappella</NavLink>
        </div>
        <NavLink className="logo" to="/">
          <img src="/images/logo.png" alt="" height="50" />
        </NavLink>
        <nav>
          <ul id="menu">
            <li><a href="#about">ABOUT</a></li>
            <li><NavLink to="/members">MEMBERS</NavLink></li>
            <li><NavLink to="/auditions">AUDITION</NavLink></li>
            <li><a href="#events">EVENTS</a></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
