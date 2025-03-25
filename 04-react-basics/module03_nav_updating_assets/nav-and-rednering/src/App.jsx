import './App.css';
import Aboutme from './components/Aboutme';
import Homepage from './components/Homepage';
import { Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <nav>
        <Link to= "/">Homepage</Link>
        <Link to= "/about-me">About mee</Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/about-me" element = {<Aboutme />} />
      </Routes>
    </div>
  );
}

export default App;
