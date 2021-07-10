import React from "react";
import { Link } from "react-router-dom";

import { AuthBtns, BlueShape } from "../../components";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import Click from "../../../assets/img/teacher-landing-page-small-shapes/click (1).png";
import Star from "../../../assets/img/teacher-landing-page-small-shapes/star.png";
import Download from "../../../assets/img/teacher-landing-page-small-shapes/download.png";
import Live from "../../../assets/img/teacher-landing-page-small-shapes/live.png";
import Sheild from "../../../assets/img/teacher-landing-page-small-shapes/shield.png";
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
            أي منصة أخري <Link to="">اضغط هنا لمعرفة المزيد</Link>
          </h5>
        </div>
        <div className="img-container-hidden">
          <TeacherLandingPageIllustration className="parent-landing-page-shape " />
        </div>
      </div>
      <div className="shapes-container-hidden">
        <div className="first-shape-container">
          {" "}
          <BlueShape
            img={Star}
            text1="موقع خاص بك"
            text2="باسمك com. دومين
لأنك مميز...سنجعل تميزك عالميا"
          />
        </div>
        <div className="second-shape-container">
          {" "}
          <BlueShape
            img={Click}
            text1="بسهولة طرقعة الإصبع"
            text2="لوحة تحكم سهلة
            يمكنك متابعة الطلاب والحصص
            وموزعي الحصص والدروس و الامتحانات
            كل هذا من مكان واحد"
          />
        </div>
        <div className="third-shape-container">
          {" "}
          <BlueShape
            img={Download}
            text1="لا يمكن لأحد تنزيل دروسك"
            text2="دروسك في أمان تام
            خبرائنا التقنيون يقومون بحماية
            فيديوهاتك بأحدث البرمجيات"
          />
        </div>
        <div className="fourth-shape-container">
          {" "}
          <BlueShape
            img={Live}
            text1="بث مباشر للحصص"
            text2="نوفر لك ميزة البث المباشر
            يمكنك بث الحصة لطلابك
            صوت وصورة"
          />
        </div>
        <div className="fifth-shape-container">
          {" "}
          <BlueShape
            img={Sheild}
            text1="مستوي عال من الأمان"
            text2="خوادمنا علي مستوي عال من الأمان
            وبياناتك وبيانات طلابك في أمان تام"
          />
        </div>

        {/* <div className="first-shape-container">
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
        </div>*/}
      </div>
      <div className="shapes-container">
        <div className="first-shape-container">
          {" "}
          <BlueShape
            img={Star}
            text1="موقع خاص بك"
            text2="باسمك com. دومين
لأنك مميز...سنجعل تميزك عالميا"
          />
        </div>
        <div className="second-shape-container">
          {" "}
          <BlueShape
            img={Click}
            text1="بسهولة طرقعة الإصبع"
            text2="لوحة تحكم سهلة
            يمكنك متابعة الطلاب والحصص
            وموزعي الحصص والدروس و الامتحانات
            كل هذا من مكان واحد"
          />
        </div>
        <div className="third-shape-container">
          {" "}
          <BlueShape
            img={Download}
            text1="لا يمكن لأحد تنزيل دروسك"
            text2="دروسك في أمان تام
            خبرائنا التقنيون يقومون بحماية
            فيديوهاتك بأحدث البرمجيات"
          />
        </div>
        <div className="fourth-shape-container">
          {" "}
          <BlueShape
            img={Live}
            text1="بث مباشر للحصص"
            text2="نوفر لك ميزة البث المباشر
            يمكنك بث الحصة لطلابك
            صوت وصورة"
          />
        </div>
        <div className="fifth-shape-container">
          {" "}
          <BlueShape
            img={Sheild}
            text1="مستوي عال من الأمان"
            text2="خوادمنا علي مستوي عال من الأمان
            وبياناتك وبيانات طلابك في أمان تام"
          />
        </div>

        {/* <div className="first-shape-container">
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
        </div>*/}
      </div>
      <div className="auth-btns-container">
        <AuthBtns className="auth-btns" />
      </div>
      <div className="img-container">
        <TeacherLandingPageIllustration className="parent-landing-page-shape " />
      </div>
    </div>
  );
};

export default TeacherLandingPage;
