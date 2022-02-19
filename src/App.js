import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
