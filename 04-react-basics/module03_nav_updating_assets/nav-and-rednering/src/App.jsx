import './App.css';
import Aboutme from './components/Aboutme';
import Homepage from './components/Homepage';
import { Route, Routes, Link } from 'react-router-dom';
import Contact from './components/Contact';
import { useState } from 'react';
import samurai from './assets/samurai.jpg'
import ReactPlayer from 'react-player'

function App() {
  const randomImageURL = "https://picsum.photos/400/265"
  return (
    <div>
      <nav>
        <Link to= "/">Homepage</Link>
        <Link to= "/about-me">About me</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <img height = {200}
          src = {samurai}
          als ="Samurai Girl"
        /> 
      <img src={require('./assets/samurai.jpg')} alt="Samurai Girl" height = {300}/>
      <img src={randomImageURL} alt="Random Image" />
      <h1>React Player Example</h1>
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=t8OZPJfpcTM'}
        playing={false}
        volume={0.5}
      />
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/about-me" element = {<Aboutme />} />
        <Route path = '/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
