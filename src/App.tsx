import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import TestBB from './pages/TestBB';
import TestSS from './pages/TestSS';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/testbb" element={<TestBB />} />
                <Route path="/testss" element={<TestSS />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
