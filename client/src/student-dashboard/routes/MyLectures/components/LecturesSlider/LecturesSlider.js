import React from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

//Components
import { LectureItem } from "../";

//Style
import "./style.scss";

const CoursesSlider = () => {
  return (
    <div className="lectures-slider-container">
      <div className="lectures-grid">
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
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

export default CoursesSlider;
