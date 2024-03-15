import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
import Navbar2 from './Pages/Navbar2';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar2 />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
