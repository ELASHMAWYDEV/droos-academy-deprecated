import React from "react";
import { Link } from "react-router-dom";

import { NavBar } from "../../components";
//Styles
import "./style.scss";

//Assets
import { ReactComponent as LandingPageIllustration } from "../../../assets/img/landing-page-shape.svg";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="pink-color"></div>
      <NavBar className="nav-bar-container" />
      <div className="flex-wrapper">
        <div className="content-container">
          <h1>العالم يَمُرُّ بظروف عصيبة</h1>
          <h2>
            لذلك فإن التعلم الالكتروني هو الحل{" "}
            <span className="bold-span">الأفضل</span>
          </h2>
          <h5>
            <span>دروس أكاديمي</span> ستقدم اليك{" "}
            <span className="bold-span">الأفضل</span>
          </h5>
        </div>
        <div className="shape-container">
          <LandingPageIllustration className="landing-page-shape" />
        </div>
      </div>
      <div className="who-are-you-container">
        <div className="text-container">
          <span>من أنت ؟</span>
        </div>
        <div className="btns-container">
          <Link to="/StudentLandingPage">طالب</Link>
          <Link to="">معلم</Link>
          <Link to="/ParentLandingPage">ولي الأمر</Link>
        </div>
      </div>
      <div className="terms-of-use-container">
        <Link to="">شروط الاستخدام</Link>
        <Link to="">سياسة الخصوصية</Link>
      </div>
    </div>
  );
}

export default LandingPage;
