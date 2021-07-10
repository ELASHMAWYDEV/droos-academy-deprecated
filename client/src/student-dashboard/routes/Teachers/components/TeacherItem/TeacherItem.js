import { Link } from "react-router-dom";

//Style
import "./style.scss";

//Assets
import TeacherImage from "../../../../../assets/img/teacher-img.jpg";

const TeacherItem = () => {
  return (
    <div className="teacher-item-container">
      <div className="img-container">
        <img src={TeacherImage} alt="Course" />
      </div>
      <div className="teacher-name">
        <span>الأستاذ/ مصطفي فريد</span>
      </div>
      <div className="subject-name">
        <span>اللغة العربية</span>
      </div>
      <div className="lecture-details">
        <span>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
        </span>
      </div>
      <div className="nav-btns">
        <div className="first">
          <Link>محاضراتي</Link>
        </div>
        <div className="second">
          <Link>فتح الموقع</Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherItem;
