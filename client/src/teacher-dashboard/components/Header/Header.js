import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosNotifications, IoIosArrowDown, IoIosAdd } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import ProfilePic from "../../../assets/img/profile-pic.jpg";
//import Statistics from "../../../assets/img/analytics.png";
import { ReactComponent as Statistics } from "../../../assets/img/statistics.svg";
import { ReactComponent as Lectures } from "../../../assets/img/lectures.svg";
import { ReactComponent as Payment } from "../../../assets/img/payment.svg";
import { ReactComponent as Students } from "../../../assets/img/students.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-bar-conatiner d-flex p-4">
        <div className="logo-container mx-4">
          <img src={Logo} alt="Droos Academy Logo" />
        </div>
        <div className="info-container d-flex">
          <div className="notifications-icon py-1">
            <IoIosNotifications />
            <div></div>
          </div>
          <div className="account-info d-flex ">
            <div className="account-img px-3">
              <img src={ProfilePic} alt="profile picture" />
            </div>
            <div className="account-name px-3 py-2">محمود العشماوي</div>
            <div className="arrow-icon py-1">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="side-bar-container">
        <div className="new-lecture-btn mx-5">
          <button>
            محاضرة جديدة
            <IoIosAdd />
          </button>
        </div>
        <div className="side-bar-btns">
          <div className="active">
            <button className="">
              <Statistics />
              الاحصائيات
            </button>
          </div>
          <div>
            <button>
              <Lectures />
              المحاضرات
            </button>
          </div>
          <div>
            <button>
              <Payment />
              عمليات الدفع
            </button>
          </div>
          <div>
            <button>
              <Students />
              الطلبة
            </button>
          </div>
          <div>
            <button>
              <FiSettings />
              الاعدادات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
