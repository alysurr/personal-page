import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

export default function Header() {
  return (
    <header>
      <nav className="header__nav">
        <input id="nav__toggle" type="checkbox" />
        <label className="nav__btn" for="nav__toggle">
          <span></span>
        </label>

        <ul className="nav__box">
          <li><Link className="nav__item" to="/">Home</Link></li>
          <li><Link className="nav__item" to="/about">About</Link></li>
          <li><Link className="nav__item" to="/projects">Projects</Link></li>
          <li><Link className="nav__item" to="/skills">Skills</Link></li>
          <li><Link className="nav__item" to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
}
