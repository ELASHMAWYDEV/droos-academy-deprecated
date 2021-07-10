import React from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

//Components
import { TeacherItem } from "../";

//Style
import "./style.scss";

const TeachersSlider = () => {
  return (
    <div className="teachers-slider-container">
      <div className="teachers-grid">
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </div>
      <div className="nav-btns">
        <button className="next-btn">
          <BsArrowRight />
          <span>التالي</span>
        </button>
        <button className="prev-btn not-active">
          <span>السابق</span>
          <BsArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default TeachersSlider;
