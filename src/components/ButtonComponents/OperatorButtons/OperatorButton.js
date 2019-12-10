import React from "react";
import "../../../App.css";

const OperatorButton = (props) => {
  return (
    <>
      <button>{props.operatorProp.char}</button>
    </>
  );
};

export default OperatorButton;
