import React from "react";
import "../../../App.css";

const NumberButton = (props) => {
  return (
    <>
      <button className="number" onClick={() => props.appendNumber(props.numberProp)}>{props.numberProp}</button>
    </>
  );
};

export default NumberButton;
