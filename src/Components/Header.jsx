import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import logo from '../Assets/Images/logo.png';

export default function Header() {
  return (
    <header>
      <nav className="header__nav">
        <input id="nav__toggle" type="checkbox" />
        <label className="nav__btn" for="nav__toggle">
          <span></span>
        </label>

        <ul className="nav__box">
          <li><Link className="nav__item tablet" to="/">Home</Link></li>
          <li><Link className="nav__item" to="/projects">Projects</Link></li>
            {/* <li><Link className="nav__item" to="/skills">Skills</Link></li>
        <li><Link className="nav__item" to="/gallery">Gallery</Link></li> */}
          <li><Link className="nav__item" to="/about">About</Link></li>
          <li><Link className="nav__item em" to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Link className="nav__icon" to="/"><img src={logo} alt="logo" className="nav__logo" /></Link>
    </header>
  );
}
