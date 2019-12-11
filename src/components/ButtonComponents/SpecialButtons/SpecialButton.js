import React from "react";
import "../../../App.css";

const SpecialButton = (props) => {
  return (
    <>
      <button className="special" onClick={() => props.appendSpecial(props.specialProp)}>{props.specialProp}</button>
    </>
  );
};

export default SpecialButton;
