import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <nav className='header__nav'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Skills</Link>
            <Link to="/">Gallery</Link>
        </nav>
    </header>
  );
}
