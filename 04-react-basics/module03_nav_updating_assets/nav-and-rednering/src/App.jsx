import './App.css';
import Aboutme from './components/Aboutme';
import Homepage from './components/Homepage';
import { Route, Routes, Link } from 'react-router-dom';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  return (
    <div>
      <nav>
        <Link to= "/">Homepage</Link>
        <Link to= "/about-me">About me</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/about-me" element = {<Aboutme />} />
        <Route path = '/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
