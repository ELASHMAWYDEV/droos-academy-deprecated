import { Link } from "react-router-dom";
import { TiMediaPlayReverse } from "react-icons/ti";

//Style
import "./style.scss";

//Assets
import TeacherImage from "../../../../../assets/img/teacher-img.jpg";
import { ReactComponent as PriceImage } from "../../../../../assets/img/price.svg";
import { ReactComponent as TimerImage } from "../../../../../assets/img/timer.svg";

const LectureItem = () => {
  return (
    <div className="lecture-item-container">
      <div className="img-container">
        {/* <img src={CourseImage} alt="Course" /> */}
        {/* <h1 className="course-title">المحاضرة الثانية - الوحدة الأولي</h1> */}
        <div className="teacher-name">
          <div>
            <img src={TeacherImage} alt="" />
          </div>
          <span>أ / مصطفي فريد</span>
        </div>
        <div className="subject-name">
          <span>اللغة العربية</span>
        </div>
        <div className="price">
          <div>
            <PriceImage />
          </div>
          <div></div>
          <span>50 EGP </span>
        </div>
        <div className="time">
          <div>
            <TimerImage />
          </div>
          <span>1.5 h</span>
        </div>
        <div className="lecture-date">
          <span>22 Feb 2021</span>
        </div>
      </div>
      <div className="lecture-footer">
        <div className="lecture-title">
          <span> المحاضرة الثانية - الوحدة الأولي</span>
        </div>
        <div className="dash-line"></div>
        <div className="buy-date">
          <span> 22 Feb 2021 : تاريخ الشراء</span>
        </div>
        <div className="watch-btn">
          <Link to="">
            <span>
              <TiMediaPlayReverse />
            </span>
            مشاهدة
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LectureItem;
