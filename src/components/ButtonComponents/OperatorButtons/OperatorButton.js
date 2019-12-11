import React from "react";
import "../../../App.css";

const OperatorButton = (props) => {
  return (
    <>
      <button className="operator" onClick={() => props.appendOperator(props.operatorProp.value)}>
        {props.operatorProp.char}
      </button>
    </>
  );
};

export default OperatorButton;
