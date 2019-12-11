import React, { useState } from "react";
import { numbers } from "../../../data.js";
import NumberButton from "./NumberButton.js";

const Numbers = (props) => {

  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {
        numberState.map((number, index) => {
          return <NumberButton numberProp={number} key={index} appendNumber={props.appendNumber} />
        })
      }
    </div>
  );
};

export default Numbers;
