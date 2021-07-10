import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { useState } from "react";

//Components
import { CourseItem } from "../";

//Style
import "./style.scss";

const CoursesSlider = () => {
  const [activeYear, setActiveYear] = useState(0);

  //Temp
  const years = [
    {
      name: "الأول الثانوي",
    },
    {
      name: "الثاني الثانوي",
    },
    {
      name: "الثالث الثانوي",
    },
  ];

  return (
    <div className="courses-slider-container">
      <h2>اختر السنة الدراسية</h2>
      <div className="year-btns-container">
        {years &&
          years.map((year, i) => (
            <button
              key={i}
              className={i == activeYear ? "active" : ""}
              onClick={() => setActiveYear(i)}
            >
              {year.name}
            </button>
          ))}
      </div>
      <div className="courses-grid">
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
      <div className="nav-btns">
        <button className="next-btn">
          <div>
            <BsArrowRight />
          </div>
          <p>التالي</p>
        </button>
        <button className="prev-btn not-active">
          <p>السابق</p>
          <div>
            <BsArrowLeft />
          </div>
        </button>
      </div>
      <div className="dash-line"></div>
    </div>
  );
};

export default CoursesSlider;
