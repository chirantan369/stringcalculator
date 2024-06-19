import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';

function App() {

  const [numberWithString, setNumberWithString] = useState("");

  const getTotalNumber = useCallback(() => {

    let total = 0;
    let invalidNumber = [];
    if (numberWithString) {
      let split = numberWithString.split("");

      for (let index = 0; index < split.length; index++) {
        const element = split[index];
        if (element == "-" && split[index + 1] && !isNaN(split[index + 1])) {
          invalidNumber.push("-" + split[index + 1]);
        } else if (!isNaN(element)) {
          total = total + parseInt(element);
        }
      };
    }

    if (invalidNumber.length > 0) {
      return `Error : Negative numbers (${invalidNumber.join(", ")}) not allowed`;
    } else {
      return `Total : ${total}`;
    }

  }, [numberWithString]);

  return (
    <div className="App">
      <header className="App-header">
        String Calculator
        <div>
          <input type='text' value={numberWithString} placeholder='Enter Number'
            onChange={(e) => { setNumberWithString(e.target.value) }}
          /> <br />
          <span> {getTotalNumber()} </span>
        </div>
      </header>

    </div>
  );
}

export default App;
