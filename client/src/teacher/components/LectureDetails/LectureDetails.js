import React from "react";

//Styles
import "./style.scss";

//Assets
import TeacherImage from "../../../assets/img/teacher-img.jpg";
import { ReactComponent as PriceImage } from "../../../assets/img/price.svg";
import { ReactComponent as TimerImage } from "../../../assets/img/timer.svg";

const LectureDetails = () => {
  return (
    <div className="lecture-details-container">
      <div className="lecture-content">
        <div className="lecture-main-info">
          <div className="lecture-title">
            <h1>المحاضرة الثانية - الوحدة الأولي</h1>
          </div>
          <div className="lecture-info">
            <div className="price">
              <div>
                <PriceImage />
              </div>
              <span>50 EGP</span>
            </div>
            <div className="time">
              <div>
                <TimerImage />
              </div>
              <span>1.5 h</span>
            </div>
          </div>
        </div>
        <div className="lecture-details">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
        </div>
      </div>
      <div className="teacher-info">
        <div>
          <img src={TeacherImage} alt="" />
        </div>
        <p>أ / مصطفي فريد</p>
      </div>
    </div>
  );
};

export default LectureDetails;
