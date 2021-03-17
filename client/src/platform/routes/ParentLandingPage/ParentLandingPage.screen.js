import React from "react";
import { Link } from "react-router-dom";

import { AuthBtns } from "../../components";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as ParentLandingPageIllustration } from "../../../assets/img/parent-landing-page-shape.svg";

function ParentLandingPage() {
  return (
    <div className="parent-landing-page-container">
      <div className="pink-color"></div>
      <div className="logo-container">
        <img src={Logo} alt="Droos Academy Logo" />
      </div>
      <div className="flex-wrapper">
        <div className="content-container">
          <div className="upper-content">
            <h1>نعلم أنك تخاف علي مستقبل أبنائك</h1>
            <h2>
              <span className="">دروس أكاديمي</span> ستوفر لهم أفضل وسائل التعلم
            </h2>
            <h5>
              نوفر لهم بيئة تفاعلية مع الأصدقاء والمعلمين ، يمكنهم أن يسألوا
              المعلم في أي وقت ، والاطلاع علي أسئلة أصدقائهم للمعلم والاستفادة
              منها
            </h5>
          </div>
          <div className="lower-content">
            <h1>متابعة دقيقة لمستوي أبنائك في الدراسة</h1>
            <h5>
              نتائج الامتحانات والاختبارات ، مواعيد الحصص و عدد مرات الغياب كل
              هذه تفاصيل يمكنك معرفتها لكي تكون علي إدراك بمستوي أبنائك
            </h5>
          </div>
        </div>
        <div className="shape-container">
          <ParentLandingPageIllustration className="parent-landing-page-shape" />
        </div>
      </div>
      <div className="auth-btns-container">
        <AuthBtns className="auth-btns" />
      </div>
    </div>
  );
}

export default ParentLandingPage;
