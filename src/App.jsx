import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
