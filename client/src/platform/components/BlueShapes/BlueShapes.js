import React, { useEffect, useState } from "react";
//Styles
import "./style.scss";

//Assets
import BlueShape from "../../../assets/img/teacher-landing-page-small-shapes/Union 1.png";
const BlueShapes = ({ img, text1, text2 }) => {
  return (
    <div className="blue-shapes-container">
      {/* <img src={BlueShape} alt="Droos Academy Logo" /> */}
      <div className="icon-container">
        <img src={img} alt="icon" className="icon" />
      </div>

      <div className="main-text-container">
        {" "}
        <h2 className="main-text">{text1}</h2>
      </div>
      <div className="secondary-text-container">
        {" "}
        <h5 className="secondary-text">{text2}</h5>
      </div>
    </div>
  );
};

export default BlueShapes;
