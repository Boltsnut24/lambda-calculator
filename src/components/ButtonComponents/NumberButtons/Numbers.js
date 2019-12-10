import React, {useState} from "react";
import numbers from "../../../data.js";
import NumberButton from "./NumberButton.js";

const Numbers = () => {

  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {
        numberState.map((number, index) => {
          <NumberButton numberProp = {number} key = {index}/>
        })
      }
    </div>
  );
};
