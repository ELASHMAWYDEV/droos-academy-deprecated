import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./style.scss";

//Assets

function Inputs({ title, inputs, btnName, signup }) {
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
            ) : input.tag === "select" ? (
              <div className="select-item">
                {input.label && <label>{input.label}</label>}
                <div className="input-feild-container">
                  {" "}
                  <select {...input.props}>
                    <option value="">{input.selectTitle}</option>
                    {input.options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : null
          )}
      </div>
      {signup === "true" ? (
        <div className="condition-privacy-container">
          <label>
            <div className="checkbox-container">
              <input type="checkbox" />
            </div>

            <div className="text-container">
              <h4>
                أوافق علي جميع الشروط والأحكام ، وسألتزم بجميع سياسات منصة{" "}
                <span>دروس أكاديمي</span>
              </h4>
              <h6>
                هذا إقرار منك بالوافقة علي <Link>سياسة الخصوصية</Link> و{" "}
                <Link>شروط الاستخدام </Link>
              </h6>
            </div>
          </label>
        </div>
      ) : null}
      <div className="btn-container">
        <button type="submit" className="submit-btn">
          {btnName}
        </button>
      </div>
    </form>
  );
}

export default Inputs;
