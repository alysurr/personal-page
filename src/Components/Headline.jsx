import './Headline.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Scene from './Scene'

export default function Headline() {

  return <><section className="hero content">
  <div className="canvas"><Scene /></div>
    <div className="hero__container">
      <h1 className="hero__h1">Alyssa Challender,</h1>
      <h1 className="hero__h1">Junior React Developer</h1>

      <p className="hero__p">I am a web developer based out of SWFL with a passion for beautiful, interactive design and accessibile platforms that add value to people's lives.</p>

      <h2 className="hero__link"><Link className="em" to="/contact">Let's talk »</Link></h2>
    </div>
  </section>

  </>;
  
}
