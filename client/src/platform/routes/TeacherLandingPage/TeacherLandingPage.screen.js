import React from "react";
import { Link } from "react-router-dom";

import { AuthBtns } from "../../components";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as FirstShape } from "../../../assets/img/teacher-landing-page-small-shapes/1.svg";
import { ReactComponent as SecondShape } from "../../../assets/img/teacher-landing-page-small-shapes/2.svg";
import { ReactComponent as ThirdShape } from "../../../assets/img/teacher-landing-page-small-shapes/3.svg";
import { ReactComponent as FourthShape } from "../../../assets/img/teacher-landing-page-small-shapes/4.svg";
import { ReactComponent as FifthShape } from "../../../assets/img/teacher-landing-page-small-shapes/5.svg";
import { ReactComponent as TeacherLandingPageIllustration } from "../../../assets/img/teacher-landing-page-shape.svg";

const TeacherLandingPage = () => {
  return (
    <div className="teacher-landing-page-container">
      <div className="pink-color"></div>
      <div className="logo-container">
        <img src={Logo} alt="Droos Academy Logo" />
      </div>
      <div className="content-container">
        <div className="content">
          <h1>لأنك تعلم الأجيال</h1>
          <h2>نسعي لكي يمتد تأثيرك لأجيال قادمة </h2>
          <h5>
            نحن في <span>دروس أكاديمي</span> نوفر لك مميزات عديدة ، لن تجدها علي
            أي منصة أخري <Link>اضغط هنا لمعرفة المزيد</Link>
          </h5>
        </div>
      </div>
      <div className="auth-btns-container">
        <AuthBtns className="auth-btns" />
      </div>
      <div className="img-container">
        <TeacherLandingPageIllustration className="parent-landing-page-shape " />
      </div>
      <div className="shapes-container">
        <div className="first-shape-container">
          <FirstShape className="first-shape" />
        </div>
        <div className="second-shape-container">
          <SecondShape className="second-shape" />
        </div>
        <div className="third-shape-container">
          <ThirdShape className="third-shape" />
        </div>
        <div className="fourth-shape-container">
          <FourthShape className="fourth-shape" />
        </div>
        <div className="fifth-shape-container">
          <FifthShape className="fifth-shape" />
        </div>
      </div>
    </div>
  );
};

export default TeacherLandingPage;
