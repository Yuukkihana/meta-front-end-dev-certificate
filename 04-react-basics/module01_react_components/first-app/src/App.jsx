import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Intro1 from './components/Intro1';

function App() {
  return (
    <div className="App">  
      <Nav />
      Creating my first component:
      <Heading /> 
      <Intro1 />
      <Footer />
    </div> 
  );
}

export default App;
