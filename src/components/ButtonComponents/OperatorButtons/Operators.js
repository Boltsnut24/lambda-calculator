import React, {useState} from "react";
import {operators} from "../../../data.js";
import OperatorButton from "./OperatorButton.js";

const Operators = () => {

  const [operatorState, setOperatorState] = useState(operators)
  return (
    <div>
      {
        operatorState.map((operator, index) => {
          return <OperatorButton operatorProp = {operator} key = {index}/>
        })
      }
    </div>
  );
};

export default Operators;
