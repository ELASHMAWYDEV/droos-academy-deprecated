import { Link } from "react-router-dom";

//Style
import "./style.scss";

//Assets
import CourseImage from "../../../assets/img/course-img.png";
import TeacherImage from "../../../assets/img/teacher-img.jpg";
import { ReactComponent as PriceImage } from "../../../assets/img/price.svg";
import { ReactComponent as TimerImage } from "../../../assets/img/timer.svg";

const CourseItem = () => {
  return (
    <Link to="/" className="course-item-container">
      <div className="img-container">
        <img src={CourseImage} alt="Course" />
      </div>
      <div className="course-footer">
        <h1 className="course-title">المحاضرة الثانية - الوحدة الأولي</h1>
        <div className="course-info">
          <div className="price">
            <PriceImage />
            <p>50 EGP </p>
          </div>
          <div className="teacher-name">
            <div>
              <img src={TeacherImage} alt="" />
            </div>
            <p>أ / مصطفي فريد</p>
          </div>
          <div className="time">
            <p>1.5 h</p>
            <TimerImage />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
