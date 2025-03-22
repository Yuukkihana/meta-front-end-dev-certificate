import Btn from './components/Btn';
import './App.css';
import ModeToggler from './components/ModeToggler';
import NumberBtn from './components/NumberBtn';
import InputComponent from './components/InputComponent';

function App() {
  return (
    <div>
    <Btn />
    <ModeToggler />
    <h2>Lab Task: Add a button and handle a click event</h2>
    <NumberBtn />
    <h2>Testing hooks and state</h2>
    <InputComponent />
    </div>
  );
}

export default App;
