import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";

const LectureNavBr = () => {
  return (
    <div className="lecture-nav-bar-container">
      <div className="logo-container">
        <img src={Logo} alt="Droos Academy Logo" />
      </div>
      <div className="navs-btns-container">
        <div className="lecturs-nav">
          <Link to="">محاضراتي</Link>
        </div>
        <div className="profile-nav">
          <Link to="">حسابي</Link>
        </div>
      </div>
      <div className="info-container">
        <div className="money-info">
          <div>
            <div>LE</div>
            120
          </div>
        </div>
        <div className="points-info">
          <div>
            <div>XP</div>
            5400
          </div>
        </div>
      </div>
      <div className="humburger-menu">
        <span></span>
        <span className="mid-burger"></span>
        <span></span>
      </div>
    </div>
  );
};

export default LectureNavBr;
