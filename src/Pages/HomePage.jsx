import '../Components/Headline.scss'
import React, { Component } from 'react';
import Headline from '../Components/Headline.jsx'
import Scene from '../Components/Scene';

class HomePage extends Component {

  render() {
    return (
    <>
    <Headline />
    <Scene />
    </>
    );
  }
}

export default HomePage;

