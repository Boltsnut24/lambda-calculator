import React from "react";
import "./App.css";
import Number from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operator from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Special from "./components/ButtonComponents/SpecialButtons/Specials.js";
import Display from "./components/DisplayComponents/Display.js";
import Logo from "./components/DisplayComponents/Logo.js";
import Spec from "jest-jasmine2/build/jasmine/Spec";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display />
        <div className="operator-numbers">
          <Operator />
          <Number />
        </div>

        <Special />
      </div>
    </div>
  );
}

export default App;
