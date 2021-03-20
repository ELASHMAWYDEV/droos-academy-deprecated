import React from "react";

//Styles
import "./style.scss";
//Assets

const Instruction = ({ number, Instruction }) => {
  return (
    <div className="instruction-container">
      <div className="number-container">
        <h3>{number}</h3>
      </div>
      <div className="text-container">
        <h4>{Instruction}</h4>
      </div>
    </div>
  );
};

export default Instruction;
