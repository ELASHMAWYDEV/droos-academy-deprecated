import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./style.scss";

//Assets

function Inputs({ title, inputs, btnName }) {
  return (
    <form className="inputs-container">
      <div className="title-container">
        <h2>{title}</h2>
      </div>
      <div className="input-items-container">
        {inputs.length !== 0 &&
          inputs.map((input, i) =>
            input.tag === "input" ? (
              <>
                <div className="input-item">
                  {input.label && <label>{input.label}</label>}
                  <div className="input-feild-container">
                    {" "}
                    <input {...input.props} />
                  </div>
                </div>
              </>
            ) : null
          )}
      </div>
      <div className="btn-container">
        <button type="submit" className="submit-btn">
          {btnName}
        </button>
      </div>
    </form>
  );
}

export default Inputs;
