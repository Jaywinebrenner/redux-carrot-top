import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Landing from './components/Landing';
import Intro from './components/Intro';
import Dead from './components/Dead';
import Victory from './components/Victory';
import Won from './components/Won';
import Run from './components/Run';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Dead" element={<Dead />} />
        <Route path="/Victory" element={<Victory />} />
        <Route path="/Won" element={<Won />} />
        <Route path="/Run" element={<Run />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
