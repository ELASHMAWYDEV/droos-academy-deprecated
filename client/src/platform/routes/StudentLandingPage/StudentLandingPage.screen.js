import React from "react";
import { Link } from "react-router-dom";

import { AuthBtns } from "../../components";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as StudentLandingPageIllustration } from "../../../assets/img/student-landing-page-shape.svg";

function StudentLandingPage() {
  return (
    <div className="student-landing-page-container">
      <div className="pink-color"></div>
      <div className="logo-container">
        <img src={Logo} alt="Droos Academy Logo" />
      </div>
      <div className="flex-wrapper">
        <div className="content-container">
          <div className="upper-content">
            <h1>نعلم أنك عانيت الكثير في الفترة السابقة</h1>
            <h2>
              <span className="">دروس أكاديمي</span> هنا لمساعدتك في تخطي كل هذا
            </h2>
            <h5>
              أخبر معلمك أو معلمتك عنا واجعله ينضم الينا علي دروس أكاديمي لكي
              تتمكن من التمتع بكل المميزات التي ستقدمها إليك المنصة
            </h5>
          </div>
          <div className="lower-content">
            <h1>لأننا نسعي لكي يحصل طلابنا علي أفضل الفرص</h1>
            <h5>
              أنشأنا هذه المنصة لكي تكون حلقة الوصل بين الطلاب والمعلمين ، في
              بيئة تفاعلية وألوان مبهجة تضمن شعورك كطالب براحة نفسية بالغة لكي
              تركز علي دراستك ، لأن مستقبلك هو الأهم بالنسبة لنا
            </h5>
          </div>
        </div>
        <div className="shape-container">
          <StudentLandingPageIllustration className="student-landing-page-shape" />
        </div>
      </div>
      <div className="auth-btns-container">
        <AuthBtns className="auth-btns" />
      </div>
    </div>
  );
}

export default StudentLandingPage;
