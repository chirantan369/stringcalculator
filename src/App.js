import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [numberWithString, setNumberWithString] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        String Calculator
        <div>
          <input type='text' value={numberWithString} placeholder='Enter Number' onChange={(e) => { setNumberWithString(e.target.value) }} />
        </div>
      </header>

    </div>
  );
}

export default App;
