import React from "react";

//Styles
import "./style.scss";

//Assets

const Choice = ({ number }) => {
  return (
    <div className="choice-container">
      <div className="choice-number">{number + 1}#</div>
      <div className="choice-input">
        <input type="text" name="choice" placeholder="الإجابة" />
      </div>
    </div>
  );
};

export default Choice;
