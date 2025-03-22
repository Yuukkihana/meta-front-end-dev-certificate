import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); //like array destructuring, we assign several variables quickly, not one at a time

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 