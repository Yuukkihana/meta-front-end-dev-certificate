import logo from './logo.svg';
import './index.css'
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Card from './components/Card';

function Logo (props){ //embedding JSX Expressions in attributes
  const reactLogo = <img src = {logo} />
  return reactLogo;
}

function App() {
  return (
    <div className="App">  
      <Nav />
      < Logo />
      Creating my first component:
      <Heading name = "Annie" color = "purple" /> 
      <Intro1 />
      <Intro2 greet = "Howdy"/>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
       <Card h2="Third card's h2" h3="Third card's h3" />
      <Footer />
    </div> 
  );
}

export default App;
