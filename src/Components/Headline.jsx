import './Headline.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Headline() {

  return <section className="hero">
    <h1 className="hero__h1">Alyssa</h1>
    <h1 className="hero__h1">Junior React Developer</h1>

    <p className="hero__p"></p>

    <h2><Link className="nav__item contact" to="/contact">Let's talk »</Link></h2>

  </section>;
}
