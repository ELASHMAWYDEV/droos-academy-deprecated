import { FaStar } from "react-icons/fa";

//Style
import "./style.scss";

//Assets
import ProfilePic from "../../../assets/img/profile-pic.jpg";

const ReviewItem = () => {
  return (
    <div className="review-item-container">
      <div className="img-container">
        <img src={ProfilePic} alt="" />
      </div>
      <div className="info-container">
        <div className="review-header">
          <h3>أحمد مسعد</h3>
          <div className="stars">
            <FaStar className="not-active" />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="content">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
