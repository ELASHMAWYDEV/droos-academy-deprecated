import React from "react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

//Styles
import "./style.scss";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="nav-btns">
        <button className="next-btn">
          <BsArrowRight />
          <div>التالي</div>
        </button>
        <button className="prev-btn not-active">
          <div>السابق</div>
          <BsArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
