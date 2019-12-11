import React, { useState } from "react";
import { operators } from "../../../data.js";
import OperatorButton from "./OperatorButton.js";

const Operators = (props) => {

  const [operatorState, setOperatorState] = useState(operators)
  return (
    <div className="operator-buttons">
      {
        operatorState.map((operator, index) => {
          return <OperatorButton operatorProp={operator} key={index} appendOperator={props.appendOperator} />
        })
      }
    </div>
  );
};

export default Operators;
