import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Components/Contact';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/project" component={ProjectPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
