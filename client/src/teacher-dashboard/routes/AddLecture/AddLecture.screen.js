import React from "react";
import { FiUpload } from "react-icons/fi";
import { ImVideoCamera } from "react-icons/im";

import { File } from "./components";

//Styles
import "./style.scss";

//Assets
import { ReactComponent as AddLectureIcon } from "../../../assets/img/add-lecture.svg";

const AddLecture = () => {
  return (
    <div className="add-lecture-container">
      <div className="title">
        <h2>محاضرة جديدة</h2>
      </div>
      <div className="form-container">
        <form>
          <div className="lecture-type">
            <span>حالة المحاضرة</span>
            <div className="select-item">
              <select>
                <option selected disabled unselectable>
                  حالة المحاضرة
                </option>
                <option>مسودة</option>
              </select>
              <span></span>
            </div>
          </div>
          <div className="lecture-details">
            <div className="lecture-title">
              <label>عنوان المحاضرة</label>
              <input
                type="text"
                placeholder="عنوان المحاضرة"
                name="lectureTitle"
              />
            </div>
            <div className="lecture-title">
              <label>تفاصيل المحاضرة</label>
              <textarea
                type="text"
                placeholder="تفاصيل المحاضرة"
                name="lectureDetails"
              />
            </div>
            <div className="lecture-info">
              <div className="lecture-time">
                <span>الوقت المتوقع لإنهاء المحاضرة</span>
                <div className="select-item">
                  <select>
                    <option selected disabled unselectable>
                      الوقت المتوقع لإنهاء المحاضرة
                    </option>
                    <option>1 س</option>
                    <option>2 س</option>
                    <option>3 س</option>
                  </select>
                  <span></span>
                </div>
              </div>
              <div className="lecture-price">
                <label>تكلفة المحاضرة بالجنيه المصري</label>
                <input
                  type="number"
                  placeholder="تكلفة المحاضرة بالجنيه المصري"
                  name="lecturePrice"
                />
              </div>
            </div>
          </div>
          <div className="dash-line"></div>
          <div className="lecture-files">
            <div className="title">
              <h2>ملفات المحاضرة</h2>
            </div>
            <div className="files">
              <File name="ملف البلاغة" />
              <File name="ملف البلاغة" />
              <div className="upload-new-file">
                <div className="icon">
                  <FiUpload />
                </div>
                <div className="name">ملف جديد</div>
              </div>
            </div>
          </div>
          <div className="dash-line"></div>
          <div className="lecture-parts">
            <div className="title">
              <h2>أجزاء المحاضرة</h2>
            </div>
            <div className="lec-navbar">
              <div className="lec-navs">
                <div className="first">الجزء الأول</div>
                <div className="active">الجزء الثاني</div>
              </div>
              <div className="add-nav">
                <AddLectureIcon />
              </div>
            </div>
            <div className="nav-details">
              <div className="lecture-title">
                <label>عنوان المحاضرة</label>
                <input
                  type="text"
                  placeholder="عنوان المحاضرة"
                  name="lectureTitle"
                />
              </div>
              <div className="lecture-title">
                <label>تفاصيل المحاضرة</label>
                <textarea
                  type="text"
                  placeholder="تفاصيل المحاضرة"
                  name="lectureDetails"
                />
              </div>
            </div>
          </div>
          <div className="upload-btn">
            <button type="submit">
              <div className="icon">
                <ImVideoCamera />
              </div>
              <div className="name">رفع الفيديو</div>
            </button>
          </div>
          <div className="dash-line"></div>
        </form>
      </div>
    </div>
  );
};

export default AddLecture;
