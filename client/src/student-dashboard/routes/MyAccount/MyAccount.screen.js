import React from "react";
import { Link } from "react-router-dom";

import { MdModeEdit, MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
//Styles
import "./style.scss";

//Assets
import ProfilePic from "../../../assets/img/profile-pic.jpg";

const MyAccount = () => {
  return (
    <div className="my-account-container">
      <div className="title">
        <h1>حسابي</h1>
      </div>
      <div className="content-container">
        <div className="top-part">
          <div>
            <div>
              <div className="title">
                <span>الرصيد</span>
              </div>
              <div className="number">
                <span>L.E</span>
                120
              </div>
            </div>
            <div>
              <Link to="/payment">شحن الرصيد</Link>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="title">
                  <span>النقاط</span>
                </div>
                <div className="number">
                  <span>XP</span>
                  5400
                </div>
              </div>
            </div>
            <div>
              <Link to="">استبدال النقاط</Link>
            </div>
          </div>
        </div>
        <div className="dash-line"></div>
        <div className="body-part">
          <div className="img-container">
            <img src={ProfilePic} alt="student image" />
            <div>
              <MdModeEdit />
            </div>
          </div>
          <div className="student-name">
            <span>محمود العشماوي</span>
          </div>
          <div className="info-container">
            <div className="action-btns">
              <div>
                <Link>تعديل الحساب</Link>
              </div>
              <div>
                <Link>تغيير كلمة المرور</Link>
              </div>
            </div>
            <div className="student-info">
              <div>
                elashmawydev@gmail.com
                <span>
                  <MdEmail />
                </span>
              </div>
              <div>
                01064544529
                <span>
                  <FaMobileAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="dash-line"></div>
        <div className="bottom-part">
          <div>
            <div className="title">عدد المحاضرات التي تم شرائها</div>
            <div className="number">
              12
              {/* <span></span> */}
            </div>
          </div>
          <div>
            <div className="title">عدد المعلمين</div>
            <div className="number">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
