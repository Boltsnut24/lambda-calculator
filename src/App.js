import React, { useState } from "react";
import "./App.css";
import Number from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operator from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Special from "./components/ButtonComponents/SpecialButtons/Specials.js";
import Display from "./components/DisplayComponents/Display.js";
import Logo from "./components/DisplayComponents/Logo.js";

function App() {

  const [displayState, setDisplayState] = useState("");

  const appendNumber = (num) => {
    setDisplayState(`${displayState}${num}`);
  }

  const appendOperator = (operator) => {
    operator === "=" ? setDisplayState(eval(displayState)) :
                       setDisplayState(`${displayState} ${operator} `)
  }

  const appendSpecial = (special) => {
    if (special === "C") {
      setDisplayState(``);
    } else if (special === "+/-") {
      if (displayState.split("")[0] === '-') {
        setDisplayState(displayState.substr(1))
      } else {
        setDisplayState(`-${displayState}`)
      }
    } else {
      setDisplayState(`${displayState} ${special} `)
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayProp={displayState} />
        <div className="button-container">
          <div className="operator-numbers">
            <Special appendSpecial={appendSpecial} />
            <Number appendNumber={appendNumber} />
          </div>
          <Operator appendOperator={appendOperator} />
        </div>

      </div>
    </div>
  );
}

export default App;
