import React from "react";
import "../../../App.css";

const SpecialButton = (props) => {
  return (
    <>
      <button className="special">{props.specialProp}</button>
    </>
  );
};

export default SpecialButton;
