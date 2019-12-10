import React from "react";
import "../../../App.css";

const NumberButton = (props) => {
  return (
    <>
      <button className="number">{props.numberProp}</button>
    </>
  );
};

export default NumberButton;
