import React from "react";

import { Footer, LectureNavBr } from "../../components";
import { Question } from "./components";
//Styles
import "./style.scss";

//Assets
import TeacherImage from "../../../assets/img/teacher-img.jpg";

const Exam = () => {
  return (
    <div className="exam-container">
      <LectureNavBr />
      <div className="top-part">
        <div className="right">
          <div className="exam-info">
            <div className="title">الاختبار الأول علي الدرس الثاني</div>
            <div className="info">
              <div>
                <h5>عدد الأسئلة</h5>
                <span>5 مقالي</span>
                <br />
                <span>20 اختيار من متعدد</span>
              </div>
              <div>
                <h5>عن الامتحان</h5>
                <span>تاريخ النشر : 21/04/2021</span>
                <br />

                <span>المادة : اللغة العربية</span>
              </div>
            </div>
          </div>
          <div className="teacher-info">
            <div>
              <img src={TeacherImage} alt="Teacher's image" />
            </div>
            <div>الأستاذ / مصطفي فريد</div>
          </div>
        </div>
        <div className="left">
          <div className="timer">
            <h5>متبقي</h5>
            <span>1 ساعة</span>
            <span>12 دقيقة</span>
            <span>30 ثانية</span>
          </div>
          <div className="exam-details">
            <div>
              <h5>الأسئلة المتبقية</h5>
              <span>25</span>
            </div>
            <div>
              <h5>ما تم اجابته</h5>
              <span>13</span>
            </div>
          </div>
        </div>
      </div>
      <div className="questions-container">
        <Question
          questions={[
            {
              type: "radio",
              label: "السؤال الأول",
              props: {
                type: "radio",
              },
              choises: ["one", "two", "one", "two", "one", "two"],
            },
            {
              type: "radio",
              label: "السؤال الأول",
              props: {
                type: "radio",
              },
              choises: ["one", "two", "one", "two", "one", "two"],
            },
            {
              type: "radio",
              label: "السؤال الأول",
              props: {
                type: "radio",
              },
              choises: ["one", "two", "one", "two", "one", "two"],
            },
            {
              type: "radio",
              label: "السؤال الأول",
              props: {
                type: "radio",
              },
              choises: ["one", "two", "one", "two", "one", "two"],
            },
            {
              type: "textarea",
              label: "السؤال الأول",
              props: {
                type: "textarea",
              },
              choises: ["one", "two", "one", "two", "one", "two"],
            },
          ]}
        />
        {/* <form>
          <div className="question-title">
            <span>1</span>هذا مثال علي السؤال الأول ، ويمكن استبدال هذا النص بنص
            أخر
          </div>
          <input type="radio" id="r1" name="rr" />
          <label for="r1">
            <span></span>Radio Button 1
          </label>
          <input type="radio" id="r2" name="rr" />
          <label for="r2">
            <span></span>Radio Button 2
          </label>
        </form> */}
      </div>
      <Footer />
    </div>
  );
};

export default Exam;
