import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import TetstBB from './pages/TetstBB';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/testbb" element={<TetstBB />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
