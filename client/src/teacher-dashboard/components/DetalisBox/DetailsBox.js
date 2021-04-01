import React from "react";

//Styles
import "./style.scss";
import "../../../assets/styles/_global.scss";

//Assets
import { ReactComponent as Percentage } from "../../../assets/img/percetage.svg";

const DetailsBox = ({ colorClass, title, number, subtitle, percentage }) => {
  return (
    <div className={`details-box-container ${colorClass}`}>
      <div className="title-container">
        <span>{title}</span>
      </div>
      <div className="number">
        <span>{number}</span>
      </div>

      <div className="sub-title-container d-flex ">
        <div className="percentage mx-2">
          %<span>{percentage}</span>
          <Percentage />
        </div>
        <div className="subtitle">
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
