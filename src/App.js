import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route exact path="/" component={HomePage}/>
        <Route path="/upload" component={UploadPage} />
        <Route path="/video/:id" component={HomePage} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
