import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosNotifications, IoIosArrowDown, IoIosAdd } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import ProfilePic from "../../../assets/img/profile-pic.jpg";
//import Statistics from "../../../assets/img/analytics.png";
import { ReactComponent as Statistics } from "../../../assets/img/statistics.svg";
import { ReactComponent as Lectures } from "../../../assets/img/lectures.svg";
import { ReactComponent as Codes } from "../../../assets/img/payment.svg";
import { ReactComponent as Students } from "../../../assets/img/students.svg";
import { ReactComponent as Payment } from "../../../assets/img/payment-method.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-bar-conatiner d-flex p-4">
        <div className="logo-container mx-4">
          <img src={Logo} alt="Droos Academy Logo" />
        </div>
        <div className="burger-menu">
          <span></span>
          <span className="mid">
            <span className="right"></span>
            <span></span>
          </span>
          <span></span>
        </div>
        <div className="info-container d-flex">
          <div className="info-container ">
            <div className="notifications-icon">
              <IoIosNotifications />
              <span>0</span>
            </div>
            <div className="account-info  ">
              <div className="account-img ">
                <img src={ProfilePic} alt="profile picture" />
              </div>
              <div className="account-name ">محمود العشماوي</div>
              <div className="arrow-icon ">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side-bar-container">
        <div className="new-lecture-btn mx-5">
          <NavLink exact to="/add-lecture">
            محاضرة جديدة
            <IoIosAdd />
          </NavLink>
        </div>
        <div className="side-bar-btns">
          <div>
            <NavLink exact activeClassName="active" to="/">
              <Statistics />
              الاحصائيات
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="active" to="/lectures">
              <Lectures />
              المحاضرات
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="active" to="/payments">
              <Payment />
              عمليات الدفع
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="active" to="/codes">
              <Codes />
              الأكواد
            </NavLink>
          </div>
          {/* <div>
            <NavLink activeClassName="active" to="/lecftures">
              <Students />
              الطلبة
            </NavLink>
          </div> */}
          <div>
            <NavLink activeClassName="active" to="/settings">
              <FiSettings />
              الاعدادات
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
