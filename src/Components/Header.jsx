import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

export default function Header() {
  return (
    <header>
      <div className="hamburger-nav">
    <input id="nav__toggle" type="checkbox" />
    <label className="nav__btn" for="nav__toggle">
      <span></span>
    </label>

    <ul className="nav__box">
      <li><Link className="nav__item" to="/">Home</Link></li>
      <li><Link className="nav__item" to="/">About</Link></li>
      <li><Link className="nav__item" to="/">Projects</Link></li>
      <li><Link className="nav__item" to="/">Skills</Link></li>
      <li><Link className="nav__item" to="/">Gallery</Link></li>
    </ul>
  </div>
        <nav className='header__nav'>

        </nav>
    </header>
  );
}
