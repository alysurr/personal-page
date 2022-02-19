import '../Components/Headline.scss'
import React, { Component } from 'react';
import Headline from '../Components/Headline.jsx'
import HomeProjects from '../Components/HomeProjects';
import Skills from '../Components/Skills'

class HomePage extends Component {

  render() {
    return (
    <>
    <Headline />
    <Skills />
    <HomeProjects />
    </>
    );
  }
}

export default HomePage;

