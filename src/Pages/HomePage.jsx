import '../Components/Headline.scss'
import React, { Component } from 'react';
import Headline from '../Components/Headline.jsx'
import HomeProjects from '../Components/HomeProjects';

class HomePage extends Component {

  render() {
    return (
    <>
    <Headline />
    <HomeProjects />
    </>
    );
  }
}

export default HomePage;

